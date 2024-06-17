import React, { useState } from "react"

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPersonName: "",
    otpMobileNo: "",
    mobile: "",
    email: "",
    phoneNo: "",
    faxNo: "",
    website: "",
    companyRegister: "",
    companyType: "",
    address: "",
    portalAddress: "",
    preCarriageBy: "",
    stateOfOrigin: "",
    deliveryPeriod: "",
    termsOfDelivery: "",
    placeOfReceipt: "",
    portOfLoading: "",
    partialShipment: "",
    districtOfOrigin: "",
    transshipment: "",
    varietyOfQuality: "",
    companyLogo: null,
    signUpload: null,
  })

  const handleChange = e => {
    const { name, value, files } = e.target
    setFormData({
        ...formData,
      [name]: files ? files[0] : value,
    })
      console.log(formData, "formdata");
  }
   console.log(formData, "formdata")
  const handleSubmit = e => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
        onSubmit={handleSubmit}
      >
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            // defaultValue={testdata.name}
        />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Contact Person Name
          </label>
          <input
            type="text"
            name="contactPersonName"
            value={formData.contactPersonName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            OTP Mobile No
          </label>
          <input
            type="text"
            name="otpMobileNo"
            value={formData.otpMobileNo}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Mobile
          </label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Phone No
          </label>
          <input
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Fax No
          </label>
          <input
            type="text"
            name="faxNo"
            value={formData.faxNo}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Website
          </label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Company Register
          </label>
          <input
            type="text"
            name="companyRegister"
            value={formData.companyRegister}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Portal Address
          </label>
          <textarea
            name="portalAddress"
            value={formData.portalAddress}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Company Type
          </label>
          <input
            type="text"
            name="companyType"
            value={formData.companyType}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
          <p className="text-2xl font-bold mb-4">Company Settings</p>
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Pre Carriage By
          </label>
          <input
            type="text"
            name="preCarriageBy"
            value={formData.preCarriageBy}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            State of Origin
          </label>
          <input
            type="text"
            name="stateOfOrigin"
            value={formData.stateOfOrigin}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Delivery Period
          </label>
          <input
            type="text"
            name="deliveryPeriod"
            value={formData.deliveryPeriod}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Terms of Delivery
          </label>
          <input
            type="text"
            name="termsOfDelivery"
            value={formData.termsOfDelivery}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Place of Receipt
          </label>
          <input
            type="text"
            name="placeOfReceipt"
            value={formData.placeOfReceipt}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Port of Loading
          </label>
          <input
            type="text"
            name="portOfLoading"
            value={formData.portOfLoading}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Partial Shipment
          </label>
          <input
            type="text"
            name="partialShipment"
            value={formData.partialShipment}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            District of Origin
          </label>
          <input
            type="text"
            name="districtOfOrigin"
            value={formData.districtOfOrigin}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Transshipment
          </label>
          <input
            type="text"
            name="transshipment"
            value={formData.transshipment}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Variety of Quality
          </label>
          <input
            type="text"
            name="varietyOfQuality"
            value={formData.varietyOfQuality}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Company Logo
          </label>
          <input
            type="file"
            name="companyLogo"
            onChange={handleChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Signature Upload
          </label>
          <input
            type="file"
            name="signUpload"
            onChange={handleChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-3 mx-auto lg:mt-12">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProfileSettings
