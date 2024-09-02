// import React from "react"
// import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer"

// const styles = StyleSheet.create({
//   page: { padding: 30 },
//   section: { marginBottom: 10 },
//   heading: { fontSize: 20, marginBottom: 10 },
//   text: { fontSize: 12, marginBottom: 5 },
// })

// const PoReportPdf = ({ formData }) => (
//   <Document>
//     <Page style={styles.page}>
//       <View style={styles.section}>
//         <Text style={styles.heading}>Purchase Order</Text>
//         <Text style={styles.text}>PO No: {formData.poNo}</Text>
//         <Text style={styles.text}>Date: {formData.date}</Text>
//         <Text style={styles.text}>Quotation No: {formData.quotationNo}</Text>
//         <Text style={styles.text}>
//           Quotation Date: {formData.quotationDate}
//         </Text>
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.heading}>Buyer Details</Text>
//         <Text style={styles.text}>Name: {formData.buyer?.name}</Text>
//         <Text style={styles.text}>Address: {formData.buyer?.address}</Text>
//         <Text style={styles.text}>PAN: {formData.buyer?.pan}</Text>
//         <Text style={styles.text}>IEC: {formData.buyer?.iec}</Text>
//         <Text style={styles.text}>GST: {formData.buyer?.gst}</Text>
//         <Text style={styles.text}>Mail: {formData.buyer?.mail}</Text>
//         <Text style={styles.text}>
//           Contact Person: {formData.buyer?.contactPerson}
//         </Text>
//         <Text style={styles.text}>Contact No: {formData.buyer?.contactNo}</Text>
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.heading}>Supplier Details</Text>
//         <Text style={styles.text}>Name: {formData.supplier?.name}</Text>
//         <Text style={styles.text}>Address: {formData.supplier?.address}</Text>
//         <Text style={styles.text}>PAN: {formData.supplier?.pan}</Text>
//         <Text style={styles.text}>IEC: {formData.supplier?.iec}</Text>
//         <Text style={styles.text}>GST: {formData.supplier?.gst}</Text>
//         <Text style={styles.text}>Mail: {formData.supplier?.mail}</Text>
//         <Text style={styles.text}>
//           Contact Person: {formData.supplier?.contactPerson}
//         </Text>
//         <Text style={styles.text}>
//           Contact No: {formData.supplier?.contactNo}
//         </Text>
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.heading}>Product Details</Text>
//         <Text style={styles.text}>Description: {formData.description}</Text>
//         <Text style={styles.text}>HSN: {formData.hsn}</Text>
//         <Text style={styles.text}>Qty: {formData.qty}</Text>
//         <Text style={styles.text}>Unit: {formData.unit}</Text>
//         <Text style={styles.text}>Rate: {formData.rate}</Text>
//         <Text style={styles.text}>Amount: {formData.amount}</Text>
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.heading}>Payment Details</Text>
//         <Text style={styles.text}>IGST: {formData.igst}</Text>
//         <Text style={styles.text}>SGST: {formData.sgst}</Text>
//         <Text style={styles.text}>CGST: {formData.cgst}</Text>
//         <Text style={styles.text}>Payment Terms: {formData.paymentTerms}</Text>
//         <Text style={styles.text}>
//           Amount in Words: {formData.amountInWords}
//         </Text>
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.heading}>Notes</Text>
//         <Text style={styles.text}>Note 1: {formData.note1}</Text>
//         <Text style={styles.text}>Note 2: {formData.note2}</Text>
//         <Text style={styles.text}>Note 3: {formData.note3}</Text>
//         <Text style={styles.text}>Note 4: {formData.note4}</Text>
//       </View>
//     </Page>
//   </Document>
// )


import React from "react"
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer"
import logo from "../../../../assets/images/brands/smartWrap.jpeg" // Adjust the path to your logo

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 10,
    border: "2px solid #3c3c3c",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottom: "1px solid #EEE",
  },
  logo: {
    width: 90,
    height: 40,
  },
  address: {
    flex: 1,
    textAlign: "right",
    marginLeft: 10,
    fontSize: 10,
    maxWidth: "450px",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
    fontWeight: "800",
  },
  sectionContainer: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #9c9c9c",
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
    marginBottom:10,
    paddingRight: 10,
  },
  totalAmount: {
    textAlign: "right",
    width: "40%",
    fontSize: 10,
    paddingRight: 10,
    paddingBottom:10
  },
})

const PoReportPdf = ({ formData }) => {
  const {
    buyer,
    supplier,
    products,
    igst,
    sgst,
    cgst,
    amountInWords,
    note1,
    note2,
    note3,
    note4,
  } = formData

  // Debugging: log the formData to check if products are being received correctly
  console.log("Form Data:", formData)

  const calculateTotals = (products, igst, sgst, cgst) => {
    let totalAmount = 0
    products.forEach(product => {
      totalAmount += parseFloat(product.amount) || 0
    })
    const totalIGST = (totalAmount * (parseFloat(igst) || 0)) / 100
    const totalSGST = (totalAmount * (parseFloat(sgst) || 0)) / 100
    const totalCGST = (totalAmount * (parseFloat(cgst) || 0)) / 100
    const grandTotal = totalAmount + totalIGST + totalSGST + totalCGST

    return { totalAmount, totalIGST, totalSGST, totalCGST, grandTotal }
  }

  const { totalAmount, totalIGST, totalSGST, totalCGST, grandTotal } =
    calculateTotals(products || [], igst || 0, sgst || 0, cgst || 0)

  // Helper function to convert text to uppercase
  const toUpperCase = text => (text ? text.toUpperCase() : "")

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} />
          <Text style={styles.address}>
            Address: Vaishnavi Summit, Ground Floor, Bangalore KA IN 560034.
          </Text>
        </View>
        <Text style={styles.title}>Purchase Order</Text>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionRow}>
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>Buyer Details</Text>
              {Object.entries(buyer || {}).map(([field, value]) => (
                <View key={field} style={styles.fieldValueContainer}>
                  <Text style={styles.field}>{`${toUpperCase(field)}:`}</Text>
                  <View style={styles.verticalLine} />
                  <Text style={styles.field}>{toUpperCase(value) || ""}</Text>
                </View>
              ))}
            </View>
            <View style={styles.separator} />
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>Supplier Details</Text>
              {Object.entries(supplier || {}).map(([field, value]) => (
                <View key={field} style={styles.fieldValueContainer}>
                  <Text style={styles.field}>{`${toUpperCase(field)}:`}</Text>
                  <View style={styles.verticalLine} />
                  <Text style={styles.field}>{toUpperCase(value) || ""}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>#</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Description</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>HSN</Text>
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

          {products &&
            products.map((product, index) => (
              <View style={styles.tableRow} key={index}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{index + 1}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {product.product_description || ""}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{product.hsn_code || ""}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{product.quantity || ""}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{product.unit || ""}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{product.rate || ""}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{product.amount || ""}</Text>
                </View>
              </View>
            ))}
        </View>

        <View style={styles.tableFooter}>
          <View style={styles.totalAmount}>
            {/* <Text>Total Amount: {totalAmount.toFixed(2)}</Text> */}
            {/* <Text>
              Total IGST {`(${igst}%)`}: {totalIGST.toFixed(2)}
            </Text> */}
            {/* <Text>
              Total SGST {`(${sgst}%)`}: {totalSGST.toFixed(2)}
            </Text> */}
            {/* <Text>
              Total CGST {`(${cgst}%)`}: {totalCGST.toFixed(2)}
            </Text> */}
            <Text>Grand Total: {grandTotal.toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.paymentSection}>
          <Text>Notes:</Text>
          <Text>{note1}</Text>
          <Text>{note2}</Text>
          <Text>{note3}</Text>
          <Text>{note4}</Text>
          <Text>Amount in Words: {amountInWords}</Text>
        </View>
      </Page>
    </Document>
  )
}

export default PoReportPdf
