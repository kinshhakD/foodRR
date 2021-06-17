import React, { useState } from "react";

import './sidebar.scss';

import sideMenu from "../../assets/images/Side-menu.svg";
import mainMenu from "../../assets/images/Main-menu.svg";
import savedMenu from "../../assets/images/Saved-menu.svg";
import SidebarButton from "./SidebarButton";
import classNames from "classnames";

const Sidebar = () => {

    const buttonsImage = [sideMenu, mainMenu, savedMenu];

    const [active, setActive] = useState(null);

    const changeActiveClass = index => setActive(index);

    return (
        <div className='food__sidebar'>
            {
                buttonsImage.map((image, index) => (
                    <div className="sidebar__block__item" key={index}>
                        <div className={classNames('sidebar__item', index === active ? 'active' : '')}>
                            <button
                                className={classNames('sidebar__button')}
                                onClick={() => changeActiveClass(index)}>
                                <img src={image} />                     
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Sidebar;

// разбить на компонент