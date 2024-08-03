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
                        The first markup language I learned for web development.
                        </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="uil uil-css3-simple"></i>
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">
                        The second markup language I learned to style my website.
                        </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-javascript' ></i>
                    <div>
                        <h3 className="skills__name">Javascript</h3>
                        <span className="skills__level">
                        Learned JavaScript to enhance my web development skills.
                        </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-typescript'></i>
                    <div>
                        <h3 className="skills__name">Typescript</h3>
                        <span className="skills__level">
                        Learned TypeScript to improve my code quality and maintainability with strong typing.
                        </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxs-data' ></i>
                    <div>
                        <h3 className="skills__name">MySQl</h3>
                        <span className="skills__level">
                        Learned SQL to store, manage, and query data for my applications.
                        </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-git-branch'></i>
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">
                        Learned Git to track code changes and improve collaboration.
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
                            Using this CSS framework for designing my front-end website.
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

                    <div className="skills__data">
                        <i class='bx bxl-nodejs'></i>
                        <div>
                            <h3 className="skills__name">Node JS</h3>
                            <span className="skills__level">
                             JavaScript runtime that I learned to enhance my back-end skills.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bxl-java'></i>
                        <div>
                            <h3 className="skills__name">Java</h3>
                            <span className="skills__level">
                            Learned this object-oriented language in college for building desktop apps.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bxl-tailwind-css'></i>
                        <div>
                            <h3 className="skills__name">Tailwind</h3>
                            <span className="skills__level">
                            Learned a CSS framework for quick styling of front-end projects with minimal custom CSS.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bxl-graphql'></i>
                        <div>
                            <h3 className="skills__name">GraphQL</h3>
                            <span className="skills__level">
                            Learned a query language for efficient data handling and precise API communication.
                            </span>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Technical