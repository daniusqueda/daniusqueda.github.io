import styled from 'styled-components';

const Banner = ({children}) => {
  return (
    <Img>
      <Content>
        {children}
      </Content>
    </Img>
  )
}

const Img = styled.div`
  height: 50vh;
  background-image: url("/fondo.jpg") ;
  background-blend-mode: soft-light;
  background-color: rgba(0,0,0,.7);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 -60px 20px rgba(1, 1, 5, .6), inset 30px 0 20px rgba(1, 1, 5, .6);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5em 1em 0;
`;

const Content = styled.div`
  max-width: 600px;
  width: 100%;
  margin: auto;
  flex: 1 1 auto;
  overflow-y: scroll;
  text-align: center;
`;

export default Banner