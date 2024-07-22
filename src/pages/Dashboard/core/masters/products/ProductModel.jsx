// import React, { useState } from "react"

// const ProductModal = ({ isOpen, onClose, onAddProduct }) => {
//   const [hsnCode, setHsnCode] = useState("")
//   const [name, setName] = useState("")
//   const [saleUnit, setSaleUnit] = useState("")
//   const [purchaseUnit, setPurchaseUnit] = useState("")

//   const handleSubmit = e => {
//     e.preventDefault()
//     const newProduct = { hsnCode, name, saleUnit, purchaseUnit }
//     onAddProduct(newProduct)
//     onClose()
//   }

//   return (
//     isOpen && (
//       <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
//         <div className="bg-white p-6 rounded shadow-lg w-96">
//           <h2 className="text-xl mb-4">Add Product</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700">HSN Code</label>
//               <input
//                 type="text"
//                 value={hsnCode}
//                 onChange={e => setHsnCode(e.target.value)}
//                 className="w-full px-3 py-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Product Name</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={e => setName(e.target.value)}
//                 className="w-full px-3 py-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Sale (unit)</label>
//               <input
//                 type="text"
//                 value={saleUnit}
//                 onChange={e => setSaleUnit(e.target.value)}
//                 className="w-full px-3 py-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Purchase (unit)</label>
//               <input
//                 type="text"
//                 value={purchaseUnit}
//                 onChange={e => setPurchaseUnit(e.target.value)}
//                 className="w-full px-3 py-2 border rounded"
//               />
//             </div>
//             <div className="flex justify-end">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//               >
//                 Add
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   )
// }

// export default ProductModal
import React, { useState, useEffect } from "react"

const ProductModal = ({
  isOpen,
  onClose,
  onAddProduct,
  onEditProduct,
  product,
}) => {
  const [hsnCode, setHsnCode] = useState("")
  const [name, setName] = useState("")
  const [saleUnit, setSaleUnit] = useState("")
  const [purchaseUnit, setPurchaseUnit] = useState("")
  const [waterAbsorption, setWaterAbsorption] = useState("")
  const [field, setField] = useState("")

  useEffect(() => {
    if (product) {
      setHsnCode(product.hsn_code || "")
      setName(product.product_name || "")
      setSaleUnit(product.sales || "")
      setPurchaseUnit(product.purchase || "")
      setWaterAbsorption(product.water_absorption || "")
      setField(product.field || "")
    } else {
      setHsnCode("")
      setName("")
      setSaleUnit("")
      setPurchaseUnit("")
      setWaterAbsorption("")
      setField("")
    }
  }, [product])

  const handleSubmit = e => {
    e.preventDefault()
    const newProduct = {
      hsn_code: hsnCode || "N/A",
      product_name: name || "N/A",
      sales: saleUnit || 0,
      purchase: purchaseUnit || 0,
      water_absorption: waterAbsorption || 0,
      field: field || "N/A",
    }
    if (product) {
      onEditProduct(newProduct)
    } else {
      onAddProduct(newProduct)
    }
  }

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg w-full max-w-3xl mx-4 md:w-3/4 lg:w-2/4 max-h-[500px] overflow-y-auto">
          <h2 className="text-xl mb-4">
            {product ? "Edit Product" : "Add Product"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-700">HSN Code</label>
                <input
                  type="text"
                  value={hsnCode}
                  onChange={e => setHsnCode(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Sale Unit</label>
                <input
                  type="number"
                  value={saleUnit}
                  onChange={e => setSaleUnit(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Purchase Unit</label>
                <input
                  type="number"
                  value={purchaseUnit}
                  onChange={e => setPurchaseUnit(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Water Absorption</label>
                <input
                  type="number"
                  value={waterAbsorption}
                  onChange={e => setWaterAbsorption(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Field</label>
                <input
                  type="text"
                  value={field}
                  onChange={e => setField(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                {product ? "Update Product" : "Add Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  )
}

export default ProductModal
