import React, { useState } from "react"
import BankModal from "./BankModal";

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
    gstNo: "",
    lutNo: "",
    cinNo: "",
    gstCircularNo: "",
    stateCode: "",
    leiNo: "",
    field3: "",
    panNo: "",
    lutExpiry: "",
    rcmcNo: "",
    dateOfFiling: "",
    rexNumber: "",
    field1: "",
    field4: "",
    iecNo: "",
    binNo: "",
    rcmcExpiry: "",
    circularNo: "",
    aeoNo: "",
    field2: "",
    field5: "",
    performaInvoiceRemark: "",
    range: "",
    division: "",
    commissionerate: "",
    locationCode: "",
    annexureRemark: "",
    MethodUsedforVGM: "",
    Weighmentslipno: "",
    NameAndDesignationOfOffice: "",
    WeighbridgeRegistrationNo: "",
    ShipperAddress: "",
    VGMRemarks: "",
    Shippername: "",
    ExportUnderDetail1: "",
    ExportUnderDetail2: "",
    ExportRemarks: "",
  })

  const [banks, setBanks] = useState([])
  const [showBankPopup, setShowBankPopup] = useState(false)
  const [selectedBank, setSelectedBank] = useState(null)

  const [newBank, setNewBank] = useState({
    bankName: "",
    bankAddress: "",
    accountName: "",
    accountNo: "",
    ifscCode: "",
    swiftCode: "",
    bankAdCodeNo: "",
    ibanNo: "",
  })

  // Function to handle changes in bank selection
  const handleBankChange = bankName => {
    // Find the selected bank from the banks array
    const selected = banks.find(bank => bank.bankName === bankName)
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
      bankName: "",
      bankAddress: "",
      accountName: "",
      accountNo: "",
      ifscCode: "",
      swiftCode: "",
      bankAdCodeNo: "",
      ibanNo: "",
    })
  }

  const handleChange = e => {
    const { name, value, files } = e.target
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    })
    console.log(formData, "formdata")
  }

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
        <FormInput
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Contact Person Name"
          name="contactPersonName"
          value={formData.contactPersonName}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="OTP Mobile No"
          name="otpMobileNo"
          value={formData.otpMobileNo}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Mobile"
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
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Fax No"
          name="faxNo"
          value={formData.faxNo}
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
          label="Company Register"
          name="companyRegister"
          value={formData.companyRegister}
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
          label="portalAddress"
          name="portalAddress"
          type="textarea"
          value={formData.portalAddress}
          onChange={handleChange}
        />
        <FormInput
          label="companyType"
          name="companyType"
          type="textarea"
          value={formData.companyType}
          onChange={handleChange}
        />

        {/* company registrartion details */}
        <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
          <p className="text-2xl font-bold mb-4">
            Company Registration Details
          </p>
        </div>
        <FormInput
          label="GST No"
          name="gstNo"
          value={formData.gstNo}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="LUT No"
          name="lutNo"
          value={formData.lutNo}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="CIN No"
          name="cinNo"
          value={formData.cinNo}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="GST Circular No"
          name="gstCircularNo"
          value={formData.gstCircularNo}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="State Code"
          name="stateCode"
          value={formData.stateCode}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="LEI No"
          name="leiNo"
          value={formData.leiNo}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Field 3"
          name="field3"
          value={formData.field3}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="PAN No"
          name="panNo"
          value={formData.panNo}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="LUT Expiry"
          name="lutExpiry"
          value={formData.lutExpiry}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="RCMC No"
          name="rcmcNo"
          value={formData.rcmcNo}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Date of Filing"
          name="dateOfFiling"
          value={formData.dateOfFiling}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="REX Number"
          name="rexNumber"
          value={formData.rexNumber}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Field 1"
          name="field1"
          value={formData.field1}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Field 4"
          name="field4"
          value={formData.field4}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="IEC No"
          name="iecNo"
          value={formData.iecNo}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="BIN No"
          name="binNo"
          value={formData.binNo}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="RCMC Expiry"
          name="rcmcExpiry"
          value={formData.rcmcExpiry}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Circular No"
          name="circularNo"
          value={formData.circularNo}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="AEO No"
          name="aeoNo"
          value={formData.aeoNo}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Field 2"
          name="field2"
          value={formData.field2}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Field 5"
          name="field5"
          value={formData.field5}
          onChange={handleChange}
          type="text"
        />

        {/* Company settings */}
        <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
          <p className="text-2xl font-bold mb-4">Company Settings</p>
        </div>
        <FormInput
          label="Pre Carriage By"
          name="preCarriageBy"
          value={formData.preCarriageBy}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="State of Origin"
          name="stateOfOrigin"
          value={formData.stateOfOrigin}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Delivery Period"
          name="deliveryPeriod"
          value={formData.deliveryPeriod}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Terms Of Delivery"
          name="termsOfDelivery"
          value={formData.termsOfDelivery}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Place Of Receipt"
          name="placeOfReceipt"
          value={formData.placeOfReceipt}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Port Of Loading"
          name="portOfLoading"
          value={formData.portOfLoading}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Partial Shipment"
          name="partialShipment"
          value={formData.partialShipment}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="District Of Origin"
          name="districtOfOrigin"
          value={formData.districtOfOrigin}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Trans Shipment"
          name="transshipment"
          value={formData.transshipment}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Variety Of Quality"
          name="varietyOfQuality"
          value={formData.varietyOfQuality}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Company Logo"
          name="companyLogo"
          type="file"
          onChange={handleChange}
        />
        <FormInput
          label="Signature Upload"
          name="signUpload"
          type="file"
          onChange={handleChange}
        />
        <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
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
          name="commissionerate"
          value={formData.commissionerate}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Location Code"
          name="locationCode"
          value={formData.locationCode}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Annexure Remark"
          name="annexureRemark"
          value={formData.annexureRemark}
          onChange={handleChange}
          type="text"
        />
        <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
          <p className="text-2xl font-bold mb-4">VGM Details</p>
        </div>
        <FormInput
          label="Shipper name"
          name="Shippername"
          value={formData.Shippername}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Method Used for VGM"
          name="MethodUsedforVGM"
          value={formData.MethodUsedforVGM}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Weighment slip no."
          name="Weighmentslipno"
          value={formData.Weighmentslipno}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Name and designation of office"
          name="NameAndDesignationOfOffice"
          value={formData.NameAndDesignationOfOffice}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Weighbridge Registration no"
          name="WeighbridgeRegistrationNo"
          value={formData.WeighbridgeRegistrationNo}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Shipper Address"
          name="ShipperAddress"
          value={formData.ShipperAddress}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="VGM remarks"
          name="VGMRemarks"
          value={formData.VGMRemarks}
          onChange={handleChange}
          type="text"
        />
        {/* Bank Details */}
        <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
          <p className="text-2xl font-bold mb-4">Bank Details</p>
          <div className="flex items-center mb-4">
            <label className="mr-2">Select Bank:</label>
            <select
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={e => handleBankChange(e.target.value)}
            >
              <option value="">Select Bank</option>
              {banks.map((bank, index) => (
                <option key={index} value={bank.bankName}>
                  {bank.bankName}
                </option>
              ))}
            </select>
          </div>
          {/* Render selected bank details */}
          {selectedBank && (
            <div className="flex flex-col space-y-2">
              <div className="flex">
                <span className="font-medium mr-2">Bank Name:</span>
                <span>{selectedBank.bankName}</span>
              </div>
              <div className="flex">
                <span className="font-medium mr-2">Bank Address:</span>
                <span>{selectedBank.bankAddress}</span>
              </div>
              <div className="flex">
                <span className="font-medium mr-2">Account Name:</span>
                <span>{selectedBank.accountName}</span>
              </div>
              <div className="flex">
                <span className="font-medium mr-2">Account No:</span>
                <span>{selectedBank.accountNo}</span>
              </div>
              <div className="flex">
                <span className="font-medium mr-2">IFSC Code:</span>
                <span>{selectedBank.ifscCode}</span>
              </div>
              <div className="flex">
                <span className="font-medium mr-2">Swift Code:</span>
                <span>{selectedBank.swiftCode}</span>
              </div>
              <div className="flex">
                <span className="font-medium mr-2">Bank Ad Code No:</span>
                <span>{selectedBank.bankAdCodeNo}</span>
              </div>
              <div className="flex">
                <span className="font-medium mr-2">IBAN No:</span>
                <span>{selectedBank.ibanNo}</span>
              </div>
            </div>
          )}
          {/* Add Bank Button */}
          <button
            onClick={() => setShowBankPopup(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Add Bank
          </button>
        </div>
        {/* Bank Popup */}
        <BankModal
          showBankPopup={showBankPopup}
          setShowBankPopup={setShowBankPopup}
          newBank={newBank}
          setNewBank={setNewBank}
          handleAddBank={handleAddBank}
        />
        {/* End Bank Popup */}

        <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
          <p className="text-2xl font-bold mb-4">Export Details</p>
        </div>
        <FormInput
          label="Export Under Detail 1"
          name="ExportUnderDetail1"
          value={formData.ExportUnderDetail1}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Export Under Detail 2"
          name="ExportUnderDetail2"
          value={formData.ExportUnderDetail2}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Export Remarks"
          name="ExportRemarks"
          value={formData.ExportRemarks}
          onChange={handleChange}
          type="text"
        />

        <div className="md:col-span-3 col-span-1 lg:mt-14 mt-8">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProfileSettings