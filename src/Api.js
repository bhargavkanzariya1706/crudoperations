import axios from 'axios'
import React, {useEffect}from 'react'
export default function Api()  {

useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(respons => console.log(respons))
    .catch(err => console.log(err))


   
}, );

  return (
    <div>
      <h1>Api data from Api in console</h1>
    </div>
  );
}
