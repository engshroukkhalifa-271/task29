import { NavLink } from 'react-router'

const FootSidebar = () => {
  return (
    <aside className='h-full bg-sky-500 p-3 min-w-50'>
        <ul className='flex flex-col gap-5'>
            <li>
                <NavLink to={"/food"} className={"bg-white block w-full p-2 rounded-lg text-center text-xl font-bold"} >Burger</NavLink>
            </li>
             <li>
                <NavLink to={"pizza"} className={"bg-white block w-full p-2 rounded-lg text-center text-xl font-bold"} >Pizza</NavLink>
            </li>
             <li>
                <NavLink to={"salad"} className={"bg-white block w-full p-2 rounded-lg text-center text-xl font-bold"} >Salad</NavLink>
            </li>

        </ul>
      
    </aside>
  )
}

export default FootSidebar
