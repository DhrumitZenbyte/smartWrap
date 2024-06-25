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


import React from "react"

const Modal = ({
  showModal,
  setShowModal,
  newCompany,
  setNewCompany,
  handleSaveCompany,
  companyNames,
}) => {
  const handleChange = e => {
    const { name, value } = e.target
    setNewCompany({ ...newCompany, [name]: value })
  }

  const handleCloseModal = () => {
    setShowModal(false)
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
                value={newCompany.companyName}
                onChange={handleChange}
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
                value={newCompany.companyName}
                onChange={handleChange}
                placeholder="Enter new company name if not listed"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {Object.keys(newCompany).map(
              key =>
                key !== "companyName" && (
                  <div key={key} className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">
                      {key.replace(/([A-Z])/g, " $1")}
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
          </div>
          <div className="mt-4 flex justify-end space-x-4">
            <button
              onClick={handleSaveCompany}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            >
              Save Company
            </button>
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
