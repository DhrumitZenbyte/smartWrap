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

// import React, { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import DisplayField from "./DisplayField"
// import axios from "axios"

// const CompanyProfile = () => {
//   const navigate = useNavigate()
//   const [companyProfile, setCompanyProfile] = useState(null) // State to hold company profile data

//   const fetchCompanyProfile = async () => {
//     const apiUrl = "http://127.0.0.1:8000/api/company-profile-get"
//     const token =
//       "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YzU5NjE3OC1mMjExLTRmNDUtYjZhOS1hOTUyOTQxN2I0MTYiLCJqdGkiOiI0YjRiNTI5YTRkZDA0OTUwNDBmOGFjMjI2OTZhNjNlNjY3ODgyNzAxNTJkZDkxNTY1NDg4ZGQwNTgzZTI5MmJhNGRmMDVhYzAyOTc0YjY2NyIsImlhdCI6MTcxOTQyNzk5Ny43NDc4NTYsIm5iZiI6MTcxOTQyNzk5Ny43NDc4NiwiZXhwIjoxNzM1MjM5MTk3LjU5NzMxNiwic3ViIjoiYzYzOWNkN2ItODIxNy00ZTc5LWI2OGUtMzhmMjg4MmM5MmMwIiwic2NvcGVzIjpbXX0.KQ_fcWBeCw7gP7d_i6pz4blAAOlvSQFWQsshb-VnEOAtpL2Q6SV-8fWBS9wA12drJAke8lbk8SN6Y28jBqffZ_LgJl9CZa7W8wGUmWs9iIVwOyotXhfwBQMWFofPU-ofe8-3UKcVbL8OZ5S1PNwptzALNwyRpzed1egwx3F3G3BZxmsksy08W83wqqDn_fXt1BGSswFaoqiOEptQex57QsOwaQ0lYaX-Hw6VWwjjb8mv4O5a9Ain6Bu0yDinKP7GMENvdGBplq1BA2erc1_HIjFnp0RJct-95JLAIiOj6vpB7GJ8_bWVMGdR_b4sigw5EiOV_GmPz5gMcQjITZUQtwI713bmtKduofCHdz_mwxz80jlbDtO91LqoxQstftLIqq01mAZRzaqjbg_3om7_Uy5S7fvpZfsvT1Elz5OvikgaaSanRvRqLPYusg7nz0MA0fHZ7Org7YuywTxohIAw6aN6wYjh4MSIP2ir2ThECphWF5Q8u1-Hc4_UTtSKWbX8V9NY6YFy67fRlor2M44kATQPr_bReH48o8cfhapemrAAJGqNSGvwQRahZnnGB1NQSwAD5qr0z7Hor3QqoIaw1flFNBJg4uv4tVeuj2BriBIH9ovJG1PxKJ9Jyc34nHMhXf4EtBLUooX06IJBJoxKaP_gRUNJosHERSpW5pyV6D4"

//     try {
//       const response = await axios.get(apiUrl, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       console.log(response, "company profile response");
//       if (!response.data) {
//         throw new Error(`Empty response data`)
//       }

//       setCompanyProfile(response.data.company_profile)
//     } catch (error) {
//       console.error("Error fetching company profile:", error)
//     }
//   }

//   useEffect(() => {
//     fetchCompanyProfile()
//   }, [])

//   // useEffect(() => {
//   //     const token =
//   //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YzU5NjE3OC1mMjExLTRmNDUtYjZhOS1hOTUyOTQxN2I0MTYiLCJqdGkiOiIwYWJiYTI3MDA2ZTM4YzBlNzUxMzc0MDU0ZTg4MzRlYjZhZDE0NGJmMWViMmVmNTQyM2RhNDUwN2JhNTVhNjc5YmQxNWE5MDRhYjFjMjZlOCIsImlhdCI6MTcxOTMzNDQ5Ny42NDUyNjYsIm5iZiI6MTcxOTMzNDQ5Ny42NDUyNzEsImV4cCI6MTczNTE0NTY5Ny4xNzM3NTIsInN1YiI6ImM2MzljZDdiLTgyMTctNGU3OS1iNjhlLTM4ZjI4ODJjOTJjMCIsInNjb3BlcyI6W119.NHpWJZxnnGGlvg7KHMJy_tUtHxWNOf-5AKtBl1jckcpX0eujNMtIG007dgEfAKrrFesc814myaMBHG2MhnaQQLrnikmAFaeQXiqxdGqdLB8VSeZ_zr_YTW0AxRb5FcDL3FS2Uwrtdxhv0Ur6ENRp_H-1sWCufvFYsYUNX07ub_GVdgghT4URzLmtemMGGtvcHG6uzwWhhfNRk_QjiVSIACsCQiaVVjeK_J01-U74S4jQtmw4NQH6JIJhXoOgYRwQ6P6yyKfuCZCdSorewH-3Kv8GimhCn7X_ySPmIoIh1Uqj7pnuwkQaaloLfw7jtKC2-LqXBxGY1ZVycEWf_Y3G9dwrTpNd_3iCKx7IonL5nabRUDvHmVCxl2MIctg1D7ai8g756FA6wW4UNxvbCwC-h4Zalb_RlssR_uuAghs9ZXe-nkOojHCbEPi4a62y-BeM8fRG6epgyMP8mMu7EQ51f2ti4KsNc7B1tl5KpSjzs18_gRXBNuQ6zq0sr9UcknlOy9BMszimiZDIMRUYq_XdzOhlmhHvci-sqb_EKpaqsoNDIx6oTQvRFRFKFYllWTh93fl4vqeOFYjkXbZTOY4b0Xfw9Ciz_XMGwwz6yVz24vHxY6wlgiewbKDNAxUOjeNAKeAQ1w-bgDZCLh8RGSrl02gMH5FsTdQ3HwtZIGebdFM"
//   //    axios
//   //      .get("http://127.0.0.1:8000/api/company-profile-get", {
//   //        headers: {
//   //          Authorization: `Bearer ${token}`,
//   //        },
//   //      })
//   //      .then(response => {
//   //        // setBanks(response.data)
//   //        console.log(response, "company details")
//   //      })
//   //      .catch(error => {
//   //        console.error("Error fetching banks:", error)
//   //      })
//   //  }, [])

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

//   const registrationDetails = {
//     gstNo: "GST123456",
//     lutNo: "LUT123456",
//     cinNo: "CIN123456",
//     gstCircularNo: "GSTC123456",
//     stateCode: "SC123",
//     leiNo: "LEI123456",
//     field3: "Field 3 Value",
//     panNo: "PAN123456",
//     lutExpiry: "2024-12-31",
//     rcmcNo: "RCMC123456",
//     dateOfFiling: "2023-01-01",
//     rexNumber: "REX123456",
//     field1: "Field 1 Value",
//     field4: "Field 4 Value",
//     iecNo: "IEC123456",
//     binNo: "BIN123456",
//     rcmcExpiry: "2024-12-31",
//     circularNo: "CIRC123456",
//     aeoNo: "AEO123456",
//     field2: "Field 2 Value",
//     field5: "Field 5 Value",
//   }

//   const companySettings = {
//     preCarriageBy: "Air",
//     stateOfOrigin: "California",
//     deliveryPeriod: "30 Days",
//     termsOfDelivery: "FOB",
//     placeOfReceipt: "Los Angeles",
//     portOfLoading: "Los Angeles",
//     partialShipment: "Allowed",
//     districtOfOrigin: "LA County",
//     transshipment: "Not Allowed",
//     varietyOfQuality: "High",
//     companyLogo: "Logo.png",
//     signUpload: "Signature.png",
//   }

//   const performaDetails = {
//     performaInvoiceRemark: "No remarks",
//   }

//   const annexureDetails = {
//     range: "Range Value",
//     division: "Division Value",
//     commissionerate: "Commissionerate Value",
//     locationCode: "Location Code Value",
//     annexureRemark: "Annexure Remark Value",
//   }

//   const vgmDetails = {
//     Shippername: "Shipper Name",
//     MethodUsedforVGM: "Weighbridge",
//     Weighmentslipno: "123456",
//     NameAndDesignationOfOffice: "John Doe, Manager",
//     WeighbridgeRegistrationNo: "WB123456",
//     ShipperAddress: "Shipper Address",
//     VGMRemarks: "No remarks",
//   }

//   const exportDeatils = {
//     ExportUnderDetail1: "Export Under Detail 1",
//     ExportUnderDetail2: "Export Under Detail2",
//     ExportRemarks: "Export Remarks",
//   }

//   // Render loading state while fetching data
//   // if (!companyProfile) {
//   //   return <p>Loading...</p>
//   // }

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

//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {Object.entries(companyData).map(([key, value]) => (
//             <DisplayField
//               key={key}
//               label={key.replace(/([A-Z])/g, " $1")}
//               value={value}
//             />
//           ))}
//         </div> */}
// {/*
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {Object.entries(companyProfile).map(([key, value]) => (
//             <DisplayField
//               key={key}
//               label={key.replace(/_/g, " ")} // Replace underscores with spaces
//               value={value || "-"} // Handle null values
//             />
//           ))}
//         </div> */}

//         <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
//           <p className="text-2xl font-bold mb-4">
//             Company Registration Details
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {Object.entries(registrationDetails).map(([key, value]) => (
//             <DisplayField
//               key={key}
//               label={key.replace(/([A-Z])/g, " $1")}
//               value={value}
//             />
//           ))}
//         </div>

//         <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
//           <p className="text-2xl font-bold mb-4">Company Settings</p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {Object.entries(companySettings).map(([key, value]) => (
//             <DisplayField
//               key={key}
//               label={key.replace(/([A-Z])/g, " $1")}
//               value={value}
//             />
//           ))}
//         </div>

//         <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
//           <p className="text-2xl font-bold mb-4">Performa Details</p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {Object.entries(performaDetails).map(([key, value]) => (
//             <DisplayField
//               key={key}
//               label={key.replace(/([A-Z])/g, " $1")}
//               value={value}
//             />
//           ))}
//         </div>

//         <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
//           <p className="text-2xl font-bold mb-4">Annexure Details</p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {Object.entries(annexureDetails).map(([key, value]) => (
//             <DisplayField
//               key={key}
//               label={key.replace(/([A-Z])/g, " $1")}
//               value={value}
//             />
//           ))}
//         </div>

//         <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
//           <p className="text-2xl font-bold mb-4">VGM Details</p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {Object.entries(vgmDetails).map(([key, value]) => (
//             <DisplayField
//               key={key}
//               label={key.replace(/([A-Z])/g, " $1")}
//               value={value}
//             />
//           ))}
//         </div>
//         <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
//           <p className="text-2xl font-bold mb-4">Export Details</p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {Object.entries(exportDeatils).map(([key, value]) => (
//             <DisplayField
//               key={key}
//               label={key.replace(/([A-Z])/g, " $1")}
//               value={value}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CompanyProfile

import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import DisplayField from "./DisplayField"
import axios from "axios"
import toast from "react-hot-toast"
import { getProfileDetails } from "services/operations/ProfileOps/ProfileApi"
import { useSelector } from "react-redux"

const CompanyProfile = () => {
  const navigate = useNavigate()
  const [companyProfile, setCompanyProfile] = useState(null) // State to hold company profile data
  
  const token = localStorage.getItem("token");
  console.log(token, "@@token from companyprofile");
  useEffect(() => {
    // fetchCompanyProfile();
    getProfileDetails(token, setCompanyProfile);
  }, []);

  const handleEditClick = () => {
    navigate("/dashboard/profile-settings")
  }

  console.log("Rendered company profile:", companyProfile) // Log the company profile on render

  if (!companyProfile) {
    return <p>Loading...</p>
  }

  console.log(companyProfile, "@@companyProfileeeeee")

  return (
    <div className="">
      {companyProfile && (
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
            {Object.entries(companyProfile)
              .filter(([key]) => !["id", "created_at", "updated_at", "deleted_at"].includes(key))
              .map(([key, value]) => (
                <DisplayField
                  key={key}
                  label={key.replace(/_/g, " ")} // Replace underscores with spaces
                  value={value || "-"} // Handle null values
                />
              ))}
          </div>
        </div>
      )}
      {!companyProfile && <p>Loading...</p>}
    </div>
  )
}

export default CompanyProfile
