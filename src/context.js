import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

//create context object:
const ProductContext = React.createContext({
 //provider
 //consumer
})

class ProductProvider extends Component {
 state = {
  products: storeProducts,
  detailProduct: detailProduct
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