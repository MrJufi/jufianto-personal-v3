import React from 'react'

const Social = () => {
  return (
    <div className="home__social animate__animated animate__backInLeft">
        <a href="https://github.com/MrJufi" className="home__social-icon" target='_blank'>
            <i class="uil uil-github"></i>
        </a>

        <a href="mailto:jufianto@binus.ac.id" className="home__social-icon" target='_blank'>
            <i class="uil uil-envelope"></i>
        </a>

        <a href="https://www.linkedin.com/in/jufianto-j" className="home__social-icon" target='_blank'>
            <i class="uil uil-linkedin"></i>
        </a>
    </div>
  )
}

export default Social