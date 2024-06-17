import React, { useState } from "react"
import SizesTable from "./SizesTable"
import SizeModal from "./SizeModal"

const Sizes = () => {
  const [sizes, setSizes] = useState([
    {
      id: 1,
      sizeCm: "30",
      sizeMm: "300",
      productName: "Product A",
      hsnCode: "1234",
      thickness: "5mm",
    },
    {
      id: 2,
      sizeCm: "50",
      sizeMm: "500",
      productName: "Product B",
      hsnCode: "5678",
      thickness: "10mm",
    },
    // Add more sizes here
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleEdit = id => {
    console.log(`Edit size with id ${id}`)
  }

  const handleDelete = id => {
    setSizes(sizes.filter(size => size.id !== id))
    console.log(`Delete size with id ${id}`)
  }

  const handleAddSize = size => {
    setSizes([...sizes, { ...size, id: sizes.length + 1 }])
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Sizes</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Size
        </button>
      </div>
      <SizesTable sizes={sizes} onEdit={handleEdit} onDelete={handleDelete} />
      {isModalOpen && (
        <SizeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddSize={handleAddSize}
        />
      )}
    </div>
  )
}

export default Sizes
