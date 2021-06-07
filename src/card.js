import React from 'react';
import './App.css';
import {datax,datay}  from './data.js';
import Cart from './cart.js';

class Card extends React.Component {
  render () {
    return (
      <div key={this.props.index} className="h-100">
        <br/>
        <img src={this.props.item.src} className="card-img-top img-fluid image img-responsive  m-auto"/><br/>
        <div className="card-header">
          <h5 className="card-title">{this.props.item.name} <br/></h5>
          <p className="card-text"> {this.props.item.type} <br/></p>
          <p className="card-text">Prize : {this.props.item.prize} <br/></p>
         
        </div>
      </div> 
    );
  }
}

export default Card;