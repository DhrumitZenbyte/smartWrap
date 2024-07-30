// import React, { useState } from "react"

// const PiDomesticForm = () => {
//       const [notes, setNotes] = useState([{ note: "" }])

//       const handleAddNote = () => {
//         setNotes([...notes, { note: "" }])
//       }

//       const handleNoteChange = (index, event) => {
//         const newNotes = notes.map((note, noteIndex) => {
//           if (index === noteIndex) {
//             return { ...note, note: event.target.value }
//           }
//           return note
//         })
//         setNotes(newNotes)
//       }
//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-6">Proforma Invoice</h2>

//       {/* Proforma Invoice Section */}
//       <div className="mb-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-2 font-medium">PI No:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Date:</label>
//             <input type="date" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Buyer Order No:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Buyer Order Date:</label>
//             <input type="date" className="w-full p-2 border rounded" />
//           </div>
//         </div>
//       </div>

//       {/* Supplier Details Section */}
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold mb-4">Supplier Details</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-2 font-medium">Name:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Address:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">PAN:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">GST:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Mail Id:</label>
//             <input type="email" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Contact Person:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Contact No:</label>
//             <input type="tel" className="w-full p-2 border rounded" />
//           </div>
//         </div>
//       </div>

//       {/* Consignee Details Section */}
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold mb-4">Consignee Details</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-2 font-medium">Name:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Address:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">PAN:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">IEC:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">GST:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Mail Id:</label>
//             <input type="email" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Contact Person:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Contact No:</label>
//             <input type="tel" className="w-full p-2 border rounded" />
//           </div>
//         </div>
//       </div>

//       {/* Main Details Section */}
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold mb-4">Main Details</h3>
//         <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
//           <div className="col-span-2">
//             <label className="block mb-2 font-medium">Description:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">HSN Code:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">No of Box/Bag:</label>
//             <input type="number" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Quantity:</label>
//             <input type="number" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Unit:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Rate:</label>
//             <input type="number" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Amount:</label>
//             <input type="number" className="w-full p-2 border rounded" />
//           </div>
//         </div>
//       </div>

//       {/* Bank Details Section */}
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold mb-4">Bank Details</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-2 font-medium">Bank Name:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Address:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Account No:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">IFSC Code:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">AD Code:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Swift Code:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//         </div>
//       </div>

//       {/* Payment Details Section */}
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-2 font-medium">Payment Terms:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Delivery Time:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block mb-2 font-medium">Delivery Terms:</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//         </div>
//       </div>

//       {/* Note Section */}
//       {/* Notes */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold mb-2">Notes</h3>
//         {notes.map((note, index) => (
//           <div key={index} className="mb-2">
//             <label className="block text-sm font-medium mb-1">
//               Note {index + 1}:
//             </label>
//             <input
//               type="text"
//               value={note.note}
//               onChange={e => handleNoteChange(index, e)}
//               className="w-full p-2 border rounded"
//               placeholder={`Enter note ${index + 1}`}
//             />
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={handleAddNote}
//           className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
//         >
//           Add Note
//         </button>
//       </div>

//       {/* Submit Button */}
//       <div className="text-right">
//         <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
//           Generate PDF
//         </button>
//       </div>
//     </div>
//   )
// }

// export default PiDomesticForm



import React, { useState } from "react"
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer"

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    border: "1px solid black",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flexDirection: "column",
    width: "48%",
  },
  inputField: {
    fontSize: 12,
    marginBottom: 5,
    borderBottom: "1px solid black",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableColHeader: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: "#e0e0e0",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 10,
    fontWeight: "bold",
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
  },
  notes: {
    fontSize: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  footer: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 20,
  },
})

// Create Document Component
const MyDocument = ({ formData, notes }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>Proforma Invoice</Text>

      <View style={styles.section}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.inputField}>PI No: {formData.piNo}</Text>
            <Text style={styles.inputField}>
              Buyer Order No: {formData.buyerOrderNo}
            </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.inputField}>Date: {formData.date}</Text>
            <Text style={styles.inputField}>
              Buyer Order Date: {formData.buyerOrderDate}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Supplier Details</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.inputField}>Name: {formData.supplierName}</Text>
            <Text style={styles.inputField}>
              Address: {formData.supplierAddress}
            </Text>
            <Text style={styles.inputField}>PAN: {formData.supplierPAN}</Text>
            <Text style={styles.inputField}>GST: {formData.supplierGST}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.inputField}>
              Mail Id: {formData.supplierMailId}
            </Text>
            <Text style={styles.inputField}>
              Contact Person: {formData.supplierContactPerson}
            </Text>
            <Text style={styles.inputField}>
              Contact No: {formData.supplierContactNo}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Consignee Details</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.inputField}>
              Name: {formData.consigneeName}
            </Text>
            <Text style={styles.inputField}>
              Address: {formData.consigneeAddress}
            </Text>
            <Text style={styles.inputField}>PAN: {formData.consigneePAN}</Text>
            <Text style={styles.inputField}>IEC: {formData.consigneeIEC}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.inputField}>GST: {formData.consigneeGST}</Text>
            <Text style={styles.inputField}>
              Mail Id: {formData.consigneeMailId}
            </Text>
            <Text style={styles.inputField}>
              Contact Person: {formData.consigneeContactPerson}
            </Text>
            <Text style={styles.inputField}>
              Contact No: {formData.consigneeContactNo}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Main Details</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Description</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>HSN Code</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>No of Box/Bag</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Quantity</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Unit</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Rate</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Amount</Text>
            </View>
          </View>
          {/* Render table rows dynamically */}
          {formData.mainDetails.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.description}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.hsnCode}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.noOfBoxBag}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.quantity}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.unit}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.rate}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.amount}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Bank Details</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.inputField}>
              Bank Name: {formData.bankName}
            </Text>
            <Text style={styles.inputField}>
              Address: {formData.bankAddress}
            </Text>
            <Text style={styles.inputField}>
              Account No: {formData.accountNo}
            </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.inputField}>
              IFSC Code: {formData.ifscCode}
            </Text>
            <Text style={styles.inputField}>AD Code: {formData.adCode}</Text>
            <Text style={styles.inputField}>
              Swift Code: {formData.swiftCode}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Payment Details</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.inputField}>
              Payment Terms: {formData.paymentTerms}
            </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.inputField}>
              Delivery Time: {formData.deliveryTime}
            </Text>
            <Text style={styles.inputField}>
              Delivery Terms: {formData.deliveryTerms}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.notes}>Notes: {notes}</Text>
      </View>

      <Text style={styles.footer}>Thank you for your business!</Text>
    </Page>
  </Document>
)

const PiDomesticForm = () => {
  const [formData, setFormData] = useState({
    piNo: "",
    buyerOrderNo: "",
    date: "",
    buyerOrderDate: "",
    supplierName: "",
    supplierAddress: "",
    supplierPAN: "",
    supplierGST: "",
    supplierMailId: "",
    supplierContactPerson: "",
    supplierContactNo: "",
    consigneeName: "",
    consigneeAddress: "",
    consigneePAN: "",
    consigneeIEC: "",
    consigneeGST: "",
    consigneeMailId: "",
    consigneeContactPerson: "",
    consigneeContactNo: "",
    mainDetails: [
      {
        description: "",
        hsnCode: "",
        noOfBoxBag: "",
        quantity: "",
        unit: "",
        rate: "",
        amount: "",
      },
    ],
    bankName: "",
    bankAddress: "",
    accountNo: "",
    ifscCode: "",
    adCode: "",
    swiftCode: "",
    paymentTerms: "",
    deliveryTime: "",
    deliveryTerms: "",
  })

  const [notes, setNotes] = useState([{ note: "" }])

  const handleAddNote = () => {
    setNotes([...notes, { note: "" }])
  }

  const handleNoteChange = (index, event) => {
    const newNotes = notes.map((note, noteIndex) => {
      if (index === noteIndex) {
        return { ...note, note: event.target.value }
      }
      return note
    })
    setNotes(newNotes)
  }

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleMainDetailsChange = (index, field, value) => {
    const newMainDetails = formData.mainDetails.map((detail, detailIndex) => {
      if (index === detailIndex) {
        return { ...detail, [field]: value }
      }
      return detail
    })
    setFormData({ ...formData, mainDetails: newMainDetails })
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">PI Domestic Invoice</h2>

      {/* Proforma Invoice Section */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">PI No:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("piNo", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Date:</label>
            <input
              type="date"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("date", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Buyer Order No:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("buyerOrderNo", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Buyer Order Date:</label>
            <input
              type="date"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("buyerOrderDate", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Supplier Details Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Supplier Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Name:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("supplierName", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Address:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e =>
                handleFormChange("supplierAddress", e.target.value)
              }
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">PAN:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("supplierPAN", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">GST:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("supplierGST", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Mail Id:</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("supplierMailId", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Contact Person:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e =>
                handleFormChange("supplierContactPerson", e.target.value)
              }
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Contact No:</label>
            <input
              type="tel"
              className="w-full p-2 border rounded"
              onChange={e =>
                handleFormChange("supplierContactNo", e.target.value)
              }
            />
          </div>
        </div>
      </div>

      {/* Consignee Details Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Consignee Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Name:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("consigneeName", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Address:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e =>
                handleFormChange("consigneeAddress", e.target.value)
              }
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">PAN:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("consigneePAN", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">IEC:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("consigneeIEC", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">GST:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("consigneeGST", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Mail Id:</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              onChange={e =>
                handleFormChange("consigneeMailId", e.target.value)
              }
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Contact Person:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e =>
                handleFormChange("consigneeContactPerson", e.target.value)
              }
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Contact No:</label>
            <input
              type="tel"
              className="w-full p-2 border rounded"
              onChange={e =>
                handleFormChange("consigneeContactNo", e.target.value)
              }
            />
          </div>
        </div>
      </div>

      {/* Main Details Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Main Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {formData.mainDetails.map((item, index) => (
            <React.Fragment key={index}>
              <div className="col-span-2">
                <label className="block mb-2 font-medium">Description:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  onChange={e =>
                    handleMainDetailsChange(
                      index,
                      "description",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">HSN Code:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  onChange={e =>
                    handleMainDetailsChange(index, "hsnCode", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">No of Box/Bag:</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  onChange={e =>
                    handleMainDetailsChange(index, "noOfBoxBag", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Quantity:</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  onChange={e =>
                    handleMainDetailsChange(index, "quantity", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Unit:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  onChange={e =>
                    handleMainDetailsChange(index, "unit", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Rate:</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  onChange={e =>
                    handleMainDetailsChange(index, "rate", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Amount:</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  onChange={e =>
                    handleMainDetailsChange(index, "amount", e.target.value)
                  }
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Bank Details Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Bank Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Bank Name:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("bankName", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Address:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("bankAddress", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Account No:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("accountNo", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">IFSC Code:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("ifscCode", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">AD Code:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("adCode", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Swift Code:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("swiftCode", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Payment Details Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Payment Terms:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("paymentTerms", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Delivery Time:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("deliveryTime", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Delivery Terms:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={e => handleFormChange("deliveryTerms", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Note Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Notes</h3>
        {notes.map((note, index) => (
          <div key={index} className="mb-2">
            <label className="block text-sm font-medium mb-1">
              Note {index + 1}:
            </label>
            <input
              type="text"
              value={note.note}
              onChange={e => handleNoteChange(index, e)}
              className="w-full p-2 border rounded"
              placeholder={`Enter note ${index + 1}`}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddNote}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Note
        </button>
      </div>

      {/* Submit Button */}
      <div className="text-right">
        <PDFDownloadLink
          document={
            <MyDocument
              formData={formData}
              notes={notes.map(note => note.note)}
            />
          }
          fileName="ProformaInvoice.pdf"
        >
          {({ loading }) =>
            loading ? (
              <button className="bg-gray-500 text-white py-2 px-4 rounded">
                Generating PDF...
              </button>
            ) : (
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                Generate PDF
              </button>
            )
          }
        </PDFDownloadLink>
      </div>
    </div>
  )
}

export default PiDomesticForm
