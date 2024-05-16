import React, { useState } from "react";
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }


    return (
        <section className="qualification section animate__animated animate__fadeIn">
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My Personal Journey</span>

            {/* Title  */}
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={`qualification__button  button--flex ${toggleState === 1 ? 'qualification__active' : ''}`}
                        onClick={() => toggleTab(1)}

                    >
                        <i className="uil uil-graduation-cap qualification__icon" /> Education
                    </div>

                    <div 
                        className={`qualification__button  button--flex ${toggleState === 2 ? 'qualification__active' : ''}`}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon" /> Experience
                    </div>
                </div>
                
            </div>

            {/* Data Section */}
            <div className="qualification__sections ">
                <div 
                    className={`qualification__content animate__animated animate__fadeIn ${toggleState === 1 ? 'qualification__content-active' : ''}`}
                > 
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                Highschool Student
                            </h3>
                            <span className="qualification__subtitle">
                                SMA Santo Yoseph - Jakarta Timur
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt qualification__icon" /> 2017 - 2020
                            </div>
                        </div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">
                                Fresh Graduate
                            </h3>
                            <span className="qualification__subtitle">
                                BINUS University - Bekasi
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt qualification__icon" /> 2020 - 2024
                            </div>
                        </div>
                    </div>
                </div>

                <div 
                    className={`qualification__content animate__animated animate__fadeIn ${toggleState === 2 ? 'qualification__content-active' : ''}`}
                >
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">
                                Team Promotion Marketing
                            </h3>
                            <span className="qualification__subtitle">
                                BINUS University
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt qualification__icon" /> 2021 - 2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                Frontend Developer Intern
                            </h3>
                            <span className="qualification__subtitle">
                                Kawan Lama Group (ruparupa)
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt qualification__icon" /> 2023 - 2024
                            </div>
                        </div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification