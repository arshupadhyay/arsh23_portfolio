import { useState , useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
const About = () =>{

    const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    // Clear the timeout when the component is unmounted or when the effect is re-executed
    return () => clearTimeout(timeoutId);
  }, []);

    return(
    <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>

                <p>
                    I'm very ambitious front-end developer looking for a 
                    role in established IT company with the opportunity
                    to work with the latest technologies on challenging 
                    and diverse projects.
                </p>

                <p>
                    I'm quiet confident, naturally curious, and perpetually 
                    working on improving my chops one design problem at a time.
                </p>

                <p>
                    If I need to define myself in one sentence that would be -
                    adaptable to change , a sports fanatic and a tech-enthusiast. 
                    Being adaptable is a neccessary skill in today's world.
                </p>

            </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faPhp} color='#800080'/>
                </div>

                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                </div>

                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                </div>

                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                </div>

                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                </div>

                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                </div>
            </div>
        </div>    
        </div>
        <Loader type='pacman' />
    </>
    )
}

export default About