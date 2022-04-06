import { useSelector } from "react-redux"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Private from "./Private"
import RouterDashboard from "./RouterDashboard"
import LayoutApp from "../layout/LayoutApp"
import Home from "../components/home/Home"
import Education from "../components/education/Education"
import Portfolio from "../components/portfolio/Portfolio"
import Login from "../auth/Login"

const Router = () => {
   const { user } = useSelector(state => state.auth);

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<LayoutApp />} >
               <Route index element={<Home />} />k
               <Route path="education" element={<Education />} />
               <Route path="portfolio" element={<Portfolio />} />
               <Route path="*" element={<Navigate to="/" />} />
            </Route>
            <Route path="/auth" element={<Login />} />
            <Route path="/dashboard/*" element={
               <Private isLogged={!!user}>
                  <RouterDashboard />
               </Private>
            } />
         </Routes>
      </BrowserRouter>
   )
}

export default Router