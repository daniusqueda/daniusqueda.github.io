import { Outlet } from "react-router-dom"
import { Container } from "../styles/container"
import Menu from "../components/menu/Menu"

const LayoutApp = () => {
  return (
    <>
      <Container>
      <Menu />
        <Outlet />
      </Container>
    </>
  )
}

export default LayoutApp