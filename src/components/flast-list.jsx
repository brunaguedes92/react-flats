/* eslint-disable max-len */
import React from 'react';

import Flat from './flat';

const FlatList = ({ flats }) => {
  return (
    <div className="flat-list">
      {flats.map(({
        name, imageUrl, price, priceCurrency, lat, lng
      }) => <Flat name={name} key={name} imageUrl={imageUrl} price={price} priceCurrency={priceCurrency} lat={lat} lng={lng} />)}
    </div>
  );
};

export default FlatList;
