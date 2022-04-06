import Loader from "../../animation/Loader"
import { useLoadEducation } from "../../hooks/useCrudEducation"
import { ContainerApp } from "../../styles"
import { TitleClean, TitleSection } from "../../styles/title"
import EducationContainer from "../../dashboard/education/EducationCard"
import Item from "./Item"
import { VariantsContainer } from "../../animation/Variants"

const Education = () => {
   const { data: education, isLoading } = useLoadEducation();
   return (
      <ContainerApp>
         <TitleSection margin>Estudios</TitleSection>
         {
            isLoading
            ? <Loader />
            : education.length !== 0  
               ? <VariantsContainer>
                     {education.map((edu, i) => <EducationContainer key={edu.id} i={i} length={education.length} component={<Item {...edu} />} /> )}
                 </VariantsContainer>
               : <TitleClean>No hay estudios que mostrar</TitleClean>
         }
      </ContainerApp>
   )
}

export default Education