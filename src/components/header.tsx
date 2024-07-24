"use client"
import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"
import { cn } from "@/lib/utils";

const routes = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/events/all?page=1',
        name: 'All Events'
    }
]

export default function Header() {
    const activePathname = usePathname()

    return <header className="flex justify-between items-center border-b border-white/10 h-14
    px-3 md:px-9 ">
        <Logo />
        <nav className="h-full">
            <ul className="flex gap-x-6 text-sm h-full">
                {routes.map(route => (
                    <li key={route.path}
                        className={cn("hover:text-white transition relative flex items-center", {
                            "text-white/100": activePathname === route.path,
                            "text-white/50": activePathname !== route.path
                        })}>
                        <Link href={route.path}>
                            {route.name}
                        </Link>

                        {activePathname === route.path && <motion.div layoutId="header-active-link" className="h-1 bg-accent w-full absolute bottom-0">
                        </motion.div>}

                    </li>
                ))}
            </ul>


        </nav>
    </header>
}