import { useState, useEffect } from "react";
import { Form } from "../../styles";
import Calendary, { CalendaryContainer } from "../../styles/calendar";
import { Input } from "../../styles/input";
import Banner from "../../styles/banner";
import { FaSave } from 'react-icons/fa'
import { FaUserGraduate } from 'react-icons/fa'
import { Button } from '../../styles/button'
import { TitleClean, TitleSection } from "../../styles/title";
import { useAddEducation, useLoadEducation, useUpdateEducation } from "../../hooks/useCrudEducation";
import EducationCard from "./EducationCard";
import { useDispatch, useSelector } from "react-redux";
import { MdUpdate } from 'react-icons/md'
import { clearEducationActive } from "../../state/slices/educationSlice";
import useFormCrud from "../../hooks/useFormCrud";
import Spinner from "../../animation/Spinner";
import Loader from "../../animation/Loader";
import EducationItem from "./EducationItem";
import { VariantsContainer } from "../../animation/Variants";

const Education = () => {
   const active = useSelector(state => state.education.active);
   const dispatch = useDispatch();
   const [start, setStart] = useState();
   const [end, setEnd] = useState();
   const [{ name }, setForm, handleInput, reset, resetInputs] = useFormCrud({ name: '' }, setStart, setEnd);
   const { data: education, isLoading } = useLoadEducation();
   const { mutate: addEducation, isLoading: loadingAdd } = useAddEducation();
   const { mutate: updateEducation, isLoading: loadingUpdate } = useUpdateEducation();

   useEffect(() => {
      if (active) {
         setForm(active);
         setStart(active.start)
         setEnd(active.end)
      } else {
         resetInputs();
      }
   }, [active])

   const handleSubmit = (e) => {
      e.preventDefault();
      if (active) {
         updateEducation({ id: active.id, name, start, end }, {
            onSuccess: () => dispatch(clearEducationActive())
         });
      } else {
         addEducation({ name, start, end }, {
            onSuccess: () => resetInputs()
         });
      }
   }

   return (
      <>
         <Banner>{
            isLoading
               ? <Loader />
               : education.length !== 0
                  ? <VariantsContainer>
                        {education.map((edu, i) => <EducationCard key={edu.id} i={i} length={education.length} component={<EducationItem {...edu} />} /> )}
                    </VariantsContainer>
                  : <TitleClean>Ingresa tu estudios</TitleClean>
         }</Banner>
         <Form onSubmit={handleSubmit}>
            <TitleSection>Cuales son tus estudios?</TitleSection>
            <Input
               type="text"
               icon={<FaUserGraduate />}
               name="name"
               label="Escuela"
               value={name}
               onChange={handleInput}
               reset={reset}
            />
            <CalendaryContainer>
               <Calendary name="start" date={start} setDate={setStart} />
               <Calendary name="end" date={end} setDate={setEnd} />
            </CalendaryContainer>
            {active
               ? <Button> {loadingUpdate ? <Spinner /> : <MdUpdate />} Actualizar</Button>
               : <Button> {loadingAdd ? <Spinner /> : <FaSave />} Guardar</Button>}
            <br />
            {active && <Button onClick={() => dispatch(clearEducationActive())}>Cancelar</Button>}
         </Form>
      </>
   )
}

export default Education;