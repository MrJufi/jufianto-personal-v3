import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bxs-award about__icon'></i>
            <h3 className="about__title">Worked</h3>
            <span className="about__subtitle">80++ Hours</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon' ></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">5+ Projects</span>
        </div>
    </div>
  )
}

export default Info