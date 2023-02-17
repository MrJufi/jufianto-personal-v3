import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {ProjectsData , ProjectsCategory} from './Data'
import PortoItems from './PortoItems'

const Portos = () => {

  const [category, setCategory] = useState({name: 'all'});
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if(category.name === "all") {
      setProjects(ProjectsData);
    }
    else {
      const otherProjects = ProjectsData.filter((projects) => {
        return projects.category.toLowerCase() === category.name;
      })
      setProjects(otherProjects)
    }
  }, [category]);

  const handleClick = (e, index) => {
    setCategory({name: e.target.textContent.toLowerCase()})
    setActive(index)
  }

  return (
    <div>
      <div className="work__filters">
        {ProjectsCategory.map((category, index) => {
          return <span onClick={(e) => {handleClick(e, index)}} 
          className={`${active === index ? 'active-work' : ''} work__item`} key={index}>{category.name}</span>
        })}
        
      </div>

      <div className="work__container container grid animate__animated animate__fadeInUpBig">
        {projects.map((item) => {
          return <PortoItems item={item} key={item.id}/>
        })}
      </div>
    </div>
  )
}

export default Portos