import React from 'react'


const Softskill = () => {
  return (
    <div className="skills__content animate__animated animate__fadeInUpBig">
        <h3 className="skills__title">Soft Skills</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class="uil uil-brain"></i>
                    <div>
                        <h3 className="skills__name">Problem Solving</h3>
                        <span className="skills__level">
                            I am able to find a solution to a problem based on 
                            data and a little bit of analysis.
                        </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxs-analyse' ></i>
                    <div>
                        <h3 className="skills__name">Adaptability</h3>
                        <span className="skills__level">
                            I am able to adapt fast in any situation, like the new work 
                            environment or meeting with new people I haven't met before
                        </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-extension'></i>
                    <div>
                        <h3 className="skills__name">Critical Thinking</h3>
                        <span className="skills__level">
                            I am able to solve problems through critical thinking and enjoy working in an analytical environment.
                        </span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-user-voice' ></i>
                        <div>
                            <h3 className="skills__name">Teamwork</h3>
                            <span className="skills__level">
                                I am able to work with others who have the same 
                                passion and goal with me, and we together can meet
                                the expected result
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="uil uil-lightbulb"></i>
                        <div>
                            <h3 className="skills__name">Creativity</h3>
                            <span className="skills__level">
                                I am able to solve problems with a creative way and I love
                                to work in a design environment 
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bxs-message-rounded-dots'></i>
                        <div>
                            <h3 className="skills__name">Communication</h3>
                            <span className="skills__level">
                                I am able to solve problems through effective Communication
                                and enjoy working in a collaborative environment
                            </span>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Softskill