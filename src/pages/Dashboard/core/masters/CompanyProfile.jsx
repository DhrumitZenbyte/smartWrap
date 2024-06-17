import React from "react"
import { useNavigate } from "react-router-dom"

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
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
              {companyData.companyName}
            </p>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Contact Person Name
            </label>
            <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
              {companyData.contactPersonName}
            </p>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              OTP Mobile No
            </label>
            <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
              {companyData.otpMobileNo}
            </p>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Mobile
            </label>
            <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
              {companyData.mobile}
            </p>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
              {companyData.email}
            </p>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Phone No
            </label>
            <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
              {companyData.phoneNo}
            </p>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Fax No
            </label>
            <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
              {companyData.faxNo}
            </p>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Website
            </label>
            <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
              {companyData.website}
            </p>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Company Register
            </label>
            <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
              {companyData.companyRegister}
            </p>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
              {companyData.address}
            </p>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Portal Address
            </label>
            <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
              {companyData.portalAddress}
            </p>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Company Type
            </label>
            <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
              {companyData.companyType}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile
