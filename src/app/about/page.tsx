import { Metadata } from "next";
import Image from "next/image";
import { cloneElement } from "react";

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

function eventCard(eventType: EventType, rightImageAlign: boolean) {
  let items: JSX.Element[] = [];

  let image = (
    <Image
      key="image"
      src={eventType.picture}
      alt={eventType.pictureAlt}
      width={0}
      height={0}
      quality={25}
      className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-64 md:rounded-none"
    />
  );

  let rightImage = null;
  if (rightImageAlign) {
    rightImage = cloneElement(image, {
      key: "right-image",
      className: image.props.className + " hidden md:block md:rounded-r-lg",
    });
    image = cloneElement(image, {
      className: image.props.className + " md:hidden",
    });
  } else {
    image = cloneElement(image, {
      className: image.props.className + " md:rounded-s-lg",
    });
  }

  items.push(image);

  items.push(
    <div
      key="description"
      className="flex flex-col justify-between p-4 leading-normal"
    >
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {eventType.title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {eventType.description}
      </p>
    </div>,
  );

  if (rightImage != null) {
    items.push(rightImage);
  }

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
          <div key={id}>{eventCard(eventType, id % 2 == 0)}</div>
        ))}
      </div>
      <h6 className="text-xl font-bold mb-2 mt-3">
        When do we hold our events?
      </h6>
      <p className="mb-2">
        {" "}
        We usually host one event each month, held on every{" "}
        <strong>third Sunday</strong>. You&apos;re welcome to turn up at any
        event to watch and see what we&apos;re all about. We&apos;ll be happy to
        answer any questions you may have.
      </p>
      <p className="mb-2">
        You can find details of our upcoming events on the events page:
      </p>
      <a
        href={"/events"}
        target="_blank"
        className="mb-2 inline-flex items-center w-128 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors font-medium"
      >
        Upcoming Events
      </a>

      <p className="mb-2 mt-2">
        {" "}
        We also enjoy visiting neighbouring clubs, especially when they host{" "}
        <strong>interclub events</strong>.
      </p>
      <p className="mb-2">
        We proudly host our own annual interclub competition, the{" "}
        <strong>Wye &amp; Welsh Challenge</strong> (formerly known as the
        Baskerville Challenge), usually over the August bank-holiday weekend.
        Bookings usually open for this event a few months before, so keep an eye
        out on the upcoming events page.
      </p>
      <div className="flex items-center justify-center w-full">
        <iframe
          className="w-full md:w-3/5 aspect-video self-stretch md:min-h-96"
          src="https://www.youtube.com/embed/OauOAhq7Rps"
          frameBorder="0"
          allow="fullscreen"
          aria-hidden="true"
        />
      </div>
      <p className="mb-2 mt-2">
        Finally, the largest event in the land rovering calendar is the ALRC
        National Rally; competitors come from clubs all across the UK and abroad
        come together to compete against each other. ALRC member clubs bid to
        host it each year, and it can also by ran by the ALRC themslves. We have
        hosted this event twice, once in 2013 and again in 2023.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <a href="https://alrc.co.uk/national-rally/2023-event/" target="_blank">
          <Image
            src="/alrc-nr-2013.png"
            width={50}
            height={50}
            alt="ALRC National Rally 2013"
            className="rounded-lg w-40 h-auto sm:h-64 sm:w-64 m-2"
          />
        </a>
        <a
          href="https://alrc.co.uk/wp-content/uploads/2023/07/ALRC-National-Rally-Results-2013.pdf"
          target="_blank"
        >
          <Image
            src="/alrc-nr-2023.png"
            width={50}
            height={50}
            alt="ALRC National Rally 2023"
            className="rounded-lg w-40 h-auto sm:w-64 sm:h-64 m-2 bg-white"
          />
        </a>
      </div>
    </main>
  );
}
