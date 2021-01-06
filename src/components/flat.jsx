/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Flat = ({
  name, imageUrl, price, priceCurrency
}) => {
  const styles = {
    'background-image': `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${imageUrl}')`
  };
  return (
    <div className="card" style={styles}>
      <div className="card-category">
        {price}
        {priceCurrency}
      </div>
      <div className="card-description">
        <h2>
          {name}
        </h2>
      </div>
      <a className="card-link" href="#" />
    </div>
  );
};

export default Flat;
