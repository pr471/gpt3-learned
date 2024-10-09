import React from 'react'
import './brand.css'
import google from '../../assest/google.png'
import shopify from '../../assest/shopify.png'
import slack from '../../assest/slack.png'
import dropbox from '../../assest/dropbox.png'
import atlassian from '../../assest/atlassian.png'

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div className="gpt3__brand-container">
        <p>
          <img src={google} alt="" />
        </p>
        <p>
          <img src={shopify} alt="" />
        </p>
        <p>
          <img src={dropbox} alt="" />
        </p>
        <p>
          <img src={slack} alt="" />
        </p>
        <p>
          <img src={atlassian} alt="" />
        </p>


      </div>
    </div>
  )
}

export default Brand
