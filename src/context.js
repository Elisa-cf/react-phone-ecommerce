import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

//create context object:
const ProductContext = React.createContext({
 //provider
 //consumer
})

//SET UP VALUES:
class ProductProvider extends Component {
 state = {
  products: [], //values of the object
  detailProduct: detailProduct, //object reference
  cart: []
 }
 componentDidMount() {
  this.setProducts();
 }
 setProducts = () => {
  let tempProducts = [];
  storeProducts.forEach(item => {
   const singleItem = { ...item };
   tempProducts = [...tempProducts, singleItem];
  })
  this.setState(() => {
   return { products: tempProducts }
  })
 }

//GETTING THE ITEM ACCORDING TO THE ID:
getItem = (id) => {
 const product = this.state.products.find(item => item.id === id);
 return product;
}

 handleDetail = (id) => {
  const product = this.getItem(id);
  this.setState(()=>{
   return {detailProduct:product}
  })
  // console.log("hello from detail");
 }
 addToCart = (id) => {
  let tempProducts = [...this.state.products];
  const index = tempProducts.indexOf(this.getItem(id));
 const product = tempProducts[index];
 product.inCart = true;
 product.count = 1;
 const price = product.price;
 product.total = price;
 this.setState(() => {
  return {products: tempProducts, cart:[...this.state.cart, product]}
 },() =>{console.log(this.state);} )

  // console.log(`Hello from add to cart. The id is ${id}`);
 }

 render() {
  return (
   <div>
    <ProductContext.Provider value={{
     //destrucuring it will be easier:
     ...this.state,
     handleDetail: this.handleDetail,
     addToCart: this.addToCart
     // products: this.state.products, detailProduct: this.state.detailProduct
    }}>
     {/* return all the children that they gonna be within this component */}
     {this.props.children}
    </ProductContext.Provider>
   </div>
  )
 }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };