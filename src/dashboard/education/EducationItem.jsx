import moment from 'moment'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useDispatch } from "react-redux"
import Spinner from '../../animation/Spinner'
import { useRemoveEducation } from '../../hooks/useCrudEducation'
import { clearEducationActive, educationActive } from '../../state/slices/educationSlice'
import { Button } from '../../styles/button'
import { EducationBody, Buttons } from "../../styles/education"
import { Description, SubTitle } from "../../styles/title"

const EducationItem = ({ id, name, start, end }) => {
   const { mutate: removeEducation, isLoading: loadingRemove } = useRemoveEducation();
   const DateStart = moment(start).format("DD/MM/YYYY");
   const DateEnd = moment(end).format("DD/MM/YYYY");
   const dispatch = useDispatch();

   const handleEdit = () => {
      dispatch(educationActive({id, name, start, end}))
   }

   const handleRemove = () => {
      removeEducation(id)
      dispatch(clearEducationActive())
   }

   return (
      <EducationBody>
         <SubTitle>{name}</SubTitle>
         <Description small>{DateStart} - {DateEnd}</Description>
         <Buttons>
            <Button onClick={handleEdit}><AiFillEdit /> Editar</Button>
            <Button color="red" onClick={handleRemove}> {loadingRemove ? <Spinner /> : <AiFillDelete />} Eliminar</Button>
         </Buttons>
      </EducationBody>
   )
}

export default EducationItem;