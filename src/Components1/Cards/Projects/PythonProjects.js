import React from 'react'
import './PythonProjects.css'
import NLP_project1 from '../videos/NLP_Project1_video.mp4'
import sentiment from '../Images/sentiment.jpeg'

function PythonProjects() {
  return (
    <div>
      <h1 className='python-project-heading'>Natural Language Processing</h1>
      <div className='projects'>
      <div className='project Duplicate Question Pairs'>
            <video controls className="video-player"><source src={NLP_project1} type="video/mp4"/></video>
            <div className='links'>
            <div id='title'><p>Identifying Duplicate Pairs</p></div>
            <div id='github'><a href='https://github.com/gopichandu-tech/DuplicateQuestions'>Github</a></div>
            </div>
            <div className='links2'>
              <div id='visit-website'><a href='https://gopichandu-tech-duplicatequestions-main-il2g6w.streamlit.app/'><p>Visit Website</p></a></div>
            </div>
            <div id='discreption'><p>An key product philosophy is that there should be a single question page for each logically distinct question, which helps with the challenge of spotting duplicate questions. The questions "What is the most populous state in the USA?" and "Which state in the United States has the most people?" are two examples of queries that shouldn't be answered individually because they have the same goal in mind. Knowledge-sharing is more effective when there is a canonical page for each logically distinct query.</p></div>
      </div>
      <div className='project Sentiment Analysis Using BERT'>
            <a href='https://rest-country-six.vercel.app/'><img className='python-image' src={sentiment} alt='sentiment analysis'/></a>
            <div className='links'>
                <div id='title'><p>Sentiment Analysis</p></div>
                <div id='github'><a href='https://github.com/gopichandu-tech/Sentiment_analysis_using_BERT/tree/main'>Github</a></div>
            </div>
            <div id='discreption'><p>Data in this project are extraced from yelp website using beautifulsoup library, the sentimental score of the extracted reviews are generated using pretrained bert model the majority i.e 93%  reviews given by the customers are positive and only 3% of the customers gave bad reviews and 5% of the custmoners are just satisfied with the food and restaurant</p></div>
        </div>
      </div>
      

    </div>
  )
}

export default PythonProjects
