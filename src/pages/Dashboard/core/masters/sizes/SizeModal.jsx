import React, { useState } from "react"

const SizeModal = ({ isOpen, onClose, onAddSize }) => {
  const [sizeCm, setSizeCm] = useState("")
  const [sizeMm, setSizeMm] = useState("")
  const [productName, setProductName] = useState("")
  const [hsnCode, setHsnCode] = useState("")
  const [thickness, setThickness] = useState("")
  const [micron, setMicron] = useState("")
  const [grade, setGrade] = useState("")
  const [width, setWidth] = useState("")

  const handleSubmit = () => {
    // Perform basic client-side validation
    if (
      !sizeCm ||
      !sizeMm ||
      !productName ||
      !hsnCode ||
      !thickness ||
      !micron ||
      !grade ||
      !width
    ) {
      console.error("Please fill in all fields.")
      return
    }

    const newSize = {
      size_in_cm: parseInt(sizeCm), // Ensure numeric format
      size_in_mm: parseInt(sizeMm), // Ensure numeric format
      product_name: productName,
      hsn_code: hsnCode,
      thickness: thickness,
      micron: parseInt(micron), // Ensure numeric format
      grade: grade,
      width: width,
    }

    onAddSize(newSize)
    onClose()
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded shadow-lg w-11/12 max-w-2xl">
        <h2 className="text-2xl mb-4">Add New Size</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Size in cm</label>
            <input
              type="text"
              value={sizeCm}
              onChange={e => setSizeCm(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700">Size in mm</label>
            <input
              type="text"
              value={sizeMm}
              onChange={e => setSizeMm(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={e => setProductName(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700">HSN Code</label>
            <input
              type="text"
              value={hsnCode}
              onChange={e => setHsnCode(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700">Thickness</label>
            <input
              type="text"
              value={thickness}
              onChange={e => setThickness(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700">Micron</label>
            <input
              type="text"
              value={micron}
              onChange={e => setMicron(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700">Grade</label>
            <input
              type="text"
              value={grade}
              onChange={e => setGrade(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700">Width</label>
            <input
              type="text"
              value={width}
              onChange={e => setWidth(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm"
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
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
