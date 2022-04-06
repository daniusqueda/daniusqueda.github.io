import styled from "styled-components";
import { AiOutlineMenuFold } from 'react-icons/ai'
import { IoIosSchool } from 'react-icons/io'
import { BsFillBriefcaseFill, BsFillPersonFill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { Icon, Logo, MenuButton } from "../../styles";
import { Title } from "../../styles/title";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../state/slices/authSlice";
import { clearAboutActive } from "../../state/slices/aboutSlice";
import { clearEducationActive } from "../../state/slices/educationSlice";
import { clearExperienceActive } from "../../state/slices/experienceSlice";
import { clearPortfolioActive } from "../../state/slices/portfolioSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const menu = useRef(null);
  const handleToggle = () => menu.current.classList.toggle('toggle')

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    dispatch(clearAboutActive());
    dispatch(clearEducationActive());
    dispatch(clearExperienceActive());
    dispatch(clearPortfolioActive());
  }

  return (
    <>
      <MenuContainer ref={menu}>
        <Nav>
          <Logo src="/logo.png" alt="logo carlitos" />
          <Icon onClick={handleLogout}><BiLogOut /></Icon>
        </Nav>
        <Title margin>Informacion</Title>
        <div>
          <Button onClick={handleToggle} to="/dashboard/"><BsFillPersonFill /> Acerca de mi</Button>
          <Button onClick={handleToggle} to="education"><IoIosSchool /> Educacion</Button>
          <Button onClick={handleToggle} to="portfolio"><BsFillBriefcaseFill /> Proyectos</Button>
        </div>
        <ButtonPortfolio onClick={handleLogout} to="/">Ir al portafolio</ButtonPortfolio>
      </MenuContainer>
      <Toggle onClick={handleToggle}><AiOutlineMenuFold /></Toggle>
    </>
  )
}

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`;

const Toggle = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1000000;
  background: none;
  font-size: 1.5rem;
  padding: 0;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  display: none;

  @media (max-width: 780px) {
    display: block;
  }
`;

const MenuContainer = styled.nav`
  background: linear-gradient(to bottom, #0c082c, #010105 );
  box-shadow: inset 0 25px 45px rgba(0, 0, 0, .1);
  backdrop-filter: blur(5px); 
  min-width: max-content;
  min-height: 100vh;
  padding: .5em 1em;
  transition: .3s linear;
  
  @media (max-width: 780px) {
    position: absolute;
    left: 0;
    z-index: 1000;
    transform: translateX(-100%);
    &.toggle {
      transform: translateX(0);
    }
  }
  `;

const Button = styled(MenuButton)`
  display: flex;
  gap: 1em;
  align-items: center;
  border-radius: 10px 20px 10px 20px;
  padding: .5em 1em;
  margin-bottom: 1em;
  overflow: hidden;
  position: relative;

  &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(to left, rgba(255,255,255,.15), transparent);
      transform: skew(45deg) translateX(0);
      transition: .5s;
   }
   &:hover::before {
      transform: skew(45deg) translateX(150%);
   }

  &.active {
    box-shadow: none;
    background: rgba(0,0,255,.5);
    border-top: 1px solid rgba(255,255,255,.1);
    border-bottom: 1px solid rgba(255,255,255,.1);
  }
`;

const ButtonPortfolio = styled(Button)`
  position: absolute;
  left: auto;
  right: auto;
  bottom: 0;
`;

export default Menu