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
    flexDirection: "column",
    backgroundColor: "#FFF",
    padding: 10,
  },
  section: {
    // margin: 10,
    // padding: 10,
    // flexGrow: 1, 
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "16%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 8,
  },
})

// Create Document Component
const POReport = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={{ fontSize: 17, textAlign: "center" }}>
          Purchase Order
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <View>
          <Text>Logo</Text>
        </View>
        <View>
          <Text>Address</Text>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <View>
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
        <View>
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
        <View style={styles.tableRow}>
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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <View>
          <Text>Payment Terms: {data.paymentTerms}</Text>
          <Text>Time of Delivery: {data.timeOfDelivery}</Text>
          <Text>Terms of Delivery: {data.termsOfDelivery}</Text>
        </View>
        <View>
          <Text>Total Amount: {data.totalAmount}</Text>
          <Text>IGST: {data.igst}%</Text>
          <Text>SGST: {data.sgst}%</Text>
          <Text>CGST: {data.cgst}%</Text>
        </View>
      </View>
    </Page>
  </Document>
)

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
    ],
    paymentTerms: "Payment terms",
    timeOfDelivery: "Time of delivery",
    termsOfDelivery: "Terms of delivery",
    totalAmount: 1000,
    igst: 18,
    sgst: 9,
    cgst: 9,
  })

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Generate Purchase Order PDF</h1>
      <div className="mt-4">
        <PDFDownloadLink
          document={<POReport data={poData} />}
          fileName="purchase_order.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download PDF"
          }
        </PDFDownloadLink>
      </div>
    </div>
  )
}

export default POReportComponent
