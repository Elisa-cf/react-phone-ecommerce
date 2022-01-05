import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import { ProductConsumer } from '../../context'

export default class Cart extends Component {
 render() {
  return (
   <section>
    <ProductConsumer>
    {value => {
     const {cart} = value;
     if(cart.length > 0) { 
      return (
       <>
     <Title name="Your" title="cart" />
    <CartColumns />
       </>
      )
     }
     else{
      return <EmptyCart />
     }
    }}
    </ProductConsumer>
    
   </section>
  )
 }
}
