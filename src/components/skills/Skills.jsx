import React from 'react'
import Softskill from './Softskill'
import Technical from './Technical'
import './skills.css'

const Skills = () => {
  return (
    <section className="skills section" id='skills'>
        <div className='animate__animated animate__fadeIn'>
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">Skills I Obtained</span>
        </div>

        <div className="skills__container container grid">
            <Technical/>
            <Softskill/>
        </div>
    </section>
  )
}

export default Skills