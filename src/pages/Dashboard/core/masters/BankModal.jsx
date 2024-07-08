// import React from "react"

// const BankModal = ({
//   showBankPopup,
//   setShowBankPopup,
//   newBank,
//   setNewBank,
//   handleAddBank,
// }) => {
//   const handleCloseModal = () => {
//     setShowBankPopup(false)
//     setNewBank({
//       bank_name: "",
//       bank_address: "",
//       account_name: "",
//       account_no: "",
//       ifsc_code: "",
//       swift_code: "",
//       bank_ad_code_no: "",
//       iban_no: "",
//     })
//   }

//   return (
//     showBankPopup && (
//       <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4 md:p-0 overflow-y-scroll md:overflow-y-hidden">
//         <div className="bg-white p-4 rounded-md shadow-lg w-full md:w-2/3 lg:w-2/4 mt-96 md:mt-0 h-auto md:h-fit">
//           <h2 className="text-xl font-bold mb-4">Add New Bank</h2>
//           {/* Form to add a new bank */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Bank Name:
//               </label>
//               <input
//                 type="text"
//                 name="bankName"
//                 value={newBank.bankName}
//                 onChange={e =>
//                   setNewBank({ ...newBank, bankName: e.target.value })
//                 }
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Bank Address:
//               </label>
//               <input
//                 type="text"
//                 name="bankAddress"
//                 value={newBank.bankAddress}
//                 onChange={e =>
//                   setNewBank({ ...newBank, bankAddress: e.target.value })
//                 }
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Account Name:
//               </label>
//               <input
//                 type="text"
//                 name="accountName"
//                 value={newBank.accountName}
//                 onChange={e =>
//                   setNewBank({ ...newBank, accountName: e.target.value })
//                 }
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Account No:
//               </label>
//               <input
//                 type="text"
//                 name="accountNo"
//                 value={newBank.accountNo}
//                 onChange={e =>
//                   setNewBank({ ...newBank, accountNo: e.target.value })
//                 }
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 IFSC Code:
//               </label>
//               <input
//                 type="text"
//                 name="ifscCode"
//                 value={newBank.ifscCode}
//                 onChange={e =>
//                   setNewBank({ ...newBank, ifscCode: e.target.value })
//                 }
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Swift Code:
//               </label>
//               <input
//                 type="text"
//                 name="swiftCode"
//                 value={newBank.swiftCode}
//                 onChange={e =>
//                   setNewBank({ ...newBank, swiftCode: e.target.value })
//                 }
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Bank Ad Code No:
//               </label>
//               <input
//                 type="text"
//                 name="bankAdCodeNo"
//                 value={newBank.bankAdCodeNo}
//                 onChange={e =>
//                   setNewBank({ ...newBank, bankAdCodeNo: e.target.value })
//                 }
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 IBAN No:
//               </label>
//               <input
//                 type="text"
//                 name="ibanNo"
//                 value={newBank.ibanNo}
//                 onChange={e =>
//                   setNewBank({ ...newBank, ibanNo: e.target.value })
//                 }
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//           </div>
//           {/* Buttons: Add Bank and Cancel */}
//           <div className="mt-4 flex justify-end space-x-4">
//             <button
//               onClick={handleAddBank}
//               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
//             >
//               Add Bank
//             </button>
//             <button
//               onClick={handleCloseModal}
//               className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     )
//   )
// }

// export default BankModal

import React, { useState } from "react"
import axios from "axios"

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
    
    
//     const token =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YzU5NjE3OC1mMjExLTRmNDUtYjZhOS1hOTUyOTQxN2I0MTYiLCJqdGkiOiIwYWJiYTI3MDA2ZTM4YzBlNzUxMzc0MDU0ZTg4MzRlYjZhZDE0NGJmMWViMmVmNTQyM2RhNDUwN2JhNTVhNjc5YmQxNWE5MDRhYjFjMjZlOCIsImlhdCI6MTcxOTMzNDQ5Ny42NDUyNjYsIm5iZiI6MTcxOTMzNDQ5Ny42NDUyNzEsImV4cCI6MTczNTE0NTY5Ny4xNzM3NTIsInN1YiI6ImM2MzljZDdiLTgyMTctNGU3OS1iNjhlLTM4ZjI4ODJjOTJjMCIsInNjb3BlcyI6W119.NHpWJZxnnGGlvg7KHMJy_tUtHxWNOf-5AKtBl1jckcpX0eujNMtIG007dgEfAKrrFesc814myaMBHG2MhnaQQLrnikmAFaeQXiqxdGqdLB8VSeZ_zr_YTW0AxRb5FcDL3FS2Uwrtdxhv0Ur6ENRp_H-1sWCufvFYsYUNX07ub_GVdgghT4URzLmtemMGGtvcHG6uzwWhhfNRk_QjiVSIACsCQiaVVjeK_J01-U74S4jQtmw4NQH6JIJhXoOgYRwQ6P6yyKfuCZCdSorewH-3Kv8GimhCn7X_ySPmIoIh1Uqj7pnuwkQaaloLfw7jtKC2-LqXBxGY1ZVycEWf_Y3G9dwrTpNd_3iCKx7IonL5nabRUDvHmVCxl2MIctg1D7ai8g756FA6wW4UNxvbCwC-h4Zalb_RlssR_uuAghs9ZXe-nkOojHCbEPi4a62y-BeM8fRG6epgyMP8mMu7EQ51f2ti4KsNc7B1tl5KpSjzs18_gRXBNuQ6zq0sr9UcknlOy9BMszimiZDIMRUYq_XdzOhlmhHvci-sqb_EKpaqsoNDIx6oTQvRFRFKFYllWTh93fl4vqeOFYjkXbZTOY4b0Xfw9Ciz_XMGwwz6yVz24vHxY6wlgiewbKDNAxUOjeNAKeAQ1w-bgDZCLh8RGSrl02gMH5FsTdQ3HwtZIGebdFM"

// try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/api/banks",
//         {
//           bank_name: newBank.bankName,
//           bank_address: newBank.bankAddress,
//           account_name: newBank.accountName,
//           account_no: newBank.accountNo,
//           ifsc_code: newBank.ifscCode,
//           swift_code: newBank.swiftCode,
//         bank_ad_code_no: newBank.bankAdCodeNo,
//       iban_no: newBank.ibanNo,
//     },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       )

//       console.log("Bank added successfully:", response)
//       handleCloseModal() // Close the modal after successful addition
//     } catch (error) {
//       console.error("Error adding bank:", error)
//     }
  //     }
  
  const handleAddBankNew = async()=> {
    const token = localStorage.getItem("token");    
    try {
          const response = await axios.post(
            "http://127.0.0.1:8000/api/banks",
            {
              bank_name: newBank.bankName,
              bank_address: newBank.bankAddress,
              account_name: newBank.accountName,
              account_no: newBank.accountNo,
              ifsc_code: newBank.ifscCode,
              swift_code: newBank.swiftCode,
            bank_ad_code_no: newBank.bankAdCodeNo,
          iban_no: newBank.ibanNo,
        },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          )
          console.log("Bank added successfully:", response)
          handleCloseModal() // Close the modal after successful addition
        } catch (error) {
          console.error("Error adding bank:", error)
        }
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
              onClick={handleAddBankNew}
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
