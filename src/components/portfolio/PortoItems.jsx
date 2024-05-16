import React from 'react'

const PortoItems = ({item}) => {
  return (
    <div className="work__card animate__animated animate__fadeIn" key={item.id}>
        <img src={item.image} alt="" className='work__img'/>
        <h3 className="work__title">{item.title}</h3>
        <p className="work__desc">
          {item.desc}
        </p>
        <a href={item.demo} className="work__button" target='_blank'>
            Demo <i class="uil uil-arrow-right"></i>
        </a>
    </div>
  )
}

export default PortoItems