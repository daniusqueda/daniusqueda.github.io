import useForm from "../../hooks/useForm"
import { Input } from "../../styles/input"
import { Description, Title, TitleClean, TitleSection } from "../../styles/title"
import { Button } from "../../styles/button";
import Banner from "../../styles/banner";
import { useSelector } from "react-redux";
import { useAddAbout, useAddImageAbout, useLoadAbout, useRemoveAbout, useUpdateAbout } from "../../hooks/useCrudAbout";
import { ContainerAbsolute, Form, Img } from "../../styles";
import File from "../../styles/file";
import { AiFillDelete, AiOutlineUser } from 'react-icons/ai'
import { MdUpdate } from 'react-icons/md'
import { FaSave } from 'react-icons/fa'
import { BsPencil } from 'react-icons/bs'
import Spinner from "../../animation/Spinner";
import Loader from "../../animation/Loader";
import Push from "../../animation/Push";

const About = () => {
   const active = useSelector(state => state.about.active);
   const [{ name, description }, handleInput, reset, resetInputs] = useForm({ name: '', description: '' });
   const { isLoading } = useLoadAbout();
   const { mutate: updateAbout, isLoading: loadingUpdate } = useUpdateAbout();
   const { mutate: removeAbout, isLoading: loadingRemove } = useRemoveAbout();
   const { mutate: addAbout, isLoading: loadingAdd } = useAddAbout();
   const { mutate: addImageAbout } = useAddImageAbout();

   const handleSubmit = e => {
      e.preventDefault();
      if (active) {
         updateAbout({ id: active.id, name, description }, {
            onSuccess: () => resetInputs()
         })
      } else {
         addAbout({ name, description }, {
            onSuccess: () => resetInputs()
         })
      }
   }

   const handleRemove = () => {
      removeAbout(active.id)
   }

   const handleImage = (e) => {
      const file = new FormData()
      file.append('file', e.target.files[0])
      addImageAbout({ id: active.id, file })
   }

   return (
      <>
         <Banner>{
            isLoading
               ? <Loader />
               : active
                  ? <>
                        <Push>
                           {active.img ? <Img src={active.img} alt="imagen de usuario" /> : <Img src="/usuario.png" alt="Imagen por defecto" />}
                           <Title margin>{active.name}</Title>
                           <Description>{active.description}</Description>
                        </Push>
                        <ContainerAbsolute>
                           <File onChange={handleImage} />
                           <Button color="red" onClick={handleRemove}> {loadingRemove ? <Spinner /> : <AiFillDelete />} Eliminar</Button>
                        </ContainerAbsolute>
                    </>
                  : <TitleClean>Ingresa tus datos</TitleClean>
         }</Banner>
         <Form onSubmit={handleSubmit}>
            <TitleSection>Quien eres?</TitleSection>
            <Input
               type="text"
               icon={<AiOutlineUser />}
               name="name"
               value={name}
               label="Nombre"
               onChange={handleInput}
               reset={reset}
            />
            <Input
               type="text"
               icon={<BsPencil />}
               name="description"
               value={description}
               label="Descripcion"
               onChange={handleInput}
               reset={reset}
            />
            {active
               ? <Button> {loadingUpdate ? <Spinner /> : <MdUpdate />} Actualizar</Button>
               : <Button> {loadingAdd ? <Spinner /> : <FaSave />} Guardar</Button>}
         </Form>
      </>
   )
}

export default About