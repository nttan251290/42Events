import React from 'react'
import { Link } from "react-router-dom";

// constants
import { FOOTER_LINK, FOOTER_SOCIAL_LINK } from './constants'

// styles
import './Footer.scss'

const Footer = () => {
  return (
    <div className="component-footer">
      <div className="component-footer__inner">
        <div className="component-footer__content">
          <div className="component-footer__content-left">
            {FOOTER_LINK.map((item, index) => (
              <div key={index} className="content__item">
                <Link to={item.link}>
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
          <div className="component-footer__content-right">
            {FOOTER_SOCIAL_LINK.map((item, index) => (
              <div key={index} className="content__item">
                <Link to={item.link}>
                  <img
                    src={item.icon}
                    alt={item.label}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="component-footer__copy-right">
          © 2022 42Technology Pte Ltd.
        </div>
      </div>
    </div>
  )
}

export default Footer
