import styled from 'styled-components';
import { Description, SubTitle } from "../../styles/title";
import { Buttons } from "../../styles/education";
import { useDispatch, useSelector } from "react-redux";
import { clearPortfolioActive, portfolioActive } from "../../state/slices/portfolioSlice";
import { BiExitFullscreen } from 'react-icons/bi'
import { AiOutlineEye } from 'react-icons/ai'
import { Button } from '../../styles/button';

const Card = ({ id, img, name, description, link }) => {
   const dispatch = useDispatch();
   const active = useSelector(state => state.portfolio.active);

   const handleActive = () => {
      dispatch(portfolioActive({ id, img, name, description , link }))
   }

   const handleToggle = () => {
      dispatch(clearPortfolioActive())
   }

   return (
      <ContainerCard>
         <Img src={img} alt={name} onClick={handleActive} />
         {active && active.id === id &&
            <BodyCard>
               <SubTitle>{name}</SubTitle>
               <Description smaill>{description}</Description>
               {link && <Link href={link} target="_blank"><Button><AiOutlineEye />Ver proyecto</Button></Link>}
               <Toggle onClick={handleToggle}><BiExitFullscreen /></Toggle>
            </BodyCard>
         }
      </ContainerCard>
   )
}

const Img = styled.img`
  display: block;
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
`;

const Link = styled.a`
   color: #fff;
   text-decoration: none;
   button {
      width: 100%;
   }
`;

const BodyCard = styled(Buttons)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.6);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 1em;
  align-items: stretch;
  flex-direction: column;
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
`;

const ContainerCard = styled.div`
    position: relative;
`;

export default Card