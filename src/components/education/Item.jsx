import moment from "moment";
import { EducationBody } from "../../styles/education"
import { Description, SubTitle } from "../../styles/title"
import { AiOutlineCalendar } from 'react-icons/ai'
import { IconCenter } from "../../styles";

const Item = ({ name, start, end }) => {

   const DateStart = moment(start).format("MM/YYYY");
   const DateEnd = moment(end).format("MM/YYYY");

   return (
      <EducationBody>
         <SubTitle>{name}</SubTitle>
         <Description small><IconCenter><AiOutlineCalendar />{DateStart} - {DateEnd}</IconCenter></Description>
      </EducationBody>
   )
}

export default Item;