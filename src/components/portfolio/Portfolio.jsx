import React from 'react'
import Portos from './Portos'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section className="work section" id="portfolio">
        <div className='animate__animated animate__fadeIn'>
          <h2 className="section__title">Portfolio</h2>
          <span className="section__subtitle">All my works till now</span>
        </div>
        <Portos/>
    </section>
  )
}

export default Portfolio