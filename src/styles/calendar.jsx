import styled from 'styled-components';
import moment from 'moment'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'
import { useState } from 'react';
import InputCalendar from './inputCalendar';

const Calendary = ({ name, date, setDate }) => {
   const [toggle, setToggle] = useState(false)
   const fecha = date ? moment(date).format("DD/MM/YYYY") : '';

   const handleDate = (e) => {
      setDate(e)
      setToggle(false);
   }

   return (
      <div>
         <InputCalendar name={name} value={fecha} onChange={() => {}} toggle={toggle} setToggle={setToggle} />
         <CalendarContainer>{
            toggle && <Calendar onClickDay={handleDate} />
         }</CalendarContainer>
      </div>
   )
}

const CalendarContainer = styled.div`
   & .react-calendar {
     max-width: 250px;
     background: rgba(255,255,255,.1);
     box-shadow: 0 25px 45px rgba(0, 0, 0, .1);
     border: 1px solid rgba(255,255,255,.2);
     backdrop-filter: blur(25px);
     border-radius: 15px;
     padding: .5em;
     overflow: hidden;
     position: absolute;
     left: 50%;
     bottom: 100%;
     z-index: 100;
     transform: translateX(-50%);
   }

   & button {
     color: #fff;
     border-radius: 10px;
   }

   & button:hover {
     background-color: rgba(0,0,0,.7) !important;
   }

   .react-calendar__tile--active {
     background-color: #000 !important;
   }

   .react-calendar__tile--hasActive {
     background-color: #000;
   }

   .react-calendar__navigation__arrow {
     background: none !important;
   }

   .react-calendar__navigation__label {
     background: none !important;
   }

   .react-calendar__tile--now {
       background: none !important;
   }

   .react-calendar__month-view__days__day {
       background: none !important;
   }
`;

export const CalendaryContainer = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr 1fr;
`;

export default Calendary