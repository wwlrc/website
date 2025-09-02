import { pathWildcat } from "@/spanner/api";
import { wwlrcClubId } from "@/spanner/wwlrc";
import { Download, ExternalLinkIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wye & Welsh LRC | Join",
  description: "Join the Wye & Welsh Land Rover Club today!",
};

enum MembershipRight {
  No,
  Yes,
  YesAge,
}

type MembershipType = {
  name: string;
  price: string;
  requirements: string;
  competes: MembershipRight;
  newsletter: MembershipRight;
  marshals: MembershipRight;
  votes: MembershipRight;
};

function renderMembershipRight(right: MembershipRight): string {
  switch (right) {
    case MembershipRight.Yes:
      return "✅";
    case MembershipRight.No:
      return "❌";
    case MembershipRight.YesAge:
      return "✅*";
    default:
      return "";
  }
}

export default function Join() {
  const membershipTypes: MembershipType[] = [
    {
      name: "Full",
      price: "£30",
      requirements: "Anyone 17 years of age or over, and has a Land Rover",
      competes: MembershipRight.Yes,
      newsletter: MembershipRight.Yes,
      marshals: MembershipRight.Yes,
      votes: MembershipRight.Yes,
    },
    {
      name: "Family",
      price: "£10",
      requirements: "Anyone living with a full member",
      competes: MembershipRight.Yes,
      newsletter: MembershipRight.No,
      marshals: MembershipRight.Yes,
      votes: MembershipRight.Yes,
    },
    {
      name: "Associate",
      price: "£10",
      requirements: "Anyone with an interest in Land Rover vehicles",
      competes: MembershipRight.No,
      newsletter: MembershipRight.Yes,
      marshals: MembershipRight.Yes,
      votes: MembershipRight.No,
    },
    {
      name: "Junior",
      price: "£1",
      requirements:
        "Aged 12 but under 17 with a Parent or Guardian who is a FULL member",
      competes: MembershipRight.YesAge,
      newsletter: MembershipRight.No,
      marshals: MembershipRight.YesAge,
      votes: MembershipRight.Yes,
    },
    {
      name: "Child",
      price: "£1",
      requirements:
        "Aged 0 to 11 with a Parent or Guardian who is a full member",
      competes: MembershipRight.Yes,
      newsletter: MembershipRight.No,
      marshals: MembershipRight.No,
      votes: MembershipRight.No,
    },
  ];

  return (
    <main>
      <h1 className="text-2xl font-bold mb-3">Join</h1>

      <p className="mb-2">
        If you are interested in joining, you&apos;re welcome to come along to
        <a href="/events" target="_blank">
          {" "}
          one of our events
        </a>{" "}
        and spectate. Look at the calendar to see the find what event is on
        next. To compete, you&apos;ll have to become a member, and your vehicle
        must meet our regulations. There will be scrutineers you will be able to
        check this for you.
      </p>

      <p className="mb-2">
        There are many types of memberships available, all of which last for a
        year. See below for the different types that are available.
      </p>

      <div
        className="overflow-x-auto mb-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
        style={{
          scrollbarColor: "#6B7280 #E5E7EB",
          scrollbarWidth: "auto",
        }}
      >
        <table className="table-auto border-gray w-full min-w-[768px] bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
          <thead className="bg-gray-200 dark:bg-gray-600">
            <tr className="border-b border-grey-700">
              <th className="px-2 py-2 w-8" rowSpan={2}>
                Type
                <br />
                <i>Price</i>
              </th>
              <th className="px-2 py-2 w-64" rowSpan={2}>
                Description
              </th>
              <th className="px-2 py-2" colSpan={4}>
                Membership Benefits
              </th>
            </tr>
            <tr className="border-b border-grey-700">
              <th className="px-2 py-2 w-16">Compete</th>
              <th className="px-2 py-2 w-16">Newsletter</th>
              <th className="px-2 py-2 w-16">Marshal</th>
              <th className="px-2 py-2 w-16">Vote</th>
            </tr>
          </thead>
          <tbody>
            {membershipTypes.map((type) => (
              <tr key={type.name} className="border-b border-grey-700">
                <td className="px-2 py-2">
                  {type.name}
                  <br />
                  <i>{type.price}</i>
                </td>
                <td className="px-2 py-2">{type.requirements}</td>
                <td className="px-2 py-2 text-center">
                  {renderMembershipRight(type.competes)}
                </td>
                <td className="px-2 py-2 text-center">
                  {renderMembershipRight(type.newsletter)}
                </td>
                <td className="px-2 py-2 text-center">
                  {renderMembershipRight(type.marshals)}
                </td>
                <td className="px-2 py-2 text-center">
                  {renderMembershipRight(type.votes)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-200 dark:bg-gray-600">
            <tr>
              <td className="px-2 py-2" colSpan={6}>
                *<i>Age requirements may vary depending on the event.</i>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <h3 className="text-xl font-bold mb-3 mt-4">Applying for Membership</h3>
      <p className="mb-2 mt-2">
        If you would like to join, you can fill out our online membership form
        below.
      </p>
      <p className="mb-3">
        <a
          href={pathWildcat("clubs/c/:clubId/membership_application", {
            clubId: wwlrcClubId,
          })}
          target="_blank"
          className="inline-flex items-center w-128 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors font-medium"
        >
          Fill in an online membership form
          <ExternalLinkIcon className="ml-2" />
        </a>
      </p>
      <p className="mb-2 mt-2">
        Alternatively, you can print out a paper membership form and mail it to
        us:
      </p>
      <p className="mb-2">
        <a
          href="/MembershipForm.pdf"
          target="_blank"
          className="inline-flex items-center px-2 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium"
        >
          Download a Paper Membership Form <Download className="ml-2" />
        </a>
      </p>
    </main>
  );
}
