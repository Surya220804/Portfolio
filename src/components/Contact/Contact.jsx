import './Contact.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-heading">
        <h1 className="contact-h1">Contact <span style={{color:"blue"}}>Me</span></h1>
        </div>
       <form action="" className="form-container">
        <label  className="name">Name</label>
        <input type="text" className="name-input" placeholder='Your name' />
         <label  className="name">Email</label>
        <input type="text" className="name-input" placeholder='Your Email'/>
         <label  className="name">Message</label>
        <input type="text" className="name-input" placeholder='Enter a Message'/>
        <button className="contact-btn">Send Message</button>
        <div className="contact-links">
          <ul>
            <a href="https://www.linkedin.com/in/surya0804/" target='_blank'><FaLinkedin/></a>
            <a href="https://github.com/Surya220804" target='_blank'><FaGithub/></a>
            <a href="mailto:kpsurya2004@gmail.com" target='_blank'><MdEmail/></a>
          </ul>
        </div>
       </form>
    </div>
  )
}

export default Contact