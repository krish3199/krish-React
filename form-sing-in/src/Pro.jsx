import React, { useEffect, useState } from 'react'
import './App.css'

const Pro = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    let savedProducts = JSON.parse(localStorage.getItem("products")) || []
    setProducts(savedProducts)
  }, [])

  return (
    <div className="products-page-wrapper">
      <h1 className="products-page-title">All Products</h1>
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((p, index) => (
            <div className="single-product-card" key={index}>
              <img src={p.imageUrl} alt={p.name} className="product-image" />
              <h3 className="product-name">{p.name}</h3>
              <p className="product-description">{p.desc}</p>
              <span className="product-price">₹{p.price}</span>
            </div>
          ))
        ) : (
          <p className="no-products-msg">No products added yet...</p>
        )}
      </div>
    </div>
  )
}

export default Pro
