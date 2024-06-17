import React, { useState } from "react"

const SizeModal = ({ isOpen, onClose, onAddSize }) => {
  const [sizeCm, setSizeCm] = useState("")
  const [sizeMm, setSizeMm] = useState("")
  const [productName, setProductName] = useState("")
  const [hsnCode, setHsnCode] = useState("")
  const [thickness, setThickness] = useState("")

  const handleSubmit = () => {
    const newSize = { sizeCm, sizeMm, productName, hsnCode, thickness }
    onAddSize(newSize)
    onClose()
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-4 rounded shadow-lg w-1/3">
        <h2 className="text-2xl mb-4">Add New Size</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Size in cm</label>
          <input
            type="text"
            value={sizeCm}
            onChange={e => setSizeCm(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Size in mm</label>
          <input
            type="text"
            value={sizeMm}
            onChange={e => setSizeMm(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={e => setProductName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
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
          <label className="block text-gray-700">Thickness</label>
          <input
            type="text"
            value={thickness}
            onChange={e => setThickness(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Size
          </button>
        </div>
      </div>
    </div>
  )
}

export default SizeModal

