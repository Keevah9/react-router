import React from 'react'
import {Link, useParams} from 'react-router-dom'
import products from '../data'
const SingleProduct = () => {
  const {productIds} = useParams()
  const product = products.find((product)=> product.name === productIds)
  const {image,name} = product
  return (
    <section className="section product">
      <img src={image} alt="product image" />
      <h3>{name}</h3>
      <Link to="/products"> back to product</Link>
    </section>
  );
}

export default SingleProduct