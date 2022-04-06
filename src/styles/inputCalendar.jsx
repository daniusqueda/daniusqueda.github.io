import styled from 'styled-components';
import { AiOutlineCalendar, AiFillCloseCircle } from 'react-icons/ai'
import { BsFillCalendarDateFill } from 'react-icons/bs'

const InputCalendar = (props) => {
   const { value, name, toggle, setToggle } = props;
   return (
      <Content>
         <Text className={value && 'active'}>{!value && <AiOutlineCalendar />} {name === 'start' ? 'Inicio' : 'Fin'}</Text>
         <InputContainer {...props} type="text" autoComplete="off" />
         {
            toggle ?
            <Icon onClick={() => setToggle(false)}><AiFillCloseCircle /></Icon>
            :
            <Icon onClick={() => setToggle(true)}><BsFillCalendarDateFill /></Icon>
         }
      </Content>
   )
}

const Text = styled.label`
   position: absolute;
   bottom: .6em;
   left: 5px;
   transition: all 0.3s ease;
   color: gray;
   font-size: .8rem;
   display: flex;
   gap: .5em;
   align-items: center;
   &::selection {
      display: none;
   }
   &.active {
      transform: translate(-5px ,-200%);
      color: #2ecece;
      font-size: .7rem;
   }
`;

const Content = styled.div`
	position: relative;
   height: 2em;
   margin-bottom: 2em;
   width: 80%;
   margin-left: auto;
   margin-right: auto;
`;

const Icon = styled.i`
   position: absolute;
   bottom: .6em;
   right: 0;
   transition: all 0.3s ease;
   color: gray;
   font-size: 1em;
   font-weight: bold;
   cursor: pointer;
`;


const InputContainer = styled.input`
   width: 100%;
   height: 100%;
   border: none;
   background: none;
   color: #fff;
   font-weight: bold;
   transition: .3s ease;
   outline: none;
   border-bottom: 1px solid rgba(255,255,255,.3);
   
   &:focus {
      border-bottom: 1px solid rgba(255,255,255,.8);
   }
`;

export default InputCalendar