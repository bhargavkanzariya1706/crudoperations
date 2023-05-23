/* eslint-disable react/jsx-no-undef */
// import React from 'react';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import {BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';

//  function Navbar() {

//   return (

//           <Router>
//             <li><Link to='/home' elemet={<Home/>}>Home</Link></li><br/>
//         <li><Link to='/about' elemet={<About/>}>about</Link></li><br/>
//         <li><Link to='/contact' elemet={<Contact/>}>contact</Link></li><br/>
//       <Routes>
//             <Route path="/home" element={<Home/>}/>
//             <Route path="/about" element={<About/>}/>
//             <Route path='/contact'element={<Contact/>}/>
//         </Routes>

//       </Router>


//   );
// }
// export default Navbar;




import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Vivodata from './Vivodata';
import Noisdata from './Noisdata'

export default function Navbar() {
  return (
    <BrowserRouter>
      <li><Link to='/Vivo' element={<Vivodata />}>Vivo</Link></li><br/>
      <li><Link to='/Nois' element={<Noisdata />}>Noice</Link></li>
      
      <Routes>
        <Route path='/Vivo' element={<Vivodata />} />
        <Route path='/Nois' element={<Noisdata />} />
      </Routes>

    </BrowserRouter>
  );
}
