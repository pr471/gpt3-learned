import React from 'react'
import './header.css'
import people from '../../assest/people.png'
import ai from '../../assest/ai.png'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">

    <div className="gpt3__header-content">
    <h1 className="gradient__text">
    Lets Build Something amazing with GPT-3 OpenAI
    </h1>

    <p> responsive, beautifully-designed applications, and get hired as a front-end developer. All the way from design </p>

    <div className="gpt3__header-content__input">
    <input type="email"  placeholder='Your Email Address' />
    <button type='button'>Get Started</button>

    </div>

    <div className="gpt3__header-content__people">
    <img src={people} />
     <p> 1660 people requested to have early access</p>
    </div>
    </div>
     <div className="gpt3__header-image">
      <img src={ai} alt="AI" />
     </div>
    </div>
  )
}

export default Header
