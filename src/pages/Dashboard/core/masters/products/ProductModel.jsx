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
import { Spinner } from "reactstrap"

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
  const [Loader, setLoader] = useState(false)

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

  const handleSubmit = async e => {
    e.preventDefault()
    setLoader(true)
    const newProduct = {
      hsn_code: hsnCode || "N/A",
      product_name: name || "N/A",
      sales: saleUnit || 0,
      purchase: purchaseUnit || 0,
      water_absorption: waterAbsorption || 0,
      field: field || "N/A",
    }

    try {
      if (product) {
        await onEditProduct(newProduct)
      } else {
        await onAddProduct(newProduct)
      }
    } catch (error) {
      console.error("Error adding/editing product", error)
    } finally {
      setLoader(false)
    }
  }

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white modal-new p-6 rounded shadow-lg w-full max-w-3xl mx-4 md:w-3/4 lg:w-2/4 max-h-[500px] overflow-y-auto">
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
                  placeholder="Enter HSN Code"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  placeholder="Enter Name"
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
                  placeholder="Enter Sale Unit"
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
                  placeholder="Enter Purchase Unit"
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
                  placeholder="Enter Water Absorption"
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
                  placeholder="Enter Field"
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
              {Loader ? (
                <button
                  disabled
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-primary"
                >
                  <Spinner className="ms-1" color="light" style={{width:'20px',height:'20px'}} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-primary"
                >
                  {product ? "Update Product" : "Add Product"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    )
  )
}

export default ProductModal
