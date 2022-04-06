import styled from 'styled-components';
import { MdClear } from 'react-icons/md'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { useState } from 'react'

const Text = styled.label`
   position: absolute;
   bottom: .6em;
   left: 5px;
   transition: all 0.3s ease;
   color: gray;
   font-size: .8em;
   display: flex;
   gap: .5em;
   align-items: center;
   &::selection {
      display: none;
   }
   &.active {
      color: #2ecece;
      font-size: .7em;
      transform: translate(-5px ,-200%);
   }
`;

const Content = styled.div`
   width: 90%;
   margin-left: auto;
   margin-right: auto;
	position: relative;
   height: 2em;
   margin-bottom: 2em;
`;

const Icon = styled.i`
   position: absolute;
   bottom: .3em;
   right: -1.2em;
   transition: all 0.3s ease;
   color: #fff;
   font-size: 1em;
   font-weight: bold;
   cursor: pointer;
`;

const IconPassword = styled(Icon)`
   right: 1.5em;
`;

const InputContainer = styled.input`
   width: 100%;
   height: 100%;
   border: none;
   background: none;
   color: #fff;
   transition: .3s ease;
   outline: none;
   border-bottom: 1px solid rgba(255,255,255,.3);
   
   &:focus {
      border-bottom: 1px solid rgba(255,255,255,.8);
   }
`;

export const Input = (props) => {
   const [viewType, setViewType] = useState(false)
   const { icon, value, label, name, reset } = props;
   const resetInput = () => reset(name);
   const changeInput = () => setViewType(!viewType);
   return (
      <Content>
         <Text className={value && 'active'}>
            {!value && icon} {label}
         </Text>
         <InputContainer 
            {...props} 
            type={name === 'password' && !viewType ? 'password' : 'text'} 
            autoComplete="off" 
         />
         {value && <Icon onClick={resetInput}><MdClear /></Icon>}

         {name === 'password' && value &&
               <IconPassword onClick={changeInput}>
                  { viewType ? <AiOutlineEye /> : <AiOutlineEyeInvisible /> }
               </IconPassword>
         }
      </Content>
   )
}