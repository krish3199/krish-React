import React, { useState, useEffect } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Adminadd = () => {
  const [imageUrl, setImageUrl] = useState("")
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState("")
  const [products, setProducts] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products")) || []
    setProducts(stored)
  }, [navigate])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!imageUrl || !name || !desc || !price) {
      alert("⚠ Please fill all fields!")
      return
    }

    let updatedProducts = [...products]

    if (editIndex !== null && updatedProducts[editIndex]) {
      updatedProducts[editIndex] = { imageUrl, name, desc, price }
      alert("✏️ Product updated successfully!")
      setEditIndex(null)
    } else {
      let newProduct = { imageUrl, name, desc, price }
      updatedProducts.push(newProduct)
      alert("✅ Product added successfully by Admin!")
    }

    localStorage.setItem("products", JSON.stringify(updatedProducts))
    setProducts(updatedProducts)

    setImageUrl("")
    setName("")
    setDesc("")
    setPrice("")
  }

  const handleDelete = (index) => {
    let updatedProducts = products.filter((_, i) => i !== index)
    localStorage.setItem("products", JSON.stringify(updatedProducts))
    setProducts(updatedProducts)
    alert("🗑 Product deleted!")
  }

  const handleEdit = (index) => {
    const product = products[index]
    if (!product) return 
    setImageUrl(product.imageUrl)
    setName(product.name)
    setDesc(product.desc)
    setPrice(product.price)
    setEditIndex(index)
  }

  return (
    <div className="admin-wrapper">
      <div className="admin-container">
        <h1 className="admin-title">
          {editIndex !== null ? "Edit Product" : "Admin Add Products"}
        </h1>
        <form className="admin-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          {imageUrl && (
            <div className="preview">
              <img src={imageUrl} alt="Preview" />
            </div>
          )}

          <input
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Enter product description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>

          <input
            type="number"
            placeholder="Enter product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <button type="submit" className="admin-btn">
            {editIndex !== null ? "Update Product" : "Add Product"}
          </button>
          <Link to='/Pro'>
          <button>GO to a product page</button>
          </Link>
        </form>
      </div>

      <div className="product-list">
        <h2>📦 Added Products</h2>
        {products.length === 0 ? (
          <p>No products added yet.</p>
        ) : (
          products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <p><b>₹{product.price}</b></p>
              <div className="product-actions">
                <button type="button" onClick={() => handleEdit(index)}>✏ Edit</button>
                <button type="button" onClick={() => handleDelete(index)}>🗑 Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Adminadd
