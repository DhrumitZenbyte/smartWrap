// import React from "react"

// const Modal = ({
//   showModal,
//   setShowModal,
//   newCompany,
//   setNewCompany,
//   handleSaveCompany,
// }) => {
//   const handleChange = e => {
//     const { name, value } = e.target
//     setNewCompany({ ...newCompany, [name]: value })
//   }

//   const handleCloseModal = () => {
//     setShowModal(false)
//   }

//   return (
//     showModal && (
//       <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4 md:p-0 overflow-y-scroll md:overflow-y-hidden">
//         <div className="bg-white p-4 rounded-md shadow-lg w-full md:w-2/3 lg:w-2/4 h-auto md:h-fit">
//           <h2 className="text-xl font-bold mb-4">Add New Company</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="col-span-1">
//               <label className="block text-sm font-medium text-gray-700">
//                 Company Name
//               </label>
//               <input
//                 type="text"
//                 name="companyName"
//                 value={newCompany.companyName}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//             {Object.keys(newCompany).map(
//               key =>
//                 key !== "companyName" && (
//                   <div key={key} className="col-span-1">
//                     <label className="block text-sm font-medium text-gray-700">
//                       {key.replace(/([A-Z])/g, " $1")}
//                     </label>
//                     <input
//                       type="text"
//                       name={key}
//                       value={newCompany[key]}
//                       onChange={handleChange}
//                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     />
//                   </div>
//                 )
//             )}
//           </div>
//           <div className="mt-4 flex justify-end space-x-4">
//             <button
//               onClick={handleSaveCompany}
//               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
//             >
//               Save Company
//             </button>
//             <button
//               onClick={handleCloseModal}
//               className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     )
//   )
// }

// export default Modal

// Modal.jsx
// import React from "react";

// const Modal = ({
//   showModal,
//   setShowModal,
//   newCompany,
//   setNewCompany,
//   handleSaveCompany,
//   companyNames,
//   companies, // New prop: array of companies data
// }) => {
//   const handleChange = e => {
//     const { name, value } = e.target;

//     // If the selected value is an existing company, populate fields
//     const selectedCompany = companies.find(company => company.company_name === value);
//     if (selectedCompany) {
//       // Create a new object without the 'id' field
//       const { id, ...selectedCompanyWithoutId } = selectedCompany;
//       setNewCompany({
//         ...newCompany,
//         ...selectedCompanyWithoutId, // Populate all fields except 'id'
//         [name]: value, // Override only the selected company name
//       });
//     } else {
//       setNewCompany({ ...newCompany, [name]: value });
//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     showModal && (
//       <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4 md:p-0 overflow-y-scroll md:overflow-y-hidden">
//         <div className="bg-white p-4 rounded-md shadow-lg w-full md:w-2/3 lg:w-2/4 h-auto md:h-fit">
//           <h2 className="text-xl font-bold mb-4">Add New Company</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="col-span-1">
//               <label className="block text-sm font-medium text-gray-700">
//                 Company Name
//               </label>
//               <select
//                 name="companyName"
//                 value={newCompany.companyName}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               >
//                 <option value="">Select a company</option>
//                 {companyNames.map((name, i) => (
//                   <option key={i} value={name}>
//                     {name}
//                   </option>
//                 ))}
//               </select>
//               <input
//                 type="text"
//                 name="companyName"
//                 value={newCompany.companyName}
//                 onChange={handleChange}
//                 placeholder="Enter new company name if not listed"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//             {Object.keys(newCompany).map(
//               key =>
//                 key !== "companyName" && key !== "id" && ( // Exclude 'id' field here
//                   <div key={key} className="col-span-1">
//                     <label className="block text-sm font-medium text-gray-700">
//                       {key.replace(/([A-Z])/g, " $1")}
//                     </label>
//                     <input
//                       type="text"
//                       name={key}
//                       value={newCompany[key]}
//                       onChange={handleChange}
//                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     />
//                   </div>
//                 )
//             )}
//           </div>
//           <div className="mt-4 flex justify-end space-x-4">
//             <button
//               onClick={handleSaveCompany}
//               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
//             >
//               Save Company
//             </button>
//             <button
//               onClick={handleCloseModal}
//               className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default Modal;
import React, { useEffect, useRef, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { updateRawMaterial } from "services/operations/RawMaterialsOps/RawApi"

const Modal = ({
  showModal,
  setShowModal,
  newCompany,
  setNewCompany,
  handleSaveCompany,
  companyNames,
  companies,
  fetchRawMaterials,
}) => {
  const [isUpdateMode, setIsUpdateMode] = useState(false)
  const [additionalPallets, setAdditionalPallets] = useState(0)

  const token = localStorage.getItem("token")
  const updateTimeoutRef = useRef(null) // useRef to hold the timeout reference
  const originalTotalPalletRef = useRef(null) // useRef to hold the original totalPallet value
  // const handleChange = e => {
  //   const { name, value } = e.target
  //   let updatedCompany = { ...newCompany, [name]: value }

  //   if (name === "totalPallet" || name === "bagPerPallet") {
  //     const totalPallet = parseInt(updatedCompany.totalPallet || 0, 10)
  //     const bagPerPallet = parseInt(updatedCompany.bagPerPallet || 0, 10)
  //     updatedCompany.totalBag = totalPallet * bagPerPallet
  //   }

  //   if (name === "weightPerBag" || name === "totalBag") {
  //     const weightPerBag = parseFloat(updatedCompany.weightPerBag || 0)
  //     const totalBag = parseInt(updatedCompany.totalBag || 0, 10)
  //     updatedCompany.totalWeight = weightPerBag * totalBag
  //   }

  //   setNewCompany(updatedCompany)
  // }

  const handleChange = e => {
    const { name, value } = e.target
    let updatedCompany = { ...newCompany, [name]: value }
    console.log(updatedCompany, "@@updatedCompany")

    if (name === "totalPallet" || name === "bagPerPallet") {
      const totalPallet = parseInt(updatedCompany.totalPallet || 0, 10)
      console.log(totalPallet, "@@totalPallet")
      const bagPerPallet = parseInt(updatedCompany.bagPerPallet || 0, 10)
      updatedCompany.totalBag = totalPallet * bagPerPallet

      const weightPerBag = parseFloat(updatedCompany.weightPerBag || 0)
      updatedCompany.totalWeight = weightPerBag * updatedCompany.totalBag
    }

    if (name === "weightPerBag" || name === "totalBag") {
      const weightPerBag = parseFloat(updatedCompany.weightPerBag || 0)
      const totalBag = parseInt(updatedCompany.totalBag || 0, 10)
      updatedCompany.totalWeight = weightPerBag * totalBag
    }

    //  if (name === "totalWeight") {
    //    const weightPerBag = parseFloat(updatedCompany.weightPerBag || 0)
    //    const totalWeight = parseFloat(updatedCompany.totalWeight || 0)
    //    updatedCompany.totalBag =
    //      weightPerBag !== 0 ? totalWeight / weightPerBag : 0
    //  }

    setNewCompany(updatedCompany)
  }

  // const handleCompanyChange = e => {
  //   const selectedCompanyName = e.target.value
  //   const selectedCompany = companies.find(
  //     company => company.company_name === selectedCompanyName
  //   )
  //   console.log(selectedCompanyName, "@@selectedCompanyName");
  //   console.log(selectedCompany, "@@selectedCompany");
  //   if (selectedCompany) {
  //     setNewCompany({ ...selectedCompany })
  //     setIsUpdateMode(true)
  //   } else {
  //     setNewCompany({ companyName: selectedCompanyName })
  //     setIsUpdateMode(false)
  //   }
  // }

  const handleCompanyChange = e => {
    const selectedCompanyName = e.target.value
    const selectedCompany = companies.find(
      company => company.company_name === selectedCompanyName
    )
    console.log(selectedCompanyName, "@@selectedCompanyName")
    console.log(selectedCompany, "@@selectedCompany")
    if (selectedCompany) {
      // setNewCompany({ ...selectedCompany })
      console.log(selectedCompany, "@@selectedCompany2")
      setNewCompany({
        id: selectedCompany.id,
        companyName: selectedCompany.company_name,
        totalPallet: selectedCompany.total_pallet,
        bagPerPallet: selectedCompany.bag_per_pallet,
        totalBag: selectedCompany.total_bag,
        weightPerBag: selectedCompany.weight_per_bag,
        totalWeight: selectedCompany.total_weight,
      })
      setIsUpdateMode(true)
    } else {
      setNewCompany({ companyName: selectedCompanyName })
      setIsUpdateMode(false)
    }
  }
  const resetForm = () => {
    setNewCompany({
      companyName: "",
      totalPallet: "",
      bagPerPallet: "",
      totalBag: "",
      weightPerBag: "",
      totalWeight: "",
    })
    setIsUpdateMode(false)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    console.log(showModal, "@@showmodal")
    // Use a timeout to reset form state after modal closes
    resetForm()
  }

  const handleUpdateCompany = async () => {
    try {
      console.log(newCompany, "@@newCompany")
      const processedData = {
        id: newCompany.id,
        company_name: newCompany.companyName,
        total_pallet: parseInt(newCompany.totalPallet, 10),
        bag_per_pallet: parseInt(newCompany.bagPerPallet, 10),
        total_bag: parseInt(newCompany.totalBag, 10),
        weight_per_bag: parseFloat(newCompany.weightPerBag),
        total_weight: parseFloat(newCompany.totalWeight),
      }
      console.log("i am here"), console.log(processedData, "@@processed data")
      await updateRawMaterial(processedData, token)
      alert("Company updated successfully!")
      handleCloseModal()

      // Fetch updated raw materials after update
      await fetchRawMaterials()
    } catch (error) {
      console.error("Failed to update company:", error)
      alert("Failed to update company. Please try again.")
    }
  }

  useEffect(() => {
    console.log(showModal, "@@showmodal3")
    if (!showModal) {
      console.log(showModal, "@@showmodal4")
      resetForm()
    }
  }, [showModal])

  const handleAdditionalPalletsChange = e => {
    const additional = parseInt(e.target.value, 10) || 0
    setAdditionalPallets(additional)

    // Clear any existing timeout
    if (updateTimeoutRef.current) {
      clearTimeout(updateTimeoutRef.current)
    }

    // Set a timeout to update after 500ms (adjust as needed)
    updateTimeoutRef.current = setTimeout(() => {
      const totalPallet = parseInt(newCompany.totalPallet || 0, 10)
      const updatedTotalPallet = totalPallet + additional

      // Update newCompany state with the calculated total pallets
      setNewCompany(prevCompany => ({
        ...prevCompany,
        totalPallet: updatedTotalPallet,
        totalBag: updatedTotalPallet * prevCompany.bagPerPallet,
        totalWeight:
          updatedTotalPallet *
          prevCompany.bagPerPallet *
          prevCompany.weightPerBag,
      }))
    }, 2000) // Adjust delay as per your preference
  }
  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4 md:p-0 overflow-y-scroll md:overflow-y-hidden">
        <div className="bg-white p-4 rounded-md shadow-lg w-full md:w-2/3 lg:w-2/4 h-auto md:h-fit">
          <h2 className="text-xl font-bold mb-4">Add New Company</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <select
                name="companyName"
                value={newCompany.company_name || newCompany.companyName}
                onChange={handleCompanyChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a company</option>
                {companyNames.map((name, i) => (
                  <option key={i} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="companyName"
                value={newCompany.company_name || newCompany.companyName}
                onChange={handleChange}
                placeholder="Enter new company name if not listed"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {Object.keys(newCompany).map(
              key =>
                key !== "companyName" &&
                key !== "company_name" &&
                key !== "id" && (
                  <div key={key} className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">
                      {key
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, char => char.toUpperCase())}
                    </label>
                    <input
                      type="text"
                      name={key}
                      value={newCompany[key]}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                )
            )}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Additional Pallets
              </label>
              <input
                type="number"
                name="additionalPallets"
                value={additionalPallets}
                onChange={handleAdditionalPalletsChange}
                placeholder="Enter additional pallets"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end space-x-4">
            {isUpdateMode ? (
              <button
                onClick={handleUpdateCompany}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
              >
                Update Changes
              </button>
            ) : (
              <button
                onClick={handleSaveCompany}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
              >
                Save Company
              </button>
            )}
            <button
              onClick={handleCloseModal}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  )
}

export default Modal
