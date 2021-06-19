import React from 'react'
import { useState } from 'react';

import closeSvg from '../../assets/images/close.svg'

import './modal.scss';

const ModalDish = ({ name, picture, ingredients = [], back, onClick }) => {


    const [visibleRecipe, setVisibleRecipe] = useState(false)



    return (
        <div className='food__modal'>
            <div className="food__modal__image-block" style={{ background: `${back}` }}>
                <img src={closeSvg} alt="" onClick={onClick} />
            </div>
            <div className="food__modal__content">
                <div className="food__modal__content-container">
                    <div className="food__modal__content-title">
                        <h3>{name}</h3>
                    </div>
                    <div className="food__modal__content-ingredients">
                        <ul>
                            {
                                ingredients.map(item => (
                                    <li>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="food__modal__content-button">
                        <button onClick={() => {
                            setVisibleRecipe(true)
                        }}>View recipe</button>
                        {
                            visibleRecipe &&
                            (<div className='food__modal__content__description'>
                                <div className="food__modal__content__description-container">
                                    <div className="food__modal__content__description-image">
                                        <img src={closeSvg} alt="" />
                                    </div>
                                </div>


                            </div>)
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ModalDish
