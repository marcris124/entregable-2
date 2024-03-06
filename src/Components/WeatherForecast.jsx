import React, { useEffect, useState } from 'react';
import axios from 'axios';
import natureVid from './videos/nature.mp4'
const WeatherForecast = () => {
  
  const [weatherReport, setweatherReport] = useState ({})

  useEffect(() =>{

    
    function success(pos) {
      const crd = pos.coords;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=130dc1fca345b75a021b02d4da6c30f0`)
    .then(res => setweatherReport(res.data))
    }
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error);
    
  },[])
  
  console.log(weatherReport)
  


    const [degrees, setdegrees] = useState(true)
    const parse =  weatherReport.main?.temp - 273.15;

    const degreesCelsius  =parseInt(parse)
    

    const fahrenheitDegrees = (degreesCelsius * 9/5) + 32;


  
    window.onload = function(){
      let container = document.getElementById('container_loading');
      container.style.visibility = 'hidden';
      container.style.opacity = '0'

    }




  return (
    
    <div className='card relative'>
    <div className="video-container ">
        <video autoPlay loop muted className="object-cover w-full h-full">
          <source src={natureVid} type="video/mp4" />
          {/* Agrega más <source> según los formatos de video compatibles */}
          Tu navegador no admite el elemento de video.
        </video>
      </div>
    <div id="container_loading">
      <div id="loading"></div>
    </div>

    <div className={`w-full  bg-[#00d5ff81] relative overflow-hidden grid justify-items-center gap-8 rounded-md p-4 `}>
      <h1>Wherather App</h1>
      <h3>Ciudad: {weatherReport.name} ,{weatherReport.sys?.country}  </h3>
      
    <section className='container'>
      <div className='icon-cloud'>
     <img src={`http://openweathermap.org/img/w/${weatherReport.weather?.[0].icon}.png`} alt="" />
       <h2> {degrees ? degreesCelsius : fahrenheitDegrees} {degrees ? '°C' :'°F' }</h2> 
      </div>
      <div className='list-weather'>
      <h2> {weatherReport.weather?.[0].description} </h2>
        <ul>
          <li> <i className="fa-solid fa-wind"></i><b> Wind speed:</b>{' '} {weatherReport.wind?.speed} </li>
          <li> <i className="fa-solid fa-cloud blue"></i> <b>Clouds :</b>{' '}  {weatherReport.clouds?.all} % </li>
          <li> <i className="fa-solid fa-temperature-three-quarters red"></i><b>Pressure:</b> {' '}{weatherReport.main?.pressure}  </li>

        </ul>
      </div>
      

    </section>

    <button onClick={() => setdegrees(!degrees)}>Degress °C / °F</button>
    </div>
    </div>

  );
};

export default WeatherForecast;