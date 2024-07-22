// import React, { useState } from "react"
// import ProductModal from "../../masters/products/ProductModel";
// import FinishGoodsModal from "./FinishGoodsModal"
// import { useNavigate } from "react-router-dom";
// const FinishGoods = () => {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       product: "Product 1",
//       hsnCode: "1234",
//       micron : "",
//       size: "10x10",
//       sqmPerRoll: "50",
//       rollQuantity: "20",
//       totalSqm: "1000",
//       pallet: "Pallet 1",
//       palletName: "ABC",
//       details: "abb",
//       boxes: "22",
//     },
//     {
//       id: 2,
//       product: "Product 2",
//       micron : "",
//       hsnCode: "5678",
//       size: "5x5",
//       sqmPerRoll: "30",
//       rollQuantity: "10",
//       totalSqm: "300",
//       pallet: "Pallet 2",
//       palletName: "XYZ",
//       details: "abb",
//       boxes: "22",
//     },
//     // Add more products as needed
//   ])

//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const navigate = useNavigate();
//   const handleEdit = id => {
//     console.log(`Edit product with id ${id}`)
//   }

//   const handleDelete = id => {
//     console.log(`Delete product with id ${id}`)
//   }

//   const handleAddProduct = product => {
//     setProducts([...products, { ...product, id: products.length + 1 }])
//   }

//    const handleRedirect = () => {
//      navigate("/dashboard/production")
//    }

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-2xl font-bold mb-4">Finish Goods</h1>
//       <div className="mb-4">
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Add Product
//         </button>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="text-left py-2 px-4">Product</th>
//               <th className="text-left py-2 px-4">Size</th>
//               <th className="text-left py-2 px-4">Micron</th>
//               <th className="text-left py-2 px-4">Sqm per Roll</th>
//               <th className="text-left py-2 px-4">Roll Quantity</th>
//               <th className="text-left py-2 px-4">Total Sqm</th>
//               <th className="text-left py-2 px-4">Pallet</th>
//               <th className="text-left py-2 px-4">Pallet Name</th>
//               <th className="text-left py-2 px-4">Details</th>
//               <th className="text-left py-2 px-4">Boxes</th>
//               <th className="text-left py-2 px-4">Date</th>
//               <th className="text-left py-2 px-4">Company</th>
//               <th className="text-left py-2 px-4">Company</th>
//               <th className="text-left py-2 px-4">
//                 Material / Grade / Discription of Goods
//               </th>
//               <th className="text-left py-2 px-4">Qty in Storage (Start)</th>
//               <th className="text-left py-2 px-4">Qty Issued</th>
//               <th className="text-left py-2 px-4">Qty in Storage (End)</th>
//               <th className="text-left py-2 px-4">Qty Returned</th>
//               <th className="text-left py-2 px-4">Wastage</th>
//               <th className="text-left py-2 px-4">Actual Qty Consumed</th>

//               <th className="text-left py-2 px-4">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map(item => (
//               <tr key={item.id} className="border-t border-gray-200">
//                 <td className="py-2 px-4">{item.product}</td>
//                 <td className="py-2 px-4">{item.size}</td>
//                 <td className="py-2 px-4">{item.micron}</td>
//                 <td className="py-2 px-4">{item.sqmPerRoll}</td>
//                 <td className="py-2 px-4">{item.rollQuantity}</td>
//                 <td className="py-2 px-4">{item.totalSqm}</td>
//                 <td className="py-2 px-4">{item.pallet}</td>
//                 <td className="py-2 px-4">{item.palletName}</td>
//                 <td className="py-2 px-4">{item.details}</td>
//                 <td className="py-2 px-4">{item.boxes}</td>
//                 <td className="py-2 px-4">
//                   <button className="text-blue-500 hover:text-blue-700 mr-2">
//                     Edit
//                   </button>
//                   <button className="text-red-500 hover:text-red-700">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {isModalOpen && (
//         <FinishGoodsModal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           onAddProduct={handleAddProduct}
//         />
//       )}
//     </div>
//   )
// }

// export default FinishGoods


import React, { useState, useEffect } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { fetchFinishGoods } from "services/operations/FinishGoodsOps/FinishGoodsApi"

const FinishGoods = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  const handleEdit = id => {
    console.log(`Edit product with id ${id}`)
  }

  const handleDelete = id => {
    console.log(`Delete product with id ${id}`)
  }

  const handleRedirect = () => {
    navigate("/dashboard/production")
  }

useEffect(() => {
  const fetchData = async () => {
    const token = localStorage.getItem("token") // Replace with your actual token
    try {
      const toastid = toast.loading("Loading Finish Goods Data...")
      const response = await fetchFinishGoods(token)

      // Ensure response data structure matches your expectations
      if (response && response.finishGoods) {
        setProducts(response.finishGoods)
      } else {
        console.error("Unexpected response structure:", response)
        toast.error("Unexpected response structure.")
      }

      toast.dismiss(toastid)
    } catch (error) {
      toast.error("Failed to fetch finish goods data.")
      console.error("Failed to fetch products:", error)
    }
  }

  fetchData()
}, [])


  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Finish Goods</h1>
      <div className="mb-4">
        <button
          onClick={handleRedirect}
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
              <th className="text-left py-2 px-4">
                Material / Grade / Description of Goods
              </th>
              <th className="text-left py-2 px-4">Qty Issued</th>
              <th className="text-left py-2 px-4">Qty in Storage (End)</th>
              <th className="text-left py-2 px-4">Qty Returned</th>
              <th className="text-left py-2 px-4">Wastage</th>
              <th className="text-left py-2 px-4">Actual Qty Consumed</th>
              <th className="text-left py-2 px-4">Qty in Storage (Start)</th>
              <th className="text-left py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map(item => (
              <tr key={item.id} className="border-t border-gray-200">
                <td className="py-2 px-4">
                  {item.product ? item.product.product_name : "N/A"}
                </td>
                <td className="py-2 px-4">
                  {item.size
                    ? `${item.size.size_in_cm}x${item.size.size_in_mm}`
                    : "N/A"}
                </td>
                <td className="py-2 px-4">
                  {item.size ? item.size.micron : "N/A"}
                </td>
                <td className="py-2 px-4">{item.sqm_per_roll}</td>
                <td className="py-2 px-4">{item.roll_quantity}</td>
                <td className="py-2 px-4">{item.total_sqm}</td>
                <td className="py-2 px-4">{item.pallet}</td>
                <td className="py-2 px-4">{item.pallet_name}</td>
                <td className="py-2 px-4">{item.details}</td>
                <td className="py-2 px-4">{item.boxes}</td>
                <td className="py-2 px-4">{item.description_of_goods}</td>
                <td className="py-2 px-4">{item.qty_issued}</td>
                <td className="py-2 px-4">{item.qty_in_storage_end}</td>
                <td className="py-2 px-4">{item.qty_returned}</td>
                <td className="py-2 px-4">{item.wastage}</td>
                <td className="py-2 px-4">{item.actual_qty_consumed}</td>
                <td className="py-2 px-4">{item.qty_in_storage_start}</td>
                <td className="py-2 px-4">
                  <button
                    className="text-blue-500 hover:text-blue-700 mr-2"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FinishGoods
