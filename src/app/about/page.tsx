import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wye & Welsh LRC | About",
  description: "Learn more about the Wye & Welsh Land Rover Club."
};

export default function About() {
    return (
      <main>
        <h1 className="text-2xl font-bold mb-3">About</h1>
  
        <h5 className="text-xl font-bold mb-2">Who are we?</h5>

        <p className="mb-2">
        The club was set up, in July 1987, by a group of mainly Land Rover owners who lived mostly in the Wye Valley and the Forest of Dean. It was set up to promote the use and ownership of Rover products.
        </p>
        <p className="mb-2">
        Our membership is now over a hundred and growing. We cover an area from Hereford in the North East down toward Gloucester and all points West. We have an active membership and cover all aspects of Land Rover ownership. Most of our members are owners and users of Land Rovers, arguably the best 4x4 in the world (well we think so anyway).
        </p>

        <h5 className="text-xl font-bold mb-2">What do we do?</h5>
        <p className="mb-2">
        The club exists for the members and for the promotion of Rover products. Whether you are a proud owner of a brand new Range Rover, Discovery, Freelander, Defender or the owner of a not so new Series Land Rover with not a straight panel in sight there is a warm welcome awaiting.
        </p>
        <p className="mb-2">
        We try to organise events every month. These events are :-
        </p>
        <p className="mb-2">
        <h6 className="font-bold mb-2">Tyro Trial</h6>
        This is a trial for showroom condition standard vehicles and is completely non damaging. The rules also allow 13 year olds to drive, so it is a great opportunity for the kids to show dad how to drive the family Disco or Freelander. They are completely non damaging and great family entertainment. If you look at the events list you will see that we intend to put on a lot more TYROs this coming year.
        </p>

        <p className="mb-2">
        <h6 className="font-bold mb-2">Road Taxed Vehicle Trial (RTV)</h6>
        This is where members can pit themselves and their vehicles against each other. They are supposed to be non damaging (unless the driver forgets to put his/her brain into gear first). The vehicles have to be fully road legal.
        </p>

        <p className="mb-2">
        <h6 className="font-bold mb-2">Cross Country Vehicle Trial (CCVT)</h6>
        These are for specialist vehicles and so are much harder and can be damaging (again the level of damage is down to the driver). These vehicles are not necessarily road legal. The building regulations for these vehicles are not the same as for the Competitive Safari vehicles.
        </p>

        <p className="mb-2">
        <h6 className="font-bold mb-2">Time Trial</h6>
        This sort of event is much the same as a CCVT but it is timed. A set target time is calculated by measuring the length of the course and you get a penalty point for every second you spend over the target time completing the course.
        </p>

        <p className="mb-2">
        <h6 className="font-bold mb-2">Comp Safari</h6>
        Which is a cross country race against the clock. Generally these vehicles are not road legal and if they conform to the building regulations for this discipline then they will be eligible to enter CCVT.
        </p>

        <p className="mb-2">
        If all this is too much for you then you will be glad to learn that the club is not 100% competition orientated. Throughout the year we try to organise a number of caravan rallies and greenlane runs. On the subject of green lanes the club supports rights of way issues and is active in this area. We also hold regular monthly social evenings in a pub. These are not drinking sessions but meetings held in a pub which is centrally located.
        </p>
      </main>
    );
  }
  