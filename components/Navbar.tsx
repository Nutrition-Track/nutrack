import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {auth, signOut, signIn} from "@/auth";


const Navbar = async () => {
    const session = await auth()
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.jpg" alt="logo" width={50} height={50} />
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/dashboard">
                                <span>Dashboard</span>
                            </Link>
                            <form action={async () => {
                                "use server";

                                await signOut({
                                    redirectTo: "/"
                                })
                            }}>
                                <button type="submit">
                                    Log out
                                </button>
                            </form>
                            <Link href={`/user/${session}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => {
                            "use server";

                            await signIn("google")
                        }}>
                            <button type="submit">
                                Login
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
