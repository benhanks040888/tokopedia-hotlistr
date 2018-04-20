import React from 'react';

const Card = ({item}) =>
  <div className="max-w-md rounded overflow-hidden shadow-lg">
    <img className="w-full"
      src={item.img}
      alt={item.title}
    />
    <div className="px-6 py-4">
      <h2 className="font-bold text-lg mb-2">{item.title}</h2>
      <p className="text-grey-darker text-base">
        Starts from {item.price_start_from}
      </p>
    </div>
  </div>

export default Card;