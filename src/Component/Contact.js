import React from 'react'
import style from '../styles/Contact.module.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_caei42n', 'template_6d9qm6c', form.current, 'oTiBA2S2sdqz8A1as')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email sent successfully")
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <>
            <div className={style.ContactDiv} id='contactPage'>
                <h1 className={style.ContactH1}>Contact Me</h1>
                <p className={style.ContactP}>Please fill out the form below to make connect with me</p>
                <form ref={form} onSubmit={sendEmail}>
                    <input placeholder='Your name' type='text' name='from_name' className={style.input}/>
                    <br/>
                    <input placeholder='Your Email' type='email' name='your_email' className={style.input}/>
                    <br/>
                    <textarea placeholder='Your Message' type='text' name='message' cols={60} rows={10} className={style.textarea}/>
                    <br/>
                    <button type='submit' className={style.SubBtn}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact