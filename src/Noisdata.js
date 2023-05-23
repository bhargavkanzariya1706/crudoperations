import React from 'react';
import Ndata from './Ndata';
import './App.css';


export default function Noisdata() {
    return (
        <div>
            <h1>
                <h1 id='p'>Noice Watch</h1>
                {
                    Ndata.map(file => (

                        <ul id='MPK' key={file.id}>
                            <div id='box1'>
                                <img src={file.img} id='siz' alt='imag' />
                                <div id='text1'>
                                    <h4>{file.title}</h4>
                                    <h4>{file.price}</h4>
                                    <h4>{file.color}</h4>
                                    <h4>{file.rating}</h4>
                                </div>
                                <div id='bt1'>
                                    <button id='bt'>Buy Now</button>
                                </div>
                            </div>
                        </ul>
                    ))}
            </h1>
        </div>
    );
}
