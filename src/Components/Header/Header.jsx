import React from 'react'
import { useState } from 'react';

import addSvg from '../../assets/images/Add.svg';

const Header = () => {

    const [createModal, setCreateModal] = useState(false);

    return (
        <div className='food__content__header'>
            <div className="food__content__header-title">
                <h3>food</h3>
            </div>
            <div className="food__content__header-add">
                <img className='food__content__header-add-image'
                    src={addSvg}
                    alt="New Dish"
                    onClick={() => setCreateModal(!createModal)} />
                <span>Add new recipe</span>
                {
                    createModal && (
                      <div className="">123</div>  
                    )
                }
            </div>
        </div>
    )
}

export default Header
