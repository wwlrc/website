import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Wye & Welsh LRC | About",
  description: "Learn more about the Wye & Welsh Land Rover Club.",
};

type EventType = {
  title: string;
  description: JSX.Element;
  picture: string;
  pictureAlt: string;
};

function eventCard(eventType: EventType) {
  let items: JSX.Element[] = [];

  items.push(
    <Image
      key="image"
      src={eventType.picture}
      alt={eventType.pictureAlt}
      width={0}
      height={0}
      quality={25}
      className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg"
    />,
  );

  items.push(
    <div
      key="description"
      className="flex flex-col justify-between p-4 leading-normal"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {eventType.title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {eventType.description}
      </p>
    </div>,
  );

  return (
    <a className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row  dark:border-gray-700 dark:bg-gray-800 mt-2 md:max-w-screen-md">
      {items.map((element: JSX.Element) => element)}
    </a>
  );
}

var eventTypes = [
  {
    title: "Tyro",
    description: (
      <span>
        This is a trial for showroom condition standard vehicles and is
        completely non damaging. The rules also allow 13 year olds to drive, so
        it is a great opportunity for the kids to show dad how to drive the
        family Disco or Freelander. They are completely non damaging and great
        family entertainment. If you look at the events list you will see that
        we intend to put on a lot more TYROs this coming year.
      </span>
    ),
    picture: "/tyro.jpg",
    pictureAlt: "A new land rover tackles a grassy hump",
  },
  {
    title: "Road Taxed Vehicle Trial",
    description: (
      <span>
        This is where members can pit themselves and their vehicles against each
        other. They are supposed to be non damaging (unless the driver forgets
        to put his/her brain into gear first). The vehicles have to be fully
        road legal.
      </span>
    ),
    picture: "/rtv.jpg",
    pictureAlt:
      "A series three land rover catches a breather before the next obsticle in the course",
  },
  {
    title: "Cross Country Vehicle Trial",
    description: (
      <span>
        These are for specialist vehicles and so are much harder and can be
        damaging (again the level of damage is down to the driver). These
        vehicles are not necessarily road legal. The building regulations for
        these vehicles are not the same as for the Competitive Safari vehicles.
      </span>
    ),
    picture: "/ccv.jpg",
    pictureAlt:
      "A roll-caged land rover teeters on the edge of a steep incline",
  },
  {
    title: "Time Trial",
    description: (
      <span>
        This event is much the same as a CCVT, but it is timed. A set target
        time is calculated by measuring the length of the course and you get a
        penalty point for every second you spend over the target time completing
        the course.
      </span>
    ),
    picture: "/tt.jpg",
    pictureAlt: "A land rover flies over the finish line of a time trial",
  },
  {
    title: "Competitive Safari",
    description: (
      <span>
        A comp safari is considered a cross country race against the clock.
        Generally these vehicles are not road legal and if they conform to the
        building regulations for this discipline then they will be eligible to
        enter CCVT.
      </span>
    ),
    picture: "/comp.jpg",
    pictureAlt: "A land rover zooms past on a gravel track",
  },
];

export default function About() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-3">About</h1>
      <h5 className="text-xl font-bold mb-2">Who are we?</h5>
      <p className="mb-2">
        The club was set up, in July 1987, by a group of mainly Land Rover
        owners who lived mostly in the Wye Valley and the Forest of Dean. It was
        set up to promote the use and ownership of Rover products.
      </p>
      <p className="mb-2">
        Our membership is now over a hundred and growing. We cover an area from
        Hereford in the North East down toward Gloucester and all points West.
        We have an active membership and cover all aspects of Land Rover
        ownership. Most of our members are owners and users of Land Rovers,
        arguably the best 4x4 in the world (well we think so anyway).
      </p>
      <h5 className="text-xl font-bold mb-2">What do we do?</h5>
      <p className="mb-2">
        The club exists for the members and for the promotion of Rover products.
        Whether you are a proud owner of a brand new Range Rover, Discovery,
        Freelander, Defender or the owner of a not so new Series Land Rover with
        not a straight panel in sight there is a warm welcome awaiting.
      </p>
      <p className="mb-2">
        We try to organise events every month. These events are :-
      </p>
      <div className="flex flex-col items-center w-full">
        {eventTypes.map((eventType: EventType, id: number) => (
          <div key={id}>{eventCard(eventType)}</div>
        ))}
      </div>
      <p className="mb-2 mt-3">
        If you don&apos;t fancy the competition, then you will be glad to learn
        that the club is not 100% competition orientated. Throughout the year we
        try to organise a number of caravan rallies and greenlane runs. On the
        subject of green lanes the club supports rights of way issues and is
        active in this area. We also hold regular monthly social evenings in a
        pub. These are not drinking sessions but meetings held in a pub which is
        centrally located.
      </p>
      <h6 className="text-xl font-bold mb-2">When do we hold our events?</h6>
      <p className="mb-2">
        {" "}
        We usually host one event each month, held on the{" "}
        <strong>third Sunday</strong>. You can find details of our upcoming
        events on the{" "}
        <a href="/events" className="text-blue-800 dark:text-white underline">
          Events Page
        </a>
        .{" "}
      </p>{" "}
      <p className="mb-2">
        {" "}
        We also enjoy visiting neighbouring clubs, especially when they host{" "}
        <strong>interclub events</strong>. Once a year, over the{" "}
        <strong>August Bank Holiday weekend</strong>, we proudly host our own
        annual interclub competition — the{" "}
        <strong>Wye &amp; Welsh Challenge</strong>. This long-standing tradition
        has been running since <strong>1988</strong>.
      </p>
      <iframe
        className="w-full aspect-video self-stretch md:min-h-96"
        src="https://www.youtube.com/embed/"
        frameBorder="0"
        title=""
        aria-hidden="true"
      />
    </main>
  );
}
