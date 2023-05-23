import React, { Component } from 'react';

export default class Map extends Component {

        constructor(){
            super();
            this.state = {
                
                Data:["Java", 1,2,3]

            }

        }
    
  render() {
    return (
      <div>

        <h1>
            {this.state.Data.map(data1 =>(

                <li key={data1}>{data1}</li>

                

            ))}
                
                
                

        </h1>
        
      </div>
    );
  }
}
