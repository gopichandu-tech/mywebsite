import React from 'react'
import './PythonProjects.css'
import project1 from '../Images/python_project1.png'

function PythonProjects() {
  return (
    <div>
      <h1 className='python-project-heading'>Python projects</h1>
      <div className='projects'>
        <div className='project estimated_power_consumtion'>
            <a href='https://github.com/gopichandu-tech/power_consumption_py'><img src={project1} alt='restCountries'/></a>
            <div className='links'>
            <div id='title'><p>Estimated Power consumtion</p></div>
            <div id='github'><a href='https://github.com/gopichandu-tech/power_consumption_py'>Github</a></div>
            </div>
            <div id='discreption'><p>This project  helps us to find the estimated power consumption of an specific software application which is running behind your device.</p></div>
        </div>
      </div>
      

    </div>
  )
}

export default PythonProjects
