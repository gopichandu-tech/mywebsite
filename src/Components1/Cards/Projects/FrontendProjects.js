import React from 'react'
import './FrontendProjects.css'
import project1 from '../Images/frontend_project1.png'
import project2 from '../Images/frontend_project2.png'

function FrontendProjects() {
  return (
    <div>
      <h1 className='forntend-project-heading'>Frontend Projects</h1>
      <div className='projects'>
        <div className='project rest-countries'>
            <a href='https://rest-country-six.vercel.app/'><img src={project1} alt='restCountries'/></a>
            <div className='links'>
                <div id='title'><p>RestCountries</p></div>
                <div id='github'><a href='https://github.com/gopichandu-tech/RestCountry'>Github</a></div>
            </div>
            <div id='discreption'><p>This project will give basic data (area, region of countries) across the  entire  world. The data is fetched from the Rest Countries API.</p></div>
        </div>

        <div className='project searchforjobs'>
            <a href='https://search-for-jobs-frontend.vercel.app/'><img src={project2} alt='restCountries'/></a>
            <div className='links'>
                <div id='title'><p>SearchForJobs</p></div>
                <div id='github'><a href='https://github.com/gopichandu-tech/searchForJobs_frontend'>Github</a></div>
            </div>
            <div id='discreption'><p>This website is the simple clone of job searching websites, all the basic details like what all the information is needed both from company and user applicent end are given.</p></div>
        </div>
      </div>

    </div>
   
  )
}
export default FrontendProjects
