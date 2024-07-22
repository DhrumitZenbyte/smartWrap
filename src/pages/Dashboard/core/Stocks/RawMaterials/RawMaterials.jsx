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

// import React, { useState, useEffect } from "react"
// import Modal from "./Modal"
// import {
//   addRawMaterial,
//   deleteRawMaterial,
//   getRawMaterials,
//   updateRawMaterial,
// } from "services/operations/RawMaterialsOps/RawApi"
// import jsPDF from "jspdf"
// import "jspdf-autotable"
// import DatePicker from "react-datepicker"
// import "react-datepicker/dist/react-datepicker.css"
// import axios from "axios"

// const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dzm4uxenw/upload" // Replace with your Cloudinary URL
// const uploadPreset = "ml_default" // Replace with your upload preset

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
//   const [selectedDate, setSelectedDate] = useState(new Date())
//   const token = localStorage.getItem("token")

//   useEffect(() => {
//     fetchRawMaterials()
//   }, [token])

//   const fetchRawMaterials = async () => {
//     try {
//       const rawMaterials = await getRawMaterials(token)
//       setCompanies(rawMaterials)
//       const uniqueCompanyNames = [
//         ...new Set(rawMaterials.map(material => material.company_name)),
//       ]
//       setCompanyNames(uniqueCompanyNames)
//     } catch (error) {
//       console.error("Error fetching raw materials:", error)
//     }
//   }

//   const handleAddCompany = async company => {
//     try {
//       const response = await addRawMaterial(company, token)
//       if (response.status === "success") {
//         await fetchRawMaterials() // Fetch updated raw materials
//         setShowModal(false)
//       } else {
//         console.error("Error adding raw material:", response.message)
//       }
//     } catch (error) {
//       console.error("Error adding raw material:", error)
//     }
//   }

//   const handleEditCompany = async () => {
//     try {
//       setShowModal(true)
//       const processedData = {
//         id: newCompany.id,
//         company_name: newCompany.companyName,
//         total_pallet: parseInt(newCompany.totalPallet, 10),
//         bag_per_pallet: parseInt(newCompany.bagPerPallet, 10),
//         total_bag: parseInt(newCompany.total_bag || newCompany.totalBag, 10),
//         weight_per_bag: parseFloat(newCompany.weightPerBag),
//         total_weight: parseFloat(newCompany.totalWeight),
//       }

//       await updateRawMaterial(processedData, token)
//       alert("Company updated successfully!")
//       handleCloseModal()

//       // Fetch updated raw materials after update
//       await fetchRawMaterials()
//     } catch (error) {
//       console.error("Failed to update company:", error)
//       alert("Failed to update company. Please try again.")
//     }
//   }

//   const handleSaveCompany = async () => {
//     try {
//       if (editingIndex !== null) {
//         const updatedCompanies = [...companies]
//         updatedCompanies[editingIndex] = newCompany
//         setCompanies(updatedCompanies)
//         setEditingIndex(null)
//       } else {
//         await handleAddCompany(newCompany)
//       }
//       setNewCompany({
//         companyName: "",
//         totalPallet: "",
//         bagPerPallet: "",
//         totalBag: "",
//         weightPerBag: "",
//         totalWeight: "",
//       })
//       setShowModal(false)
//     } catch (error) {
//       console.error("Error saving company:", error)
//     }
//   }

//   const handleDeleteCompany = async id => {
//     try {
//       await deleteRawMaterial(id, token)
//       await fetchRawMaterials()
//     } catch (error) {
//       console.error("Error deleting raw material:", error)
//     }
//   }

//   const handleCompanyChange = companyName => {
//     const selectedCompany = companies.find(
//       company => company.company_name === companyName
//     )
//     if (selectedCompany) {
//       setNewCompany(selectedCompany)
//     } else {
//       setNewCompany({
//         companyName,
//         totalPallet: "",
//         bagPerPallet: "",
//         totalBag: "",
//         weightPerBag: "",
//         totalWeight: "",
//       })
//     }
//   }

//   const handleGeneratePDF = async () => {
//     const doc = new jsPDF()

//     const data = companies.map(company => [
//       company.company_name,
//       company.total_pallet,
//       company.bag_per_pallet,
//       company.total_bag,
//       company.weight_per_bag,
//       company.total_weight,
//     ])

//     const totals = companies.reduce(
//       (acc, company) => {
//         acc.total_pallet += company.total_pallet
//         acc.total_bag += company.total_bag
//         acc.weight_per_bag += company.weight_per_bag
//         acc.total_weight += company.total_weight
//         return acc
//       },
//       {
//         total_pallet: 0,
//         total_bag: 0,
//         weight_per_bag: 0,
//         total_weight: 0,
//       }
//     )

//     data.push([
//       "Total",
//       totals.total_pallet,
//       "",
//       totals.total_bag,
//       totals.weight_per_bag,
//       totals.total_weight,
//     ])

//     const columns = [
//       "Company Name",
//       "Total Pallet",
//       "Bag per Pallet",
//       "Total Bag",
//       "Weight per Bag",
//       "Total Weight",
//     ]

//     doc.autoTable({
//       head: [columns],
//       body: data,
//       startY: 10,
//       headStyles: { fillColor: [255, 0, 0] },
//       theme: "striped",
//     })

//     const pdfBlob = doc.output("blob")

//     const formData = new FormData()
//     formData.append("file", pdfBlob)
//     formData.append("upload_preset", uploadPreset)
//     formData.append("swTest", "raw_materials_reports") // Add your folder name here

//     try {
//       const response = await fetch(cloudinaryUrl, {
//         method: "POST",
//         body: formData,
//       })

//       const data = await response.json()
//       if (data.secure_url) {
//         alert("PDF uploaded to Cloudinary successfully!")
//       } else {
//         console.error("Error uploading PDF to Cloudinary:", data.error.message)
//       }
//     } catch (error) {
//       console.error("Error uploading PDF to Cloudinary:", error)
//     }
//   }

//   const base64Encode = input => {
//     const chars =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
//     let str = input
//     let output = ""

//     for (
//       let block = 0, charCode, i = 0, map = chars;
//       str.charAt(i | 0) || ((map = "="), i % 1);
//       output += map.charAt(63 & (block >> (8 - (i % 1) * 8)))
//     ) {
//       charCode = str.charCodeAt((i += 3 / 4))
//       if (charCode > 0xff) {
//         throw new Error(
//           "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."
//         )
//       }
//       block = (block << 8) | charCode
//     }
//     return output
//   }

//   const handleDownloadPDFByDate = async () => {
//     const formattedDate = selectedDate.toISOString().split("T")[0] // Format the date as YYYY-MM-DD

//     try {
//       const response = await axios.get(
//         `https://api.cloudinary.com/v1_1/dzm4uxenw/resources/search`,
//         {
//           params: {
//             upload_preset: uploadPreset,
//             prefix: formattedDate,
//           },
//           headers: {
//             Authorization: `Basic ${base64Encode(
//               "261962987718217:iatmVSZ4vrlPlzWe2qAas9V2p0A"
//             )}`, // Replace with your Cloudinary API key and secret
//           },
//         }
//       )

//       const data = response.data
//       console.log(data) // Check the response data for debugging

//       if (data.resources.length > 0) {
//         const pdfUrl = data.resources[0].secure_url
//         window.open(pdfUrl, "_blank")
//       } else {
//         alert("No PDF found for the selected date.")
//       }
//     } catch (error) {
//       console.error("Error fetching PDF from Cloudinary:", error)
//     }
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Raw Materials</h1>
//       <button
//         onClick={() => setShowModal(true)}
//         className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
//       >
//         Add & Edit RawMaterial
//       </button>
//       <button
//         onClick={handleGeneratePDF}
//         className="mb-4 ml-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
//       >
//         Generate PDF
//       </button>
//       <div className="mb-4">
//         <DatePicker
//           selected={selectedDate}
//           onChange={date => setSelectedDate(date)}
//           className="px-4 py-2 border rounded-md"
//         />
//         <button
//           onClick={handleDownloadPDFByDate}
//           className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
//         >
//           Download PDF by Date
//         </button>
//       </div>
//       <div id="pdfContent" className="overflow-x-auto">
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 border-b">Sr. No.</th>
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
//               <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
//                 <td className="px-4 py-2">{index + 1}</td>
//                 <td className="px-4 py-2">{company.company_name}</td>
//                 <td className="px-4 py-2">{company.total_pallet}</td>
//                 <td className="px-4 py-2">{company.bag_per_pallet}</td>
//                 <td className="px-4 py-2">{company.total_bag}</td>
//                 <td className="px-4 py-2">{company.weight_per_bag}</td>
//                 <td className="px-4 py-2">{company.total_weight}</td>
//                 <td className="px-4 py-2">
//                   <button
//                     onClick={() => handleDeleteCompany(company.id)}
//                     className="px-2 py-1 ml-2 bg-red-500 text-white rounded-md hover:bg-red-700"
//                   >
//                     Delete
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
//           companyNames={companyNames}
//           companies={companies}
//           handleCompanyChange={handleCompanyChange}
//           fetchRawMaterials={fetchRawMaterials}
//         />
//       )}
//     </div>
//   )
// }

// export default RawMaterials

// export default RawMaterials
import React, { useState, useEffect } from "react"
import Modal from "./Modal"
import { useNavigate } from "react-router-dom"

import {
  addRawMaterial,
  deleteRawMaterial,
  getRawMaterials,
  updateRawMaterial,
} from "services/operations/RawMaterialsOps/RawApi"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"
import "jspdf-autotable"
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
    supplierName: "",
    purchaseOrderNo: "",
    salesOrderNo: "",
    descriptionOfGoods: "",
    qty: "",
    weightPerPcs: "",
    paymentTerms: "",
    invoiceDate: "",
    status: "",
    receivedDate: "",
  })
  const [editingIndex, setEditingIndex] = useState(null)
  const token = localStorage.getItem("token")
  useEffect(() => {
    fetchRawMaterials()
  }, [token])
  const fetchRawMaterials = async()=>{
    try {
      const rawMaterials = await getRawMaterials(token)
      setCompanies(rawMaterials)
      console.log(companies, "@Companies")
      const uniqueCompanyNames = [
        ...new Set(rawMaterials.map(material => material.company_name)),
      ]
      setCompanyNames(uniqueCompanyNames)
    } catch (error) {
      console.error("Error fetching raw materials:", error)
    }
  }
  const handleAddCompany = async company => {
    try {
      const response = await addRawMaterial(company, token)
      if (response.status === "success") {
        await fetchRawMaterials() // Fetch updated raw materials
        setShowModal(false)
      } else {
        console.error("Error adding raw material:", response.message)
      }
    } catch (error) {
      console.error("Error adding raw material:", error)
    }
  }
  const handleEditCompany = async () => {
    // setNewCompany({ ...companies[index] }) // Copying the company data properly
    // setEditingIndex(index)

    try {
      setShowModal(true)
      const processedData = {
        id: newCompany.id,
        company_name: newCompany.companyName,
        total_pallet: parseInt(newCompany.newCompany.totalPallet, 10),
        bag_per_pallet: parseInt(newCompany.newCompany.bagPerPallet, 10),
        total_bag: parseInt(newCompany.total_bag || newCompany.totalBag, 10),
        weight_per_bag: parseFloat(newCompany.newCompany.weightPerBag),
        total_weight: parseFloat(newCompany.newCompany.totalWeight),
      }
      await updateRawMaterial(processedData, token)
      alert("Company updated successfully!")
      handleCloseModal()
      // Fetch updated raw materials after update
      await fetchRawMaterials() // Assuming fetchRawMaterials is available from props or context
    } catch (error) {
      console.error("Failed to update company:", error)
      alert("Failed to update company. Please try again.")
    }
  }
  const handleSaveCompany = async () => {
    try {
      if (editingIndex !== null) {
        const updatedCompanies = [...companies]
        updatedCompanies[editingIndex] = newCompany
        setCompanies(updatedCompanies)
        setEditingIndex(null)

        // Example of saving edited data to API (you should implement this logic)
        // const response = await editRawMaterial(newCompany.id, newCompany, token);
        // console.log("Edited raw material:", response.message);
      } else {
        await handleAddCompany(newCompany)
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
    } catch (error) {
      console.error("Error saving company:", error)
    }
  }
  const handleDeleteCompany = async id => {
    try {
      await deleteRawMaterial(id, token)
      await fetchRawMaterials()
    } catch (error) {
      console.error("Error deleting raw material:", error)
    }
  }
  const handleCompanyChange = companyName => {
    const selectedCompany = companies.find(
      company => company.company_name === companyName
    )
    if (selectedCompany) {
      setNewCompany(selectedCompany)
    } else {
      setNewCompany({
        companyName,
        totalPallet: "",
        bagPerPallet: "",
        totalBag: "",
        weightPerBag: "",
        totalWeight: "",
      })
    }
  }
  const handleGeneratePDF = () => {
    const doc = new jsPDF()
    // Extract data from the companies state
    const data = companies.map(company => [
      company.company_name,
      company.total_pallet,
      company.bag_per_pallet,
      company.total_bag,
      company.weight_per_bag,
      company.total_weight,
    ])
    // Calculate totals
    const totals = companies.reduce(
      (acc, company) => {
        acc.total_pallet += company.total_pallet
        acc.total_bag += company.total_bag
        acc.weight_per_bag += company.weight_per_bag
        acc.total_weight += company.total_weight
        return acc
      },
      {
        total_pallet: 0,
        total_bag: 0,
        weight_per_bag: 0,
        total_weight: 0,
      }
    )
    // Add totals row to the data
    data.push([
      "Total",
      totals.total_pallet,
      "",
      totals.total_bag,
      totals.weight_per_bag,
      totals.total_weight,
    ])
    // Define table columns
    const columns = [
      "Company Name",
      "Total Pallet",
      "Bag per Pallet",
      "Total Bag",
      "Weight per Bag",
      "Total Weight",
    ]
    // Generate PDF with autoTable
    doc.autoTable({
      head: [columns],
      body: data,
      startY: 10,
      headStyles: { fillColor: [255, 0, 0] },
      theme: "striped",
    })
    doc.save("raw-materials-report.pdf")
  }

  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate("/dashboard/purchase-order");
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Raw Materials</h1>
      <button
        onClick={handleRedirect}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Add & Edit RawMaterial
      </button>
      <button
        onClick={handleGeneratePDF}
        className="mb-4 ml-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
      >
        Generate PDF
      </button>
      <div id="pdfContent" className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Sr. No.</th>
              <th className="px-4 py-2 border-b">Company Name</th>
              <th className="px-4 py-2 border-b">Total Pallet</th>
              <th className="px-4 py-2 border-b">Bag per Pallet</th>
              <th className="px-4 py-2 border-b">Total Bag</th>
              <th className="px-4 py-2 border-b">Weight per Bag</th>
              <th className="px-4 py-2 border-b">Total Weight</th>

              <th className="px-4 py-2 border-b">Supplier Name</th>
              <th className="px-4 py-2 border-b">Purchase Order No </th>
              <th className="px-4 py-2 border-b">Sales Order No </th>
              <th className="px-4 py-2 border-b">
                Material / Grade / Discription of Goods{" "}
              </th>
              <th className="px-4 py-2 border-b">Qty</th>
              <th className="px-4 py-2 border-b">Weight/Pcs</th>
              <th className="px-4 py-2 border-b">Payment Terms</th>
              <th className="px-4 py-2 border-b">
                From (Invoice Date / BL Date)
              </th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Received Date</th>

              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{company.company_name}</td>
                <td className="px-4 py-2">{company.total_pallet}</td>
                <td className="px-4 py-2">{company.bag_per_pallet}</td>
                <td className="px-4 py-2">{company.total_bag}</td>
                <td className="px-4 py-2">{company.weight_per_bag}</td>
                <td className="px-4 py-2">{company.total_weight}</td>
                <td className="px-4 py-2 border-b">{company.supplier_name}</td>
                <td className="px-4 py-2 border-b">
                  {company.purchase_order_no}
                </td>
                <td className="px-4 py-2 border-b">{company.sales_order_no}</td>
                <td className="px-4 py-2 border-b">
                  {company.description_of_goods}
                </td>
                <td className="px-4 py-2 border-b">{company.qty}</td>
                <td className="px-4 py-2 border-b">{company.weight_per_pcs}</td>
                <td className="px-4 py-2 border-b">{company.payment_terms}</td>
                <td className="px-4 py-2 border-b">{company.invoice_date}</td>
                <td className="px-4 py-2 border-b">{company.status}</td>
                <td className="px-4 py-2 border-b">{company.received_date}</td>

                <td className="px-4 py-2">
                  {/* <button
                    onClick={() => handleEditCompany(index)}
                    className="px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-700"
                  >
                    Edit
                  </button> */}
                  <button
                    onClick={() => handleDeleteCompany(company.id)}
                    className="px-2 py-1 ml-2 bg-red-500 text-white rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          newCompany={newCompany}
          setNewCompany={setNewCompany}
          handleSaveCompany={handleSaveCompany}
          companyNames={companyNames}
          companies={companies} // Pass the companies array
          handleCompanyChange={handleCompanyChange}
          fetchRawMaterials={fetchRawMaterials} // Pass fetchRawMaterials
        />
      )} */}
    </div>
  )
}
export default RawMaterials
