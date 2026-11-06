import DrinkSidebar from '../components/DrinkSidebar'
import { Outlet } from 'react-router'

const DrinkLayout = () => {
  return (
    <div className='flex items-center h-full'>
      <DrinkSidebar/>
      <div className='h-full grow overflow-auto'>
        <Outlet/>
      </div>
    </div>
  )
}

export default DrinkLayout
