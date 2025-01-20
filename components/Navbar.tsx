import React from 'react'
import Link from "next/link";
// import Image from "next/image";
import {auth, signOut, signIn} from "@/auth";

const Navbar = async () => {
    const session = await auth()
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex flex-wrap gap-5 justify-between items-center self-stretch w-full text-2xl font-bold text-slate-950 max-md:max-w-full">
                <div className="flex gap-2.5 self-stretch my-auto whitespace-nowrap">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/1e9b40f415c94e8a9826dd2a51a220c3/409b53fa4d194245b5fb38ff335898459b83caaa6a3dc001365bb2ee6ee5f5c2?apiKey=1e9b40f415c94e8a9826dd2a51a220c3&"
                        alt="Volta logo"
                        className="object-contain shrink-0 aspect-[0.92] w-[46px]"
                    />
                    <div className="my-auto">Volta</div>
                </div>

                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/dashboard">
                                <span>Dashboard</span>
                            </Link>
                            <Link href="/calendar">
                                <span>Calendar</span>
                            </Link>
                            <Link href="/carbon-footprint">
                                <span>Carbon Footprint</span>
                            </Link>
                            <div className="flex items-center gap-7 px-6 py-2.5 bg-fuchsia-100 rounded-[50px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] max-md:px-5">
                                <form action={async () => {
                                    "use server";
                                    await signOut({
                                        redirectTo: "/"
                                    })
                                }}>
                                    <button type="submit">
                                        <div className="my-auto basis-auto">Log out</div>
                                    </button>
                                </form>
                                <Link href="/profile">
                                    <div className="flex shrink-0 rounded-full bg-zinc-300 h-[62px] w-[62px]" />
                                </Link>
                            </div>
                        </>
                    ) : (
                        <form action={async () => {
                            "use server";
                            await signIn("google")
                        }}>
                            <button type="submit">
                                <div className="flex gap-7 px-6 py-2.5 bg-fuchsia-100 rounded-[50px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] max-md:px-5">
                                    <div className="my-auto basis-auto">Log in</div>
                                    <div className="flex shrink-0 rounded-full bg-zinc-300 h-[62px] w-[62px]" />
                                </div>
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar