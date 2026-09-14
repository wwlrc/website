import { spannerPathCat } from "@/spanner/api";
import { wwlrcClubId } from "@/spanner/wwlrc";
import { Check, Download, ExternalLinkIcon, X } from "lucide-react";
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

const benefitColumns: { key: keyof MembershipType; label: string }[] = [
  { key: "competes", label: "Compete" },
  { key: "newsletter", label: "Newsletter" },
  { key: "marshals", label: "Marshal" },
  { key: "votes", label: "Vote" },
];

function renderMembershipRight(right: MembershipRight) {
  if (right === MembershipRight.No) {
    return (
      <X className="inline h-5 w-5 text-ink/30" strokeWidth={2.5} aria-label="No" />
    );
  }
  return (
    <span className="inline-flex items-center gap-0.5 text-green-600">
      <Check className="h-6 w-6" strokeWidth={3} aria-label="Yes" />
      {right === MembershipRight.YesAge && (
        <span className="text-sm text-ink/60">*</span>
      )}
    </span>
  );
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
      competes: MembershipRight.YesAge,
      newsletter: MembershipRight.No,
      marshals: MembershipRight.No,
      votes: MembershipRight.No,
    },
  ];

  return (
    <main className="mx-auto max-w-screen-xl px-4 py-10 text-ink/80 sm:px-8 sm:py-14">
      <h1 className="font-heading mb-4 text-3xl font-semibold text-blue-950">Join</h1>

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

      <div className="mb-2 flex flex-col gap-3 md:hidden">
        {membershipTypes.map((type) => (
          <div
            key={type.name}
            className="rounded-lg border border-stone bg-white p-4"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h4 className="font-heading text-lg font-semibold text-ink">
                {type.name}
              </h4>
              <span className="font-heading text-lg font-semibold text-blue-700">
                {type.price}
              </span>
            </div>
            <p className="mt-1 text-ink/70">{type.requirements}</p>
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-stone pt-3 text-sm">
              {benefitColumns.map((column) => (
                <div key={column.key} className="flex items-center justify-between">
                  <span className="text-ink/70">{column.label}</span>
                  {renderMembershipRight(type[column.key] as MembershipRight)}
                </div>
              ))}
            </div>
          </div>
        ))}
        <p className="text-sm italic text-ink/60">
          *Age requirements may vary depending on the event.
        </p>
      </div>

      <div className="mb-2 hidden overflow-hidden rounded-lg border border-stone md:block">
        <table className="w-full border-collapse bg-white text-left">
          <thead className="bg-white">
            <tr className="border-b border-stone">
              <th className="px-4 py-3 font-heading text-ink" rowSpan={2}>
                Type
                <br />
                <span className="font-normal italic text-ink/60">Price</span>
              </th>
              <th className="px-4 py-3 font-heading text-ink" rowSpan={2}>
                Description
              </th>
              <th
                className="px-4 py-3 text-center font-heading text-ink"
                colSpan={4}
              >
                Membership benefits
              </th>
            </tr>
            <tr className="border-b border-stone">
              {benefitColumns.map((column) => (
                <th
                  key={column.key}
                  className="px-4 py-2 text-center text-sm font-semibold text-ink/70"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-stone">
            {membershipTypes.map((type) => (
              <tr key={type.name}>
                <td className="px-4 py-3">
                  {type.name}
                  <br />
                  <span className="italic text-ink/60">{type.price}</span>
                </td>
                <td className="px-4 py-3">{type.requirements}</td>
                {benefitColumns.map((column) => (
                  <td key={column.key} className="px-4 py-3 text-center">
                    {renderMembershipRight(type[column.key] as MembershipRight)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-stone bg-stone/10">
              <td className="px-4 py-2 text-sm italic text-ink/60" colSpan={6}>
                *Age requirements may vary depending on the event.
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
          href={spannerPathCat("clubs/c/:clubId/membership_request", {
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
