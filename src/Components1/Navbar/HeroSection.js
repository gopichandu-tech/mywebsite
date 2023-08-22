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
                   steps={["A Frontend Developer and Data Science enthusiast with keen experience in designing and maintaining responsive websites as well as data analysis in the modern workplace.",1000]}
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