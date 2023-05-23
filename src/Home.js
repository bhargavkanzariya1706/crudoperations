 import React, { Component } from 'react';
// import About from './About';
 
 export default class Home extends Component {
   render() {
     return (
       <div>
        {/* <p style={{border: '1px solid black'}}></p> */}
                <h1>This Page Is Home</h1>
                <h1>{this.props.b}</h1>
                <h1>{this.props.a}</h1>

                {/* <About D="Web Devloper" C="MBA"></About> */}

       </div>
     );
   }
 }
 

     