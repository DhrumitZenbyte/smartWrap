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
  )
}

const POReportComponent = () => {
    const { register, handleSubmit } = useForm()

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

      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Purchase Order Form
        </h1>
        <form onSubmit={""}>
          <h2 className="text-xl font-semibold mb-4">Purchase Order</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-semibold">PO No:</label>
              <input
                className="w-full p-2 border rounded"
                {...register("poNo")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Date:</label>
              <input
                type="date"
                className="w-full p-2 border rounded"
                {...register("date")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Quotation No:</label>
              <input
                className="w-full p-2 border rounded"
                {...register("quotationNo")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">
                Quotation Date:
              </label>
              <input
                type="date"
                className="w-full p-2 border rounded"
                {...register("quotationDate")}
              />
            </div>
          </div>

          <h2 className="text-xl font-semibold my-4">Buyer Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-semibold">Buyer Name:</label>
              <input
                className="w-full p-2 border rounded"
                {...register("buyer.name")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Buyer Address:</label>
              <input
                className="w-full p-2 border rounded"
                {...register("buyer.address")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Buyer PAN:</label>
              <input
                className="w-full p-2 border rounded"
                {...register("buyer.pan")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Buyer IEC:</label>
              <input
                className="w-full p-2 border rounded"
                {...register("buyer.iec")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Buyer GST:</label>
              <input
                className="w-full p-2 border rounded"
                {...register("buyer.gst")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Buyer Mail:</label>
              <input
                className="w-full p-2 border rounded"
                {...register("buyer.mail")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">
                Buyer Contact Person:
              </label>
              <input
                className="w-full p-2 border rounded"
                {...register("buyer.contactPerson")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">
                Buyer Contact No:
              </label>
              <input
                className="w-full p-2 border rounded"
                {...register("buyer.contactNo")}
              />
            </div>
          </div>

          <h2 className="text-xl font-semibold my-4">Supplier Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-semibold">Supplier Name:</label>
              <input
                className="w-full p-2 border rounded"
                {...register("supplier.name")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">
                Supplier Address:
              </label>
              <input
                className="w-full p-2 border rounded"
                {...register("supplier.address")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Supplier PAN:</label>
              <input
                className="w-full p-2 border rounded"
                {...register("supplier.pan")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Supplier IEC:</label>
              <input
                className="w-full p-2 border rounded"
                {...register("supplier.iec")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Supplier GST:</label>
              <input
                className="w-full p-2 border rounded"
                {...register("supplier.gst")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Supplier Mail:</label>
              <input
                className="w-full p-2 border rounded"
                {...register("supplier.mail")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">
                Supplier Contact Person:
              </label>
              <input
                className="w-full p-2 border rounded"
                {...register("supplier.contactPerson")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">
                Supplier Contact No:
              </label>
              <input
                className="w-full p-2 border rounded"
                {...register("supplier.contactNo")}
              />
            </div>
          </div>

          <h2 className="text-xl font-semibold my-4">Product Details</h2>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">
              Products (Description, HSN, Qty, Unit, Rate, Amount):
            </label>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              {...register("products")}
            ></textarea>
          </div>

          <h2 className="text-xl font-semibold my-4">Payment Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-semibold">IGST %:</label>
              <input
                type="number"
                step="0.01"
                className="w-full p-2 border rounded"
                {...register("igst")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">SGST %:</label>
              <input
                type="number"
                step="0.01"
                className="w-full p-2 border rounded"
                {...register("sgst")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">CGST %:</label>
              <input
                type="number"
                step="0.01"
                className="w-full p-2 border rounded"
                {...register("cgst")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Payment Terms:</label>
              <input
                className="w-full p-2 border rounded"
                {...register("paymentTerms")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">
                Amount in Words:
              </label>
              <input
                className="w-full p-2 border rounded"
                {...register("amountInWords")}
              />
            </div>
          </div>

          <h2 className="text-xl font-semibold my-4">Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-semibold">Note 1:</label>
              <input
                className="w-full p-2 border rounded"
                {...register("note1")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Note 2:</label>
              <input
                className="w-full p-2 border rounded"
                {...register("note2")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Note 3:</label>
              <input
                className="w-full p-2 border rounded"
                {...register("note3")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Note 4:</label>
              <input
                className="w-full p-2 border rounded"
                {...register("note4")}
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
            >
              Generate PDF
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default POReportComponent
