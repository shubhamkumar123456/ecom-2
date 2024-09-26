import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const Cart = () => {
  let ctx = useContext(CartContext)
  let arr = []
  const handleDecrement=()=>{
    
  }
  const handleIncrement=()=>{

  }
  const handleDelete=()=>{

  }
 
  let sum=0
  // const handleDelete = (obj,i)=>{
  //   console.log(obj,i)
  //   let copyArr = [...props.cartArr]
  //   copyArr.splice(i,1)
  //   props.setcartArr(copyArr);

   
  // }

  // let sum= 0;
  // props.cartArr.forEach((ele)=>{
  //   sum=sum+ele.price
  // })
  // // console.log(sum)

  // const handleIncrement = (obj,i)=>{
  //   console.log(obj,i)

  //   let updatedObj = {
  //     ...obj,
  //     quantity:obj.quantity + 1,
  //     price: obj.price + (obj.price/ obj.quantity)
  //   }

  //   console.log(updatedObj)
  //   let copyArr = [...props.cartArr];
  //     copyArr[i]= updatedObj
  //   props.setcartArr(copyArr)
  // }
  // const handleDecrement = (obj,i)=>{
  //   console.log(obj,i)
  
  //   let updatedObj = {
  //     ...obj,
  //     quantity:obj.quantity - 1,
  //     price: obj.price - (obj.price/ obj.quantity)
  //   }

  //   if(updatedObj.quantity<1){
  //     handleDelete(obj,i)
  //   return  
  // }

  //   console.log(updatedObj)
  //   let copyArr = [...props.cartArr]
  //     copyArr[i]= updatedObj
  //   props.setcartArr(copyArr)

  // }


  return (
    <div>
        <table className="table table-dark align-middle text-center mt-4">
  <thead>
    <tr>
      <th scope="col">Sno</th>
      <th scope="col">Product</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {
    ctx.cartArr.map((ele,index)=>{
      return   <tr>
      <th scope="row">{index+1}</th>
      <td><img src={ele.thumbnail} alt="" height={'150'} width={'150'} /></td>
      <td>{ele.title}</td>
      <td>{ele.price.toFixed(2)}</td>
      <td><button onClick={()=>handleIncrement(ele,index)} className='btn btn-info'>+</button> {ele.quantity} <button onClick={()=>handleDecrement(ele,index)} className='btn btn-info'>-</button></td>
      <td><button onClick={()=>handleDelete(ele,index)} className='btn btn-danger'>delete</button></td>
    </tr>
    })
  }
  
  
  </tbody>
</table>
  <h5 className='text-center my-2'>Total = {sum.toFixed(2)}$</h5>
    </div>
  )
}

export default Cart
