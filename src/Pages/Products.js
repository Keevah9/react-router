import React from 'react'
import {Link, useParams} from 'react-router-dom'
import products from '../data';
const Products = () => {
  // const {productId} = useParams()
  return (
    <section>
      <div className='products'>
        {products.map((product)=>{
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/products/${product.name}`} >
                more info
              </Link>
            </article>
          );
        })}
      </div>
      
    </section>
  );
}

export default Products