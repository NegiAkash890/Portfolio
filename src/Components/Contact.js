import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <div className='contact_container' id='contact'>
            <h1>GET IN TOUCH FOR COLLABORATION !</h1>
            <form id='form_info'>
                <div>
                    <p>Name<span> *</span></p>
                    <input name="name" placeholder='Full Name'/>
                </div>
                <div>
                     <p>Email<span> *</span></p>
                    <input name="email" placeholder='Email'/>
                </div>
                <div>
                     <p>Subject<span> *</span></p>
                    <input name="subject" placeholder='Subject'/>
                </div>
                <div>
                     <p>Message<span> *</span></p>
                    <textarea name="message" placeholder='Message'/>
                </div>
                <div>
                    <button id='submit'>SUBMIT</button>
                </div>
            </form>
            
        </div>
    )
}

export default Contact
