import React from 'react';
import Vdata from './Vdata';
import './App.css';

export default function Vivodata() {
    return (
        <div>

            <h1>
                <h1 id='t'>Vivo Store</h1>
                {
                    Vdata.map(file => (

                        <ul id='MPJ' key={file.id}>
                            <div id='box'>
                                <img src={file.img} id='size' alt='images' ></img>
                                <div id='text'>
                                    <h5>{file.title}</h5>
                                    <h5>{file.price}</h5>
                                    <h5>{file.color}</h5>
                                    <h5>{file.rating}</h5>
                                </div>
                                <div id='btn1'>
                                    <button id='btn'>Buy Now</button>
                                </div>
                            </div>

                        </ul>

                    ))}

            </h1>
        </div>
    );
}
