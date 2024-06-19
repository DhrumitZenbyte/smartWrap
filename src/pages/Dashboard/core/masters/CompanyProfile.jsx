// import React from "react"
// import { useNavigate } from "react-router-dom"

// const CompanyProfile = () => {
//   const navigate = useNavigate()

//   const handleEditClick = () => {
//     navigate("/dashboard/profile-settings")
//   }

//   // Mock data to display
//   const companyData = {
//     companyName: "ABC Corp",
//     contactPersonName: "John Doe",
//     otpMobileNo: "1234567890",
//     mobile: "0987654321",
//     email: "john.doe@example.com",
//     phoneNo: "0123456789",
//     faxNo: "0987654321",
//     website: "www.abccorp.com",
//     companyRegister: "12345678",
//     address: "123 Main St, City, Country",
//     portalAddress: "portal.abccorp.com",
//     companyType: "Private",
//   }

//   return (
//     <div className="">
//       <div className="container mx-auto p-4">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold">Company Profile</h2>
//           <button
//             onClick={handleEditClick}
//             className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             Edit
//           </button>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           <div className="col-span-1">
//             <label className="block text-sm font-medium text-gray-700">
//               Company Name
//             </label>
//             <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
//               {companyData.companyName}
//             </p>
//           </div>
//           <div className="col-span-1">
//             <label className="block text-sm font-medium text-gray-700">
//               Contact Person Name
//             </label>
//             <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
//               {companyData.contactPersonName}
//             </p>
//           </div>
//           <div className="col-span-1">
//             <label className="block text-sm font-medium text-gray-700">
//               OTP Mobile No
//             </label>
//             <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
//               {companyData.otpMobileNo}
//             </p>
//           </div>
//           <div className="col-span-1">
//             <label className="block text-sm font-medium text-gray-700">
//               Mobile
//             </label>
//             <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
//               {companyData.mobile}
//             </p>
//           </div>
//           <div className="col-span-1">
//             <label className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
//               {companyData.email}
//             </p>
//           </div>
//           <div className="col-span-1">
//             <label className="block text-sm font-medium text-gray-700">
//               Phone No
//             </label>
//             <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
//               {companyData.phoneNo}
//             </p>
//           </div>
//           <div className="col-span-1">
//             <label className="block text-sm font-medium text-gray-700">
//               Fax No
//             </label>
//             <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
//               {companyData.faxNo}
//             </p>
//           </div>
//           <div className="col-span-1">
//             <label className="block text-sm font-medium text-gray-700">
//               Website
//             </label>
//             <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
//               {companyData.website}
//             </p>
//           </div>
//           <div className="col-span-1">
//             <label className="block text-sm font-medium text-gray-700">
//               Company Register
//             </label>
//             <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
//               {companyData.companyRegister}
//             </p>
//           </div>
//           <div className="col-span-1">
//             <label className="block text-sm font-medium text-gray-700">
//               Address
//             </label>
//             <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
//               {companyData.address}
//             </p>
//           </div>
//           <div className="col-span-1">
//             <label className="block text-sm font-medium text-gray-700">
//               Portal Address
//             </label>
//             <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
//               {companyData.portalAddress}
//             </p>
//           </div>
//           <div className="col-span-1">
//             <label className="block text-sm font-medium text-gray-700">
//               Company Type
//             </label>
//             <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
//               {companyData.companyType}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CompanyProfile

import React from "react"
import { useNavigate } from "react-router-dom"
import DisplayField from "./DisplayField"

const CompanyProfile = () => {
  const navigate = useNavigate()

  const handleEditClick = () => {
    navigate("/dashboard/profile-settings")
  }

  // Mock data to display
  const companyData = {
    companyName: "ABC Corp",
    contactPersonName: "John Doe",
    otpMobileNo: "1234567890",
    mobile: "0987654321",
    email: "john.doe@example.com",
    phoneNo: "0123456789",
    faxNo: "0987654321",
    website: "www.abccorp.com",
    companyRegister: "12345678",
    address: "123 Main St, City, Country",
    portalAddress: "portal.abccorp.com",
    companyType: "Private",
  }

  const registrationDetails = {
    gstNo: "GST123456",
    lutNo: "LUT123456",
    cinNo: "CIN123456",
    gstCircularNo: "GSTC123456",
    stateCode: "SC123",
    leiNo: "LEI123456",
    field3: "Field 3 Value",
    panNo: "PAN123456",
    lutExpiry: "2024-12-31",
    rcmcNo: "RCMC123456",
    dateOfFiling: "2023-01-01",
    rexNumber: "REX123456",
    field1: "Field 1 Value",
    field4: "Field 4 Value",
    iecNo: "IEC123456",
    binNo: "BIN123456",
    rcmcExpiry: "2024-12-31",
    circularNo: "CIRC123456",
    aeoNo: "AEO123456",
    field2: "Field 2 Value",
    field5: "Field 5 Value",
  }

  const companySettings = {
    preCarriageBy: "Air",
    stateOfOrigin: "California",
    deliveryPeriod: "30 Days",
    termsOfDelivery: "FOB",
    placeOfReceipt: "Los Angeles",
    portOfLoading: "Los Angeles",
    partialShipment: "Allowed",
    districtOfOrigin: "LA County",
    transshipment: "Not Allowed",
    varietyOfQuality: "High",
    companyLogo: "Logo.png",
    signUpload: "Signature.png",
  }

  const performaDetails = {
    performaInvoiceRemark: "No remarks",
  }

  const annexureDetails = {
    range: "Range Value",
    division: "Division Value",
    commissionerate: "Commissionerate Value",
    locationCode: "Location Code Value",
    annexureRemark: "Annexure Remark Value",
  }

  const vgmDetails = {
    Shippername: "Shipper Name",
    MethodUsedforVGM: "Weighbridge",
    Weighmentslipno: "123456",
    NameAndDesignationOfOffice: "John Doe, Manager",
    WeighbridgeRegistrationNo: "WB123456",
    ShipperAddress: "Shipper Address",
    VGMRemarks: "No remarks",
  }

  const exportDeatils = {
    ExportUnderDetail1: "Export Under Detail 1",
    ExportUnderDetail2: "Export Under Detail2",
    ExportRemarks: "Export Remarks",
  }

  return (
    <div className="">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Company Profile</h2>
          <button
            onClick={handleEditClick}
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Edit
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(companyData).map(([key, value]) => (
            <DisplayField
              key={key}
              label={key.replace(/([A-Z])/g, " $1")}
              value={value}
            />
          ))}
        </div>

        <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
          <p className="text-2xl font-bold mb-4">
            Company Registration Details
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(registrationDetails).map(([key, value]) => (
            <DisplayField
              key={key}
              label={key.replace(/([A-Z])/g, " $1")}
              value={value}
            />
          ))}
        </div>

        <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
          <p className="text-2xl font-bold mb-4">Company Settings</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(companySettings).map(([key, value]) => (
            <DisplayField
              key={key}
              label={key.replace(/([A-Z])/g, " $1")}
              value={value}
            />
          ))}
        </div>

        <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
          <p className="text-2xl font-bold mb-4">Performa Details</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(performaDetails).map(([key, value]) => (
            <DisplayField
              key={key}
              label={key.replace(/([A-Z])/g, " $1")}
              value={value}
            />
          ))}
        </div>

        <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
          <p className="text-2xl font-bold mb-4">Annexure Details</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(annexureDetails).map(([key, value]) => (
            <DisplayField
              key={key}
              label={key.replace(/([A-Z])/g, " $1")}
              value={value}
            />
          ))}
        </div>

        <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
          <p className="text-2xl font-bold mb-4">VGM Details</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(vgmDetails).map(([key, value]) => (
            <DisplayField
              key={key}
              label={key.replace(/([A-Z])/g, " $1")}
              value={value}
            />
          ))}
        </div>
        <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
          <p className="text-2xl font-bold mb-4">Export Details</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(exportDeatils).map(([key, value]) => (
            <DisplayField
              key={key}
              label={key.replace(/([A-Z])/g, " $1")}
              value={value}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile
