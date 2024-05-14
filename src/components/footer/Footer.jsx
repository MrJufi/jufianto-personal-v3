import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="footer__container container">
            <div className="content_footer">
              <h3><span className='name_footer'>Jufianto's</span> Portfolio</h3>
              <p>
                Checkout all my social media here and kindly checkout my freelance gig. 
                This website was built with reactJS.
              </p>
              <div className="social_media">
                <a href="https://www.fiverr.com/mrjuvianto" target='_blank'>Fiverr</a>
                <a href="https://www.instagram.com/jufianto/" target='_blank'>Instagram</a>
                <a href="https://www.behance.net/jufiantokim" target='_blank'>Behance</a>
              </div>
            </div>

            <span className="copyright">
            Copyright &#169; 2022 Jufianto. All Rights Reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer