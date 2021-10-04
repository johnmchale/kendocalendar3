import React, { useState } from "react";
import { Calendar } from "@progress/kendo-react-dateinputs";
import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";

const App = () => {
  const [date, setDate] = useState(new Date());

  const handleChange = (event) => {
    console.log(event.value);
    setDate(event.value);
  };

  return (
    <div>
      <h1>Hello John</h1>
      <Calendar value={date} onChange={handleChange} />
      <h1>Selected date : {date?.toDateString()}</h1>
    </div>
  );
};

export default App;
