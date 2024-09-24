// import React, { useState } from "react"
// import BankModal from "./BankModal"
// import axios from "axios"

// const FormInput = ({ label, name, type, value, onChange }) => {
//   const commonClasses =
//     "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//   return (
//     <div className="col-span-1">
//       <label className="block text-sm font-medium text-gray-700">{label}</label>
//       {type === "textarea" ? (
//         <textarea
//           name={name}
//           value={value}
//           onChange={onChange}
//           className={commonClasses}
//         />
//       ) : (
//         <input
//           type={type}
//           name={name}
//           value={value}
//           onChange={onChange}
//           className={commonClasses}
//         />
//       )}
//     </div>
//   )
// }

// const ProfileSettings = () => {
//   const [formData, setFormData] = useState({
//     companyName: "",
//     contactPersonName: "",
//     otpMobileNo: "",
//     mobile: "",
//     email: "",
//     phoneNo: "",
//     faxNo: "",
//     website: "",
//     companyRegister: "",
//     companyType: "",
//     address: "",
//     portalAddress: "",
//     preCarriageBy: "",
//     stateOfOrigin: "",
//     deliveryPeriod: "",
//     termsOfDelivery: "",
//     placeOfReceipt: "",
//     portOfLoading: "",
//     partialShipment: "",
//     districtOfOrigin: "",
//     transshipment: "",
//     varietyOfQuality: "",
//     companyLogo: null,
//     signUpload: null,
//     gstNo: "",
//     lutNo: "",
//     cinNo: "",
//     gstCircularNo: "",
//     stateCode: "",
//     leiNo: "",
//     field3: "",
//     panNo: "",
//     lutExpiry: "",
//     rcmcNo: "",
//     dateOfFiling: "",
//     rexNumber: "",
//     field1: "",
//     field4: "",
//     iecNo: "",
//     binNo: "",
//     rcmcExpiry: "",
//     circularNo: "",
//     aeoNo: "",
//     field2: "",
//     field5: "",
//     performaInvoiceRemark: "",
//     range: "",
//     division: "",
//     commissionerate: "",
//     locationCode: "",
//     annexureRemark: "",
//     MethodUsedforVGM: "",
//     Weighmentslipno: "",
//     NameAndDesignationOfOffice: "",
//     WeighbridgeRegistrationNo: "",
//     ShipperAddress: "",
//     VGMRemarks: "",
//     Shippername: "",
//     ExportUnderDetail1: "",
//     ExportUnderDetail2: "",
//     ExportRemarks: "",
//   })

//   const [banks, setBanks] = useState([])
//   const [showBankPopup, setShowBankPopup] = useState(false)
//   const [selectedBank, setSelectedBank] = useState(null)

//   const [newBank, setNewBank] = useState({
//     bankName: "",
//     bankAddress: "",
//     accountName: "",
//     accountNo: "",
//     ifscCode: "",
//     swiftCode: "",
//     bankAdCodeNo: "",
//     ibanNo: "",
//   })

//   // Function to handle changes in bank selection
//   const handleBankChange = bankName => {
//     // Find the selected bank from the banks array
//     const selected = banks.find(bank => bank.bankName === bankName)
//     setSelectedBank(selected)
//   }

//   // Function to handle adding a new bank
//   const handleAddBank = () => {
//     // Logic to add new bank to banks array
//     console.log("Adding new bank:", newBank)
//     setBanks([...banks, newBank])
//     setShowBankPopup(false) // Close the bank popup after adding
//     setNewBank({
//       // Clear the new bank form
//       bankName: "",
//       bankAddress: "",
//       accountName: "",
//       accountNo: "",
//       ifscCode: "",
//       swiftCode: "",
//       bankAdCodeNo: "",
//       ibanNo: "",
//     })
//   }

//   const handleChange = e => {
//     const { name, value, files } = e.target
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     })
//     console.log(formData, "formdata")
//   }

// //  const handleSubmit = async e => {
// //    e.preventDefault()
// //    try {
// //      const token =
// //        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YzU5NjE3OC1mMjExLTRmNDUtYjZhOS1hOTUyOTQxN2I0MTYiLCJqdGkiOiIwYWJiYTI3MDA2ZTM4YzBlNzUxMzc0MDU0ZTg4MzRlYjZhZDE0NGJmMWViMmVmNTQyM2RhNDUwN2JhNTVhNjc5YmQxNWE5MDRhYjFjMjZlOCIsImlhdCI6MTcxOTMzNDQ5Ny42NDUyNjYsIm5iZiI6MTcxOTMzNDQ5Ny42NDUyNzEsImV4cCI6MTczNTE0NTY5Ny4xNzM3NTIsInN1YiI6ImM2MzljZDdiLTgyMTctNGU3OS1iNjhlLTM4ZjI4ODJjOTJjMCIsInNjb3BlcyI6W119.NHpWJZxnnGGlvg7KHMJy_tUtHxWNOf-5AKtBl1jckcpX0eujNMtIG007dgEfAKrrFesc814myaMBHG2MhnaQQLrnikmAFaeQXiqxdGqdLB8VSeZ_zr_YTW0AxRb5FcDL3FS2Uwrtdxhv0Ur6ENRp_H-1sWCufvFYsYUNX07ub_GVdgghT4URzLmtemMGGtvcHG6uzwWhhfNRk_QjiVSIACsCQiaVVjeK_J01-U74S4jQtmw4NQH6JIJhXoOgYRwQ6P6yyKfuCZCdSorewH-3Kv8GimhCn7X_ySPmIoIh1Uqj7pnuwkQaaloLfw7jtKC2-LqXBxGY1ZVycEWf_Y3G9dwrTpNd_3iCKx7IonL5nabRUDvHmVCxl2MIctg1D7ai8g756FA6wW4UNxvbCwC-h4Zalb_RlssR_uuAghs9ZXe-nkOojHCbEPi4a62y-BeM8fRG6epgyMP8mMu7EQ51f2ti4KsNc7B1tl5KpSjzs18_gRXBNuQ6zq0sr9UcknlOy9BMszimiZDIMRUYq_XdzOhlmhHvci-sqb_EKpaqsoNDIx6oTQvRFRFKFYllWTh93fl4vqeOFYjkXbZTOY4b0Xfw9Ciz_XMGwwz6yVz24vHxY6wlgiewbKDNAxUOjeNAKeAQ1w-bgDZCLh8RGSrl02gMH5FsTdQ3HwtZIGebdFM"

// //      const response = await fetch("http://127.0.0.1:8000/api/company-profile", {
// //        method: "PUT",
// //        headers: {
// //          "Content-Type": "application/json",
// //          Authorization: `Bearer ${token}`, // Include bearer token here
// //        },
// //        body: JSON.stringify(formData),
// //      })
// //      console.log(response, "responseee");
// //      if (!response.ok) {
// //        throw new Error("Failed to update company profile")
// //      }

// //      console.log("Company profile updated successfully")
// //      // Handle success as per your application's requirement (e.g., show a success message)
// //    } catch (error) {
// //      console.error("Error updating company profile:", error)
// //      // Handle error state or display error to the user
// //    }
// //  }
// const handleSubmit = async e => {
//   e.preventDefault()

//        const token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YzU5NjE3OC1mMjExLTRmNDUtYjZhOS1hOTUyOTQxN2I0MTYiLCJqdGkiOiIwYWJiYTI3MDA2ZTM4YzBlNzUxMzc0MDU0ZTg4MzRlYjZhZDE0NGJmMWViMmVmNTQyM2RhNDUwN2JhNTVhNjc5YmQxNWE5MDRhYjFjMjZlOCIsImlhdCI6MTcxOTMzNDQ5Ny42NDUyNjYsIm5iZiI6MTcxOTMzNDQ5Ny42NDUyNzEsImV4cCI6MTczNTE0NTY5Ny4xNzM3NTIsInN1YiI6ImM2MzljZDdiLTgyMTctNGU3OS1iNjhlLTM4ZjI4ODJjOTJjMCIsInNjb3BlcyI6W119.NHpWJZxnnGGlvg7KHMJy_tUtHxWNOf-5AKtBl1jckcpX0eujNMtIG007dgEfAKrrFesc814myaMBHG2MhnaQQLrnikmAFaeQXiqxdGqdLB8VSeZ_zr_YTW0AxRb5FcDL3FS2Uwrtdxhv0Ur6ENRp_H-1sWCufvFYsYUNX07ub_GVdgghT4URzLmtemMGGtvcHG6uzwWhhfNRk_QjiVSIACsCQiaVVjeK_J01-U74S4jQtmw4NQH6JIJhXoOgYRwQ6P6yyKfuCZCdSorewH-3Kv8GimhCn7X_ySPmIoIh1Uqj7pnuwkQaaloLfw7jtKC2-LqXBxGY1ZVycEWf_Y3G9dwrTpNd_3iCKx7IonL5nabRUDvHmVCxl2MIctg1D7ai8g756FA6wW4UNxvbCwC-h4Zalb_RlssR_uuAghs9ZXe-nkOojHCbEPi4a62y-BeM8fRG6epgyMP8mMu7EQ51f2ti4KsNc7B1tl5KpSjzs18_gRXBNuQ6zq0sr9UcknlOy9BMszimiZDIMRUYq_XdzOhlmhHvci-sqb_EKpaqsoNDIx6oTQvRFRFKFYllWTh93fl4vqeOFYjkXbZTOY4b0Xfw9Ciz_XMGwwz6yVz24vHxY6wlgiewbKDNAxUOjeNAKeAQ1w-bgDZCLh8RGSrl02gMH5FsTdQ3HwtZIGebdFM"
//   const url = "http://127.0.0.1:8000/api/company-profile"

//   try {
//     const response = await axios.put(url, formData, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     })

//     console.log("Company profile updated successfully:", response.data)
//     // Handle success as per your application's requirement (e.g., show a success message)
//   } catch (error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       console.error(
//         "Server responded with non-2xx status:",
//         error.response.status,
//         error.response.data
//       )
//     } else if (error.request) {
//       // The request was made but no response was received
//       console.error("Request made but no response received:", error.request)
//     } else {
//       // Something happened in setting up the request that triggered an error
//       console.error("Error setting up the request:", error.message)
//     }
//     // Handle error state or display error to the user
//   }
// }

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
//       <form
//         className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
//         onSubmit={handleSubmit}
//       >
//         <FormInput
//           label="Company Name"
//           name="companyName"
//           value={formData.companyName}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Contact Person Name"
//           name="contactPersonName"
//           value={formData.contactPersonName}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="OTP Mobile No"
//           name="otpMobileNo"
//           value={formData.otpMobileNo}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Mobile"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Email"
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <FormInput
//           label="Phone No"
//           name="phoneNo"
//           value={formData.phoneNo}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Fax No"
//           name="faxNo"
//           value={formData.faxNo}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Website"
//           name="website"
//           value={formData.website}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Company Register"
//           name="companyRegister"
//           value={formData.companyRegister}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Address"
//           name="address"
//           type="textarea"
//           value={formData.address}
//           onChange={handleChange}
//         />
//         <FormInput
//           label="portalAddress"
//           name="portalAddress"
//           type="textarea"
//           value={formData.portalAddress}
//           onChange={handleChange}
//         />
//         <FormInput
//           label="companyType"
//           name="companyType"
//           type="textarea"
//           value={formData.companyType}
//           onChange={handleChange}
//         />

//         {/* company registrartion details */}
//         <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
//           <p className="text-2xl font-bold mb-4">
//             Company Registration Details
//           </p>
//         </div>
//         <FormInput
//           label="GST No"
//           name="gstNo"
//           value={formData.gstNo}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="LUT No"
//           name="lutNo"
//           value={formData.lutNo}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="CIN No"
//           name="cinNo"
//           value={formData.cinNo}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="GST Circular No"
//           name="gstCircularNo"
//           value={formData.gstCircularNo}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="State Code"
//           name="stateCode"
//           value={formData.stateCode}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="LEI No"
//           name="leiNo"
//           value={formData.leiNo}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Field 3"
//           name="field3"
//           value={formData.field3}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="PAN No"
//           name="panNo"
//           value={formData.panNo}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="LUT Expiry"
//           name="lutExpiry"
//           value={formData.lutExpiry}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="RCMC No"
//           name="rcmcNo"
//           value={formData.rcmcNo}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Date of Filing"
//           name="dateOfFiling"
//           value={formData.dateOfFiling}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="REX Number"
//           name="rexNumber"
//           value={formData.rexNumber}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Field 1"
//           name="field1"
//           value={formData.field1}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Field 4"
//           name="field4"
//           value={formData.field4}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="IEC No"
//           name="iecNo"
//           value={formData.iecNo}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="BIN No"
//           name="binNo"
//           value={formData.binNo}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="RCMC Expiry"
//           name="rcmcExpiry"
//           value={formData.rcmcExpiry}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Circular No"
//           name="circularNo"
//           value={formData.circularNo}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="AEO No"
//           name="aeoNo"
//           value={formData.aeoNo}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Field 2"
//           name="field2"
//           value={formData.field2}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Field 5"
//           name="field5"
//           value={formData.field5}
//           onChange={handleChange}
//           type="text"
//         />

//         {/* Company settings */}
//         <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
//           <p className="text-2xl font-bold mb-4">Company Settings</p>
//         </div>
//         <FormInput
//           label="Pre Carriage By"
//           name="preCarriageBy"
//           value={formData.preCarriageBy}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="State of Origin"
//           name="stateOfOrigin"
//           value={formData.stateOfOrigin}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Delivery Period"
//           name="deliveryPeriod"
//           value={formData.deliveryPeriod}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Terms Of Delivery"
//           name="termsOfDelivery"
//           value={formData.termsOfDelivery}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Place Of Receipt"
//           name="placeOfReceipt"
//           value={formData.placeOfReceipt}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Port Of Loading"
//           name="portOfLoading"
//           value={formData.portOfLoading}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Partial Shipment"
//           name="partialShipment"
//           value={formData.partialShipment}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="District Of Origin"
//           name="districtOfOrigin"
//           value={formData.districtOfOrigin}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Trans Shipment"
//           name="transshipment"
//           value={formData.transshipment}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Variety Of Quality"
//           name="varietyOfQuality"
//           value={formData.varietyOfQuality}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Company Logo"
//           name="companyLogo"
//           type="file"
//           onChange={handleChange}
//         />
//         <FormInput
//           label="Signature Upload"
//           name="signUpload"
//           type="file"
//           onChange={handleChange}
//         />
//         <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
//           <p className="text-2xl font-bold mb-4">Performa Details</p>
//         </div>
//         <FormInput
//           label="Performa Invoice Remark"
//           name="performaInvoiceRemark"
//           value={formData.performaInvoiceRemark}
//           onChange={handleChange}
//           type="text"
//         />
//         <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
//           <p className="text-2xl font-bold mb-4">Annexure Details</p>
//         </div>
//         <FormInput
//           label="Range"
//           name="range"
//           value={formData.range}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Division"
//           name="division"
//           value={formData.division}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Commissionerate"
//           name="commissionerate"
//           value={formData.commissionerate}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Location Code"
//           name="locationCode"
//           value={formData.locationCode}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Annexure Remark"
//           name="annexureRemark"
//           value={formData.annexureRemark}
//           onChange={handleChange}
//           type="text"
//         />
//         <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
//           <p className="text-2xl font-bold mb-4">VGM Details</p>
//         </div>
//         <FormInput
//           label="Shipper name"
//           name="Shippername"
//           value={formData.Shippername}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Method Used for VGM"
//           name="MethodUsedforVGM"
//           value={formData.MethodUsedforVGM}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Weighment slip no."
//           name="Weighmentslipno"
//           value={formData.Weighmentslipno}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Name and designation of office"
//           name="NameAndDesignationOfOffice"
//           value={formData.NameAndDesignationOfOffice}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Weighbridge Registration no"
//           name="WeighbridgeRegistrationNo"
//           value={formData.WeighbridgeRegistrationNo}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Shipper Address"
//           name="ShipperAddress"
//           value={formData.ShipperAddress}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="VGM remarks"
//           name="VGMRemarks"
//           value={formData.VGMRemarks}
//           onChange={handleChange}
//           type="text"
//         />
//         {/* Bank Details */}
//         <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
//           <p className="text-2xl font-bold mb-4">Bank Details</p>
//           <div className="flex items-center mb-4">
//             <label className="mr-2">Select Bank:</label>
//             <select
//               className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               onChange={e => handleBankChange(e.target.value)}
//             >
//               <option value="">Select Bank</option>
//               {banks.map((bank, index) => (
//                 <option key={index} value={bank.bankName}>
//                   {bank.bankName}
//                 </option>
//               ))}
//             </select>
//           </div>
//           {/* Render selected bank details */}
//           {selectedBank && (
//             <div className="flex flex-col space-y-2">
//               <div className="flex">
//                 <span className="font-medium mr-2">Bank Name:</span>
//                 <span>{selectedBank.bankName}</span>
//               </div>
//               <div className="flex">
//                 <span className="font-medium mr-2">Bank Address:</span>
//                 <span>{selectedBank.bankAddress}</span>
//               </div>
//               <div className="flex">
//                 <span className="font-medium mr-2">Account Name:</span>
//                 <span>{selectedBank.accountName}</span>
//               </div>
//               <div className="flex">
//                 <span className="font-medium mr-2">Account No:</span>
//                 <span>{selectedBank.accountNo}</span>
//               </div>
//               <div className="flex">
//                 <span className="font-medium mr-2">IFSC Code:</span>
//                 <span>{selectedBank.ifscCode}</span>
//               </div>
//               <div className="flex">
//                 <span className="font-medium mr-2">Swift Code:</span>
//                 <span>{selectedBank.swiftCode}</span>
//               </div>
//               <div className="flex">
//                 <span className="font-medium mr-2">Bank Ad Code No:</span>
//                 <span>{selectedBank.bankAdCodeNo}</span>
//               </div>
//               <div className="flex">
//                 <span className="font-medium mr-2">IBAN No:</span>
//                 <span>{selectedBank.ibanNo}</span>
//               </div>
//             </div>
//           )}
//           {/* Add Bank Button */}
//           <button
//             onClick={() => setShowBankPopup(true)}
//             className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
//           >
//             Add Bank
//           </button>
//         </div>
//         {/* Bank Popup */}
//         <BankModal
//           showBankPopup={showBankPopup}
//           setShowBankPopup={setShowBankPopup}
//           newBank={newBank}
//           setNewBank={setNewBank}
//           handleAddBank={handleAddBank}
//         />
//         {/* End Bank Popup */}

//         <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
//           <p className="text-2xl font-bold mb-4">Export Details</p>
//         </div>
//         <FormInput
//           label="Export Under Detail 1"
//           name="ExportUnderDetail1"
//           value={formData.ExportUnderDetail1}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Export Under Detail 2"
//           name="ExportUnderDetail2"
//           value={formData.ExportUnderDetail2}
//           onChange={handleChange}
//           type="text"
//         />
//         <FormInput
//           label="Export Remarks"
//           name="ExportRemarks"
//           value={formData.ExportRemarks}
//           onChange={handleChange}
//           type="text"
//         />

//         <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
//           >
//             Save Changes
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default ProfileSettings

import React, { useEffect, useState } from "react"
import BankModal from "./BankModal"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { getBankDetails } from "services/operations/ProfileOps/ProfileApi"
import { Link } from "react-router-dom"
import Breadcrumbs from "../../../../components/Common/Breadcrumb"
import {
  Col,
  Row,
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody,
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
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const FormInput = ({ label, name, type, value, onChange }) => {
  const commonClasses =
    "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  return (
    <div className="col-span-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className={commonClasses}
        />
      ) : type === "file" ? (
        <input
          type="file"
          name={name}
          onChange={onChange}
          className={commonClasses}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={commonClasses}
        />
      )}
    </div>
  )
}

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    company_name: "",
    contact_person_name: "",
    mobile: "",
    email: "",
    phone_no: "",
    website: "",
    address: "",
    portal_address: "",
    company_type: "",
    gst_no: "",
    lut_no: "",
    cin_no: "",
    state_code: "",
    lei_no: "",
    field_3: "",
    pan_no: "",
    lut_expiry: "",
    rcmc_no: "",
    date_of_filling_rex_number: "",
    field_1: "",
    field_4: "",
    iec_no: "",
    bin_no: "",
    rcmc_expiry: "",
    circular_no: "",
    aeo_no: "",
    field_2: "",
    field_5: "",
    pre_carriage_by: "",
    state_of_origin: "",
    delivery_period: "",
    terms_of_delivery: "",
    place_of_receipt: "",
    part_of_loading: "",
    partial_shipment: "",
    district_of_origin: "",
    trans_shipment: "",
    variety_of_quality: "",
    company_logo: null,
    signature_upload: null,
    range: "",
    division: "",
    commissionsionerate: "",
    location_code: "",
    annexure_remark: "",
    shipper_name: "",
    method_used_for_vgm: "",
    weighbridge_slip_no: "",
    name_and_designation_of_office: "",
    weighbridge_registration_no: "",
    shipper_address: "",
    vgm_remarks: "",
    bank_id: "",
    export_under_detail_1: "",
    export_under_detail_2: "",
    export_remarks: "",
  })

  const [banks, setBanks] = useState([])
  const [showBankPopup, setShowBankPopup] = useState(false)
  const [selectedBank, setSelectedBank] = useState(null)
  const [companyProfile, setCompanyProfile] = useState(null) // State to hold company profile data

  const [newBank, setNewBank] = useState({
    bank_name: "",
    bank_address: "",
    account_name: "",
    account_no: "",
    ifsc_code: "",
    swift_code: "",
    bank_ad_code_no: "",
    iban_no: "",
  })
  const navigate = useNavigate() // Use the useNavigate hook

  // Function to handle changes in bank selection
  const handleBankChange = bankName => {
    // Find the selected bank from the banks array
    const selected = banks.find(bank => bank.bank_name === bankName)
    setSelectedBank(selected)
  }

  // Function to handle adding a new bank
  const handleAddBank = () => {
    // Logic to add new bank to banks array
    console.log("Adding new bank:", newBank)
    setBanks([...banks, newBank])
    setShowBankPopup(false) // Close the bank popup after adding
    setNewBank({
      // Clear the new bank form
      bank_name: "",
      bank_address: "",
      account_name: "",
      account_no: "",
      ifsc_code: "",
      swift_code: "",
      bank_ad_code_no: "",
      iban_no: "",
    })
  }

  const handleChange = e => {
    const { name, value, files } = e.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }))
    console.log(formData, "@@formData")
  }

  const fetchCompanyProfile = async () => {
    try {
      const apiUrl = "https://api.smartwrapfilms.com/api/company-profile-get"
      const token = localStorage.getItem("token")

      console.log("Fetching company profile...")
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log("API Response:", response.data) // Log the entire response
      if (response.data && response.data.comapny_profile) {
        const { id, created_at, updated_at, deleted_at, ...profileData } =
          response.data.comapny_profile
        setCompanyProfile(profileData) // Set the company profile without unwanted fields
        setFormData(profileData) // Initialize form data with profile data
        console.log("Company profile set:", profileData) // Log the set company profile
      } else {
        console.error("No company profile found in the response")
      }
    } catch (error) {
      console.error("Error fetching company profile:", error)
    }
  }

  useEffect(() => {
    fetchCompanyProfile()
  }, [])

  useEffect(() => {
    const fetchBanks = async () => {
      const token = localStorage.getItem("token")
      try {
        const response = await getBankDetails(token)
        if (response?.status === 200) {
          setBanks(response.data.banks) // Set banks data
          console.log("Banks fetched:", response.data.banks)
        }
      } catch (error) {
        console.error("Error fetching banks:", error)
      }
    }

    fetchBanks()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    const url2 = "https://api.smartwrapfilms.com/api/company-profile"
    const token = localStorage.getItem("token")
    try {
      const response = await axios.put(url2, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.status === 200) {
        // navigate("/dashboard/company-profile") // Navigate to the company profile page
      }
      toast.success(response.data.message)
    } catch (error) {
      if (error.response) {
        console.error(
          "Server responded with non-2xx status:",
          error.response.status,
          error.response.data
        )
      } else if (error.request) {
        console.error("Request made but no response received:", error.request)
      } else {
        console.error("Error setting up the request:", error.message)
      }
    }
  }

  if (!companyProfile) {
    return <p>Loading...</p>
  }

  const handleButtonClick = () => {
    setShowBankPopup(true)
  }

  return (
    <>
      <div className="container-fluid">
        <Breadcrumbs
          title="Smart-wrap"
          breadcrumbItem="Update Company - Profile"
        />
        <Row>
          <Col lg="12">
            <Card>
              <CardBody className="border-bottom">
                <div className="flex justify-between items-center mb-4 gap-2">
                  <p className="text-2xl font-bold">Company Details</p>
                  <div className="d-flex gap-2">
                    <Link
                      to="/dashboard/company-profile"
                      className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
                    >
                      Back
                    </Link>
                    <button
                      onClick={handleSubmit}
                      className="px-4 py-2 d-flex gap-2 bg-primary text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <i
                        style={{ fontSize: "18px" }}
                        className="bx bx-edit"
                      ></i>{" "}
                      Save Changes
                    </button>
                  </div>
                </div>
                <div>
                  <form
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
                    onSubmit={handleSubmit}
                  >
                    <FormInput
                      label="Company Name"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      type="text"
                    />

                    <FormInput
                      label="Contact Person Name"
                      name="contact_person_name"
                      value={formData.contact_person_name}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="Mobile No"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <FormInput
                      label="Phone No"
                      name="phone_no"
                      value={formData.phone_no}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="Website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="Address"
                      name="address"
                      type="textarea"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    <FormInput
                      label="Portal Address"
                      name="portal_address"
                      type="textarea"
                      value={formData.portal_address}
                      onChange={handleChange}
                    />
                    <FormInput
                      label="Company Type"
                      name="company_type"
                      type="textarea"
                      value={formData.company_type}
                      onChange={handleChange}
                    />

                    {/* company registrartion details */}
                    <div className="md:col-span-3 col-span-1 lg:mt-14 mt-4">
                      <p className="text-2xl font-bold">
                        Company Registration Details
                      </p>
                    </div>
                    <FormInput
                      label="GST No"
                      name="gst_no"
                      value={formData.gst_no}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="LUT No"
                      name="lut_no"
                      value={formData.lut_no}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="LLPIN"
                      name="cin_no"
                      value={formData.cin_no}
                      onChange={handleChange}
                      type="text"
                    />
                    {/* <FormInput
          label="GST Circular No"
          name="gst_circular_no"
          value={formData.gst_circular_no}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="State Code"
          name="state_code"
          value={formData.state_code}
          onChange={handleChange}
          type="text"
        /> */}
                    <FormInput
                      label="LEI No"
                      name="lei_no"
                      value={formData.lei_no}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="Field 3"
                      name="field_3"
                      value={formData.field_3}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="PAN No"
                      name="pan_no"
                      value={formData.pan_no}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="LUT Expiry"
                      name="lut_expiry"
                      value={formData.lut_expiry}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="RCMC No"
                      name="rcmc_no"
                      value={formData.rcmc_no}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="Date of Filing"
                      name="date_of_filling_rex_number"
                      value={formData.date_of_filling_rex_number}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="REX Number"
                      name="date_of_filling_rex_number"
                      value={formData.date_of_filling_rex_number}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="Field 1"
                      name="field_1"
                      value={formData.field_1}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="Field 4"
                      name="field_4"
                      value={formData.field_4}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="IEC No"
                      name="iec_no"
                      value={formData.iec_no}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="BIN No"
                      name="bin_no"
                      value={formData.bin_no}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="RCMC Expiry"
                      name="rcmc_expiry"
                      value={formData.rcmc_expiry}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="Circular No"
                      name="circular_no"
                      value={formData.circular_no}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="AEO No"
                      name="aeo_no"
                      value={formData.aeo_no}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="Field 2"
                      name="field_2"
                      value={formData.field_2}
                      onChange={handleChange}
                      type="text"
                    />
                    <FormInput
                      label="Field 5"
                      name="field_5"
                      value={formData.field_5}
                      onChange={handleChange}
                      type="text"
                    />

                    {/* Company settings */}
                    {/* <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
          <p className="text-2xl font-bold mb-4">Company Settings</p>
        </div>
        <FormInput
          label="Pre Carriage By"
          name="pre_carriage_by"
          value={formData.pre_carriage_by}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="State of Origin"
          name="state_of_origin"
          value={formData.state_of_origin}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Delivery Period"
          name="delivery_period"
          value={formData.delivery_period}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Terms Of Delivery"
          name="terms_of_delivery"
          value={formData.terms_of_delivery}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Place Of Receipt"
          name="place_of_receipt"
          value={formData.place_of_receipt}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Port Of Loading"
          name="part_of_loading"
          value={formData.part_of_loading}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Partial Shipment"
          name="partial_shipment"
          value={formData.partial_shipment}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="District Of Origin"
          name="district_of_origin"
          value={formData.district_of_origin}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Trans Shipment"
          name="trans_shipment"
          value={formData.trans_shipment}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Variety Of Quality"
          name="variety_of_quality"
          value={formData.variety_of_quality}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="company_logo"
          name="company_logo"
          type="file"
          onChange={handleChange}
          value={formData.company_logo}
        />
        <FormInput
          label="signature_upload"
          name="signature_upload"
          type="file"
          onChange={handleChange}
          value={formData.signature_upload}
        /> */}
                    {/* <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
          <p className="text-2xl font-bold mb-4">Performa Details</p>
        </div>
        <FormInput
          label="Performa Invoice Remark"
          name="performaInvoiceRemark"
          value={formData.performaInvoiceRemark}
          onChange={handleChange}
          type="text"
        />
        <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
          <p className="text-2xl font-bold mb-4">Annexure Details</p>
        </div>
        <FormInput
          label="Range"
          name="range"
          value={formData.range}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Division"
          name="division"
          value={formData.division}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Commissionerate"
          name="commissionsionerate"
          value={formData.commissionsionerate}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Location Code"
          name="location_code"
          value={formData.location_code}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Annexure Remark"
          name="annexure_remark"
          value={formData.annexure_remark}
          onChange={handleChange}
          type="text"
        />
        <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
          <p className="text-2xl font-bold mb-4">VGM Details</p>
        </div>
        <FormInput
          label="Shipper name"
          name="shipper_name"
          value={formData.shipper_name}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Method Used for VGM"
          name="method_used_for_vgm"
          value={formData.method_used_for_vgm}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Weighment slip no."
          name="weighbridge_slip_no"
          value={formData.weighbridge_slip_no}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Name and designation of office"
          name="name_and_designation_of_office"
          value={formData.name_and_designation_of_office}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Weighbridge Registration no"
          name="weighbridge_registration_no"
          value={formData.weighbridge_registration_no}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Shipper Address"
          name="shipper_address"
          value={formData.shipper_address}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="VGM remarks"
          name="vgm_remarks"
          value={formData.vgm_remarks}
          onChange={handleChange}
          type="text"
        /> */}
                    {/* Bank Details */}
                  </form>
                  <div className="md:col-span-3 col-span-1 lg:mt-4">
                    <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                      <p className="text-2xl font-bold">Bank Details</p>
                      <div className="d-flex gap-3 align-items-center">
                        <div className="flex items-center">
                          <label className="mr-2 mt-2">Select Bank:</label>
                          <select
                            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={e => handleBankChange(e.target.value)}
                          >
                            <option value="">Select Bank</option>
                            {banks?.map((bank, index) => (
                              <option key={index} value={bank?.bank_name}>
                                {bank?.bank_name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <button
                          onClick={handleButtonClick}
                          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700"
                        >
                          Add Bank
                        </button>
                      </div>
                    </div>
                    {/* Render selected bank details */}
                    {selectedBank && (
                      <div className="space-y-4 p-4 bg-gray-50 mt-4 rounded-lg shadow-inner">
                        <div className="flex">
                          <span className="font-medium mr-2">Bank Name:</span>
                          <span>{selectedBank.bank_name}</span>
                        </div>
                        <div className="flex">
                          <span className="font-medium mr-2">
                            Bank Address:
                          </span>
                          <span>{selectedBank.bank_address}</span>
                        </div>
                        <div className="flex">
                          <span className="font-medium mr-2">
                            Account Name:
                          </span>
                          <span>{selectedBank.account_name}</span>
                        </div>
                        <div className="flex">
                          <span className="font-medium mr-2">Account No:</span>
                          <span>{selectedBank.account_no}</span>
                        </div>
                        <div className="flex">
                          <span className="font-medium mr-2">IFSC Code:</span>
                          <span>{selectedBank.ifsc_code}</span>
                        </div>
                        <div className="flex">
                          <span className="font-medium mr-2">Swift Code:</span>
                          <span>{selectedBank.swift_code}</span>
                        </div>
                        <div className="flex">
                          <span className="font-medium mr-2">
                            Bank Ad Code No:
                          </span>
                          <span>{selectedBank.bank_ad_code_no}</span>
                        </div>
                        <div className="flex">
                          <span className="font-medium mr-2">IBAN No:</span>
                          <span>{selectedBank.iban_no}</span>
                        </div>
                      </div>
                    )}
                    {/* Add Bank Button */}
                  </div>
                  {/* Bank Popup */}
                  {/* End Bank Popup */}

                  {/* <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
          <p className="text-2xl font-bold mb-4">Export Details</p>
        </div>
        <FormInput
          label="Export Under Detail 1"
          name="export_under_detail_1"
          value={formData.export_under_detail_1}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Export Under Detail 2"
          name="export_under_detail_2"
          value={formData.export_under_detail_2}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Export Remarks"
          name="export_remarks"
          value={formData.export_remarks}
          onChange={handleChange}
          type="text"
        /> */}

                  {/* <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                    >
                      Save Changes
                    </button>
                  </div> */}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      <BankModal
        showBankPopup={showBankPopup}
        setShowBankPopup={setShowBankPopup}
        newBank={newBank}
        setNewBank={setNewBank}
        handleAddBank={handleAddBank}
      />
    </>
  )
}

export default ProfileSettings
