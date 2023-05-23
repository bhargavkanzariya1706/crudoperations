import React,{useState} from 'react';



export default function App() {

  const [a] = useState( 

    {
      Name : "Bhargav",
      Age : 21,
      Gender : "Male",
      City : "Wadhwan",
      Subject : "React Js"
    }
  );

  const [x,y] = useState(1);
  const [c,d] = useState(5);

  const [x1, y1] = useState("Bhargav");
  const [h, m] = useState("React Js");
  return (
    <div>
      <p style={{border:'3px solid black'}}>
      <h2 >Hooks UseState</h2>
      <h1>{a.Name}</h1>
      <h1>{a.Age}</h1>
      <h1>{a.Gender}</h1>
      <h1>{a.City}</h1> 
      <h1>{a.Subject}</h1>

      <p style={{border:'3px solid black'}}>
      <h1>{x}</h1>
      <h1>{c}</h1>
      <button onClick={() => y(x+1)}>OK</button>
      <button onClick={() => d(x*5)}>Total</button>
      </p> 
      <p style={{border:'3px solid black'}}>
      <h1>{x1}</h1>
      <h1>{h}</h1>
      <button onClick={() => y1("Bhumi")}>OK</button>
      <button onClick={() => m("MBA")}>OK</button>
     </p>

     </p>
    </div>
  );
}

      