import React from 'react'
import './About.css'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
    <Navbar/>
    <div className='content'>
        <div className='container'>
            <div className='row'>
              <div className='abhead'>
                <div className='anim'>
                  <h1>Hello!</h1>
                  <h4>Brief Summary about DDS Project<br/><br/></h4>
                </div>
                <div className='anim'>
                  <p>Technologies : React.JS, HTML, CSS, JavaScript, Bootstrap, MS-Word, PowerPoint, Python and AIML<br/><br/>Driver drowsiness is a major cause of accidents leading to severe injuries or can 
                    even be <span className='highlights'>fatal</span>. So, an automated way to predict and detect a drivers drowsiness is crucial to 
                    avoid such accidents. 
                    There are several ways to detect a driverss drowsiness levels, like physiological 
                    monitoring and behavioural monitoring, or by even combining both above mentioned 
                    techniques.An example of Physiological monitoring involves using an ML model like <span className='highlights'>CNN</span> to 
                    measure the drivers physiological  features by  <span className='highlights'>capturing images</span> and <span className='highlights'>video frames</span>.  Then 
                    these images or video frames can be used to provide information about the drowsiness levels 
                    of the driver. On the other hand, behavioural monitoring involves observing the drivers 
                    behaviour such as comparing the video frames with the <span className='highlights'>pre-processed dataset</span> using models 
                    like <span className='highlights'>DCNN</span>. We can also combine the above-mentioned methods, that is physiological and 
                    behavioural monitoring to get a more precise understanding of the drowsiness levels of the 
                    driver. 
                  </p>
                  <p className='p'>About developer<br/>I am Dharaneeswaran.V, I have done B.E - Computer Science and Engineering at Agni College of Technology Thalambur, OMR, Chennai.
                      I have well knowledge at <span className='highlights'>Html, CSS, Bootstrap</span> and Basic knowledge at <span className='highlights'>JavaScript, React.js, MySql</span>. I know <span className='highlights'>vscode, XAMP localhoast server.</span>
                  </p>
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About