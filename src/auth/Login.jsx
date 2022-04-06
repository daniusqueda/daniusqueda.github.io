import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../hooks/useAuth';
import useForm from '../hooks/useForm';
import { Button } from '../styles/button';
import { Container } from '../styles/container';
import { Input } from '../styles/input';
import { TitleSection } from '../styles/title';

const Login = () => {
   const navigate = useNavigate();
   const [{ email, password }, handleInput, reset] = useForm({ email: '', password: '' })
   const { mutate: login } = useAuth();

   const handleSubmit = (e) => {
      e.preventDefault();
      login({email, password}, {
         onSuccess: () => {
            navigate('/dashboard')
         }
      })
   }

   return (
      <Container>
         <LoginContainer onSubmit={handleSubmit}>
            <TitleSection>Inicia Sesion</TitleSection>
            <Input 
               type="text" 
               name="email" 
               label='Correo electronico' 
               value={email} 
               onChange={handleInput} 
               reset={reset} 
            />
            <Input 
               name="password" 
               label='Contraseña' 
               value={password} 
               onChange={handleInput} 
               reset={reset} 
            />
            <Button>Enviar</Button>
         </LoginContainer>
      </Container>
   )
}

const LoginContainer = styled.form`
   width: 90%;
   max-width: 400px;
   margin: 6em auto;
   background: linear-gradient(to top, rgba(0,0,0,.39), rgba(255,255,255,.09), rgba(255,255,255,.09) );
   backdrop-filter: blur(5px);
   padding: 5em 2em;
   border-radius: 20px;
   display: flex;
   flex-direction: column;

   @media (max-width: 500px) {
      padding: 5em 1em;
   }
`;

export default Login