// // ------------------------------ 33333333333
import React, { useState } from "react"
import ProductsTable from "./ProductsData"
import ProductModal from "./ProductModel"

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      hsnCode: "1234",
      name: "Product 1",
      saleUnit: "10",
      purchaseUnit: "5",
    },
    {
      id: 2,
      hsnCode: "5678",
      name: "Product 2",
      saleUnit: "15",
      purchaseUnit: "8",
    },
    {
      id: 3,
      hsnCode: "5678",
      name: "Product 2",
      saleUnit: "15",
      purchaseUnit: "8",
    },
    // Add more products here
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleEdit = id => {
    console.log(`Edit product with id ${id}`)
  }

  const handleDelete = id => {
    console.log(`Delete product with id ${id}`)
  }

  const handleAddProduct = product => {
    setProducts([...products, { ...product, id: products.length + 1 }])
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>
      <ProductsTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {isModalOpen && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddProduct={handleAddProduct}
        />
      )}
    </div>
  )
}

export default Products
