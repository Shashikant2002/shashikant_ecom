import React from 'react'
import { useProductContext } from '../context/productContext';
import { useParams } from 'react-router-dom';
import Loading from './Loading';


const Product = () => {
  const { proId } = useParams();
  const { product, isLoading } = useProductContext();
  console.log(product)

  if (isLoading) {
    return <Loading />
  }

  let curPro = product.filter((curEle) => { return curEle.id === proId });

  return (
    <>
      <div className="product_detail">
        <div className="container">
          <div className="image">
            <img src={curPro[0].image} alt={curPro[0].name} />
          </div>
          <div className="content">
            <h2>🎇</h2>
            <h4>{curPro[0].id}</h4>
            <h3>{curPro[0].category}</h3>
            <h2>{curPro[0].name}</h2>
            <h3>{curPro[0].company}</h3>
            <p>{curPro[0].description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product