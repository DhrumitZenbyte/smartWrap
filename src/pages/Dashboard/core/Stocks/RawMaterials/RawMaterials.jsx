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
import React, { useState, useEffect } from "react"
import Modal from "./Modal"
import { useNavigate } from "react-router-dom"
import {
  Col,
  Row,
  UncontrolledTooltip,
  Form,
  Input,
  FormFeedback,
  Label,
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import {
  addRawMaterial,
  deleteRawMaterial,
  getRawMaterials,
  updateRawMaterial,
} from "services/operations/RawMaterialsOps/RawApi"
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  pdf,
  Font,
} from "@react-pdf/renderer"
import companylogo from "../../../../../assets/images/brands/smartWrap.jpeg"
import Breadcrumbs from "../../../../../components/Common/Breadcrumb"
import RawMaterialTable from "./RawMaterialTable"

const RawMaterials = () => {
  document.title = "Raw Materials | Smart Wrap Panel"

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
  const [selectedDate, setSelectedDate] = useState("")

  // Function to handle the date change
  const handleDateChange = event => {
    setSelectedDate(event.target.value)
  }

  Font.register({
    family: "Times-Bold",
    src: "https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2",
    fontStyle: "normal",
    fontWeight: "ultrabold",
  })

  console.log(companies, "@@companies")

  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#FFF",
      padding: 10,
    },
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      borderBottom: "1px solid #EEE",
    },
    title: {
      fontSize: 18,
      textAlign: "center",
      marginBottom: 10,
      marginTop: 10,
      fontWeight: "bold",
    },
    logo: {
      width: 100,
      height: 50,
    },
    address: {
      textAlign: "right",
      fontSize: 12,
    },
    table: { display: "table", width: "auto", margin: 10 },
    tableRow: { flexDirection: "row" },
    tableColHeader: {
      width: "6.25%", // Adjusted width to fit all columns within the page
      borderStyle: "solid",
      borderWidth: 1,
      backgroundColor: "#DCDCDC",
      padding: 2, // Adding padding for better readability
    },
    tableCol: {
      width: "6.25%", // Adjusted width to fit all columns within the page
      borderStyle: "solid",
      borderWidth: 1,
      padding: 2, // Adding padding for better readability
    },
    tableCellHeader: {
      margin: 5,
      fontWeight: "bold",
      fontSize: 8,
      textAlign: "center",
    },
    tableCell: {
      margin: 5,
      fontSize: 8,
      textAlign: "center",
      wordWrap: "break-word",
    },
  })

  // Function to generate PDF by date
  const handleGeneratePdfByDate = async () => {
    const totalPalletSum = companies.reduce(
      (sum, company) => sum + (company.total_pallet || 0),
      0
    )
    const bagPerPalletSum = companies.reduce(
      (sum, company) => sum + (company.bag_per_pallet || 0),
      0
    )
    const totalBagSum = companies.reduce(
      (sum, company) => sum + (company.total_bag || 0),
      0
    )
    const weightPerBagSum = companies.reduce(
      (sum, company) => sum + (company.weight_per_bag || 0),
      0
    )
    const totalWeightSum = companies.reduce(
      (sum, company) => sum + (company.total_weight || 0),
      0
    )

    try {
      if (!selectedDate) {
        alert("Please select a date.")
        return
      }

      const token = localStorage.getItem("token") // Get the token from localStorage

      if (!token) {
        alert("Token is missing. Please log in.")
        return
      }

      // Append the date as a query parameter
      const response = await fetch(
        `https://api.smartwrapfilms.com/api/company-raw-material-calculation?date_filter=${encodeURIComponent(
          selectedDate
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`, // Add the token in the Authorization header
          },
        }
      )

      const data = await response.json()
      if (data.status === "success") {
        // Use the fetched data to generate the PDF
        const MyDocumentWithDate = () => {
          return (
            <Document>
              <Page size="A3" style={styles.page}>
                <View style={styles.header}>
                  <Image style={styles.logo} src={companylogo} />
                  <View style={styles.address}>
                    <Text>
                      Address: Vaishnavi Summit, Ground Floor, 7th Main, 362001
                    </Text>
                  </View>
                </View>
                <Text style={styles.title}>Purchase Order Receipt</Text>
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    {[
                      "Company Name",
                      "Total Pallet",
                      "Bag per Pallet",
                      "Total Bag",
                      "Weight per Bag",
                      "Total Weight",
                      "Supplier Name",
                      "Purchase Order No",
                      "Sales Order No",
                      "Description of Goods",
                      "Qty",
                      "Weight per Pcs",
                      "Payment Terms",
                      "Invoice Date",
                      "Status",
                      "Received Date",
                    ].map(header => (
                      <View style={styles.tableColHeader} key={header}>
                        <Text style={styles.tableCellHeader}>{header}</Text>
                      </View>
                    ))}
                  </View>
                  {companies.map((company, index) => (
                    <View key={index} style={styles.tableRow}>
                      {[
                        company.company_name,
                        company.total_pallet,
                        company.bag_per_pallet,
                        company.total_bag,
                        company.weight_per_bag,
                        company.total_weight,
                        company.supplier_name,
                        company.purchase_order_no,
                        company.sales_order_no,
                        company.description_of_goods,
                        company.qty,
                        company.weight_per_pcs,
                        company.payment_terms,
                        company.invoice_date,
                        company.status,
                        company.received_date,
                      ].map((cell, cellIndex) => (
                        <View style={styles.tableCol} key={cellIndex}>
                          <Text style={styles.tableCell}>{cell}</Text>
                        </View>
                      ))}
                    </View>
                  ))}
                  <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>Total</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>
                        {totalPalletSum}
                      </Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>
                        {bagPerPalletSum}
                      </Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>{totalBagSum}</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>
                        {weightPerBagSum}
                      </Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>
                        {totalWeightSum}
                      </Text>
                    </View>
                  </View>
                </View>
              </Page>
            </Document>
          )
        }

        // Generate and download PDF
        const pdfBlob = await pdf(<MyDocumentWithDate />).toBlob()
        const url = URL.createObjectURL(pdfBlob)
        const link = document.createElement("a")
        link.href = url
        link.download = `raw-materials-report-${selectedDate}.pdf`
        link.click()
      } else {
        alert("Failed to fetch data for the selected date.")
      }
    } catch (error) {
      console.error("Error generating PDF by date:", error)
    }
  }

  const token = localStorage.getItem("token")

  useEffect(() => {
    fetchRawMaterials()
  }, [token])

  const fetchRawMaterials = async () => {
    try {
      const rawMaterials = await getRawMaterials(token)
      setCompanies(rawMaterials)
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
        await fetchRawMaterials()
        setShowModal(false)
      } else {
        console.error("Error adding raw material:", response.message)
      }
    } catch (error) {
      console.error("Error adding raw material:", error)
    }
  }

  const handleEditCompany = async () => {
    try {
      setShowModal(true)
      const processedData = {
        id: newCompany.id,
        company_name: newCompany?.companyName,
        total_pallet: parseInt(newCompany?.newCompany?.totalPallet, 10),
        bag_per_pallet: parseInt(newCompany?.newCompany?.bagPerPallet, 10),
        total_bag: parseInt(newCompany?.total_bag || newCompany?.totalBag, 10),
        weight_per_bag: parseFloat(newCompany?.newCompany?.weightPerBag),
        total_weight: parseFloat(newCompany?.newCompany?.totalWeight),
      }
      await updateRawMaterial(processedData, token)
      alert("Company updated successfully!")
      handleCloseModal()
      await fetchRawMaterials()
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

  // Register a font that supports bold

  const MyDocument = () => {
    // Calculate totals
    // Calculate totals
    const totalPalletSum = companies.reduce(
      (sum, company) => sum + (company.total_pallet || 0),
      0
    )
    const bagPerPalletSum = companies.reduce(
      (sum, company) => sum + (company.bag_per_pallet || 0),
      0
    )
    const totalBagSum = companies.reduce(
      (sum, company) => sum + (company.total_bag || 0),
      0
    )
    const weightPerBagSum = companies.reduce(
      (sum, company) => sum + (company.weight_per_bag || 0),
      0
    )
    const totalWeightSum = companies.reduce(
      (sum, company) => sum + (company.total_weight || 0),
      0
    )
    const totalQtySum = companies.reduce(
      (sum, company) => sum + (company.qty || 0),
      0
    )
    const weightPerPcsSum = companies.reduce(
      (sum, company) => sum + (company.weight_per_pcs || 0),
      0
    )

    return (
      <Document>
        <Page size="A3" style={styles.page}>
          <View style={styles.header}>
            <Image style={styles.logo} src={companylogo} />
            <View style={styles.address}>
              <Text>
                Address: Vaishnavi Summit, Ground Floor, 7th Main,362001
              </Text>
            </View>
          </View>
          <Text style={styles.title}>Purchase Order Receipt</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Company Name</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Total Pallet</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Bag per Pallet</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Total Bag</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Weight per Bag</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Total Weight</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Supplier Name</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Purchase Order No</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Sales Order No</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Description of Goods</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Qty</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Weight per Pcs</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Payment Terms</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Invoice Date</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Status</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Received Date</Text>
              </View>
            </View>
            {companies.map((company, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{company.company_name}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{company.total_pallet}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{company.bag_per_pallet}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{company.total_bag}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{company.weight_per_bag}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{company.total_weight}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{company.supplier_name}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {company.purchase_order_no}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{company.sales_order_no}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {company.description_of_goods}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{company.qty}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{company.weight_per_pcs}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{company.payment_terms}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{company.invoice_date}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{company.status}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{company.received_date}</Text>
                </View>
              </View>
            ))}
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHeader}>Total</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHeader}></Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHeader}>{totalPalletSum}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHeader}>{bagPerPalletSum}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHeader}>{totalBagSum}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHeader}>{weightPerBagSum}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHeader}>{totalWeightSum}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHeader}></Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHeader}></Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHeader}></Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHeader}>{totalQtySum}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHeader}>{weightPerPcsSum}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHeader}></Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHeader}></Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHeader}></Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHeader}></Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    )
  }
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate("/dashboard/purchase-order")
  }

  const handleCloseModal = () => {
    setShowModal(false)
    console.log(showModal, "@@showmodal")
    // Use a timeout to reset form state after modal closes
  }

  return (
    <>
      <div className="container-fluid">
        <Breadcrumbs title="Smart-wrap" breadcrumbItem="Raw - Materials" />
        <Row>
          <Col lg="12">
            <Card>
              <CardBody className="border-bottom">
                <div className="flex justify-between gap-2">
                  <div className="position-relative">
                    <Input
                      type="text"
                      className="form-control"
                      id="searchJob"
                      autoComplete="off"
                      placeholder="Search..."
                    />
                  </div>
                  <div className="flex justify-end items-center  gap-2">
                    <label className="block mb-4">
                      Select Date:
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className="border rounded-md p-2"
                      />
                    </label>
                    <button
                      onClick={handleGeneratePdfByDate}
                      className="mb-4 px-2 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700"
                    >
                      Generate PDF by Date
                    </button>
                    <PDFDownloadLink
                      document={<MyDocument />}
                      fileName="raw-materials-report.pdf"
                    >
                      <button className="mb-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
                        Generate PDF
                      </button>
                    </PDFDownloadLink>
                    <button
                      onClick={handleRedirect}
                      className="mb-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700"
                    >
                      Add & Edit Raw Material
                    </button>
                  </div>
                  {/* <div
                    id="pdfContent"
                    className="overflow-x-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarBg hover:scrollbar-thumb-scrollbarThumbHover"
                  >
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
                          <th className="px-4 py-2 border-b">
                            Purchase Order No
                          </th>
                          <th className="px-4 py-2 border-b">Sales Order No</th>
                          <th className="px-4 py-2 border-b">
                            Description of Goods
                          </th>
                          <th className="px-4 py-2 border-b">Qty</th>
                          <th className="px-4 py-2 border-b">Weight per Pcs</th>
                          <th className="px-4 py-2 border-b">Payment Terms</th>
                          <th className="px-4 py-2 border-b">Invoice Date</th>
                          <th className="px-4 py-2 border-b">Status</th>
                          <th className="px-4 py-2 border-b">Received Date</th>
                          <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {companies.map((company, index) => (
                          <tr key={index}>
                            <td className="px-4 py-2 border-b">{index + 1}</td>
                            <td className="px-4 py-2 border-b">
                              {company.company_name}
                            </td>
                            <td className="px-4 py-2 border-b">
                              {company.total_pallet}
                            </td>
                            <td className="px-4 py-2 border-b">
                              {company.bag_per_pallet}
                            </td>
                            <td className="px-4 py-2 border-b">
                              {company.total_bag}
                            </td>
                            <td className="px-4 py-2 border-b">
                              {company.weight_per_bag}
                            </td>
                            <td className="px-4 py-2 border-b">
                              {company.total_weight}
                            </td>
                            <td className="px-4 py-2 border-b">
                              {company.supplier_name}
                            </td>
                            <td className="px-4 py-2 border-b">
                              {company.purchase_order_no}
                            </td>
                            <td className="px-4 py-2 border-b">
                              {company.sales_order_no}
                            </td>
                            <td className="px-4 py-2 border-b">
                              {company.description_of_goods}
                            </td>
                            <td className="px-4 py-2 border-b">
                              {company.qty}
                            </td>
                            <td className="px-4 py-2 border-b">
                              {company.weight_per_pcs}
                            </td>
                            <td className="px-4 py-2 border-b">
                              {company.payment_terms}
                            </td>
                            <td className="px-1 py-2 border-b">
                              {company.invoice_date}
                            </td>
                            <td className="px-4 py-2 border-b">
                              {company.status}
                            </td>
                            <td className="px-1 py-2 border-b">
                              {company.received_date}
                            </td>
                            <td className="px-4 py-2 border-b">
                              <button
                                onClick={() => handleEditCompany(index)}
                                className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-700 mr-2"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteCompany(company.id)}
                                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div> */}
                </div>
                <RawMaterialTable
                  data={companies}
                  handleDeleteCompany={handleDeleteCompany}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      {showModal && (
        <Modal
          isOpen={showModal}
          onRequestClose={handleCloseModal}
          style={{
            content: {
              width: "50%",
              height: "80%",
              margin: "auto",
            },
          }}
        >
          <div>
            <h2 className="text-xl font-bold mb-4">
              {editingIndex !== null ? "Edit Company" : "Add Company"}
            </h2>
            <form>
              <label className="block mb-2">
                Company Name:
                <select
                  value={newCompany.companyName}
                  onChange={e => handleCompanyChange(e.target.value)}
                  className="border rounded-md p-2 w-full"
                >
                  <option value="">Select a company</option>
                  {companyNames.map((companyName, index) => (
                    <option key={index} value={companyName}>
                      {companyName}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block mb-2">
                Total Pallet:
                <input
                  type="number"
                  value={newCompany.totalPallet}
                  onChange={e =>
                    setNewCompany({
                      ...newCompany,
                      totalPallet: e.target.value,
                    })
                  }
                  className="border rounded-md p-2 w-full"
                />
              </label>
              <label className="block mb-2">
                Bag per Pallet:
                <input
                  type="number"
                  value={newCompany.bagPerPallet}
                  onChange={e =>
                    setNewCompany({
                      ...newCompany,
                      bagPerPallet: e.target.value,
                    })
                  }
                  className="border rounded-md p-2 w-full"
                />
              </label>
              <label className="block mb-2">
                Total Bag:
                <input
                  type="number"
                  value={newCompany.totalBag}
                  onChange={e =>
                    setNewCompany({ ...newCompany, totalBag: e.target.value })
                  }
                  className="border rounded-md p-2 w-full"
                />
              </label>
              <label className="block mb-2">
                Weight per Bag:
                <input
                  type="number"
                  step="0.01"
                  value={newCompany.weightPerBag}
                  onChange={e =>
                    setNewCompany({
                      ...newCompany,
                      weightPerBag: e.target.value,
                    })
                  }
                  className="border rounded-md p-2 w-full"
                />
              </label>
              <label className="block mb-2">
                Total Weight:
                <input
                  type="number"
                  step="0.01"
                  value={newCompany.totalWeight}
                  onChange={e =>
                    setNewCompany({
                      ...newCompany,
                      totalWeight: e.target.value,
                    })
                  }
                  className="border rounded-md p-2 w-full"
                />
              </label>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={handleSaveCompany}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  {editingIndex !== null ? "Update" : "Add"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  )
}

export default RawMaterials
