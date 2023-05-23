import React,{ useRef } from 'react';
 
export default function Userefdom() {
 const d = useRef(null);

 function data(){
   d.current.value = "React";

 }
  return (
    <div>
      <input type="text" ref={d}></input>
      <button  onClick={data}>OK</button>
    </div>
  );
}
