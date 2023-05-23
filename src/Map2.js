import React from 'react';
import productsData from './productsData';
export default function Map2() {
  return (
    <div>
      {
productsData.map( h => (
        <li key={h.id}>
                {h.id}
               {h.title}
               {h.price}
              {h.description}
            
        </li>

    
))}
    </div>
  );
}
