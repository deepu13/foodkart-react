import React from 'react';
import {datax,datay}  from './data.js';
import './App.css';
import Card from './card.js';

class Cart extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row text-center" id="cartitem">
          {
            this.props.basket.map((item,index) =>
              <div key={index} className="col-2 p-3">
                <div className="card">
                  <Card index={index} item={item}></Card>   
                </div>
              </div> 
            )
          }
        </div>
      </div>
    );
  }
}

export default Cart;