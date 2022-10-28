import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAVLINK = [
    { content: "회사소개", link: "/sub01" },
    { content: "사업분야", link: "/sub02" },
    { content: "지속가능경영", link: "/sub03" },
    { content: "공지사항", link: "/board" },
]
const NavMenu = () => {
    return (
        <ul>
            {
                NAVLINK.map((it, idx) => {
                    return (
                        <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                    )
                })
            }
        </ul>

    )
}

export default NavMenu