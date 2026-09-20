import SpannerCalendar from "@/components/calendar";
import { clearBookingStatus, getEvents, upcomingEvents } from "@/spanner/events";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wye & Welsh LRC | Events",
  description: "Learn more about the Wye & Welsh Land Rover Club.",
};

export default async function Events() {
  let events = clearBookingStatus(upcomingEvents(await getEvents()));

  return (
    <main className="mx-auto max-w-screen-xl px-4 py-10 text-ink/80 sm:px-8 sm:py-14">
      <h1 className="font-heading mb-4 text-3xl font-semibold text-blue-950">Events</h1>

      <SpannerCalendar staticEvents={events} />
    </main>
  );
}
