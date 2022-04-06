import { Navigate, Route, Routes } from "react-router-dom"
import LayoutDashboard from "../layout/LayoutDashboard"
import About from "../dashboard/about/About"
import Education from "../dashboard/education/Education"
import Portolio from "../dashboard/portfolio/Portfolio"

const RouterDashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutDashboard />} >
        <Route index element={<About />} />
        <Route path="education" element={<Education />} />
        <Route path="portfolio" element={<Portolio />} />
        <Route path="*" element={<Navigate to="/dashboard/" />} />
      </Route>
    </Routes>
  )
}
export default RouterDashboard