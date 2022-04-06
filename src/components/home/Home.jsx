import { Description, Title } from '../../styles/title'
import { Button } from '../../styles/button'
import { Blur, Figure, Point, Numbers, Background, Content, SubContent } from '../../styles/home'
import { useLoadAbout } from '../../hooks/useCrudAbout';
import Spinner from '../../animation/Spinner';
import { Img } from '../../styles';
import CV from './cv/cv_carlos.pdf';
import Microphone from '../microphone/Microphone';

const Home = () => {
   const { data, isLoading } = useLoadAbout();

   return (
      <Background>
         <Figure>
            {/* <Microphone /> */}
         </Figure>
         <Blur>
            {isLoading
               ? <Spinner />
               : data[0]
               &&
               <Content>
                  {data[0].img ? <Img src={data[0].img} alt="imagen de usuario" /> : <Img src="/usuario.png" alt="Imagen por defecto" />}
                  <SubContent>
                     <Title>{data[0].name}</Title>
                     <Description>{data[0].description}</Description>
                     <Button as="a" style={{ fontWeight: 'normal', fontSize: '.9em' }} href={CV} download="cv_carlos.pdf">Descargar CV</Button>
                  </SubContent>
               </Content>
            }
         </Blur>
         <div />
         <Point />
         <Numbers>
            <div>
               <h6>Instagram</h6>
               <Description small>danieel.u</Description>
            </div>
            <div>
               <h6>Correo</h6>
               <Description small>daniusqueda582@gmail.com</Description>
            </div>
            <div>
               <h6>Telefono</h6>
               <Description small>2945-550890</Description>
            </div>
         </Numbers>
      </Background>
   )
}

export default Home