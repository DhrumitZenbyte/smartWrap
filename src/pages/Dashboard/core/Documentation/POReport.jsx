import React, { useState } from "react"
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer"
import { useForm } from "react-hook-form"
import { useNavigate, useNavigation } from "react-router-dom"
// Import the logo image
import logo from "../../../../assets/images/brands/smartWrap.jpeg" // Adjust the path to your logo

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    padding: 10,
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
    fontWeight: "800"
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
    paddingRight: 10,
  },
  totalAmount: {
    textAlign: "right",
    width: "40%",
    fontSize: 10,
    paddingRight: 10,
  },
})

// Calculate total amounts and GST
const calculateTotals = (products, igst, sgst, cgst) => {
  const totalAmount = products.reduce((sum, product) => sum + product.amount, 0)
  const totalIGST = (totalAmount * igst) / 100
  const totalSGST = (totalAmount * sgst) / 100
  const totalCGST = (totalAmount * cgst) / 100
  const grandTotal = totalAmount + totalIGST + totalSGST + totalCGST
  return { totalAmount, totalIGST, totalSGST, totalCGST, grandTotal }
}

// Create Document Component
const POReport = ({ data }) => {
  const { totalAmount, totalIGST, totalSGST, totalCGST, grandTotal } =
    calculateTotals(data.products, data.igst, data.sgst, data.cgst)

  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Image style={styles.logo} src={logo} />
            <Text style={styles.address}>
              Address: Vaishnavi Summit, Ground Floor, Bangalore KA IN 560034.
            </Text>
          </View>
          <Text style={styles.title}>Raw Material Invoice</Text>
          <View style={styles.sectionContainer}>
            <View style={styles.sectionRow}>
              <View style={styles.section}>
                <Text style={styles.sectionHeader}>Buyer Details</Text>
                {Object.entries(data.buyer).map(([field, value]) => (
                  <View key={field} style={styles.fieldValueContainer}>
                    <Text style={styles.field}>{`${field}:`}</Text>
                    <View style={styles.verticalLine} />
                    <Text style={styles.field}>{value}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.separator} />
              <View style={styles.section}>
                <Text style={styles.sectionHeader}>Supplier Details</Text>
                {Object.entries(data.supplier).map(([field, value]) => (
                  <View key={field} style={styles.fieldValueContainer}>
                    <Text style={styles.field}>{`${field}:`}</Text>
                    <View style={styles.verticalLine} />
                    <Text style={styles.field}>{value}</Text>
                  </View>
                ))}
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
            {data.products.map((product, index) => (
              <View style={styles.tableRow} key={index}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{index + 1}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{product.description}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{product.hsn}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{product.qty}</Text>
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
              <Text>Total Amount: {totalAmount}</Text>
              <Text>IGST: {totalIGST}</Text>
              <Text>SGST: {totalSGST}</Text>
              <Text>CGST: {totalCGST}</Text>
              <Text>Grand Total: {grandTotal}</Text>
            </View>
          </View>
          <View style={styles.paymentSection}>
            <Text>Payment Terms: {data.paymentTerms}</Text>
            <Text>Time of Delivery: {data.timeOfDelivery}</Text>
            <Text>Terms of Delivery: {data.termsOfDelivery}</Text>
          </View>
        </Page>
      </Document>
    </>
  )
}

const POReportComponent = () => {
  const navigate = useNavigate() // Use the useNavigate hook

  const [poData, setPoData] = useState({
    buyer: {
      name: "Buyer Name",
      address: "Buyer Address",
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
    products: [
      {
        description: "Product 1",
        hsn: "123456",
        qty: 10,
        unit: "kg",
        rate: 100,
        amount: 1000,
      },
      {
        description: "Product 2",
        hsn: "789012",
        qty: 5,
        unit: "kg",
        rate: 200,
        amount: 1000,
      },
      {
        description: "Product 2",
        hsn: "789012",
        qty: 5,
        unit: "kg",
        rate: 200,
        amount: 1000,
      },
      {
        description: "Product 2",
        hsn: "789012",
        qty: 5,
        unit: "kg",
        rate: 200,
        amount: 1000,
      },
      {
        description: "Product 2",
        hsn: "789012",
        qty: 5,
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

  const handleGeneratePdf = () => {
    navigate("/dashboard/po-report/generate")
  }

  return (
    <div>
      <h2>Purchase Order Report</h2>
      <PDFDownloadLink
        document={<POReport data={poData} />}
        fileName="purchase_order_report.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>
      <div className="">
        <button onClick={handleGeneratePdf}>Generate pdf</button>
        <button>get pdf</button>
      </div>
    </div>
  )
}

export default POReportComponent
