'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { IoIosArrowDroprightCircle} from "react-icons/io"
import { AiFillHtml5, AiFillHome} from "react-icons/ai"
import { BiLogoJavascript, BiLogoReact, BiLogoNodejs } from "react-icons/bi"

import Link from 'next/link'

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const [open, SetOpen] = useState(true);
    const Menus = [
        { id: "home", title: "Home", href: "/", content: <AiFillHome /> },
        { id: "htmlcss", title: "HTMLCSS", href: "/htmlcss", content: <AiFillHtml5 /> },
        { id: "javascript", title: "Javascript", href: "/", content: <BiLogoJavascript /> },
        { id: "reactjs", title: "ReactJS", href: "/", content: <BiLogoReact /> },
        { id: "nodejs", title: "NodeJS", href: "/", content: <BiLogoNodejs /> },
    ];
    return (
        <div className={`overflow-clip p-5 pt-8 ${open ? "w-48" : "w-20"} bg-neutral-100 dark:bg-slate-950 duration-300`}>

            <div>
                <IoIosArrowDroprightCircle className={`dark:text-indigo-700 rounded-md text-4xl mr-2 mb-8 duration-500 cursor-pointer ${open && "rotate-[180deg]"}`} onClick={() => SetOpen(!open)} />
            </div>

            <ul className="pt-2">
                {Menus.map((menu) => (
                    <li key={menu.id} className={`flex items-center gap-x-4 p-2 duration-300 rounded-lg mt-8 hover:bg-stone-200 dark:hover:bg-indigo-700 cursor-pointer ${pathname === menu.href ? 'bg-stone-200 dark:bg-indigo-700' : ''}`} onClick={() => {
                        router.push(menu.href);
                    }}>
                        <span className="text-2xl float-left">{menu.content}</span>
                        <span className={`duration-100${open ? '' : ' scale-0'}`}>{menu.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar