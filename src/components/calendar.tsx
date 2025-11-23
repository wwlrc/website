"use client";

import { useState, useEffect, useCallback } from "react";
import { getEvents } from "@/spanner/events";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { pathcat } from "pathcat";

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

function renderStatus(event: any) {
  let status = event.bookings_status;

  if (status == "not_opened") {
    return (
      <a
        href={pathcat("https://spanner.wwlrc.co.uk", "/rallies/r/:id", event)}
        target="_blank"
      >
        <button className="px-2 py-1 bg-blue-600 text-white font-bold rounded-lg text-sm">
          Opening Soon
        </button>
      </a>
    );
  }

  if (status == "closed") {
    return (
      <a
        href={pathcat("https://spanner.wwlrc.co.uk", "/rallies/r/:id", event)}
        target="_blank"
      >
        <button className="px-2 py-1 bg-red-600 text-white font-bold rounded-lg text-sm">
          Bookings Closed
        </button>
      </a>
    );
  }

  if (status == "cancelled") {
    return (
      <a
        href={pathcat("https://spanner.wwlrc.co.uk", "/rallies/r/:id", event)}
        target="_blank"
      >
        <button className="px-2 py-1 bg-red-600 text-white font-bold rounded-lg text-sm">
          Event Cancelled
        </button>
      </a>
    );
  }

  if (status == "open") {
    return (
      <a
        href={pathcat("https://spanner.wwlrc.co.uk", "/rallies/r/:id", event)}
        target="_blank"
      >
        <button className="px-2 py-1 bg-green-600 text-white font-bold rounded-lg text-sm hover:bg-green-200">
          Book Now
        </button>
      </a>
    );
  }

  return;
}

function renderLocation(location: any) {
  return location.name + " (" + location.postcode + ")";
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
  return (
    <div>
      <table className="table-auto rounded-lg border border-solid border-gray-200 dark:border-gray-600 w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-solid border-gray-200 dark:border-gray-600 hidden md:table-cell">
              Date
            </th>
            <th className="px-4 py-2 border border-solid border-gray-200 dark:border-gray-600">
              Event
            </th>
            <th className="px-4 py-2 border border-solid border-gray-200 dark:border-gray-600">
              Bookings
            </th>
            <th className="px-4 py-2 border border-solid border-gray-200 dark:border-gray-600 hidden md:table-cell">
              Location
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map((event: any, id: number) => {
            let d = new Date(event.end_date);

            if (d < new Date()) {
              return;
            }

            return (
              <tr
                className="cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-700"
                key={id}
                onClick={() => {
                  window.open(
                    pathcat(
                      "https://spanner.wwlrc.co.uk/",
                      "/rallies/r/:id",
                      event,
                    ),
                    "_blank",
                  );
                }}
              >
                <td className="px-2 py-2 md:px-4 md:py-3 border border-solid border-gray-200 dark:border-gray-600 hidden md:table-cell">
                  {renderDate(event)}
                </td>
                <td className="px-2 py-2 md:px-4 md:py-3 border border-solid border-gray-200 dark:border-gray-600">
                  <p className="md:hidden">
                    <strong>{renderDate(event)}</strong>
                  </p>
                  <p>{event.name}</p>
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2 border border-solid border-gray-200 dark:border-gray-600 text-center">
                  {renderStatus(event)}
                </td>
                <td className="px-2 py-2 md:px-4 md:py-3 border border-solid border-gray-200 dark:border-gray-600 hidden md:table-cell">
                  {renderLocation(event.location)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
