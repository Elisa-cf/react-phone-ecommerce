import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'

export default class Cart extends Component {
 render() {
  return (
   <div>
    <Title name="Your" title="cart"/>
    <CartColumns/>

   </div>
  )
 }
}
