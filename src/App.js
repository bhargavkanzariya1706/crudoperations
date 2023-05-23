import React, { Component } from 'react';

// import About from './About';
// import Contact from './Contact';
// import Home from './Home';
// import Hooks from './Hooks';
import State from './State';
// import Map from './Map';
// import Navbar from './Navbar';
// import './App.css';  
// import Vivodata from './Vivodata';
// import Map1 from './Map1';
 



export default class App extends Component {

  render() {
    return (
      <div>

        <p style={{ border: '6px solid orange', textAlign: 'center' }}> <b>JSX CODE
          <h1>Name: Bhargav Kanzariya</h1>
          <h1>Phone: 7043523730</h1>
          <h1> Satate: Wadhwan</h1>
          <h1>PinCod: 363030</h1>
          </b> </p>

   <p style={{ border: '5px solid green', textAlign: 'center' }}> <b>Class Componet (State)
          <State></State>
          </b></p>

       <p style={{border: '4px solid black', textAlign: 'center'}}> <b>Default Props</b>
        <h1>{this.props.companyname}</h1>
        </p>


        {/* <p style={{ border: '1px solid black',textAlign:'center' }}>
          <Home b="Bhargav" a="Bhumi"></Home> */}
          {/* <About></About> */}
          {/* <Contact></Contact> */}
        {/* </p> */}
        
        {/* <Hooks></Hooks> */}

        {/* <Map></Map> */}
        {/* <Vivodata></Vivodata> */}
        {/* <Map1></Map1> */}
        {/* <Navbar/> */}
    
      </div>
    );
  }
}

App.defaultProps = {

  companyname: "Logicrays",

}



//  jsx = html + js
// {} (Exprestion tag) =daynemik karva mate expresion tag ma lkhavama ave chhe 
// Data Store - state and props
// function - props
//  class - state and props
//  state - data - update
// props - fix
// props - componet to second componet pass








