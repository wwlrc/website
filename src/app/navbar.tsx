"use client";

import Link from "next/link";
import NavbarBtn from "./navbar_btn";
import React, { useEffect } from "react";

export default function Navbar() {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    function navbarToggle() {
        setNavbarOpen(!navbarOpen);
    }

    return (
        <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/logo.gif" className="h-16 mr-2" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Wye & Welsh<br></br>
                        Land Rover Club
                    </span>
                </Link>
                <button onClick={navbarToggle} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div hidden={!navbarOpen} className="w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                    <li>
                        <Link href="/">
                            <NavbarBtn>Home</NavbarBtn>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <NavbarBtn>About</NavbarBtn>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <NavbarBtn>Join</NavbarBtn>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <NavbarBtn>Events</NavbarBtn>
                        </Link>
                    </li>
                    <li>
                        <a href="https://spanner.wwlrc.co.uk">
                            <NavbarBtn>Login</NavbarBtn>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}