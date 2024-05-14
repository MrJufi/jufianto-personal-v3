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

                <div className="skills__data">
                    <i class='bx bxl-typescript'></i>
                    <div>
                        <h3 className="skills__name">Typescript</h3>
                        <span className="skills__level">
                            The first programming language I learned to enhance my code quality and maintainability by adding strong typing to JavaScript.
                        </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxs-data' ></i>
                    <div>
                        <h3 className="skills__name">MySQl</h3>
                        <span className="skills__level">
                            Relational database management system I learned to store, manage, and query data for my applications.
                        </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-git-branch'></i>
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">
                            Version control system I learned to manage and track changes in my code, enabling better collaboration and code management.
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
                                Programming language that I learned during college to build desktop applications, which helped me strengthen my object-oriented programming skills.
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bxl-tailwind-css'></i>
                        <div>
                            <h3 className="skills__name">Tailwind</h3>
                            <span className="skills__level">
                                CSS framework that I learned to quickly and efficiently style my front-end projects with minimal custom CSS
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bxl-graphql'></i>
                        <div>
                            <h3 className="skills__name">GraphQL</h3>
                            <span className="skills__level">
                                Query language I learned to efficiently fetch and manage data in my applications, providing a flexible and precise way to communicate with APIs.
                            </span>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Technical