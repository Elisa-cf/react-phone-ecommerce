import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

//create context object:
const ProductContext = React.createContext({
 //provider
 //consumer
})


// min 2:35 to 2:47 => to get the new set up values instead of copying them, not just reference them. Good when you want to get the original values and not the modifies one 
class ProductProvider extends Component {
 state = {
  products: [],
  detailProduct: detailProduct
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


 handleDetail = () => {
  console.log("hello from detail");
 }
 addToCart = () => {
  console.log("hello from add to cart");
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