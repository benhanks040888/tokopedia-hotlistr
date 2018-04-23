import React from 'react';

const Card = ({item}) =>
  <a href={item.url} className="card" target="_blank">
    <div className="card-image">
      <img className="fit"
        src={item.img}
        alt={item.title}
      />
    </div>
    <div className="card-body px-6 py-4">
      <h2 className="card-title font-bold text-lg mb-2">{item.title}</h2>
      <p className="card-subtitle text-grey-darker text-base">
        Starts from {item.price_start_from}
      </p>
    </div>
  </a>

export default Card;