import React from 'react'
import './PythonProjects.css'
import digit from '../Images/digit.png'

function PythonProjects() {
  return (
    <div>
      <h1 className='python-project-heading'>Machine Learning </h1>
      <div className='projects'>
      <div className='project Digit Recognition'>
            <a href='https://github.com/gopichandu-tech/Digit_Recognition_ML'><img src={digit} alt='restCountries'/></a>
            <div className='links'>
            <div id='title'><p>Digit Recognition</p></div>
            <div id='github'><a href='https://github.com/gopichandu-tech/Digit_Recognition_ML'>Github</a></div>
            </div>
            <div id='discreption'><p>The data set is analysed in two different forms first the dataset is trained and tested using k-nearest neighbours algrorithm alone and secondly the dimensions/columns of the dataset is reduced using principle component analysis and then k-nearest neighbours algorithm is used for analysis</p></div>
      </div>
      </div>
      

    </div>
  )
}

export default PythonProjects
