// import React from "react"
// import {
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
//   PDFViewer,
// } from "@react-pdf/renderer"
// import { useNavigate } from "react-router-dom"

// // Create styles
// const styles = StyleSheet.create({
//   page: {
//     fontFamily: "Helvetica",
//     fontSize: 10,
//     padding: 30,
//     lineHeight: 1.5,
//     flexDirection: "column",
//   },
//   header: {
//     fontSize: 14,
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     border: "1px solid black",
//   },
//   table: {
//     display: "table",
//     width: "auto",
//     margin: "10px 0",
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderRightWidth: 0,
//     borderBottomWidth: 0,
//   },
//   tableRow: {
//     margin: "auto",
//     flexDirection: "row",
//   },
//   tableCol: {
//     width: "20%",
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderTopWidth: 0,
//   },
//   tableCell: {
//     margin: "auto",
//     marginTop: 5,
//     fontSize: 10,
//   },
//   bold: {
//     fontWeight: "bold",
//   },
//   flex: {
//     display: "flex",
//     flexDirection: "row",
//   },
//   flexColumn: {
//     display: "flex",
//     flexDirection: "column",
//     flexGrow: 1,
//   },
//   center: {
//     textAlign: "center",
//   },
//   underline: {
//     textDecoration: "underline",
//   },
// })

// // Create Document Component
// const PiDocument = () => (
//   <Document>
//     <Page style={styles.page}>
//       <Text style={styles.header}>Proforma Invoice</Text>

//       <View style={styles.flex}>
//         <View style={styles.flexColumn}>
//           <Text>PI No:</Text>
//           <Text>Date:</Text>
//           <Text>Buyer Order No:</Text>
//           <Text>Buyer Order Date:</Text>
//         </View>
//         <View style={[styles.flexColumn, { marginLeft: "auto" }]}>
//           <Text style={styles.bold}>Exporter Details</Text>
//           <Text>Name: Exporter A</Text>
//           <Text>Address: 123 Street, City, Country</Text>
//           <Text>PAN: ABCDE1234F</Text>
//           <Text>IEC: IEC1234567</Text>
//           <Text>GST: GST123456</Text>
//           <Text>Mail Id: exporter@example.com</Text>
//           <Text>Contact Person: John Doe</Text>
//           <Text>Contact No: 1234567890</Text>
//         </View>
//       </View>

//       <View style={styles.flex}>
//         <View style={styles.flexColumn}>
//           <Text style={styles.bold}>Importer / Consignee Details</Text>
//           <Text>Name: Consignee A</Text>
//           <Text>Address: 456 Avenue, City, Country</Text>
//           <Text>Country: Country B</Text>
//           <Text>Mail Id: consignee@example.com</Text>
//           <Text>Contact Person: Jane Doe</Text>
//           <Text>Contact No: 0987654321</Text>
//         </View>
//       </View>

//       <View style={styles.table}>
//         <View style={styles.tableRow}>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Port of Loading</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Port of Discharge</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Final Destination Port</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Country of Origin of Goods</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Country of Final Destination</Text>
//           </View>
//         </View>
//       </View>

//       <View style={styles.table}>
//         <View style={styles.tableRow}>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Size</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Type</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Packaging Description</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Rolls/Pallet</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>No of Pallets</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Total Rolls</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Container</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Quantity</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Unit</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Rate (USD)</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>Amount (USD)</Text>
//           </View>
//         </View>
//       </View>

//       <View style={styles.section}>
//         <Text>Total FOB Value: 1000</Text>
//         <Text>Freight Charges: 50</Text>
//         <Text>Total CFR Value: 1050</Text>
//         <Text>Insurance Charges: 20</Text>
//         <Text>Total CIF Value: 1070</Text>
//         <Text>Amount in Words: One Thousand Seventy</Text>
//       </View>

//       <View style={styles.section}>
//         <Text>Bank Details</Text>
//         <Text>Bank Name: Bank A</Text>
//         <Text>Bank Address: 789 Boulevard, City, Country</Text>
//         <Text>Bank Account No: 123456789012</Text>
//         <Text>Bank IFSC Code: IFSC12345</Text>
//         <Text>Bank AD Code: AD12345</Text>
//         <Text>Bank SWIFT Code: SWIFT12345</Text>
//       </View>

//       <View style={styles.section}>
//         <Text>Payment Terms</Text>
//         <Text>Payment Terms: 30 days</Text>
//         <Text>Delivery Time: 15 days</Text>
//         <Text>Delivery Terms: FOB</Text>
//       </View>

//       <View style={styles.section}>
//         <Text>Notes: Special instructions</Text>
//       </View>
//     </Page>
//   </Document>
// )

// const PiReport = () => {
//   const navigate = useNavigate()

//   const handleGenerateDomestic = () => {
//     navigate("/dashboard/pi-domestic-report/generate") // Replace with your actual path
//   }

//   const handleGenerateExport = () => {
//     navigate("/dashboard/pi-export-report/generate") // Replace with your actual path
//   }

//   return (
//     <div className="flex flex-col justify-between items-center p-4">
//       <div>PiReport</div>
//       <div>
//         <button
//           onClick={handleGenerateDomestic}
//           className="mr-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
//         >
//           Generate PI Domestic
//         </button>
//         <button
//           onClick={handleGenerateExport}
//           className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200"
//         >
//           Generate PI Export
//         </button>
//       </div>
//       <div className="w-full h-screen">
//         <PDFViewer width="100%" height="100%">
//           <PiDocument />
//         </PDFViewer>
//       </div>
//     </div>
//   )
// }

// export default PiReport
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
  pdf,
} from "@react-pdf/renderer"
import logo from "../../../../../assets/images/brands/smartWrap.jpeg"
import PiExportPdf from "./PiForms/PiExport/PiExportPdf"
import axios from "axios"
import PiDomesticPdf from "./PiForms/PiDomestic/PiDomesticPdf"

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Fob: {
    flexDirection: "row",
    justifyContent: "space-between",
    border: "1px solid #9c9c9c",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "9.09%", // Adjusted width to fit 11 columns in the second table
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: 5,
    fontSize: 8,
  },
  tableCellHeader: {
    fontSize: 9,
    fontWeight: "bold",
    marginBottom: 5,
  },
  // Header and other sections remain the same as before
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    border: "1px solid #404040",
  },
  logo: {
    width: 90,
    height: 40,
  },
  address: {
    flex: 1,
    marginLeft: 10,
    fontSize: 10,
    maxWidth: "250px",
  },
  pInvoice: {
    border: "1px solid #000",
    marginLeft: "auto",
  },
  performaTitle: {
    fontSize: 12,
    fontWeight: "bold",
    borderBottom: "1px solid #585858",
    paddingHorizontal: 5,
  },
  performaDesc: {
    borderBottom: "1px solid #585858",
    fontSize: 8,
    paddingHorizontal: 5,
  },
  sectionContainer: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #9c9c9c",
    marginBottom: 10,
  },
  sectionHeader: {
    backgroundColor: "#f2f2f2",
    padding: 5,
    fontSize: 10,
    borderBottom: "1px solid #9c9c9c",
    textAlign: "center",
  },
  sectionRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  section: {
    flex: 1,
    padding: 5,
    fontSize: 10,
  },
  separator: {
    width: 1,
    backgroundColor: "#9c9c9c",
  },
  gaper: {
    paddingTop: 18,
  },
  // ---
  tableCalculation: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 9,
    border: "1px solid #9c9c9c",
  },
  totalAmount: {
    textAlign: "right",
    width: "40%",
    fontSize: 10,
    // paddingRight: 10,
  },

  // New styles for notes, logo, and signature sections
  notesContainer: {
    flexDirection: "row",
    border: "1px solid #000",
    // marginTop: 10,
  },
  notesSection: {
    width: "70%",
    padding: 5,
    borderRight: "1px solid #000",
  },
  notesText: {
    fontSize: 8,
  },
  signatureSection: {
    width: "30%",
    padding: 5,
    justifyContent: "space-between",
  },
  signatureItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  signatureLabel: {
    fontSize: 8,
    fontWeight: "bold",
  },
  roundLogo: {
    width: 90,
    height: 60,
    border: "1px solid #000",
    marginBottom: 10,
    padding: 2,
  },
})

// Updated PiDocument component
const PiDocument = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.header}>
        <Image style={styles.logo} src={logo} />
        <Text style={styles.address}>
          Address: Vaishnavi Summit, Ground Floor, Bangalore KA IN 560034.
        </Text>
        <View style={styles.pInvoice}>
          <Text style={styles.performaTitle}>PROFORMA INVOICE</Text>
          <Text style={styles.performaDesc}>PI No: PI12345</Text>
          <Text style={styles.performaDesc}>Date: 25-06-2023</Text>
          <Text style={styles.performaDesc}>Buyer Order No: BO12345</Text>
          <Text style={styles.performaDesc}>Buyer Order Date: 20-06-2023</Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.sectionRow}>
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Exporter Details</Text>
            <Text>Name: Exporter A</Text>
            <Text> Address: 123 Street, City, Country</Text>
            <Text>PAN: ABCDE1234F</Text>
            <Text>IEC: IEC1234567</Text>
            <Text>GST: GST123456</Text>
            <Text>Mail Id: exporter@example.com</Text>
            <Text>Contact Person: John Doe</Text>
            <Text>Contact No: 1234567890</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>
              Importer / Consignee Details
            </Text>
            <Text>Name: Consignee A</Text>
            <Text>Address: 123 Street, City, Country</Text>
            <Text>Country: Country B</Text>
            <Text>Mail Id: importer@example.com</Text>
            <Text>Contact Person: John Doe</Text>
            <Text>Contact No: 1234567890</Text>
          </View>
        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={{ ...styles.tableCol, width: "20%" }}>
            <Text style={styles.tableCellHeader}>Port of Loading</Text>
          </View>
          <View style={{ ...styles.tableCol, width: "20%" }}>
            <Text style={styles.tableCellHeader}>Port of Discharge</Text>
          </View>
          <View style={{ ...styles.tableCol, width: "20%" }}>
            <Text style={styles.tableCellHeader}>Final Destination Port</Text>
          </View>
          <View style={{ ...styles.tableCol, width: "20%" }}>
            <Text style={styles.tableCellHeader}>
              Country of Origin of Goods
            </Text>
          </View>
          <View style={{ ...styles.tableCol, width: "20%" }}>
            <Text style={styles.tableCellHeader}>
              Country of Final Destination
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={{ ...styles.tableCol, width: "20%" }}>
            <Text style={styles.tableCell}>Port A</Text>
          </View>
          <View style={{ ...styles.tableCol, width: "20%" }}>
            <Text style={styles.tableCell}>Port B</Text>
          </View>
          <View style={{ ...styles.tableCol, width: "20%" }}>
            <Text style={styles.tableCell}>Port C</Text>
          </View>
          <View style={{ ...styles.tableCol, width: "20%" }}>
            <Text style={styles.tableCell}>Country A</Text>
          </View>
          <View style={{ ...styles.tableCol, width: "20%" }}>
            <Text style={styles.tableCell}>Country B</Text>
          </View>
        </View>
      </View>

      <view style={styles.gaper}></view>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>Size</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>Type</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>Packaging Description</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>Rolls/Pallet</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>No of Pallets</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>Total Rolls</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>Container</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>Quantity</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>Unit</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>Rate (USD)</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>Amount (USD)</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>--</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>--</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>--</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>--</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>--</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>--</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>--</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>--</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>--</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>--</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>--</Text>
          </View>
        </View>
      </View>
      <View style={styles.tableCalculation}>
        <View style={styles.totalAmount}>
          <Text>Total FOB Value: 1000</Text>
          <Text>Freight Charges: 50</Text>
          <Text>Total CFR Value: 1050</Text>
          <Text>Insurance Charges: 20</Text>
          <Text>Total CIF Value: 1070</Text>
        </View>
      </View>
      <View style={styles.Fob}>
        <Text style={styles.tableCellHeader}>
          Amount in Words: One Thousand Seventy
        </Text>
        <Text style={styles.tableCellHeader}>Total FOB Value: 1000</Text>
      </View>

      {/*bank and payment section  */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionRow}>
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Bank Details</Text>
            <Text>Bank Name: Bank A</Text>
            <Text> Address: 123 Street, City, Country</Text>
            <Text>Account No: 123456789012</Text>
            <Text>IFSC Code: IFSC12345</Text>
            <Text>AD Code: AD12345</Text>
            <Text>Swift Code: SWIFT12345</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Payment Terms</Text>
            <Text>Payment Terms</Text>
            <Text>Payment Terms: 30 days</Text>
            <Text>Delivery Terms: CIF</Text>
          </View>
        </View>
      </View>

      <View style={styles.notesContainer}>
        <View style={styles.notesSection}>
          <Text style={styles.tableCellHeader}>Notes:</Text>
          <Text style={styles.notesText}>
            1. Above Prices Are As Per Delivery Terms & Conditions Accepted By
            Consignee.
          </Text>
          <Text style={styles.notesText}>
            2. FOB / CFR Advisable To Take Marine Insurance At Your End.
          </Text>
          <Text style={styles.notesText}>
            3. All Legal Matters Are Subject To Indian Jurisdiction
          </Text>
          <Text style={styles.notesText}>
            4. Pallet Are Fumigated, And Fumigation Certificate Will Be Sent
            Along With Original Documents
          </Text>
          <Text style={styles.notesText}>
            5. To produce this material we are using 30% recycled content
          </Text>
          <Text style={styles.notesText}>
            6. Subject to Morbi, (Gujarat) INDIA jurisdiction only
          </Text>
          <Text style={styles.notesText}>
            7. We declare this invoice shows the actual price and details of
            goods described and that all the particulars are true and correct.
          </Text>
          <Text style={styles.notesText}>
            8. Tolerance +/- 10 % variation to be permitted in Quantity &
            Invoice Value.
          </Text>
          <Text style={styles.notesText}>
            9. This is computer generated Proforma Invoice therefore does not
            require signature.
          </Text>
          <Text style={styles.notesText}>
            10. Each rolls will be supplied on a 76mm Diameter Paper Core. Cargo
            will be packed as per standard packing.
          </Text>
        </View>
        <View style={styles.signatureSection}>
          <View style={styles.signatureItem}>
            <Text style={styles.signatureLabel}>Name:</Text>
          </View>
          <Image style={styles.roundLogo} src={logo} />
          <View style={styles.signatureItem}>
            <Text style={styles.signatureLabel}>Authorized Sign</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
)

const PiReport = () => {
  const navigate = useNavigate()
  const [modalIsOpenExp, setIsOpenExp] = useState(false)
  const [modalIsOpenDom, setIsOpenDom] = useState(false)
  const [PiExpData, setExpPiData] = useState(null)
  const [loading, setLoading] = useState(false)

  const [PiExpNumber, setPiExpNumber] = useState(null)
  const [PiDomNumber, setPiDomNumber] = useState(null)

  const token = localStorage.getItem("token")
  const openModal = () => {
    setIsOpenExp(true)
  }

  const openDomModal = () => {
    setIsOpenDom(true)
  }

  const closeDomModal = () => {
    setIsOpenDom(false)
  }

  const closeModal = () => {
    setIsOpenExp(false)
  }
  const handleGenerateDomestic = () => {
    navigate("/dashboard/pi-domestic-report/generate") // Replace with your actual path
  }

  const handleGenerateExport = () => {
    navigate("/dashboard/pi-export-report/generate") // Replace with your actual path
  }

  const handleFetchPiData = async () => {
    console.log(PiExpNumber, "@@#####@@")
    try {
      setLoading(true)
      const response = await axios.post(
        `https://api.smartwrapfilms.com/api/pi-reports-export-get?pi_no=${PiExpNumber}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Replace with your actual token
          },
        }
      )

      setExpPiData(response.data.piReportsExport)
      // Generate PDF and trigger download
      const blob = await pdf(
        <PiExportPdf formData={response.data.piReportsExport} />
      ).toBlob()
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = "purchase_order_report.pdf"
      link.click()

      // close the pop up of Generate pdf by po
      setIsOpenExp(false)
      setPiExpNumber("")
    } catch (error) {
      console.error("Error fetching PI data:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleFetchPiDomData = async () => {
    try {
      setLoading(true)
      const response = await axios.post(
        `https://api.smartwrapfilms.com/api/pi-reports-domestic-get?pi_no=${PiDomNumber}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Replace with your actual token
          },
        }
      )
      console.log(response, "@@res of pi dommmmm specific")
      // setExpPiData(response.data.piReportsExport);
      // Generate PDF and trigger download
      const blob = await pdf(
        <PiDomesticPdf formData={response.data.piReportsExport} />
      ).toBlob()
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = `piDomestic${response.data.piReportsExport.date}`
      link.click()

      // close the pop up of Generate pdf by po
      setIsOpenDom(false)
      setPiDomNumber("")
    } catch (error) {
      console.error("Error fetching PI data:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Pi Report</h2>{" "}
        <div className="flec flex-col space-y-3">
          <div className="flex space-x-2">
            <button
              onClick={handleGenerateDomestic}
              className="mr-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
            >
              Generate PI Domestic
            </button>
            <button
              onClick={handleGenerateExport}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
            >
              Generate PI Export
            </button>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={openDomModal}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Generate PDF by Pi Dom
            </button>
            <button
              onClick={openModal}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Generate PDF by Pi Exp
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <PDFViewer width="1000" height="600">
          <PiDocument />
        </PDFViewer>
      </div>

      {(modalIsOpenExp || modalIsOpenDom) &&
        (modalIsOpenExp ? (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h2 className="text-xl font-bold mb-4">Enter PI Expert Number</h2>
              <input
                type="text"
                value={PiExpNumber}
                onChange={e => setPiExpNumber(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={closeModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleFetchPiData}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  {loading ? "Loading..." : "Generate PDF"}
                </button>
              </div>
            </div>
          </div>
        ) : modalIsOpenDom ? (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h2 className="text-xl font-bold mb-4">
                Enter PI Domestic Number
              </h2>
              <input
                type="text"
                value={PiDomNumber}
                onChange={e => setPiDomNumber(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={closeDomModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleFetchPiDomData}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  {loading ? "Loading..." : "Generate PDF"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        ))}
    </div>
  )
}

export default PiReport
