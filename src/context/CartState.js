import React, { useState } from 'react'
import CartContext from './CartContext'
import { toast } from 'react-toastify';

const CartState = (props) => {
  const [cartArr, setcartArr] = useState([]);
  console.log(cartArr)

  function addToCart(ans) {

    let findData = cartArr.find((ele) => ele.id === ans.id)
    if (findData) {
      toast.error('already exists', { position: 'top-center' })
    }
    else {
      let updatedObj = { ...ans, quantity: 1 }
      setcartArr([...cartArr, updatedObj])
      toast.success('item added successfully', { position: 'top-center' })
    }
  }

  function removeFromCart() {

  }
  function updateIncrement(){

  }
  function updateDecrement(){
    
  }
  return (
    <CartContext.Provider value={{ cartArr, setcartArr, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState
