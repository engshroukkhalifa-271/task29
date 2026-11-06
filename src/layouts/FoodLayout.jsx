import { Outlet } from "react-router"
import FootSidebar from "../components/FootSidebar"

const FoodLayout = () => {
  return (
    <div className="flex items-center h-full">
        <FootSidebar/>
        <div className="h-full grow overflow-auto">
            <Outlet/>
        </div>
      
    </div>
  )
}

export default FoodLayout
