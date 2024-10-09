import React from 'react'
import './footer.css'
import logo from '../../assest/logo.svg'


const Footer = () => {
  return (
    <div className="gpt3__footer section__padding" id="footer">

      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you  step into the future before others
        </h1>
        <button type="button">
          Request to Early Access
        </button>
      </div>

      <div className="gpt3__footer-container">

        <div className="gpt3__footer-container-logo">
          <img src={logo} alt="AI" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-container-links">


          <div>
            <p><a>Links</a></p>
            <p><a>Overons</a></p>
            <p><a>Social Media</a></p>
            <p><a>Counters</a></p>
            <p><a>Contact</a></p>
          </div>

          <div>
            <p><a>Company</a></p>
            <p><a>Terms & Conditions</a></p>
            <p><a>Terms & Conditions</a></p>
            <p><a>Contact</a></p>
          </div>

          <div>
            <p><a>Get in touch</a></p>
            <p><a>Crechterwoord K12 182 DK Alknjkcb</a></p>
            <p><a>085-132567</a></p>
            <p><a>085-132567</a></p>
          </div>



        </div>





      </div>

      <div className="gpt3__footer-copy">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>


    </div>



  )
}

export default Footer
