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
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  sectionRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
  },
  section: {
    flex: 1,
    padding: 10,
    fontSize: 10,
    border: "1px solid #9c9c9c",
    borderRadius: 5,
    // margin: 5,
  },
  paymentSection: {
    // flex: 1,
    padding: 10,
    fontSize: 10,
    border: "1px solid #9c9c9c",
    borderRadius: 5,
    // margin: 5,
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
    padding: 10,
  },
  totalAmount: {
    textAlign: "right",
    width: "40%",
    fontSize: 10,
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
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} />
          <Text style={styles.address}>
            Address: Vaishnavi Summit, Ground Floor, 7th Main, 80 Feet Road, 3rd
            Block, Koramangala Industrial Layout, Bangalore KA IN 560034.
          </Text>
        </View>
        <Text style={styles.title}>Purchase Order Receipt</Text>
        <View style={styles.sectionRow}>
          <View style={styles.section}>
            <Text>Buyer Details:</Text>
            <Text>Name: {data.buyer.name}</Text>
            <Text>Address: {data.buyer.address}</Text>
            <Text>PAN: {data.buyer.pan}</Text>
            <Text>IEC: {data.buyer.iec}</Text>
            <Text>GST: {data.buyer.gst}</Text>
            <Text>Mail Id: {data.buyer.mail}</Text>
            <Text>Contact Person: {data.buyer.contactPerson}</Text>
            <Text>Contact No: {data.buyer.contactNo}</Text>
          </View>
          <View style={styles.section}>
            <Text>Supplier Details:</Text>
            <Text>Name: {data.supplier.name}</Text>
            <Text>Address: {data.supplier.address}</Text>
            <Text>PAN: {data.supplier.pan}</Text>
            <Text>IEC: {data.supplier.iec}</Text>
            <Text>GST: {data.supplier.gst}</Text>
            <Text>Mail Id: {data.supplier.mail}</Text>
            <Text>Contact Person: {data.supplier.contactPerson}</Text>
            <Text>Contact No: {data.supplier.contactNo}</Text>
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
  )
}

const POReportComponent = () => {
  const [poData, setPoData] = useState({
    buyer: {
      name: "Buyer Name",
      address: "Buyer Address",
      pan: "Buyer PAN",
      iec: "Buyer IEC",
      gst: "Buyer GST",
      mail: "Buyer Mail",
      contactPerson: "Buyer Contact Person",
      contactNo: "Buyer Contact No",
    },
    supplier: {
      name: "Supplier Name",
      address: "Supplier Address",
      pan: "Supplier PAN",
      iec: "Supplier IEC",
      gst: "Supplier GST",
      mail: "Supplier Mail",
      contactPerson: "Supplier Contact Person",
      contactNo: "Supplier Contact No",
    },
    products: [
      {
        description: "Product 1",
        hsn: "HSN 1",
        qty: 10,
        unit: "Unit 1",
        rate: 100,
        amount: 1000,
      },
      {
        description: "Product 2",
        hsn: "HSN 2",
        qty: 20,
        unit: "Unit 2",
        rate: 200,
        amount: 4000,
      },
      {
        description: "Product 2",
        hsn: "HSN 2",
        qty: 20,
        unit: "Unit 2",
        rate: 200,
        amount: 4000,
      },
      {
        description: "Product 2",
        hsn: "HSN 2",
        qty: 20,
        unit: "Unit 2",
        rate: 200,
        amount: 4000,
      },
      {
        description: "Product 2",
        hsn: "HSN 2",
        qty: 20,
        unit: "Unit 2",
        rate: 200,
        amount: 4000,
      },
      {
        description: "Product 2",
        hsn: "HSN 2",
        qty: 20,
        unit: "Unit 2",
        rate: 200,
        amount: 4000,
      },
      {
        description: "Product 2",
        hsn: "HSN 2",
        qty: 20,
        unit: "Unit 2",
        rate: 200,
        amount: 4000,
      },
    ],
    igst: 18,
    sgst: 9,
    cgst: 9,
    paymentTerms: "Payment within 30 days",
    timeOfDelivery: "Within 15 days",
    termsOfDelivery: "FOB",
  })

  return (
    <div>
      <PDFDownloadLink
        document={<POReport data={poData} />}
        fileName="PO_Report.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>
    </div>
  )
}

export default POReportComponent
