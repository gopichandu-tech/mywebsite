import React from 'react'
import './PythonProjects.css'
import project1 from '../Images/python_project1.png'
import ML1 from '../Images/ml1.png'
import ML2 from '../Images/ml2.png'
import ML3 from '../Images/ml3.png'

function PythonProjects() {
  return (
    <div>
      <h1 className='python-project-heading'>Machine Learning </h1>
      <div className='projects'>
      <div className='project Movies Recommendation'>
            <a href='https://github.com/gopichandu-tech/moviesrecommendation_machineLearning'><img src={ML3} alt='restCountries'/></a>
            <div className='links'>
            <div id='title'><p>Movies Recommendation</p></div>
            <div id='github'><a href='https://github.com/gopichandu-tech/moviesrecommendation_machineLearning'>Github</a></div>
            </div>
            <div id='discreption'><p>Top 10000 movies from the TMDB. Includes information such as release year, genre, original language, vote average and count, popularity, and budget.</p></div>
      </div>

      <div className='project Domestic violence in Colombia'>
            <a href='https://github.com/gopichandu-tech/Domestic-violence-in-Columbia'><img src={ML1} alt='restCountries'/></a>
            <div className='links'>
            <div id='title'><p>Domestic violence in Colombia</p></div>
            <div id='github'><a href='https://github.com/gopichandu-tech/Domestic-violence-in-Columbia'>Github</a></div>
            </div>
            <div id='discreption'><p>The data file is taken form the kaggle (Domestic violence in Colombia) and  the data is cleaned with suitable methods before it is visualy analysed and the dataset is trained with suitable ml alogrithms.</p></div>
        </div>

        <div className='project gate_2021_analysis'>
            <a href='https://github.com/gopichandu-tech/Gate_2021_analysis'><img src={ML2} alt='restCountries'/></a>
            <div className='links'>
            <div id='title'><p>Gate 2021 results analysis</p></div>
            <div id='github'><a href='https://github.com/gopichandu-tech/Gate_2021_analysis'>Github</a></div>
            </div>
            <div id='discreption'><p>The data file is taken form the kaggle (Gate 2021 results Analysis) and  the data is cleaned with suitable methods before it is visualy analysed and the dataset is trained with suitable ml alogrithms.</p></div>
        </div>
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
