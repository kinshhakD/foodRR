import React from 'react'

import './dish.scss';



const Dish = ({ image, name, onClick }) => {
    return (
        <div className='food__content__dish' onClick={onClick}>
            <img src={image} alt="" className='food__content__dish-image' />
            <div className="food__content__dish-name">
                <span>{name}</span>
            </div>
        </div>
    )
}

export default Dish
