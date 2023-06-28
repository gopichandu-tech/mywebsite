import React from 'react'
import './Projects.css'
import restCountries from './Images/restcountries.jpg'

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
    </div>
    
  )
}

export default Projects