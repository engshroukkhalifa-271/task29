import { Link, NavLink } from 'react-router'

const Navbar = () => {
    return (
        <nav className='navbar shadow-2xl py-5 bg-white'>
            <div className="container flex justify-between items-center ">
                <Link to={"/"} className='text-4xl font-bold'>EraaSoft</Link>
                <ul className='flex gap-3'>
                    <li>
                        <NavLink  className="twxt-xl font-bold hover:text-sky-500 duration-300 " to={"/"}>Home</NavLink>
                    </li>
                     <li>
                        <NavLink className="twxt-xl font-bold hover:text-sky-500 duration-300 " to={"/food"}>Food</NavLink>
                    </li>
                     <li>
                        <NavLink className="twxt-xl font-bold hover:text-sky-500 duration-300 " to={"/drinks"}>Drinks</NavLink>
                    </li>
                </ul>

            </div>


        </nav>
    )
}

export default Navbar
