// import React, { useState } from "react"

// const SizeModal = ({ isOpen, onClose, onAddSize }) => {
//   const [sizeCm, setSizeCm] = useState("")
//   const [sizeMm, setSizeMm] = useState("")
//   const [productName, setProductName] = useState("")
//   const [hsnCode, setHsnCode] = useState("")
//   const [thickness, setThickness] = useState("")
//   const [micron, setMicron] = useState("")
//   const [grade, setGrade] = useState("")
//   const [width, setWidth] = useState("")

//   const handleSubmit = () => {
//     // Perform basic client-side validation
//     if (
//       !sizeCm ||
//       !sizeMm ||
//       !productName ||
//       !hsnCode ||
//       !thickness ||
//       !micron ||
//       !grade ||
//       !width
//     ) {
//       console.error("Please fill in all fields.")
//       return
//     }

//     const newSize = {
//       size_in_cm: parseInt(sizeCm), // Ensure numeric format
//       size_in_mm: parseInt(sizeMm), // Ensure numeric format
//       product_name: productName,
//       hsn_code: hsnCode,
//       thickness: thickness,
//       micron: parseInt(micron), // Ensure numeric format
//       grade: grade,
//       width: width,
//     }

//     onAddSize(newSize)
//     onClose()
//   }

//   return (
//     <div
//       className={`fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center ${
//         isOpen ? "" : "hidden"
//       }`}
//     >
//       <div className="bg-white p-6 rounded shadow-lg w-11/12 max-w-2xl">
//         <h2 className="text-2xl mb-4">Add New Size</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-gray-700">Size in cm</label>
//             <input
//               type="text"
//               value={sizeCm}
//               onChange={e => setSizeCm(e.target.value)}
//               className="w-full px-3 py-2 border rounded shadow-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Size in mm</label>
//             <input
//               type="text"
//               value={sizeMm}
//               onChange={e => setSizeMm(e.target.value)}
//               className="w-full px-3 py-2 border rounded shadow-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Product Name</label>
//             <input
//               type="text"
//               value={productName}
//               onChange={e => setProductName(e.target.value)}
//               className="w-full px-3 py-2 border rounded shadow-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">HSN Code</label>
//             <input
//               type="text"
//               value={hsnCode}
//               onChange={e => setHsnCode(e.target.value)}
//               className="w-full px-3 py-2 border rounded shadow-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Thickness</label>
//             <input
//               type="text"
//               value={thickness}
//               onChange={e => setThickness(e.target.value)}
//               className="w-full px-3 py-2 border rounded shadow-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Micron</label>
//             <input
//               type="text"
//               value={micron}
//               onChange={e => setMicron(e.target.value)}
//               className="w-full px-3 py-2 border rounded shadow-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Grade</label>
//             <input
//               type="text"
//               value={grade}
//               onChange={e => setGrade(e.target.value)}
//               className="w-full px-3 py-2 border rounded shadow-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Width</label>
//             <input
//               type="text"
//               value={width}
//               onChange={e => setWidth(e.target.value)}
//               className="w-full px-3 py-2 border rounded shadow-sm"
//             />
//           </div>
//         </div>
//         <div className="flex justify-end mt-4">
//           <button
//             onClick={onClose}
//             className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-700"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Add Size
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SizeModal

import React, { useState, useEffect } from "react"
import { Spinner } from "reactstrap"

const ProductModal = ({ isOpen, onClose, onAddOrUpdateSize, editProduct }) => {
  const [productName, setProductName] = useState("")
  const [hsnCode, setHsnCode] = useState("")
  const [micron, setMicron] = useState("")
  const [width, setWidth] = useState("")
  const [meter, setMeter] = useState("")
  const [Loader, setLoader] = useState(false)


  useEffect(() => {
    if (editProduct) {
      setProductName(editProduct.product_name)
      setHsnCode(editProduct.hsn_code)
      setMicron(editProduct.micron)
      setWidth(editProduct.width)
      setMeter(editProduct.meter)
    } else {
      setProductName("")
      setHsnCode("")
      setMicron("")
      setWidth("")
      setMeter("")
    }
  }, [editProduct])

  const handleSubmit = async e => {
    e.preventDefault()
    // Perform basic client-side validation
    if (!productName || !hsnCode || !micron || !width || !meter) {
      console.error("Please fill in all fields.")
      return
    }

    const newProducts = {
      product_name: productName,
      hsn_code: hsnCode,
      micron: parseInt(micron), // Ensure numeric format
      width: width,
      meter: meter,
    }

    try {
      setLoader(true) // Show loader when the process starts
      // TODO: Need to change api
      await onAddOrUpdateSize(newProducts)
    } catch (error) {
      console.error("Error adding/updating size", error)
    } finally {
      setLoader(false) // Hide loader when the process finishes
    }
  }

  return (
    <div
      className={`fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white modal-new p-6 rounded shadow-lg w-11/12 max-w-2xl">
        <h2 className="text-2xl mb-4">
          {editProduct ? "Edit Product" : "Add New Product"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Product Name</label>
              <input
                type="text"
                value={productName}
                placeholder="Enter Product Name"
                onChange={e => setProductName(e.target.value)}
                className="w-full px-3 py-2 border rounded shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700">HSN Code</label>
              <input
                type="text"
                value={hsnCode}
                placeholder="Enter HSN Code"
                onChange={e => setHsnCode(e.target.value)}
                className="w-full px-3 py-2 border rounded shadow-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700">Micron</label>
              <input
                type="text"
                value={micron}
                placeholder="Enter Micron"
                onChange={e => setMicron(e.target.value)}
                className="w-full px-3 py-2 border rounded shadow-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700">Width</label>
              <input
                type="text"
                value={width}
                placeholder="Enter Width"
                onChange={e => setWidth(e.target.value)}
                className="w-full px-3 py-2 border rounded shadow-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700">Meter</label>
              <input
                type="text"
                value={meter}
                placeholder="Enter Meter"
                onChange={e => setMeter(e.target.value)}
                className="w-full px-3 py-2 border rounded shadow-sm"
              />
            </div>

            {/* <div>
              <label className="block text-gray-700">Size in cm</label>
              <input
                type="text"
                value={sizeCm}
                placeholder="Enter Size in cm"
                onChange={e => setSizeCm(e.target.value)}
                className="w-full px-3 py-2 border rounded shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700">Size in mm</label>
              <input
                type="text"
                value={sizeMm}
                placeholder="Enter Size in mm"
                onChange={e => setSizeMm(e.target.value)}
                className="w-full px-3 py-2 border rounded shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700">Thickness</label>
              <input
                type="text"
                value={thickness}
                placeholder="Enter Thickness"
                onChange={e => setThickness(e.target.value)}
                className="w-full px-3 py-2 border rounded shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700">Grade</label>
              <input
                type="text"
                value={grade}
                placeholder="Enter Grade"
                onChange={e => setGrade(e.target.value)}
                className="w-full px-3 py-2 border rounded shadow-sm"
              />
            </div> */}
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-700"
            >
              Cancel
            </button>
            {Loader ? (
              <button
                disabled
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary"
              >
                <Spinner
                  className="ms-1"
                  color="light"
                  style={{ width: "20px", height: "20px" }}
                />
              </button>
            ) : (
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                {editProduct ? "Update Product" : "Add Product"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductModal
