import React, { useState } from "react"

const ProductModal = ({ isOpen, onClose, onAddProduct }) => {
  const [hsnCode, setHsnCode] = useState("")
  const [name, setName] = useState("")
  const [saleUnit, setSaleUnit] = useState("")
  const [purchaseUnit, setPurchaseUnit] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    const newProduct = { hsnCode, name, saleUnit, purchaseUnit }
    onAddProduct(newProduct)
    onClose()
  }

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg w-96">
          <h2 className="text-xl mb-4">Add Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">HSN Code</label>
              <input
                type="text"
                value={hsnCode}
                onChange={e => setHsnCode(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Product Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Sale (unit)</label>
              <input
                type="text"
                value={saleUnit}
                onChange={e => setSaleUnit(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Purchase (unit)</label>
              <input
                type="text"
                value={purchaseUnit}
                onChange={e => setPurchaseUnit(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  )
}

export default ProductModal


