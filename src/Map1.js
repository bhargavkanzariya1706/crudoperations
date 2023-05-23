 import React, { Component } from 'react';
 
 export default class Map1 extends Component {

        constructor(){
            super();
            this.state = {
                data: [
                    {
      
                        id : 1,
                        name: "React",
                    },
                    {
      
                        id : 2,
                        name: "Angular",
                    },
                    {    
                        id : 3,
                        name: "Php",

                    },
                ]
            }
        }

                         
        

   render() {
     return (
       <div>

        <h1>
            {
            
            
            this.state.data.map( d =>(

                <li key={d.id}> {d.id}{d.name} </li>

            ))}

        </h1>
         
       </div>
     );
   }
 }
 