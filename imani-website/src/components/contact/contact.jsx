import React, { useRef } from 'react'
import './contact.css'
import {SiMinutemailer} from 'react-icons/si'
import {FiLinkedin} from 'react-icons/fi'
import emailjs from 'emailjs-com'

function copy_name_ToClipboard() {
  navigator.clipboard.writeText('Imani Muhammad-Graham');
  alert("You copied my Linkedin Username!");
};


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g21dujy', 'template_3xlgl3h', form.current, '3lQE5T0vmZXqVmxKC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <section id = "contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact_options">
          <article className="contact_option">
            <SiMinutemailer className='contact_icon'/>
            <h2>Email</h2>
            <h5>imanim454@gmail.com</h5>
            <a href="mailto:imanim454@gmail.com">Send a Message</a>
          </article>
          <article className="contact_option" onClick={copy_name_ToClipboard}>
            <FiLinkedin className='contact_icon'/>
            <h2>Linkedin</h2>
            {/* <h5 >Imani Muhammad-Graham</h5> */}
            <a href="https://www.linkedin.com/in/imani-muhammad-graham-424b4a127/">Reach Out</a>
          </article>
        </div>
        
        <form className='contact_form' ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="text" name='email' placeholder='Your email' required />
          <textarea name="message" placeholder='Type your message here'  required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact