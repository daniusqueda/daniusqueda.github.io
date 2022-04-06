import { MenuContainer, Buttons } from '../../styles/menu'
import { AiFillHome } from 'react-icons/ai'
import { IoIosSchool } from 'react-icons/io'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { Logo, MenuButton } from '../../styles'
import { Link } from 'react-router-dom'

const Menu = () => {
   return (
      <MenuContainer>
         <Link to="/auth">
            <Logo src="logo.png" alt="logo carlitos" />
         </Link>
         <Buttons>
            <MenuButton to="/">
               <AiFillHome />
               <span>Inicio</span>
            </MenuButton>
            <MenuButton to="/education">
               <IoIosSchool />
               <span>Educacion</span>
            </MenuButton>
            <MenuButton to="/portfolio">
               <BsFillBriefcaseFill />
               <span>Portafolio</span>
            </MenuButton>
         </Buttons>
      </MenuContainer>
   )
}

export default Menu