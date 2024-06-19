import React from "react"

const BankModal = ({
  showBankPopup,
  setShowBankPopup,
  newBank,
  setNewBank,
  handleAddBank,
}) => {
  const handleCloseModal = () => {
    setShowBankPopup(false)
    setNewBank({
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

  return (
    showBankPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4 md:p-0 overflow-y-scroll md:overflow-y-hidden">
        <div className="bg-white p-4 rounded-md shadow-lg w-full md:w-2/3 lg:w-2/4 mt-96 md:mt-0 h-auto md:h-fit">
          <h2 className="text-xl font-bold mb-4">Add New Bank</h2>
          {/* Form to add a new bank */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bank Name:
              </label>
              <input
                type="text"
                name="bankName"
                value={newBank.bankName}
                onChange={e =>
                  setNewBank({ ...newBank, bankName: e.target.value })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bank Address:
              </label>
              <input
                type="text"
                name="bankAddress"
                value={newBank.bankAddress}
                onChange={e =>
                  setNewBank({ ...newBank, bankAddress: e.target.value })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Account Name:
              </label>
              <input
                type="text"
                name="accountName"
                value={newBank.accountName}
                onChange={e =>
                  setNewBank({ ...newBank, accountName: e.target.value })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Account No:
              </label>
              <input
                type="text"
                name="accountNo"
                value={newBank.accountNo}
                onChange={e =>
                  setNewBank({ ...newBank, accountNo: e.target.value })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                IFSC Code:
              </label>
              <input
                type="text"
                name="ifscCode"
                value={newBank.ifscCode}
                onChange={e =>
                  setNewBank({ ...newBank, ifscCode: e.target.value })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Swift Code:
              </label>
              <input
                type="text"
                name="swiftCode"
                value={newBank.swiftCode}
                onChange={e =>
                  setNewBank({ ...newBank, swiftCode: e.target.value })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bank Ad Code No:
              </label>
              <input
                type="text"
                name="bankAdCodeNo"
                value={newBank.bankAdCodeNo}
                onChange={e =>
                  setNewBank({ ...newBank, bankAdCodeNo: e.target.value })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                IBAN No:
              </label>
              <input
                type="text"
                name="ibanNo"
                value={newBank.ibanNo}
                onChange={e =>
                  setNewBank({ ...newBank, ibanNo: e.target.value })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          {/* Buttons: Add Bank and Cancel */}
          <div className="mt-4 flex justify-end space-x-4">
            <button
              onClick={handleAddBank}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            >
              Add Bank
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

export default BankModal
