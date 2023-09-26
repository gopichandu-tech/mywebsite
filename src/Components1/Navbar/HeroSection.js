import React from 'react'
import './HeroSection.css';
import Typical from 'react-typical';
function HeroSection() {
  return (
    <section id='hero'>

        <div className='container'>
            <div className='info'>
                <h1 className='title'>
                  Hello,I am Gopi Chandu
                </h1>
                <p >
                  <Typical 
                   className='discription'
                   steps={["Junior NLP Engineer and Frontend Developer experience in developing and implementing NLP-based systems to improve accuracy, reduce processing time, and increase customer engagement, and developing user-friendly websites. Passionate about learning and development with a desire to apply skills on larger development. Eager to tackle more complex problems and continue to find ways to maximize user efficiency..",1000]}
                   loop={2}
                   wrapper='p'
                />
                    
                  
                </p>
            </div>
        </div>

    </section>
  )
}

export default HeroSection