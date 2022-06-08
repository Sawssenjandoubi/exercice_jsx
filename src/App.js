import React from 'react';
import image from './img_src.jpg';
import './style.css';


function App(){
    return(
<div className='firstDiv' style={{border:"solid 1px black", maxwidth:"100vw" }}>
    <h1  className='titlered'>Your name here</h1>
    <img src={'img_public.jpg'} alt="pic in public"></img>
    <img src={image} alt="pic in src"></img>
    <video width={320} height={240} controls>
     <source src={'/video.mp4'} type="video/mp4" />
    </video>
   
    
</div>
        
    );

}
export default App;