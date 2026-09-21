"use client";

import { useState, useEffect, useCallback } from "react";
import { getEvents, upcomingEvents } from "@/spanner/events";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { pathcat } from "pathcat";
import { Ban, Clock, Lock, MapPin, Navigation, Users } from "lucide-react";
import { wwlrcClubId } from "@/spanner/wwlrc";
import { createMapLink } from "create-map-link";

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

function mapsHref(location: any) {
  if (location == null || location.postcode === "TBC") return null;

  const latitude = parseFloat(location.latitude);
  const longitude = parseFloat(location.longitude);
  if (Number.isNaN(latitude) || Number.isNaN(longitude)) return null;

  return createMapLink("search", {
    provider: "auto",
    query: { latitude, longitude },
  });
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

function LocationLine({ location }: { location: any }) {
  return (
    <p className="mt-0.5 flex items-center gap-1 text-sm text-ink/60">
      <MapPin className="h-3.5 w-3.5 shrink-0" />
      <span className="min-w-0 truncate">{renderLocation(location)}</span>
    </p>
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

function hasStatus(event: any) {
  return ["open", "not_opened", "closed", "cancelled"].includes(
    event.bookings_status,
  );
}

function StatusTag({ event }: { event: any }) {
  const status = event.bookings_status;

  if (status == "open") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-700 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800">
        Book Now
      </span>
    );
  }

  if (status == "not_opened") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-md border border-blue-200 px-3 py-1.5 text-sm font-medium text-blue-700">
        <Clock className="h-3.5 w-3.5" />
        Opening Soon
      </span>
    );
  }

  if (status == "closed") {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-moss">
        <Lock className="h-3.5 w-3.5" />
        Bookings Closed
      </span>
    );
  }

  if (status == "cancelled") {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-red-700">
        <Ban className="h-3.5 w-3.5" />
        Event Cancelled
      </span>
    );
  }

  return null;
}

function MapButton({ maps }: { maps: string | null }) {
  if (!maps) return null;

  return (
    <a
      href={maps}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-stone bg-white px-3 py-1.5 text-sm font-medium text-ink/70 transition-colors hover:border-blue-200 hover:text-blue-700"
    >
      <Navigation className="h-3.5 w-3.5" />
      Directions
    </a>
  );
}

export default function SpannerCalendar({ staticEvents }: any) {
  const [events, setEvents] = useState(staticEvents);

  useEffect(() => {
    // staticEvents was filtered against the build clock, so re-filter against
    // the real one before the network catches up. Doing it here rather than in
    // the render keeps the markup identical to the prerender for hydration.
    setEvents(upcomingEvents(staticEvents));

    const updateEvents = () => {
      getEvents().then((events) => {
        setEvents(upcomingEvents(events));
      });
    };

    updateEvents();

    const intervalId = setInterval(updateEvents, 60 * 1000);

    return () => clearInterval(intervalId);
  }, [staticEvents]);

  if (!events || events.length === 0) return <p>No Events :/</p>;

  const rows = events.map((event: any) => {
    const href = pathcat("https://spanner.wwlrc.co.uk/", "/rallies/r/:id", event);
    const cancelled = event.bookings_status == "cancelled";
    const maps = mapsHref(event.location);

    return { id: event.id, event, href, cancelled, maps };
  });

  return (
    <>
      <div className="flex flex-col gap-3 md:hidden">
        {rows.map(({ id, event, href, cancelled, maps }: any) => {
          return (
            <div key={id} className="rounded-lg border border-stone bg-white p-4">
              <div className="flex items-center gap-3">
                <DateChip event={event} />
                <div className="min-w-0 flex-1">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-heading font-semibold hover:underline ${cancelled ? "text-ink/40 line-through" : "text-ink"}`}
                  >
                    {event.name}
                  </a>
                  <LocationLine location={event.location} />
                  <HostClubTag event={event} />
                  <span className="sr-only">{renderDate(event)}</span>
                </div>
              </div>
              {(hasStatus(event) || maps) && (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <MapButton maps={maps} />
                  {hasStatus(event) && (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <StatusTag event={event} />
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="hidden overflow-hidden rounded-lg border border-stone bg-white md:block">
        <div className="divide-y divide-stone">
          {rows.map(({ id, event, href, cancelled, maps }: any) => {
            return (
              <div key={id} className="flex items-center gap-4 px-5 py-3 hover:bg-stone/10">
                <DateChip event={event} />
                <div className="min-w-0 flex-1">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-heading font-semibold hover:underline ${cancelled ? "text-ink/40 line-through" : "text-ink"}`}
                  >
                    {event.name}
                  </a>
                  <LocationLine location={event.location} />
                  <HostClubTag event={event} />
                  <span className="sr-only">{renderDate(event)}</span>
                </div>
                {(hasStatus(event) || maps) && (
                  <div className="flex shrink-0 items-center gap-2">
                    <MapButton maps={maps} />
                    {hasStatus(event) && (
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        <StatusTag event={event} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
