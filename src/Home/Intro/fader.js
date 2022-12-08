import './splashScreen.scss'
import React, { useState, useEffect} from 'react';
import FadeIn from 'react-fade-in';

const Fader = ({}) => {

    
   
   
    return (
        
       <>
        <span id='logo'>
            
               
                <FadeIn 
                className='fade'
                transitionDuration={500}
                wrapperTag='span'
                >
                
                    <span id='P'>P</span>
                </FadeIn>
                <FadeIn
                delay={200}
                className='fade'
                transitionDuration={500}>
                    <span id='L'>L</span>
                </FadeIn>
                <FadeIn
                delay={400} 
                className='fade'
                transitionDuration={500}
                wrapperTag='span'
                >
                
                    <span id='A'>A</span>
                </FadeIn>
                <FadeIn 
                delay={600}
                className='fade'
                transitionDuration={500}
                wrapperTag='span'
                >
                
                    <span id='Y'>Y</span>
                </FadeIn>
                <FadeIn 
                delay={800}
                className='fade'
                transitionDuration={500}
                wrapperTag='span'
                >
                
                    <span id='G'>G</span>
                </FadeIn>
                <FadeIn 
                delay={1000}
                className='fade'
                transitionDuration={500}
                wrapperTag='span'
                >
                
                    <span id='R'>R</span>
                </FadeIn>
                <FadeIn 
                delay={1200}
                className='fade'
                transitionDuration={500}
                wrapperTag='span'
                >
                
                    <span id='O'>O</span>
                </FadeIn>
                <FadeIn 
                delay={1400}
                className='fade'
                transitionDuration={500}
                wrapperTag='span'
                >
                
                    <span id='U'>U</span>
                </FadeIn>
                <FadeIn 
                delay={1600}
                className='fade'
                transitionDuration={500}
                wrapperTag='span'
                >
                
                    <span id='N'>N</span>
                </FadeIn>
                <FadeIn
                delay={1800} 
                className='fade'
                transitionDuration={500}
                wrapperTag='span'
                >
                
                    <span id='D'>D</span>
                </FadeIn>
                <FadeIn
                delay={2000} 
                className='fade'
                transitionDuration={500}
                wrapperTag='span'
                >
                
                    <span id='S'>S</span>
                </FadeIn>    
                
            
        </span>
       
        </>    
    )
}





export default Fader;