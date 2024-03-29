import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <>
      <div class="parent">
    <div class="body">
        <div class="C-container">
            <div class="contact-box">
                <div class="left"></div>
                <div class="right">
                    <h2>Contact Us</h2>
                    <input type="text" class="field" placeholder="Your Name"/>
                    <input type="text" class="field" placeholder="Your Email"/>
                    <input type="text" class="field" placeholder="Phone"/>
                    <textarea placeholder="Message" class="field"></textarea>
                    <button class="c-btn">Send</button>
                </div>
            </div>
        </div>
    </div>
    
</div>
    </>
  )
}

export default ContactUs