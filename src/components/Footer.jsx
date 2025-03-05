import React from 'react'
import "../styles/Footer.css"

function Footer() {
  return (
    <div>
        <footer className="footerMain">
        <div className="footer">
          <div className="footer-nav">
            <h3>Navigate</h3>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Let's Get Social</h3>
            <ul>
              <li><a href="https://www.tiktok.com/@genuinelysuckatnames?is_from_webapp=1&sender_device=pc"
                target="_blank" rel="noopener noreferrer">
                genuinelysuckatnames</a></li>
              <li><a href="https://x.com/ZaneisaK" target="_blank" rel="noopener noreferrer"> ZaneisaK</a></li>
              <li><a href="https://www.instagram.com/absolutelyfried._/" target="_blank"
                rel="noopener noreferrer"> absolutelyfried._</a></li>
              <li><a href="https://github.com/ZaneKwatampora" target="_blank" rel="noopener noreferrer"> ZaneKwatampora</a></li>
            </ul>
            <p>For additional ways to reach us, please visit our <a href="">Contact Page</a> for more
              details.</p>
          </div>
        </div>
        <div className="footer-additional">
          <p className="p3">Copyright &copy;2025; Website Designed by <a href="http://github.com/ZaneKwatampora"
            target="_blank" rel="noopener noreferrer"><span className="designer">Zane Kwatampora</span></a></p>
        </div>
      </footer>
    </div>
  )
}

export default Footer