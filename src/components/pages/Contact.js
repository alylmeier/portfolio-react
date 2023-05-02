import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/Contact.css'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_brc4szi', form.current, '8-WfzoGWzVnoovDGF')
      .then((result) => {
          alert("Your message was sent!");
          console.log(result.text);
      }, (error) => {
          alert("Your message didn't go through. Please try again or visit me on LinkedIn");
          console.log(error.text);
      });
  };

  return (
  <form id= "myform" onSubmit={sendEmail}>
      <div className = "form">
      <br></br>
        <div class = "form-group col-md-6">
      <label id="label" class="text-3xl lg:text-5xl">Name</label>
      <input type="text" name="user_name" placeholder= "Your name here" required />
      </div>
      <br></br>
      <div class = "form-group col-md-6">
      <label id="label" class="text-3xl lg:text-5xl">Email</label>
      <input type="email" name="user_email" placeholder= "Your email address" required />
      </div>
      <div class = "form-group col-md-6">
        <br></br>
      <label id="label" class="text-3xl lg:text-5xl">Message</label>
      <textarea className="message" rows="5" cols="50" placeholder = "What would you like to say?" required />
      </div>
      <div class = "mb-3">
        <br></br>
        <button className = "button" type = "submit" value = "Send">Send</button>
      </div>
      </div>
    </form>
);
  
};

export default Contact; 