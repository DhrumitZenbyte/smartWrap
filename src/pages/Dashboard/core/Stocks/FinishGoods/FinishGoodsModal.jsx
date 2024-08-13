// import React, { useState } from "react"

// const FinishGoodsModal = ({ isOpen, onClose, onAddProduct }) => {
//   const [product, setProduct] = useState("")
//   const [hsnCode, setHsnCode] = useState("")
//   const [size, setSize] = useState("")
//   const [sqmPerRoll, setSqmPerRoll] = useState("")
//   const [rollQuantity, setRollQuantity] = useState("")
//   const [totalSqm, setTotalSqm] = useState("")
//   const [pallet, setPallet] = useState("")
//   const [palletName, setPalletName] = useState("")
//   const [details, setDetails] = useState("")
//   const [boxes, setBoxes] = useState("")

//   const handleSubmit = e => {
//     e.preventDefault()
//     const newProduct = {
//       product,
//       hsnCode,
//       size,
//       sqmPerRoll,
//       rollQuantity,
//       totalSqm,
//       pallet,
//       palletName,
//       details,
//       boxes,
//     }
//     onAddProduct(newProduct)
//     onClose()
//   }

//   return (
//     isOpen && (
//       <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
//         <div className="bg-white p-6 rounded shadow-lg w-full max-w-3xl mx-4">
//           <h2 className="text-xl mb-4">Add Finish Good</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-gray-700">Product</label>
//                 <input
//                   type="text"
//                   value={product}
//                   onChange={e => setProduct(e.target.value)}
//                   className="w-full px-3 py-2 border rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">HSN Code</label>
//                 <input
//                   type="text"
//                   value={hsnCode}
//                   onChange={e => setHsnCode(e.target.value)}
//                   className="w-full px-3 py-2 border rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Size</label>
//                 <input
//                   type="text"
//                   value={size}
//                   onChange={e => setSize(e.target.value)}
//                   className="w-full px-3 py-2 border rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Sqm per Roll</label>
//                 <input
//                   type="text"
//                   value={sqmPerRoll}
//                   onChange={e => setSqmPerRoll(e.target.value)}
//                   className="w-full px-3 py-2 border rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Roll Quantity</label>
//                 <input
//                   type="text"
//                   value={rollQuantity}
//                   onChange={e => setRollQuantity(e.target.value)}
//                   className="w-full px-3 py-2 border rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Total Sqm</label>
//                 <input
//                   type="text"
//                   value={totalSqm}
//                   onChange={e => setTotalSqm(e.target.value)}
//                   className="w-full px-3 py-2 border rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Pallet</label>
//                 <input
//                   type="text"
//                   value={pallet}
//                   onChange={e => setPallet(e.target.value)}
//                   className="w-full px-3 py-2 border rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Pallet Name</label>
//                 <input
//                   type="text"
//                   value={palletName}
//                   onChange={e => setPalletName(e.target.value)}
//                   className="w-full px-3 py-2 border rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Details</label>
//                 <input
//                   type="text"
//                   value={details}
//                   onChange={e => setDetails(e.target.value)}
//                   className="w-full px-3 py-2 border rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Boxes</label>
//                 <input
//                   type="text"
//                   value={boxes}
//                   onChange={e => setBoxes(e.target.value)}
//                   className="w-full px-3 py-2 border rounded"
//                 />
//               </div>
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

// export default FinishGoodsModal


import React, { useState, useEffect } from "react";

const FinishGoodsModal = ({
  isOpen,
  onClose,
  onAddProduct,
  onUpdateProduct,
  productData,
}) => {
  const [formData, setFormData] = useState({
    // product_id: "",
    // size_id: "",
    sqm_per_roll: "",
    roll_quantity: "",
    total_sqm: "",
    pallet: "",
    pallet_name: "",
    details: "",
    boxes: "",
    actual_qty_consumed: "",
    company: "",
    description_of_goods: "",
    good_details: "",
    order_purchase_date: "",
    qty_in_storage_start: "",
    qty_in_storage_end: "",
    qty_issued: "",
    qty_returned: "",
    wastage: "",
  });

  // Populate the form with existing data when editing
  useEffect(() => {
    if (productData) {
      setFormData({
        product: productData.product.product_name || "",
        hsnCode: productData.hsnCode || "",
        size: `${productData.size.size_in_cm} cm, ${productData.size.size_in_mm} mm, ${productData.size.micron} micron` || "",
        sqmPerRoll: productData.sqm_per_roll || "",
        rollQuantity: productData.roll_quantity || "",
        totalSqm: productData.total_sqm || "",
        pallet: productData.pallet || "",
        palletName: productData.pallet_name || "",
        details: productData.details || "",
        boxes: productData.boxes || "",
        actualQtyConsumed: productData.actual_qty_consumed || "",
        company: productData.company || "",
        descriptionOfGoods: productData.description_of_goods || "",
        goodDetails: productData.good_details || "",
        orderPurchaseDate: productData.order_purchase_date || "",
        qtyInStorageStart: productData.qty_in_storage_start || "",
        qtyInStorageEnd: productData.qty_in_storage_end || "",
        qtyIssued: productData.qty_issued || "",
        qtyReturned: productData.qty_returned || "",
        wastage: productData.wastage || "",
      });
    }
  }, [productData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productData) {
      // Edit Mode
      onUpdateProduct({ ...formData, id: productData.id });
    } else {
      // Add Mode
      onAddProduct(formData);
    }
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
  <div className="bg-white p-6 rounded shadow-lg w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto">
          <h2 className="text-xl mb-4">
            {productData ? "Edit Finish Good" : "Add Finish Good"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {Object.keys(formData).map((field, index) => (
                <div key={index}>
                  <label className="block text-gray-700 capitalize">
                    {field.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
              ))}
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
                {productData ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default FinishGoodsModal;
