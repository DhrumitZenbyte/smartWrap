// import React, { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { addFinishGoods } from "services/operations/FinishGoodsOps/FinishGoodsApi"

// const Production = () => {
//   const [productiondata, setProductionData] = useState({
//     product: "",
//     hsnCode: "",
//     micron: "",
//     size: "",
//     sqmPerRoll: "",
//     rollQuantity: "",
//     totalSqm: "",
//     pallet: "",
//     palletName: "",
//     details: "",
//     boxes: "",
//     orderPurchaseDate: "",
//     goodDetails: "",
//     company: "",
//     descriptionOfGoods: "",
//     qtyInStorageStart: "",
//     qtyIssued: "",
//     qtyInStorageEnd: "",
//     qtyReturned: "",
//     wastage: "",
//     actualQtyConsumed: "",
//   })

//   const navigate = useNavigate()

//   const handleChange = e => {
//     const { name, value } = e.target
//     setProductionData({ ...productiondata, [name]: value })
//   }

//   const handleSubmit = async e => {
//     e.preventDefault()

//     const newProduct = {
//       product_id: 16, // Use a unique identifier or generate it dynamically
//       size_id: 2, // Ensure this is correct or map it dynamically
//       sqm_per_roll: productiondata.sqmPerRoll,
//       roll_quantity: productiondata.rollQuantity,
//       total_sqm: productiondata.totalSqm,
//       pallet: productiondata.pallet,
//       pallet_name: productiondata.palletName,
//       details: productiondata.details,
//       boxes: productiondata.boxes,
//       order_purchase_date: productiondata.orderPurchaseDate,
//       good_details: productiondata.goodDetails,
//       company: productiondata.company,
//       description_of_goods: productiondata.descriptionOfGoods,
//       qty_in_storage_start: productiondata.qtyInStorageStart,
//       qty_issued: productiondata.qtyIssued,
//       qty_in_storage_end: productiondata.qtyInStorageEnd,
//       qty_returned: productiondata.qtyReturned,
//       wastage: productiondata.wastage,
//       actual_qty_consumed: productiondata.actualQtyConsumed,
//     }

//     try {
//       const token = localStorage.getItem("token") // Replace with your actual token
//       await addFinishGoods(newProduct, token)
//       console.log("Product added successfully:", productiondata)
//       navigate("/dashboard/production")
//     } catch (error) {
//       console.error("Failed to add product:", error)
//     }
//   }

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-2xl font-bold mb-4">Add Product</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700">Product</label>
//           <input
//             type="text"
//             name="product"
//             value={productiondata.product}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">HSN Code</label>
//           <input
//             type="text"
//             name="hsnCode"
//             value={productiondata.hsnCode}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Micron</label>
//           <input
//             type="text"
//             name="micron"
//             value={productiondata.micron}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Size</label>
//           <input
//             type="text"
//             name="size"
//             value={productiondata.size}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Sqm per Roll</label>
//           <input
//             type="text"
//             name="sqmPerRoll"
//             value={productiondata.sqmPerRoll}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Roll Quantity</label>
//           <input
//             type="text"
//             name="rollQuantity"
//             value={productiondata.rollQuantity}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Total Sqm</label>
//           <input
//             type="text"
//             name="totalSqm"
//             value={productiondata.totalSqm}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Pallet</label>
//           <input
//             type="text"
//             name="pallet"
//             value={productiondata.pallet}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Pallet Name</label>
//           <input
//             type="text"
//             name="palletName"
//             value={productiondata.palletName}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Details</label>
//           <input
//             type="text"
//             name="details"
//             value={productiondata.details}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Boxes</label>
//           <input
//             type="text"
//             name="boxes"
//             value={productiondata.boxes}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Order Purchase Date</label>
//           <input
//             type="date"
//             name="orderPurchaseDate"
//             value={productiondata.orderPurchaseDate}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Good Details</label>
//           <input
//             type="text"
//             name="goodDetails"
//             value={productiondata.goodDetails}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Company</label>
//           <input
//             type="text"
//             name="company"
//             value={productiondata.company}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Description of Goods</label>
//           <input
//             type="text"
//             name="descriptionOfGoods"
//             value={productiondata.descriptionOfGoods}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Qty in Storage Start</label>
//           <input
//             type="text"
//             name="qtyInStorageStart"
//             value={productiondata.qtyInStorageStart}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Qty Issued</label>
//           <input
//             type="text"
//             name="qtyIssued"
//             value={productiondata.qtyIssued}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Qty in Storage End</label>
//           <input
//             type="text"
//             name="qtyInStorageEnd"
//             value={productiondata.qtyInStorageEnd}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Qty Returned</label>
//           <input
//             type="text"
//             name="qtyReturned"
//             value={productiondata.qtyReturned}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Wastage</label>
//           <input
//             type="text"
//             name="wastage"
//             value={productiondata.wastage}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Actual Qty Consumed</label>
//           <input
//             type="text"
//             name="actualQtyConsumed"
//             value={productiondata.actualQtyConsumed}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Save Product
//         </button>
//       </form>
//     </div>
//   )
// }

// export default Production


import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { addFinishGoods } from "services/operations/FinishGoodsOps/FinishGoodsApi"
import { getProducts } from "services/operations/ProductsOps/ProductsApi" // Assuming you have this service

const Production = () => {
  const [productiondata, setProductionData] = useState({
    productId: "", // Changed from product to productId
    hsnCode: "",
    micron: "",
    size: "",
    sqmPerRoll: "",
    rollQuantity: "",
    totalSqm: "",
    pallet: "",
    palletName: "",
    details: "",
    boxes: "",
    orderPurchaseDate: "",
    goodDetails: "",
    company: "",
    descriptionOfGoods: "",
    qtyInStorageStart: "",
    qtyIssued: "",
    qtyInStorageEnd: "",
    qtyReturned: "",
    wastage: "",
    actualQtyConsumed: "",
  })
  const [products, setProducts] = useState([])
  
  const navigate = useNavigate()
  const token = localStorage.getItem("token") // Replace with your actual token

  useEffect(() => {
    // Fetch products on component mount
    getProducts(token, setProducts)
  }, [token])

  console.log(products, "@@products from production");
  const handleChange = e => {
    const { name, value } = e.target
    setProductionData({ ...productiondata, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const newProduct = {
      product_id: productiondata.productId, // Use productId from state
      size_id: 2, // Ensure this is correct or map it dynamically
      sqm_per_roll: productiondata.sqmPerRoll,
      roll_quantity: productiondata.rollQuantity,
      total_sqm: productiondata.totalSqm,
      pallet: productiondata.pallet,
      pallet_name: productiondata.palletName,
      details: productiondata.details,
      boxes: productiondata.boxes,
      order_purchase_date: productiondata.orderPurchaseDate,
      good_details: productiondata.goodDetails,
      company: productiondata.company,
      description_of_goods: productiondata.descriptionOfGoods,
      qty_in_storage_start: productiondata.qtyInStorageStart,
      qty_issued: productiondata.qtyIssued,
      qty_in_storage_end: productiondata.qtyInStorageEnd,
      qty_returned: productiondata.qtyReturned,
      wastage: productiondata.wastage,
      actual_qty_consumed: productiondata.actualQtyConsumed,
    }

    try {
      await addFinishGoods(newProduct, token)
      console.log("Product added successfully:", productiondata)
      navigate("/dashboard/production")
    } catch (error) {
      console.error("Failed to add product:", error)
    }
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Product</label>
          <select
            name="productId"
            value={productiondata.productId}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="">Select a product</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>
                {product.product_name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">HSN Code</label>
          <input
            type="text"
            name="hsnCode"
            value={productiondata.hsnCode}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Micron</label>
          <input
            type="text"
            name="micron"
            value={productiondata.micron}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Size</label>
          <input
            type="text"
            name="size"
            value={productiondata.size}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Sqm per Roll</label>
          <input
            type="text"
            name="sqmPerRoll"
            value={productiondata.sqmPerRoll}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Roll Quantity</label>
          <input
            type="text"
            name="rollQuantity"
            value={productiondata.rollQuantity}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Total Sqm</label>
          <input
            type="text"
            name="totalSqm"
            value={productiondata.totalSqm}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Pallet</label>
          <input
            type="text"
            name="pallet"
            value={productiondata.pallet}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Pallet Name</label>
          <input
            type="text"
            name="palletName"
            value={productiondata.palletName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Details</label>
          <input
            type="text"
            name="details"
            value={productiondata.details}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Boxes</label>
          <input
            type="text"
            name="boxes"
            value={productiondata.boxes}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Order Purchase Date</label>
          <input
            type="date"
            name="orderPurchaseDate"
            value={productiondata.orderPurchaseDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Good Details</label>
          <input
            type="text"
            name="goodDetails"
            value={productiondata.goodDetails}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Company</label>
          <input
            type="text"
            name="company"
            value={productiondata.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description of Goods</label>
          <input
            type="text"
            name="descriptionOfGoods"
            value={productiondata.descriptionOfGoods}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Qty in Storage Start</label>
          <input
            type="text"
            name="qtyInStorageStart"
            value={productiondata.qtyInStorageStart}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Qty Issued</label>
          <input
            type="text"
            name="qtyIssued"
            value={productiondata.qtyIssued}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Qty in Storage End</label>
          <input
            type="text"
            name="qtyInStorageEnd"
            value={productiondata.qtyInStorageEnd}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Qty Returned</label>
          <input
            type="text"
            name="qtyReturned"
            value={productiondata.qtyReturned}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Wastage</label>
          <input
            type="text"
            name="wastage"
            value={productiondata.wastage}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Actual Qty Consumed</label>
          <input
            type="text"
            name="actualQtyConsumed"
            value={productiondata.actualQtyConsumed}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Product
        </button>
      </form>
    </div>
  )
}

export default Production
