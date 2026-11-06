import { Route, Routes } from "react-router"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import FoodLayout from "./layouts/FoodLayout"
import Burger from "./pages/Burger"
import Pizza from "./pages/Pizza"
import Salad from "./pages/Salad"
import DrinkLayout from "./layouts/DrinkLayout"
import AllDrinks from "./pages/AllDrinks"
import HotDrinks from "./pages/HotDrinks"
import ColdDrinks from "./pages/ColdDrinks"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="food" element={<FoodLayout />} >
            <Route index element={<Burger />} />
            <Route path="pizza" element={<Pizza />} />
            <Route path="salad" element={<Salad />} />
          </Route>
          <Route path="drinks" element={<DrinkLayout />}>
            <Route index element={<AllDrinks/>} />
            <Route path="hot" element={<HotDrinks/>} />
            <Route path="cold" element={<ColdDrinks/>} />
            
          </Route>
        </Route>

      </Routes>

    </div>
  )
}

export default App
