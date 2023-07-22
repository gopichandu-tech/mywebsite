import React from 'react'
import './Projects.css'
import restCountries from './Images/world_map.png'
import EPC from './Images/estimated_power_check.png'

function Projects() {
  return (
    <div className='projects'>
      <div className='rest-countries'>
        <a href='https://rest-country-six.vercel.app/'><img src={restCountries} alt='restCountries'/></a>
        <div className='links'>
          <div id='title'><p>RestCountries</p></div>
          <div id='github'><a href='https://github.com/gopichandu-tech/RestCountry'>Github</a></div>
        </div>
        <div id='discreption'><p>This project will give basic data (area, region of countries) across the  entire  world. The data is fetched from the Rest Countries API.</p></div>
      </div>

      <div className='rest-countries'>
        <a href='https://github.com/gopichandu-tech/power_consumption_py'><img src={EPC} alt='restCountries'/></a>
        <div className='links'>
          <div id='title'><p>Estimated Power consumtion</p></div>
          <div id='github'><a href='https://github.com/gopichandu-tech/power_consumption_py'>Github</a></div>
        </div>
        <div id='discreption'><p>This project  helps us to find the estimated power consumption of an specific software application which is running behind your device.</p></div>
      </div>
    </div>
    
  )
}

export default Projects