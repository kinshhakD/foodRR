import React, { useState } from 'react';
import classNames from 'classnames';
import sideMenu from '../../assets/images/Side-menu.svg';
import mainMenu from '../../assets/images/Main-menu.svg';
import savedMenu from '../../assets/images/Saved-menu.svg';
import './sidebar.scss';

const Sidebar = () => {
  const buttonsImage = [sideMenu, mainMenu, savedMenu];

  const [active, setActive] = useState(null);

  return (
    <div className="food__sidebar">
      {
                buttonsImage.map((image, index) => (
                  <div className="sidebar__block__item" key={index}>
                    <div className={classNames('sidebar__item', index === active ? 'active' : '')}>
                      <button
                        type="button"
                        className={classNames('sidebar__button')}
                        onClick={() => setActive(index)}
                      >
                        <img src={image} alt="menu" />
                      </button>
                    </div>
                  </div>
                ))
            }
    </div>
  );
};

export default Sidebar;
