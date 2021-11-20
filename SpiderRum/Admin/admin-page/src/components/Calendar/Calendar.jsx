import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Styles.css"

const CalendarCom = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="Calendar" >
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default CalendarCom