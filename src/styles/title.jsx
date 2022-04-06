import styled from "styled-components";

export const Title = styled.h3`
  color: ${({ black }) => black ? '#000' : '#fff'};
  text-align: ${({ initial }) => initial ? 'initial' : 'center'} ;
  font-size: 1.2em;
  margin: 0;
  margin-bottom: ${({ margin }) => margin ? '1em' : '0'};
`;

export const TitleSection = styled(Title)`
  font-size: 2em;
  margin: 0;
  margin-bottom: 1em;
  background: linear-gradient(to right, #f32170, #ffeb07, #2125f3, #ff00eb);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  margin-top: ${({ margin }) => margin ? '1em' : '0'};
`;

export const TitleClean = styled(TitleSection)`
  background: linear-gradient(to right, blue, white, black);
  text-shadow: 0 0 10px rgba(255,255,255,.3);
  margin-top: 3em;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

export const SubTitle = styled.h3`
  text-align: ${({ initial }) => initial ? 'initial' : 'center'} ;
  font-size: .8em;
  font-weight: bold;
  margin: 0;
  margin-bottom: .5em;
`;

export const Description = styled.p`
  text-align: ${({ initial }) => initial ? 'initial' : 'center'};
  font-size: ${({ small }) => small ? '.8em' : '.9em'};
  color: gray;
  margin: 0;
`;