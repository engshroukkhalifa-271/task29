import React from 'react'
import { NavLink } from 'react-router'

const DrinkSidebar = () => {
    return (
        <aside className='bg-amber-500 p-4 min-w-50 h-full ' >
            <ul className='flex flex-col gap-5'>
                <li>
                    <NavLink to={"/drinks"} className={"text-white text-2xl text-center hover:text-orange-950 "}>All Drinks</NavLink>
                </li>
                <li>
                    <NavLink to={"hot"} className={"text-white text-2xl text-center hover:text-orange-950"}>Hot Drinks</NavLink>
                </li>
                <li>
                    <NavLink to={"cold"} className={"text-white text-2xl text-center hover:text-orange-950 "}>Cold Drinks</NavLink>
                </li>
            </ul>

        </aside>
    )
}

export default DrinkSidebar
