'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { IoIosArrowDroprightCircle } from "react-icons/io"
import { AiFillHtml5, AiFillHome, AiFillGithub } from "react-icons/ai"
import { BiLogoJavascript, BiLogoReact, BiLogoNodejs } from "react-icons/bi"

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const Menus = [
        { id: "home", title: "Home", href: "/", content: <AiFillHome /> },
        { id: "htmlcss", title: "HTMLCSS", href: "/htmlcss", content: <AiFillHtml5 /> },
        { id: "javascript", title: "Javascript", href: "/vanillajs", content: <BiLogoJavascript /> },
        { id: "reactjs", title: "ReactJS", href: "/", content: <BiLogoReact /> },
        { id: "nodejs", title: "NodeJS", href: "/", content: <BiLogoNodejs /> },
    ];
    return (
        <div className={`overflow-clip p-5 pt-8 ${"w-20 sm:w-48"} bg-neutral-100 dark:bg-slate-950`}>

            <div>
                <a href='https://github.com/danmxli/theodinproject-project-library' target='_blank'>
                    <AiFillGithub className={`dark:text-indigo-700 rounded-md text-4xl mr-2 mb-8 cursor-pointer`} />
                </a>
            </div>

            <ul className="pt-2">
                {Menus.map((menu) => (
                    <li key={menu.id} className={`flex items-center gap-x-4 p-2 duration-300 rounded-lg mt-8 hover:bg-stone-200 dark:hover:bg-indigo-700 cursor-pointer ${pathname === menu.href ? 'bg-stone-200 dark:bg-indigo-700' : ''}`} onClick={() => {
                        router.push(menu.href);
                    }}>
                        <span className="text-2xl float-left">{menu.content}</span>
                        <span className={`scale-0 sm:scale-100`}>{menu.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar