import React, { useEffect, useRef, useState } from "react"
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Image,
  PDFViewer,
  pdf,
  Font,
} from "@react-pdf/renderer"
import { useForm } from "react-hook-form"
import { useNavigate, useNavigation } from "react-router-dom"
// Import the logo image
import logo from "../../../../assets/images/brands/smartWrap.jpeg" // Adjust the path to your logo
import axios from "axios"
import Sign from "../../../../assets/images/sign/download.jpeg"

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-800.ttf",
      fontWeight: "bold",
    },
  ],
})

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 10,
  },
  pageborder: {
    border: "2px solid black",
    display: "flex",
    flexDirection: " column",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 18,
    borderBottom: "1px solid #EEE",
  },
  logo: {
    width: 220,
    height: 60,
  },
  address: {
    flex: 1,
    textAlign: "right",
    marginLeft: 10,
    fontSize: 10,
    maxWidth: "450px",
  },
  title: {
    fontFamily: "Open Sans",
    fontSize: 18,
    textAlign: "center",
    paddingTop: 8,
    paddingBottom: 8,
    borderTop: "2px solid black",
    borderBottom: "2px solid black",
    textDecoration: "underline",
  },
  sectionContainer: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
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
    padding: 5,
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
  fieldValueContainer: {
    display: "flex",
    flexDirection: "row",
  },
  field: {
    flex: 1,
  },
  verticalLine: {
    // width: 2,
    // backgroundColor: "#9c9c9c",
    marginHorizontal: 2,
  },
  paymentSection: {
    padding: 10,
    fontSize: 10,
    border: "1px solid #9c9c9c",
    borderRadius: 5,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    width: "14%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableHeader: {
    backgroundColor: "#f2f2f2",
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 8,
    padding: 2,
  },
  tableFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
    paddingRight: 10,
  },
  totalAmount: {
    textAlign: "right",
    width: "40%",
    fontSize: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  mainTermsSection: {
    position: "relative",
  },
  termsSection: {
    borderTop: "2px solid black",
  },
  termsTitle: {
    fontSize: 10,
    paddingTop: 1,
    textDecoration: "underline",
    fontFamily: "Open Sans",
    fontWeight: 600,
  },
  termsContent: {
    fontSize: 10,
  },
  termLable: {
    fontSize: 10,
    paddingTop: 4,
  },
  regardsContainer: {
    fontSize: 10,
    marginTop: 16,
  },
  nameContainer: {
    fontSize: 10,
    marginTop: 30,
  },
  signatureContainer: {
    display: "flex",
    flexDirection: "column",
    borderTop: "2px solid black",
    borderLeft: "2px solid black",
    fontSize: 10,
    height: 90,
    width: 140,
    position: "absolute",
    right: "0px",
    bottom: "0px",
  },
  signContent: {
    padding: 10,
  },
  acceptLable: {
    borderTop: "2px solid black",
    textAlign: "center",
    alignContent: "center",
    paddingTop: 4,
    padding: 5,
    fontFamily: "Open Sans",
    fontSize: 10,
    fontWeight: 600,
    textDecoration: "underline",
  },

  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center", // Aligns text vertically in the center
  },
  text: {
    margin: 6, // Handles spacing between words
    fontSize: 14,
    textAlign: "justify",
    color: "#000000",
    fontWeight: "normal",
    fontSize: 20,
    marginLeft: -3, // Adjust margin to align text correctly
  },
  textBold: {
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: 600,
  },
  filmLabel: {
    fontFamily: "Open Sans",
    fontSize: 10,
    fontWeight: 600,
  },
  nameLabel: {
    fontFamily: "Open Sans",
    fontSize: 10,
    fontWeight: 600,
  },
})

// Calculate total amounts and GST
const calculateTotals = (products, igst, sgst, cgst) => {
  const totalAmount = products?.reduce(
    (sum, product) => sum + product.amount,
    0
  )
  const totalIGST = (totalAmount * igst) / 100
  const totalSGST = (totalAmount * sgst) / 100
  const totalCGST = (totalAmount * cgst) / 100
  const grandTotal = totalAmount + totalIGST + totalSGST + totalCGST
  return { totalAmount, totalIGST, totalSGST, totalCGST, grandTotal }
}

// Create Document Component
const POReport = ({ data }) => {
  console.log(data, "@@@data")
  const { totalAmount, totalIGST, totalSGST, totalCGST, grandTotal } =
    calculateTotals(data?.products, data?.igst, data?.sgst, data?.cgst)
  return (
    <>
      {data && (
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.pageborder}>
              <View style={styles.header}>
                <Image style={styles.logo} src={logo} />
              </View>
              <Text style={styles.title}>PURCHASE ORDER</Text>
              <View style={styles.sectionContainer}>
                <View style={styles.sectionRow}>
                  <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Buyer Details</Text>
                    <Text>Name: {data.buyer_name}</Text>
                    <Text>Address: {data.buyer_address}</Text>
                    <Text>PAN: {data.buyer_pan}</Text>
                    <Text>IEC: {data.buyer_iec}</Text>
                    <Text>GST: {data.buyer_gst}</Text>
                    <Text>Email: {data.buyer_mail}</Text>
                    <Text>Contact Person: {data.buyer_contact_person}</Text>
                    <Text>Contact No: {data.buyer_contact_no}</Text>
                  </View>
                  <View style={styles.separator} />
                  <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Supplier Details</Text>
                    <Text>Name: {data.supplier_name}</Text>
                    <Text>Address: {data.supplier_address}</Text>
                    <Text>PAN: {data.supplier_pan}</Text>
                    <Text>IEC: {data.supplier_iec}</Text>
                    <Text>GST: {data.supplier_gst}</Text>
                    <Text>Email: {data.supplier_mail}</Text>
                    <Text>Contact Person: {data.supplier_contact_person}</Text>
                    <Text>Contact No: {data.supplier_contact_no}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.table}>
                <View style={[styles.tableRow, styles.tableHeader]}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Sr No</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Product Description</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>HSN Code</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Qty</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Unit</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Rate</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Amount</Text>
                  </View>
                </View>
                {data?.po_report_products.map((product, index) => (
                  <View style={styles.tableRow} key={index}>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{index + 1}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {product.product_description}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{product.hsn_code}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{product.quantity}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{product.unit}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{product.rate}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{product.amount}</Text>
                    </View>
                  </View>
                ))}
              </View>
              <View style={styles.tableFooter}>
                <View style={styles.totalAmount}>
                  {/* <Text>Total Amount: 5000</Text> */}
                  {/* <Text>
                    IGST {`(%)`}: {data.igst}
                  </Text>
                  <Text>
                    SGST {`(%)`}: {data.sgst}
                  </Text>
                  <Text>
                    CGST {`(%)`}: {data.cgst}
                  </Text> */}

                  <Text>Grand Total: {grandTotal}</Text>
                </View>
              </View>
              <View style={styles.mainTermsSection}>
                <View style={styles.termsSection}>
                  <Text style={styles.termsTitle}>Terms and Condition :-</Text>
                </View>

                <View style={styles.termsContainer}>
                  <Text style={styles.termLable}>
                    1. Terms and Condition :-
                  </Text>
                </View>
                <View style={styles.regardsContainer}>
                  <Text>Best Regards,</Text>
                  <Text style={styles.filmLabel}>
                    FOR SMARTWRAP FILM EXTRUSIONS LLP
                  </Text>
                </View>
                <View style={styles.nameContainer}>
                  <Text style={styles.nameLabel}>SHREYAS D PATEL</Text>
                  <Text>
                    This is computer generated Purchase Order therefore does not
                    require signature.
                  </Text>
                </View>
                <View style={styles.signatureContainer}>
                  <Image style={styles.signContent} src={Sign} />
                  <Text style={styles.acceptLable}>Acceptance Signature</Text>
                </View>
              </View>
            </View>
          </Page>
        </Document>
      )}
    </>
  )
}

const POReportComponent = () => {
  const navigate = useNavigate()

  const [poData, setPoData] = useState(null)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [poNumber, setPoNumber] = useState("")

  const pdfViewerRef = useRef(null)

  const [poDatatest, setPoDataTest] = useState({
    buyer: {
      buyer_name: "Buyer Name",
      buyer_address: "Buyer Address",
      pan: "Buyer PAN",
      iec: "Buyer IEC",
      gst: "Buyer GST",
      mailId: "Buyer Mail",
      contactPerson: "Buyer Contact Person",
      contactNo: "Buyer Contact No",
    },
    supplier: {
      name: "Supplier Name",
      address: "Supplier Address",
      pan: "Supplier PAN",
      iec: "Supplier IEC",
      gst: "Supplier GST",
      mailId: "Supplier Mail",
      contactPerson: "Supplier Contact Person",
      contactNo: "Supplier Contact No",
    },
    po_report_products: [
      {
        product_description: "Product 1",
        hsn_code: "123456",
        quantity: 10,
        unit: "kg",
        rate: 100,
        amount: 1000,
      },
      {
        product_description: "Product 2",
        hsn_code: "789012",
        quantity: 5,
        unit: "kg",
        rate: 200,
        amount: 1000,
      },
      {
        product_description: "Product 2",
        hsn_code: "789012",
        quantity: 5,
        unit: "kg",
        rate: 200,
        amount: 1000,
      },
      {
        product_description: "Product 2",
        hsn_code: "789012",
        quantity: 5,
        unit: "kg",
        rate: 200,
        amount: 1000,
      },
      {
        product_description: "Product 2",
        hsn_code: "789012",
        quantity: 5,
        unit: "kg",
        rate: 200,
        amount: 1000,
      },
    ],
    paymentTerms: "Net 30 days",
    timeOfDelivery: "2 weeks",
    termsOfDelivery: "FOB",
    igst: 18,
    sgst: 9,
    cgst: 9,
  })

  const handleFetchPOData = async () => {
    const token = localStorage.getItem("token")
    try {
      const response = await axios.post(
        `https://api.smartwrapfilms.com/api/po-reports-get?po_no=${poNumber}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Replace with your token
          },
        }
      )
      console.log(response.data.poReports, "@@responsee")
      if (response.data.status === "success") {
        setPoData(response.data.poReports)

        // Generate PDF and trigger download
        const blob = await pdf(
          <POReport data={response.data.poReports} />
        ).toBlob()
        const link = document.createElement("a")
        link.href = URL.createObjectURL(blob)
        link.download = "purchase_order_report.pdf"
        link.click()

        // close the pop up of Generate pdf by po
        setIsOpen(false)
        setPoNumber("")
      } else {
        alert("Failed to fetch PO data")
      }
    } catch (error) {
      console.error("Error fetching PO data:", error)
      alert("An error occurred while fetching the PO data")
    }
  }

  const handleGeneratePdf = () => {
    navigate("/dashboard/po-report/generate")
  }
  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Purchase Order Report</h2>
        <div className="flex space-x-2">
          <button
            onClick={openModal}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Search PO by PO Number{" "}
          </button>
          <button
            onClick={handleGeneratePdf}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Create New PO
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mb-4">
        <span className="text-3xl">View PDF</span>
      </div>
      {poData && (
        <>
          <PDFDownloadLink
            document={<POReport data={poData} />}
            fileName="purchase_order_report.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download PDF"
            }
          </PDFDownloadLink>
          <PDFViewer width="100%" height="600px">
            <POReport data={poData} />
          </PDFViewer>
        </>
      )}

      {!poData && (
        <PDFViewer width="100%" height="600px">
          <POReport data={poDatatest} />
        </PDFViewer>
      )}

      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Enter PO Number</h2>
              <button onClick={closeModal} className="text-red-500 text-lg">
                &times;
              </button>
            </div>
            <input
              type="text"
              value={poNumber}
              onChange={e => setPoNumber(e.target.value)}
              placeholder="Enter PO Number"
              className="border rounded px-2 py-1 mb-2 w-full"
            />
            <button
              onClick={handleFetchPOData}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
            >
              Get PDF
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default POReportComponent

// import React, { useState } from "react"
// import {
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
//   PDFDownloadLink,
//   Image,
//   PDFViewer,
// } from "@react-pdf/renderer"
// import { useForm } from "react-hook-form"
// import { useNavigate } from "react-router-dom"
// import axios from "axios" // Import axios for API call

// // Import the logo image
// import logo from "../../../../assets/images/brands/smartWrap.jpeg" // Adjust the path to your logo

// // Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "column",
//     backgroundColor: "#ffffff",
//     padding: 10,
//     border: "2px solid #3c3c3c",
//   },
//   header: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 10,
//     borderBottom: "1px solid #EEE",
//   },
//   logo: {
//     width: 90,
//     height: 40,
//   },
//   address: {
//     flex: 1,
//     textAlign: "right",
//     marginLeft: 10,
//     fontSize: 10,
//     maxWidth: "450px",
//   },
//   title: {
//     fontSize: 18,
//     textAlign: "center",
//     marginBottom: 10,
//     marginTop: 10,
//     fontWeight: "800",
//   },
//   sectionContainer: {
//     display: "flex",
//     flexDirection: "column",
//     border: "1px solid #9c9c9c",
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   sectionHeader: {
//     backgroundColor: "#f2f2f2",
//     padding: 5,
//     fontSize: 10,
//     borderBottom: "1px solid #9c9c9c",
//     textAlign: "center",
//   },
//   sectionRow: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 5,
//   },
//   section: {
//     flex: 1,
//     padding: 5,
//     fontSize: 10,
//   },
//   separator: {
//     width: 1,
//     backgroundColor: "#9c9c9c",
//   },
//   fieldValueContainer: {
//     display: "flex",
//     flexDirection: "row",
//   },
//   field: {
//     flex: 1,
//   },
//   verticalLine: {
//     marginHorizontal: 2,
//   },
//   paymentSection: {
//     padding: 10,
//     fontSize: 10,
//     border: "1px solid #9c9c9c",
//     borderRadius: 5,
//   },
//   table: {
//     display: "table",
//     width: "auto",
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderRightWidth: 0,
//     borderBottomWidth: 0,
//     marginTop: 10,
//   },
//   tableRow: {
//     flexDirection: "row",
//   },
//   tableCol: {
//     width: "14%",
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderTopWidth: 0,
//   },
//   tableHeader: {
//     backgroundColor: "#f2f2f2",
//   },
//   tableCell: {
//     margin: "auto",
//     marginTop: 5,
//     fontSize: 8,
//     padding: 2,
//   },
//   tableFooter: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "flex-end",
//     marginTop: 10,
//     paddingRight: 10,
//   },
//   totalAmount: {
//     textAlign: "right",
//     width: "40%",
//     fontSize: 10,
//     paddingRight: 10,
//   },
// })

// // Calculate total amounts and GST
// const calculateTotals = (products, igst, sgst, cgst) => {
//   const totalAmount = products.reduce((sum, product) => sum + product.amount, 0)
//   const totalIGST = (totalAmount * igst) / 100
//   const totalSGST = (totalAmount * sgst) / 100
//   const totalCGST = (totalAmount * cgst) / 100
//   const grandTotal = totalAmount + totalIGST + totalSGST + totalCGST
//   return { totalAmount, totalIGST, totalSGST, totalCGST, grandTotal }
// }

// // Create Document Component
// const POReport = ({ data }) => {
//   const { totalAmount, totalIGST, totalSGST, totalCGST, grandTotal } =
//     calculateTotals(
//       data.po_report_products.map(product => ({
//         ...product,
//         amount: parseFloat(product.amount),
//       })),
//       parseFloat(data.igst),
//       parseFloat(data.sgst),
//       parseFloat(data.cgst)
//     )

//   return (
//     <>
//       <Document>
//         <Page size="A4" style={styles.page}>
//           <View style={styles.pageborder}>
//             <View style={styles.header}>
//               <Image style={styles.logo} src={logo} />
//               <Text style={styles.address}>
//                 Address: Vaishnavi Summit, Ground Floor, Bangalore KA IN 560034.
//               </Text>
//             </View>
//             <Text style={styles.title}>Raw Material Invoice</Text>
//             <View style={styles.sectionContainer}>
//               <View style={styles.sectionRow}>
//                 <View style={styles.section}>
//                   <Text style={styles.sectionHeader}>Buyer Details</Text>
//                   <Text>Name: {data.buyer_name}</Text>
//                   <Text>Address: {data.buyer_address}</Text>
//                   <Text>PAN: {data.buyer_pan}</Text>
//                   <Text>IEC: {data.buyer_iec}</Text>
//                   <Text>GST: {data.buyer_gst}</Text>
//                   <Text>Email: {data.buyer_mail}</Text>
//                   <Text>Contact Person: {data.buyer_contact_person}</Text>
//                   <Text>Contact No: {data.buyer_contact_no}</Text>
//                 </View>
//                 <View style={styles.separator} />
//                 <View style={styles.section}>
//                   <Text style={styles.sectionHeader}>Supplier Details</Text>
//                   <Text>Name: {data.supplier_name}</Text>
//                   <Text>Address: {data.supplier_address}</Text>
//                   <Text>PAN: {data.supplier_pan}</Text>
//                   <Text>IEC: {data.supplier_iec}</Text>
//                   <Text>GST: {data.supplier_gst}</Text>
//                   <Text>Email: {data.supplier_mail}</Text>
//                   <Text>Contact Person: {data.supplier_contact_person}</Text>
//                   <Text>Contact No: {data.supplier_contact_no}</Text>
//                 </View>
//               </View>
//             </View>
//             <View style={styles.table}>
//               <View style={[styles.tableRow, styles.tableHeader]}>
//                 <View style={styles.tableCol}>
//                   <Text style={styles.tableCell}>Sr No</Text>
//                 </View>
//                 <View style={styles.tableCol}>
//                   <Text style={styles.tableCell}>Product Description</Text>
//                 </View>
//                 <View style={styles.tableCol}>
//                   <Text style={styles.tableCell}>HSN Code</Text>
//                 </View>
//                 <View style={styles.tableCol}>
//                   <Text style={styles.tableCell}>Qty</Text>
//                 </View>
//                 <View style={styles.tableCol}>
//                   <Text style={styles.tableCell}>Unit</Text>
//                 </View>
//                 <View style={styles.tableCol}>
//                   <Text style={styles.tableCell}>Rate</Text>
//                 </View>
//                 <View style={styles.tableCol}>
//                   <Text style={styles.tableCell}>Amount</Text>
//                 </View>
//               </View>
//               {data.po_report_products.map((product, index) => (
//                 <View style={styles.tableRow} key={index}>
//                   <View style={styles.tableCol}>
//                     <Text style={styles.tableCell}>{index + 1}</Text>
//                   </View>
//                   <View style={styles.tableCol}>
//                     <Text style={styles.tableCell}>
//                       {product.product_description}
//                     </Text>
//                   </View>
//                   <View style={styles.tableCol}>
//                     <Text style={styles.tableCell}>{product.hsn_code}</Text>
//                   </View>
//                   <View style={styles.tableCol}>
//                     <Text style={styles.tableCell}>{product.quantity}</Text>
//                   </View>
//                   <View style={styles.tableCol}>
//                     <Text style={styles.tableCell}>{product.unit}</Text>
//                   </View>
//                   <View style={styles.tableCol}>
//                     <Text style={styles.tableCell}>{product.rate}</Text>
//                   </View>
//                   <View style={styles.tableCol}>
//                     <Text style={styles.tableCell}>{product.amount}</Text>
//                   </View>
//                 </View>
//               ))}
//             </View>
//             <View style={styles.tableFooter}>
//               <View style={styles.totalAmount}>
//                 <Text>Total Amount: {totalAmount}</Text>
//                 <Text>IGST: {totalIGST}</Text>
//                 <Text>SGST: {totalSGST}</Text>
//                 <Text>CGST: {totalCGST}</Text>
//                 <Text>Grand Total: {grandTotal}</Text>
//               </View>
//             </View>
//             <View style={styles.paymentSection}>
//               <Text>Payment Terms: {data.notes_2}</Text>
//               <Text>Time of Delivery: {data.notes_1}</Text>
//               <Text>Terms of Delivery: {data.notes_3}</Text>
//             </View>
//           </View>
//         </Page>
//       </Document>
//     </>
//   )
// }

// const POReportComponent = () => {
//   const [poData, setPoData] = useState(null)
//   const [poNumber, setPoNumber] = useState("")
//   const token = localStorage.getItem("token");
//   const handleFetchPOData = async () => {
//     try {
//       const response = await axios.post(
//         `https://api.smartwrapfilms.com/api/po-reports-get?po_no=${poNumber}`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Replace with your token
//           },
//         }
//       )
//       if (response.data.status === "success") {
//         setPoData(response.data.poReports)
//       } else {
//         alert("Failed to fetch PO data")
//       }
//     } catch (error) {
//       console.error("Error fetching PO data:", error)
//       alert("An error occurred while fetching the PO data")
//     }
//   }

//   return (
//     <div>
//       <h2>Purchase Order Report</h2>
//       <div>
//         <input
//           type="text"
//           value={poNumber}
//           onChange={e => setPoNumber(e.target.value)}
//           placeholder="Enter PO Number"
//         />
//         <button onClick={handleFetchPOData}>Get PDF</button>
//       </div>
//       {poData && (
//         <>
//           <PDFDownloadLink
//             document={<POReport data={poData} />}
//             fileName="purchase_order_report.pdf"
//           >
//             {({ blob, url, loading, error }) =>
//               loading ? "Loading document..." : "Download PDF"
//             }
//           </PDFDownloadLink>
//           <PDFViewer width="100%" height="600px">
//             <POReport data={poData} />
//           </PDFViewer>
//         </>
//       )}
//     </div>
//   )
// }

// export default POReportComponent
