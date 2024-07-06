import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Wye & Welsh LRC | Join",
    description: "Join the Wye & Welsh Land Rover Club today!"
  };

export default function Join() {
    return (
        <main>
            <h1 className="text-2xl font-bold mb-3">Join</h1>
    
            <p className="mb-2">
                If you are interested in joining, feel free to come to one of our events and spectate. 
                Look at the calendar to see the find what event is on next. To compete, you&apos;ll have to become a member, a
                nd your vehicle must meet our regulations. There will be scrutineers you will be able to check this for you.
            </p>

            <h3 className="text-xl font-bold mb-3">Membership Information</h3>

            <p className="mb-2">
                The term of a membership of the Wye and Welsh Land Rover club is on a yearly basis. 
                Your membership will start in the month you apply, and will be valid for 12 months. 
                However, if you apply near the end of the month, and you aren&apos;t going to compete in 
                any events for that month, we can make it valid for the following month.
            </p>

            <p className="mb-2">
                There are many types of memberships available, please see the table below for a summary of the different membership types that are available.
            </p>


            <table className="table-auto border-gray mb-6">
                <thead>
                    <tr className="border-b border-grey-700">
                        <th className="px-4 py-2">Type<br></br><i>Price</i></th>
                        <th className="px-4 py-2">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-grey-700">
                        <td className="px-4 py-2">Full<br></br><i>&pound;30.00</i></td>
                        <td className="px-4 py-2">Anyone 17 or over, who owns a Land Rover vehicle.</td>
                    </tr>
                    <tr className="border-b border-grey-700">
                        <td className="px-4 py-2">Family<br></br><i>&pound;10.00</i></td>
                        <td className="px-4 py-2">
                            Anyone living with a “Full Member”, has full rights except no paper newsletter.
                        </td>
                    </tr>
                    <tr className="border-b border-grey-700">
                        <td className="px-4 py-2">Associate<br></br><i>&pound;10.00</i></td>
                        <td className="px-4 py-2">
                            Anyone with an interest in Land Rover vehicles, no voting rights and NOT allowed to drive or passenger in motor sport events but can marshal, camp and receives a newsletter.
                        </td>
                    </tr>
                    <tr className="border-b border-grey-700">
                        <td className="px-4 py-2">Child<br></br><i>&pound;1.00</i></td>
                        <td className="px-4 py-2">
                            Aged 0 to 11 with a Parent or Guardian who is a FULL member of the Club, able to take part in any Club activity, which has been organised for them, but does not receive a newsletter, nor vote.
                        </td>
                    </tr>
                    <tr className="border-b border-grey-700">
                        <td className="px-4 py-2">Junior<br></br><i>&pound;1.00</i></td>
                        <td className="px-4 py-2">
                            Aged 12 but under 17, as per Child, but can drive and passenger in some competitions, also vote at an AGM.                                                                                                                                                                                                                                                                                                                              competitions, also vote at an AGM.
                        </td>
                    </tr>
                </tbody>
            </table>

            <h3 className="text-2xl font-bold mb-3">Joining</h3>
            <p className="mb-2">
                If you would like to join, you can fill out our online membership form.
            </p>
            <p className="mb-2">
                <a href="https://spanner.wwlrc.co.uk/" target="_blank">
                    <button className="px-4 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-200">Online Membership Form</button>
                </a>
            </p>
            <p className="mb-2">
                Or alternatively, print out a paper form and send to us in the post.
            </p>
            <p className="mb-2">
                <button className="px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-200">Download Membership Form</button>
            </p>
        </main>
    )
}