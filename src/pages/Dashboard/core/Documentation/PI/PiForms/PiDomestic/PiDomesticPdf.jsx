import React from "react"
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer"
import logo from "../../../../../../../../src/assets/images/brands/smartWrap.jpeg"

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
    width: "12.50%", // Adjusted width to fit 11 columns in the second table
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
    width: 80,
    height: 30,
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
  tableHeader: {
    backgroundColor: "#f2f2f2",
  },
})

const PiDomesticPdf = ({ formData }) => {
  console.log(formData, "@@Formdataa of the pi domestic")
  const {
    pi_no,
    date,
    buyer_order_no,
    buyer_order_date,
    supplier_name,
    supplier_address,
    supplier_pan,
    supplier_gst,
    supplier_mail,
    supplier_contact_person,
    supplier_contact_no,
    consignee_name,
    consignee_address,
    // consignee_country,
    consignee_pan,
    consignee_iec,
    consignee_gst,
    consignee_mail,
    consignee_contact_person,
    consignee_contact_no,
    products = [],
    pi_report_products = [],
    total_fob_value,
    amount_in_words,
    bank_name,
    bank_address,
    bank_account_no,
    bank_ifsc_code,
    bank_ad_code,
    bank_swift_code,
    payment_terms,
    payment_delivery_time,
    payment_delivery_terms,
    notes = [],
    igst,
    sgst,
    cgst,
  } = formData

  const parsedNotes = typeof notes === "string" ? JSON.parse(notes) : notes

  if (formData) {
    console.log(formData, "@@formData from #######")
  }

  console.log(pi_report_products, "@@pi_report_products")

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} />
          <Text style={styles.address}>
            Address: Vaishnavi Summit, Ground Floor, Bangalore KA IN 560034.
          </Text>
          <View style={styles.pInvoice}>
            <Text style={styles.performaTitle}>PROFORMA INVOICE</Text>
            <Text style={styles.performaDesc}>PI No: {pi_no}</Text>
            <Text style={styles.performaDesc}>Date: {date}</Text>
            <Text style={styles.performaDesc}>
              Buyer Order No: {buyer_order_no}
            </Text>
            <Text style={styles.performaDesc}>
              Buyer Order Date: {buyer_order_date}
            </Text>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionRow}>
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>supplier Details</Text>
              <Text>Name: {supplier_name}</Text>
              <Text>Address: {supplier_address}</Text>
              <Text>PAN: {supplier_pan}</Text>
              <Text>GST: {supplier_gst}</Text>
              <Text>Mail Id: {supplier_mail}</Text>
              <Text>Contact Person: {supplier_contact_person}</Text>
              <Text>Contact No: {supplier_contact_no}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>Consignee Details</Text>
              <Text>Name: {consignee_name}</Text>
              <Text>Address: {consignee_address}</Text>
              <Text>Pan: {consignee_pan}</Text>
              <Text>Iec: {consignee_iec}</Text>
              <Text>Country: {consignee_gst}</Text>
              <Text>Mail Id: {consignee_mail}</Text>
              <Text>Contact Person: {consignee_contact_person}</Text>
              <Text>Contact No: {consignee_contact_no}</Text>
            </View>
          </View>
        </View>

        <View style={styles.gaper}></View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>sr no</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Desc</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Hsn Code</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>No of box/bag</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Quantity</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Unit</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Rate</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Amount</Text>
            </View>
          </View>

          {products && (
            <View>
              {products.map((product, index) => (
                <View style={styles.tableRow} key={index}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{index + 1}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{product.description}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{product.hsn_code}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{product.no_of_box}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{product.quantity}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{product.unit}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{product.rate_in_usd}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{product.amount}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {pi_report_products && (
            <View>
              {pi_report_products.map((product, index) => (
                <View style={styles.tableRow} key={index}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{index + 1}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{product.description}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{product.hsn_code}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{product.no_of_box}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{product.quantity}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{product.unit}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{product.rate_in_usd}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{product.amount}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>

        <View style={styles.tableCalculation}>
          <View style={styles.totalAmount}>
            <Text>igst: {igst}</Text>
            <Text>sgst: {sgst}</Text>
            <Text>cgst: {cgst}</Text>
          </View>
        </View>

        <View style={styles.Fob}>
          <Text style={styles.tableCellHeader}>
            Amount in Words: {amount_in_words}
          </Text>
          <Text style={styles.tableCellHeader}>
            Total FOB Value: {total_fob_value}
          </Text>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionRow}>
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>Bank Details</Text>
              <Text>Name: {bank_name}</Text>
              <Text>Address: {bank_address}</Text>
              <Text>Account No: {bank_account_no}</Text>
              <Text>IFSC Code: {bank_ifsc_code}</Text>
              <Text>AD Code: {bank_ad_code}</Text>
              <Text>Swift Code: {bank_swift_code}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>Payment Details</Text>
              <Text>Terms: {payment_terms}</Text>
              <Text>Delivery Time: {payment_delivery_time}</Text>
              <Text>Delivery Terms: {payment_delivery_terms}</Text>
            </View>
          </View>
        </View>

        <View style={styles.notesContainer}>
          <View style={styles.notesSection}>
            <Text style={styles.notesText}>Notes:</Text>
            {parsedNotes.map((note, index) => (
              <Text key={index} style={styles.notesText}>
                {note.note}
              </Text>
            ))}
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
}

export default PiDomesticPdf
