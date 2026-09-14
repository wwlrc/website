"use client";

import { useState, useEffect, useCallback } from "react";
import { getEvents } from "@/spanner/events";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { pathcat } from "pathcat";
import { Ban, ChevronRight, Clock, Lock, MapPin, Users } from "lucide-react";
import { wwlrcClubId } from "@/spanner/wwlrc";

dayjs.extend(advancedFormat);

function renderDate(event: any) {
  const f = (ds: string) => {
    let d = dayjs(ds);

    return d.format("ddd Do MMM YYYY");
  };

  if (event.is_one_day_event) {
    return f(event.start_date);
  }

  return f(event.start_date) + " - " + f(event.end_date);
}

function renderLocation(location: any) {
  if (location == null) {
    return "To Be Confirmed";
  }
  return location.name + " (" + location.postcode + ")";
}

function hostClubs(event: any) {
  return (event.clubs ?? []).filter((club: any) => club.id !== wwlrcClubId);
}

function DateChip({ event }: { event: any }) {
  const start = dayjs(event.start_date);
  const end = dayjs(event.end_date);
  const isSpan = !event.is_one_day_event;

  return (
    <div className="flex w-16 shrink-0 flex-col items-center justify-center rounded-md bg-blue-950 py-2 text-white">
      <span className="text-[11px] leading-tight text-blue-200">
        {start.format("MMM")}
      </span>
      <span className="font-heading text-2xl font-bold leading-none">
        {start.format("D")}
      </span>
      <span
        className={`leading-tight text-blue-200 ${isSpan ? "text-[10px]" : "text-[11px]"}`}
      >
        {isSpan ? `– ${end.format("D MMM")}` : start.format("ddd")}
      </span>
    </div>
  );
}

function HostClubTag({ event }: { event: any }) {
  const clubs = hostClubs(event);
  if (clubs.length === 0) return null;

  return (
    <p className="mt-0.5 flex items-center gap-1 text-sm text-blue-700">
      <Users className="h-3.5 w-3.5 shrink-0" />
      <span className="truncate">
        Hosted by {clubs.map((club: any) => club.abbreviation || club.name).join(" & ")}
      </span>
    </p>
  );
}

function StatusTag({ event }: { event: any }) {
  const status = event.bookings_status;

  if (status == "open") {
    return (
      <span className="inline-flex self-start items-center gap-1.5 md:self-center rounded-md bg-blue-700 px-3 py-1.5 text-sm font-semibold text-white transition-colors group-hover:bg-blue-800">
        Book Now
      </span>
    );
  }

  if (status == "not_opened") {
    return (
      <span className="inline-flex self-start items-center gap-1.5 md:self-center rounded-md border border-blue-200 px-3 py-1.5 text-sm font-medium text-blue-700">
        <Clock className="h-3.5 w-3.5" />
        Opening Soon
      </span>
    );
  }

  if (status == "closed") {
    return (
      <span className="inline-flex self-start items-center gap-1.5 md:self-center text-sm font-medium text-moss">
        <Lock className="h-3.5 w-3.5" />
        Bookings Closed
      </span>
    );
  }

  if (status == "cancelled") {
    return (
      <span className="inline-flex self-start items-center gap-1.5 md:self-center text-sm font-medium text-red-700">
        <Ban className="h-3.5 w-3.5" />
        Event Cancelled
      </span>
    );
  }

  return null;
}

export default function SpannerCalendar({ staticEvents }: any) {
  // Remove all event status data to avoid an event being shown
  // as still open, when it is actually closed
  staticEvents = staticEvents.map((event: any) => {
    event.bookings_status = "not-known";
    return event;
  });

  const [events, setEvents] = useState(staticEvents);

  const updateEvents = () => {
    getEvents().then((events) => {
      setEvents(events);
    });
  };

  useEffect(() => {
    updateEvents();

    const intervalId = setInterval(() => {
      updateEvents();
    }, 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (!events) return <p>No Events :/</p>;

  const rows = events.map((event: any, id: number) => {
    let d = new Date(event.end_date);

    if (d < new Date()) {
      return;
    }

    const href = pathcat("https://spanner.wwlrc.co.uk/", "/rallies/r/:id", event);
    const cancelled = event.bookings_status == "cancelled";

    return { id, event, href, cancelled };
  });

  return (
    <>
      <div className="flex flex-col gap-3 md:hidden">
        {rows.map((row: any) => {
          if (!row) return;
          const { id, event, href, cancelled } = row;

          return (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 rounded-lg border border-stone bg-white p-4 active:bg-stone/10"
            >
              <div className="flex items-center gap-3">
                <DateChip event={event} />
                <div className="min-w-0 flex-1">
                  <p
                    className={`font-heading font-semibold ${cancelled ? "text-ink/40 line-through" : "text-ink"}`}
                  >
                    {event.name}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 text-sm text-ink/60">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">
                      {renderLocation(event.location)}
                    </span>
                  </p>
                  <HostClubTag event={event} />
                </div>
              </div>
              <StatusTag event={event} />
              <span className="sr-only">{renderDate(event)}</span>
            </a>
          );
        })}
      </div>

      <div className="hidden overflow-hidden rounded-lg border border-stone bg-white md:block">
        <div className="divide-y divide-stone">
          {rows.map((row: any) => {
            if (!row) return;
            const { id, event, href, cancelled } = row;

            return (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-5 py-3 hover:bg-stone/10"
              >
                <DateChip event={event} />
                <div className="min-w-0 flex-1">
                  <p
                    className={`font-heading font-semibold ${cancelled ? "text-ink/40 line-through" : "text-ink"}`}
                  >
                    {event.name}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 text-sm text-ink/60">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">
                      {renderLocation(event.location)}
                    </span>
                  </p>
                  <HostClubTag event={event} />
                </div>
                <StatusTag event={event} />
                <ChevronRight className="h-4 w-4 shrink-0 text-ink/30 transition-colors group-hover:text-ink/60" />
                <span className="sr-only">{renderDate(event)}</span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
