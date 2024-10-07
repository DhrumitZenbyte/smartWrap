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
  Font,
} from "@react-pdf/renderer"
import logo from "../../../../assets/images/brands/smartWrap.jpeg" // Adjust the path to your logo
import Sign from "../../../../assets/images/sign/download.jpeg"


  Font.register({
    family: "Times-Bold",
    src: "https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2",
    fontStyle: "normal",
    fontWeight: "ultrabold",
  })

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

const PoReportPdf = ({ formData }) => {
  const { buyer, supplier, products, igst, sgst, cgst, amountInWords, notes } =
    formData

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
        <View style={styles.pageborder}>
          <View style={styles.header}>
            <Image style={styles.logo} src={logo} />
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
                    <Text style={styles.tableCell}>
                      {product.hsn_code || ""}
                    </Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>
                      {product.quantity || ""}
                    </Text>
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
          <View style={styles.termsSection}>
            <Text style={styles.termsTitle}>Terms and Condition :-</Text>
          </View>
          {notes.map((note, index) => {
            return (
              <View key={`notes-${index}`} style={styles.termsContainer}>
                <Text style={styles.termLable}>
                  {index + 1}. {note.note}
                </Text>
              </View>
            )
          })}
          <View style={styles.regardsContainer}>
            <Text>Best Regards,</Text>
            <Text style={styles.filmLabel}>FOR SMARTWRAP FILM EXTRUSIONS LLP</Text>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameLabel}>SHREYAS D PATEL</Text>
            <Text>This is computer generated Purchase Order therefore does not require signature</Text>
          </View>
          <View style={styles.signatureContainer}>
          <Image style={styles.signContent} src={Sign} />
            <Text style={styles.acceptLable}>Acceptance Signature</Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default PoReportPdf
