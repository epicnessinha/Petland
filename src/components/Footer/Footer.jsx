import React from "react"
import "./Footer.css"

const Footer = ({ footerLink, footerCopy }) => {
  return (
    <div className="footer">
      <h4>
        <a href={footerLink} target="_blank">
          {footerCopy}
        </a>
      </h4>
    </div>
  )
}

export default Footer
