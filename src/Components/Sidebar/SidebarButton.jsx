import React from 'react'

import classNames from 'classnames';

const SidebarButton = ({image}) => {
    return (
        <div className='sidebar__block-item'>
            <button className={classNames('sidebar__button')}>
            <img src={image} alt="" />
            </button>
        </div>
    )
}

export default SidebarButton
