import React from 'react';

import propTypes from 'prop-types';

const ColorRange = ({
  min, max, step, value, onChange,
}) => (
  <div className="color__range">
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
    <span>{value}</span>
  </div>
);

ColorRange.propTypes = {
  min: propTypes.number,
  max: propTypes.number,
  step: propTypes.number,
  value: propTypes.number,
  onChange: propTypes.func,
};
export default ColorRange;
