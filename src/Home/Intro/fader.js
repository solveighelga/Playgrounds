import './splashScreen.scss'
import React from 'react';
import FadeIn from 'react-fade-in';

const Fader = ({}) => {
      
    return (
        
       
        <span id='logo'>
            
               
                <FadeIn                    
                    transitionDuration={500}                   
                >
                    <span id='P'>P</span>
                </FadeIn>
                
                <FadeIn
                    delay={200}                   
                    transitionDuration={500}
                >
                    <span id='L'>L</span>
                </FadeIn>
                
                <FadeIn
                    delay={400}                    
                    transitionDuration={500}                   
                >
                    <span id='A'>A</span>
                </FadeIn>
                
                <FadeIn 
                    delay={600}                   
                    transitionDuration={500}                   
                >
                    <span id='Y'>Y</span>
                </FadeIn>
                
                <FadeIn 
                    delay={800}                    
                    transitionDuration={500}                    
                >
                    <span id='G'>G</span>
                </FadeIn>
                
                <FadeIn 
                    delay={1000}                   
                    transitionDuration={500}
                >
                    <span id='R'>R</span>
                </FadeIn>
                
                <FadeIn 
                    delay={1200}                    
                    transitionDuration={500}                   
                >
                    <span id='O'>O</span>
                </FadeIn>
                
                <FadeIn 
                    delay={1400}                   
                    transitionDuration={500}                    
                >
                    <span id='U'>U</span>
                </FadeIn>
                
                <FadeIn 
                    delay={1600}                   
                    transitionDuration={500}                    
                >
                    <span id='N'>N</span>
                </FadeIn>
                
                <FadeIn
                    delay={1800}                     
                    transitionDuration={500}                   
                >
                    <span id='D'>D</span>
                </FadeIn>
                
                <FadeIn
                    delay={2000}                     
                    transitionDuration={500}                    
                >             
                    <span id='S'>S</span>
                </FadeIn>    
                
            
        </span>
       
            
    )
}





export default Fader;