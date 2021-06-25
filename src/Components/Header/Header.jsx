import React from 'react';
import propTypes from 'prop-types';
import addSvg from '../../assets/images/Add.svg';

const Header = ({ onClick }) => (
  <div className="food__content__header">
    <div className="food__content__header-title">
      <h3>food</h3>
    </div>
    <div className="food__content__header-add">
      <img
        className="food__content__header-add-image"
        src={addSvg}
        alt="New Dish"
        onClick={onClick}
      />
      <span>Add new recipe</span>
    </div>
  </div>
);

Header.propTypes = {
  onClick: propTypes.func,
};
export default Header;
