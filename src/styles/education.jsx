import styled from 'styled-components';

export const EducationContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr max-content 1fr;
   column-gap: 1.5rem;
   text-align: center;

   @media (max-width: 550px) {
      grid-template-columns: 1fr;
      margin-bottom: 1em;
      span {
         display: none;
      }
   }
`;

export const EducationBody = styled.div`
   border: 1px solid rgba(255,255,255,.2);
   background-color: rgba(0, 0, 0, .1);
   border-radius: 10px 30px 10px 30px;
   backdrop-filter: blur(10px); 
   padding: 1em;
   position: relative;
`;

export const Icon = styled.i`
   margin-top: 2em;
   display: inline-block;
   color: blue;
`;

export const Line = styled.span`
   display: block;
   width: 2px;
   height: 90%;
   background: blue;
   transform: translate(7px, -7px);
`;

export const Buttons = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1em;
   margin-top: .5em;
`;
