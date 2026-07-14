"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
            <nav
                className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-3 py-2 sm:min-h-[80px] sm:px-6 lg:px-8"
                aria-label="Main navigation"
            >
                {/* Logo and full clinic name */}
                <Link
                    href="/"
                    className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3"
                    onClick={closeMenu}
                    aria-label="AMRIT Multispeciality Clinic homepage"
                >
                    <Image
                        src="/amritlogo.png"
                        alt="AMRIT Multispeciality Clinic logo"
                        width={68}
                        height={68}
                        priority
                        className="h-[52px] w-[52px] shrink-0 object-contain sm:h-[60px] sm:w-[60px] lg:h-[68px] lg:w-[68px]"
                    />

                    <div className="min-w-0">
                        <p className="text-[12px] font-bold leading-tight tracking-tight text-green-800 min-[380px]:text-[13px] sm:text-lg lg:text-xl">
                            AMRIT MULTISPECIALITY CLINIC
                        </p>

                        <p className="mt-1 text-[10px] font-medium leading-tight text-gray-500 min-[380px]:text-[11px] sm:text-xs lg:text-sm">
                            <span className="sm:hidden">
                                Expert Healthcare in Gr. Noida
                            </span>

                            <span className="hidden sm:inline">
                                Expert Healthcare in Greater Noida
                            </span>
                        </p>
                    </div>
                </Link>

                {/* Desktop navigation */}
                <div className="hidden shrink-0 items-center gap-7 lg:flex">
                    <Link
                        href="/"
                        className="font-medium text-gray-700 transition-colors hover:text-green-700"
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className="font-medium text-gray-700 transition-colors hover:text-green-700"
                    >
                        About
                    </Link>

                    <Link
                        href="/contact"
                        className="font-medium text-gray-700 transition-colors hover:text-green-700"
                    >
                        Contact
                    </Link>

                    <Link
                        href="/contact#appointment"
                        className="rounded-full bg-green-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-800"
                    >
                        Book Appointment
                    </Link>
                </div>

                {/* Mobile and tablet menu button */}
                <button
                    type="button"
                    className="ml-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-green-800 transition-colors hover:bg-green-50 lg:hidden"
                    onClick={() => setIsOpen((current) => !current)}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                    {isOpen ? (
                        <span className="text-3xl leading-none" aria-hidden="true">
                            ×
                        </span>
                    ) : (
                        <span className="text-2xl leading-none" aria-hidden="true">
                            ☰
                        </span>
                    )}
                </button>
            </nav>

            {/* Mobile and tablet navigation */}
            {isOpen && (
                <div
                    id="mobile-navigation"
                    className="border-t border-gray-100 bg-white px-4 pb-5 pt-3 shadow-md lg:hidden"
                >
                    <div className="mx-auto flex max-w-7xl flex-col gap-1">
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
                        >
                            Home
                        </Link>

                        <Link
                            href="/about"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
                        >
                            About
                        </Link>

                        <Link
                            href="/contact"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
                        >
                            Contact
                        </Link>

                        <Link
                            href="/#appointment"
                            onClick={closeMenu}
                            className="mt-2 rounded-lg bg-green-700 px-4 py-3 text-center font-semibold text-white transition hover:bg-green-800"
                        >
                            Book Appointment
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}