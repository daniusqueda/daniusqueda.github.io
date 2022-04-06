import styled from 'styled-components';
import { Outlet } from "react-router-dom"
import Menu from "../dashboard/menu/Menu"

const LayoutDashboard = () => {
  return (
    <ContainerDashboard>
      <Menu />
      <Content>
        <Outlet />
      </Content>
    </ContainerDashboard>
  )
}

const ContainerDashboard = styled.div`
  display: flex;
  justify-content: center;
  backdrop-filter: blur(25px); 
  background: linear-gradient(to bottom, #0c082c, #010105 );
  background-color: red;
  box-shadow: inset 0 25px 45px rgba(0, 0, 0, .1);
  position: relative;
`;

const Content = styled.div`
  width: 100%;
`;

export default LayoutDashboard