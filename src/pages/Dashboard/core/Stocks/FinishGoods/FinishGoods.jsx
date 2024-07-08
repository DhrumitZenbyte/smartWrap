import React, { useState } from "react"
import ProductModal from "../../masters/products/ProductModel";
import FinishGoodsModal from "./FinishGoodsModal"

const FinishGoods = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      product: "Product 1",
      hsnCode: "1234",
      micron : "",
      size: "10x10",
      sqmPerRoll: "50",
      rollQuantity: "20",
      totalSqm: "1000",
      pallet: "Pallet 1",
      palletName: "ABC",
      details: "abb",
      boxes: "22",
    },
    {
      id: 2,
      product: "Product 2",
      micron : "",
      hsnCode: "5678",
      size: "5x5",
      sqmPerRoll: "30",
      rollQuantity: "10",
      totalSqm: "300",
      pallet: "Pallet 2",
      palletName: "XYZ",
      details: "abb",
      boxes: "22",
    },
    // Add more products as needed
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
      <h1 className="text-2xl font-bold mb-4">Finish Goods</h1>
      <div className="mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-2 px-4">Product</th>
              <th className="text-left py-2 px-4">Size</th>
              <th className="text-left py-2 px-4">Micron</th>
              <th className="text-left py-2 px-4">Sqm per Roll</th>
              <th className="text-left py-2 px-4">Roll Quantity</th>
              <th className="text-left py-2 px-4">Total Sqm</th>
              <th className="text-left py-2 px-4">Pallet</th>
              <th className="text-left py-2 px-4">Pallet Name</th>
              <th className="text-left py-2 px-4">Details</th>
              <th className="text-left py-2 px-4">Boxes</th>
              <th className="text-left py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(item => (
              <tr key={item.id} className="border-t border-gray-200">
                <td className="py-2 px-4">{item.product}</td>
                <td className="py-2 px-4">{item.size}</td>
                <td className="py-2 px-4">{item.micron}</td>
                <td className="py-2 px-4">{item.sqmPerRoll}</td>
                <td className="py-2 px-4">{item.rollQuantity}</td>
                <td className="py-2 px-4">{item.totalSqm}</td>
                <td className="py-2 px-4">{item.pallet}</td>
                <td className="py-2 px-4">{item.palletName}</td>
                <td className="py-2 px-4">{item.details}</td>
                <td className="py-2 px-4">{item.boxes}</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <FinishGoodsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddProduct={handleAddProduct}
        />
      )}
    </div>
  )
}

export default FinishGoods
