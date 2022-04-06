import styled from 'styled-components';
import { ButtonContainer } from './button';
import { BiImages } from 'react-icons/bi'

const Input = styled(ButtonContainer)`
   position: relative;
   span {
      display: flex;
      gap: .3em;
      justify-content: center;
      align-items: center;
   }
   input {
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     opacity: 0;
   }
   
`;

const File = (props) => {
   return (
      <Input>
         <span><BiImages /> {props.text ? props.text : 'Imagen'}</span>
         <input {...props} type="file" name="file" id="file" />
      </Input>
   )
}

export default File