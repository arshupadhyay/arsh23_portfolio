import Loader from 'react-loaders';
import { useState,useEffect, useRef } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () =>{

    const [letterClass , setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        
        return () => clearTimeout(timeoutId);
    }, []);
    
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ab9xswt', 'template_edj9uk8', form.current, 'rPgodyhZzFg51oX2e')
      .then((result) => {
         alert('Message successfully sent!!!');
         window.location.reload(false)
      }, (error) => {
          alert('Failed to send the message,please try again');
      });
  };


    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','M','e']}
                            idx={15} 
                        />
                    </h1>
                    <p>
                        I'm intrested in freelancing opportunities - especially ambitious and large projects.
                        However, if you have other request or query, do let me know in below form either.
                    </p>
                    
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='user_name' placeholder="Name" required/>
                                </li>

                                <li className='half'>
                                    <input type='email' name='user_email' placeholder="Email" required/>
                                </li>

                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required/>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>  
                                </li>

                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className='info-map'>
                    Arsh Upadhyay,
                    <br/>
                    B8 Yashodra Bunglows <br/>
                    Ankleshwar, Bharuch
                    <br/>
                    Gujarat, India
                     <br/>
                    <span>upadhyayarsh23@gmail.com</span>
                </div>

                <div className='map-wrap'>
                    <MapContainer center = {[21.64082 , 72.98066]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[21.64082 , 72.98066]}>
                            <Popup>Arsh lives here, come over for a cup of tea!!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact