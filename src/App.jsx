import { useState } from 'react'
import './App.css'
import WeatherForecast from './Components/WeatherForecast'

function App() {


  return (
    <div className="grid justify-items-center grid-cols-1 bg-[url('https://w11.es/wp-content/uploads/2022/10/Fondo-1-en-4K-Windows-11.jpg')] bg-no-repeat bg-center bg-cover h-screen">
     
    <WeatherForecast/>

    </div>
  )
}

export default App
