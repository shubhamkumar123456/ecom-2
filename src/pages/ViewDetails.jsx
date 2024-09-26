import React from 'react'
import { useLocation } from 'react-router-dom'

const ViewDetails = () => {
    let location = useLocation();
    let product = location.state
    console.log(product)
  return (
    <div>
      <div className="row m-0 p-0 my-5">
        <div className="col-md-6  d-flex justify-content-center">
            <img src={product.thumbnail} alt="" />
        </div>
        <div className="col-md-6 p-3">
            <h3><strong>Title:</strong>  {product.title}</h3>
            <h4 className='my-4'><strong>Brand:</strong>  {product.brand}</h4>
            <h5><strong>Category:</strong>  {product.category}</h5>
            <p className='my-4'><strong>Rating:</strong>{product.rating}</p>
            <p><strong>Description :</strong>{product.description}</p>
            <button className='btn btn-success'>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ViewDetails
