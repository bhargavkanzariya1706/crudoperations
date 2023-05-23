import React, { useEffect,useState } from 'react';

export default function UseEffect() {

const [x, y] = useState("React");
useEffect(() => {

    setTimeout(() => {

        y("ReactJs")

    },5000);
  
}, []);

  return (
    <div>
      <h1>My Name Is - {x}</h1>
    </div>
  );
}
