import React from "react";
import axios from 'axios';

export default function Weather(props) {
 
  function showTemperature(response) {
    alert (response.data.main.temp);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
  axios.get(url).then(showTemperature);

   return (
    <h2> Hello from Weather</h2>

   )
  }
