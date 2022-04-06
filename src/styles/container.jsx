import styled from 'styled-components';

const Content = styled.div`
  background-image: url("/fondo.jpg") ;
  background-blend-mode: soft-light;
  background-color: rgba(0,0,0,.7);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const SubContent = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  flex: 1 1 auto;
  overflow-y: scroll;
`;

const Point = styled.div`
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAACRJREFUKFNjZGD4/58BDBgZITR2wEiCQnzmIOTwWodsxMhUCAASowQLtXo4TQAAAABJRU5ErkJggg==);
  box-shadow: inset 0 300px 45px rgba(0, 0, 0, .5);
`;

export const Container = ({children, noPadding}) => {
  return (
    <Content>
      <div />
      <Point />
      <div />
      <Point />
      <SubContent noPadding={noPadding}>
        {children}
      </SubContent>
    </Content>
  )
}