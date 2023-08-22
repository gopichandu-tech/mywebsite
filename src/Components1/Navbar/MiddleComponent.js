import React from 'react';
import './MiddleComponent.css'

import sunriese from './ImgaesforMiddleComtainer/sunrise.jpg';
import deep_forest from './ImgaesforMiddleComtainer/two.jpg';
import sunset from './ImgaesforMiddleComtainer/ocean.jpg';

function MiddleComponent() {
  return (
    <div className='MiddleComponent-MainComtainer'>
        <div className='img-container'><img src={sunriese} alt='sunrise' style={{width:"100%"}} id='sunrise-one'/></div>
        <div className='img-container'><img src={deep_forest} alt='deep_forest' style={{width:"100%"}} id='deep_forest-tow'/></div>
        <div className='img-container'><img src={sunset} alt='sunset' style={{width:"100%"}} id='sunset-three' /></div> 
    </div>
  )
}

export default MiddleComponent
