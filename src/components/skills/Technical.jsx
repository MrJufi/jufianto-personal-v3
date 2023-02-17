import React from 'react'

const Technical = () => {
  return (
    <div className="skills__content animate__animated animate__fadeInUpBig">
        <h3 className="skills__title">Technical Skills</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class="uil uil-html3"></i>
                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">
                        The first markup languange that i learned for making website and currently i'm still exploring it
                        </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="uil uil-css3-simple"></i>
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">
                            The second markup languange that i learned to style my website instead of just 
                            using HTML.
                        </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-javascript' ></i>
                    <div>
                        <h3 className="skills__name">Javascript</h3>
                        <span className="skills__level">
                            I learned Javascript to start enhancing my skill in website development.
                        </span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bxl-bootstrap'></i>
                        <div>
                            <h3 className="skills__name">Bootstrap</h3>
                            <span className="skills__level">
                                Currently using this CSS Framework and it's a big help using this framework to 
                                design my front-end website.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="uil uil-react"></i>
                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">
                                The first JavaScript library i learned to enhance my front-end skill.
                            </span>
                        </div>
                    </div>
            </div>
            
        </div>
    </div>
  )
}

export default Technical