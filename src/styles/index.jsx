import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = styled.img`
  width: 3em;
  height: 3em;
`;

export const Icon = styled.span`
    font-size: 1.5em;
    display: flex;
    gap: .3em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const IconCenter = styled.i`
    font-size: 1em;
    display: flex;
    gap: .3em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Img = styled.img`
  min-width: 6.25em;
  height: 6.25em;
  border-radius: 100%;
  margin-bottom: 1em;
  object-position: center;
  object-fit: cover;
`;

export const ContainerApp = styled.div`
   width: 90%;
   max-width: 1000px;
   margin: auto;   
`;

export const MenuButton = styled(NavLink)`
  background: none;
  color: #fff;
  padding: .3em 1em;
  font-size: .9em;
  border: none;
  text-decoration: none;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  gap: .3em;
  align-items: center;

  @media (max-width: 400px) {
    span {
      display: none;
    }
  }

  &.active {
    background-color: blue;
    box-shadow: 0 0 5px blue, 0 0 20px blue, 0 0 40px blue;
  }
`;

export const Form = styled.form`
   text-align: center;
   max-width: 600px;
   width: 90%;
   padding-top: 2em;
   margin: auto;
   height: 50vh;
   display: flex;
   flex-direction: column;
   position: relative;
`;

export const ContainerAbsolute = styled.div`
  display: flex;
  margin-top: 2em;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;