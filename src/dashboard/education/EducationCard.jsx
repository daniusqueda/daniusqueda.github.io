import { EducationContainer, Line, Icon } from "../../styles/education"
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { VariantsItem } from "../../animation/Variants";

const EducationCard = ({ i, length, component }) => {
   const isPar = i % 2 === 0;
   const last = length === i + 1;
   return (
      <VariantsItem>{isPar ?
         <EducationContainer>
            {component}
            <span>
               <Icon><IoIosArrowDropdownCircle /></Icon>
               {!last && <Line />}
            </span>
            <span />
         </EducationContainer>
         :
         <EducationContainer>
            <span />
            <span>
               <Icon><IoIosArrowDropdownCircle /></Icon>
               {!last && <Line />}
            </span>
            {component}
         </EducationContainer>
      }</VariantsItem>
   )
}

export default EducationCard