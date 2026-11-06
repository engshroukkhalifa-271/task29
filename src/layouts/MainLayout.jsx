import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className='h-screen flex flex-col'>
        <Navbar/>
        <div className='grow overflow-auto'>
            <Outlet/>
        </div>
      
    </div>
  )
}

export default MainLayout
