import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-white border-b border-gray-200 p-2 rounded-t-lg">
            <p>
                <Link href="/">
                Home
                </Link>
                <Link href="/about">
                About
                </Link>
            </p>
        </div>
    )
}