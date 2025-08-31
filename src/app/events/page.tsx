import SpannerCalendar from "@/components/calendar";
import { getEvents } from "@/spanner/events";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wye & Welsh LRC | Events",
  description: "Learn more about the Wye & Welsh Land Rover Club.",
};

export default async function Events() {
  let events = await getEvents();

  return (
    <main>
      <h1 className="text-2xl font-bold mb-3">Events</h1>

      <SpannerCalendar staticEvents={events} />
    </main>
  );
}
