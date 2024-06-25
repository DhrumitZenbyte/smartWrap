// import React, { useState } from "react"
// import Modal from "./Modal"

// const RawMaterials = () => {
//   const [showModal, setShowModal] = useState(false)
//   const [companies, setCompanies] = useState([])
//   const [companyNames, setCompanyNames] = useState([])
//   const [newCompany, setNewCompany] = useState({
//     companyName: "",
//     totalPallet: "",
//     bagPerPallet: "",
//     totalBag: "",
//     weightPerBag: "",
//     totalWeight: "",
//   })
//   const [editingIndex, setEditingIndex] = useState(null)

//   const handleAddCompany = company => {
//     setCompanies([...companies, company])
//     if (!companyNames.includes(company.companyName)) {
//       setCompanyNames([...companyNames, company.companyName])
//     }
//     setShowModal(false)
//   }

//   const handleEditCompany = index => {
//     setNewCompany(companies[index])
//     setEditingIndex(index)
//     setShowModal(true)
//   }

//   const handleSaveCompany = () => {
//     const updatedCompanies = [...companies]
//     if (editingIndex !== null) {
//       updatedCompanies[editingIndex] = newCompany
//       setCompanies(updatedCompanies)
//       setEditingIndex(null)
//     } else {
//       handleAddCompany(newCompany)
//     }
//     setNewCompany({
//       companyName: "",
//       totalPallet: "",
//       bagPerPallet: "",
//       totalBag: "",
//       weightPerBag: "",
//       totalWeight: "",
//     })
//     setShowModal(false)
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Raw Materials</h1>
//       <button
//         onClick={() => setShowModal(true)}
//         className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
//       >
//         Add Company
//       </button>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 border-b">Company Name</th>
//               <th className="px-4 py-2 border-b">Total Pallet</th>
//               <th className="px-4 py-2 border-b">Bag per Pallet</th>
//               <th className="px-4 py-2 border-b">Total Bag</th>
//               <th className="px-4 py-2 border-b">Weight per Bag</th>
//               <th className="px-4 py-2 border-b">Total Weight</th>
//               <th className="px-4 py-2 border-b">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {companies.map((company, index) => (
//               <tr key={index} className="even:bg-gray-50">
//                 <td className="px-4 py-2">
//                   <select
//                     value={company.companyName}
//                     onChange={e => {
//                       const updatedCompanies = [...companies]
//                       updatedCompanies[index].companyName = e.target.value
//                       setCompanies(updatedCompanies)
//                     }}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   >
//                     <option value="">Select a company</option>
//                     {companyNames.map((name, i) => (
//                       <option key={i} value={name}>
//                         {name}
//                       </option>
//                     ))}
//                   </select>
//                 </td>
//                 <td className="px-4 py-2">{company.totalPallet}</td>
//                 <td className="px-4 py-2">{company.bagPerPallet}</td>
//                 <td className="px-4 py-2">{company.totalBag}</td>
//                 <td className="px-4 py-2">{company.weightPerBag}</td>
//                 <td className="px-4 py-2">{company.totalWeight}</td>
//                 <td className="px-4 py-2">
//                   <button
//                     onClick={() => handleEditCompany(index)}
//                     className="px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-700"
//                   >
//                     Edit
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {showModal && (
//         <Modal
//           showModal={showModal}
//           setShowModal={setShowModal}
//           newCompany={newCompany}
//           setNewCompany={setNewCompany}
//           handleSaveCompany={handleSaveCompany}
//         />
//       )}
//     </div>
//   )
// }

// export default RawMaterials



import React, { useState } from "react"
import Modal from "./Modal"

const RawMaterials = () => {
  const [showModal, setShowModal] = useState(false)
  const [companies, setCompanies] = useState([])
  const [companyNames, setCompanyNames] = useState([])
  const [newCompany, setNewCompany] = useState({
    companyName: "",
    totalPallet: "",
    bagPerPallet: "",
    totalBag: "",
    weightPerBag: "",
    totalWeight: "",
  })
  const [editingIndex, setEditingIndex] = useState(null)
    console.log(companies, "@@companies");
  const handleAddCompany = company => {
    setCompanies([...companies, company])
    if (!companyNames.includes(company.companyName)) {
      setCompanyNames([...companyNames, company.companyName])
    }
    setShowModal(false)
  }

  const handleEditCompany = index => {
    setNewCompany(companies[index])
    setEditingIndex(index)
    setShowModal(true)
  }

  const handleSaveCompany = () => {
    const updatedCompanies = [...companies]
    if (editingIndex !== null) {
      updatedCompanies[editingIndex] = newCompany
      setCompanies(updatedCompanies)
      setEditingIndex(null)
    } else {
      handleAddCompany(newCompany)
    }
    setNewCompany({
      companyName: "",
      totalPallet: "",
      bagPerPallet: "",
      totalBag: "",
      weightPerBag: "",
      totalWeight: "",
    })
    setShowModal(false)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Raw Materials</h1>
      <button
        onClick={() => setShowModal(true)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Add Company
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Company Name</th>
              <th className="px-4 py-2 border-b">Total Pallet</th>
              <th className="px-4 py-2 border-b">Bag per Pallet</th>
              <th className="px-4 py-2 border-b">Total Bag</th>
              <th className="px-4 py-2 border-b">Weight per Bag</th>
              <th className="px-4 py-2 border-b">Total Weight</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index} className="even:bg-gray-50">
                <td className="px-4 py-2">{company.companyName}</td>
                <td className="px-4 py-2">{company.totalPallet}</td>
                <td className="px-4 py-2">{company.bagPerPallet}</td>
                <td className="px-4 py-2">{company.totalBag}</td>
                <td className="px-4 py-2">{company.weightPerBag}</td>
                <td className="px-4 py-2">{company.totalWeight}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEditCompany(index)}
                    className="px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-700"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          newCompany={newCompany}
          setNewCompany={setNewCompany}
          handleSaveCompany={handleSaveCompany}
          companyNames={companyNames}
        />
      )}
    </div>
  )
}

export default RawMaterials
