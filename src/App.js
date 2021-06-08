import './App.css';
import Card from './card.js';
import {datax,datay} from './data.js';
import React from 'react';
import Cart from './cart.js';
class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
      basket:[],
      veg:datax,
      nonveg:datay,
      search:[],
      cart:false
    };
    this.search=this.search.bind(this);
  }

  //to show and hide the cart

  showcart = () => {
    if(!this.state.cart){
      this.setState({
        cart : true
      })
    }
    else{
      this.setState({
        cart : false
      })
    }
  }

  //to add items into the basket

  add(index, type){
    this.setState(prevState => ({
      basket:[...prevState.basket, this.state[type][index]]
    }))
  }

  //for veg searching

  search(event){
    let word=event.target.value;
    datax.map((item,index)=>{
      if(item.name===word){
        this.setState(prevState => ({
          search:[...prevState.search, this.state.veg[index]]
        }))
      }
    })
    datay.map((item,index)=>{
      if(item.name===word){
        this.setState(prevState => ({
          search:[...prevState.search, this.state.nonveg[index]]
        }))
      }
    })
  }

render() {
  const cart=this.state.cart
  return (
    <div className="App">

      <div className="container-fluid">

        <div className="row text-center">

          <header className="col">
            <h1 className="text-center p-5">FoodKart</h1>
          </header>

        </div> 

        <hr></hr>

        <div className="body">

          <div className="row nav text-center">

            {/* search bar */}
            <div className="col-3 px-5 w-100">
              <form action="#" className="searchbox d-inline col-3 p-0 m-0">
                <input type="search" placeholder="Search for food items" className="form-control w-100" name="search" onChange={this.search} />
              </form>
            </div>

            {/* Menu bar */}
            <div className="col-6">
              <a href="#veg" className="p-5">Veg</a>
              <a href="#nonveg" className="p-5">Non-Veg</a>
            </div>

            {/* Cart */}
            <div className="col-3">
              <a href="#" onClick={this.showcart}><span class="iconify" data-icon="emojione-monotone:shopping-cart" data-inline="false"></span> Cart </a>
            </div>

          </div>

          <hr></hr>

          <br/>

          <div className="everything row">

            {/* to show the search results */}
            {
              this.state.search.map((item,index)=>
                <div key={index} className="col-2 p-3">
                  <div className="card">
                    <Card index={index} item={item}></Card>
                  </div>
                </div>
              )
            }

            {/* to display the cart items */}
            <div className="col-12 w-100">
              <br/>
              <div className="container-fluid">
                <div className="row text-center">
                  { cart && 
                    <div>
                      <h1 className="veg text-center" id="cart">Cart Items</h1>
                      <Cart basket={this.state.basket}></Cart>
                    </div>
                  }
                </div>
              </div>
            </div>

            {/* to display veg menu */}
            <div className="col-12 w-100 pt-0">
              <h1 className="veg text-center" id="veg">Vegetarian</h1>
              <br/>
              <div className="container-fluid">
                <div className="row text-center">
                  {
                    this.state.veg.map((item,index)=>
                      <div key={index} className="col-2 p-4">
                        <div className="Card h-100">
                          <Card index={index} item={item} btn="true"></Card>
                          <button className="btn w-100" onClick={(e)=>this.add(index, "veg")}>Add to cart</button>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>    
              <br/><br/><br/>        
            </div>

            

            {/* to display non-veg menu */}
            <div className="col-12 w-100 pt-5">
              <h1 className="veg text-center" id="nonveg">Non-Vegetarian</h1>
              <br/>
              <div className="container-fluid">
                <div className="row text-center">
                  {
                    this.state.nonveg.map((item,index)=>
                      <div key={index} className="col-2 p-4">
                        <div className="Card h-100 ">
                          <Card index={index} item={item}></Card>
                          <button className="btn pt-0 w-100" onClick={(e)=>this.add(index, "nonveg")}>Add to cart</button>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
              <br/><br/><br/>
            </div>

            {/* footer */}
            <div className="footer w-100">
              <div className="row">
                <div className="col-4 branch text-left">
                  Branches in:<br/>
                  India <br/>
                  America <br/>
                  Europe <br/>
                </div>

                <div className="col-4">
                  <h1 className="p-5 text-center footer-title">Foodkart</h1>
                </div>
                
                <div className="col-4 text-center follow">
                  <p>Follow us on: <br/>
                    <span className="iconify social" data-icon="cib:instagram" data-inline="false"></span>
                    <span className="iconify social" data-icon="radix-icons:twitter-logo" data-inline="false"></span>
                    <span className="iconify social" data-icon="akar-icons:facebook-fill" data-inline="false"></span>
                    <span className="iconify social" data-icon="cib:whatsapp" data-inline="false"></span>
                    <span className="iconify social" data-icon="brandico:linkedin-rect" data-inline="false"></span>
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
  }
}

export default App;
