// import React from 'react'

// import { useNavigate } from "react-router-dom"
// import {
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
//   PDFViewer,
//   Image,
// } from "@react-pdf/renderer"
// import logo from "../../../../../../../../src/assets/images/brands/smartWrap.jpeg";

// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//   },
//   section: {
//     marginBottom: 10,
//   },
//   flexRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   Fob: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     border: "1px solid #9c9c9c",
//   },
//   table: {
//     display: "table",
//     width: "auto",
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderColor: "#000",
//     borderRightWidth: 0,
//     borderBottomWidth: 0,
//   },
//   tableRow: {
//     margin: "auto",
//     flexDirection: "row",
//   },
//   tableCol: {
//     width: "9.09%", // Adjusted width to fit 11 columns in the second table
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderColor: "#000",
//     borderLeftWidth: 0,
//     borderTopWidth: 0,
//   },
//   tableCell: {
//     margin: 5,
//     fontSize: 8,
//   },
//   tableCellHeader: {
//     fontSize: 9,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   // Header and other sections remain the same as before
//   header: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 10,
//     border: "1px solid #404040",
//   },
//   logo: {
//     width: 90,
//     height: 40,
//   },
//   address: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 10,
//     maxWidth: "250px",
//   },
//   pInvoice: {
//     border: "1px solid #000",
//     marginLeft: "auto",
//   },
//   performaTitle: {
//     fontSize: 12,
//     fontWeight: "bold",
//     borderBottom: "1px solid #585858",
//     paddingHorizontal: 5,
//   },
//   performaDesc: {
//     borderBottom: "1px solid #585858",
//     fontSize: 8,
//     paddingHorizontal: 5,
//   },
//   sectionContainer: {
//     display: "flex",
//     flexDirection: "column",
//     border: "1px solid #9c9c9c",
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

//   // ---
//   tableCalculation: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "flex-end",
//     marginTop: 10,
//     paddingBottom: 10,
//     fontSize: 9,
//     border: "1px solid #9c9c9c",
//   },
//   totalAmount: {
//     textAlign: "right",
//     width: "40%",
//     fontSize: 10,
//     // paddingRight: 10,
//   },

//   // New styles for notes, logo, and signature sections
//   notesContainer: {
//     flexDirection: "row",
//     border: "1px solid #000",
//     // marginTop: 10,
//   },
//   notesSection: {
//     width: "70%",
//     padding: 5,
//     borderRight: "1px solid #000",
//   },
//   notesText: {
//     fontSize: 8,
//   },
//   signatureSection: {
//     width: "30%",
//     padding: 5,
//     justifyContent: "space-between",
//   },
//   signatureItem: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   signatureLabel: {
//     fontSize: 8,
//     fontWeight: "bold",
//   },
//   roundLogo: {
//     width: 90,
//     height: 60,
//     border: "1px solid #000",
//     marginBottom: 10,
//     padding: 2,
//   },
// })

// const PiExportPdf = ({ formdata }) => {

//     console.log(formdata,"form data from sunday");

//   return (
//   <Document>
//     <Page style={styles.page}>
//       <View style={styles.header}>
//         <Image style={styles.logo} src={logo} />
//         <Text style={styles.address}>
//           Address: Vaishnavi Summit, Ground Floor, Bangalore KA IN 560034.
//         </Text>
//         <View style={styles.pInvoice}>
//           <Text style={styles.performaTitle}>PROFORMA INVOICE</Text>
//           <Text style={styles.performaDesc}>PI No: PI12345</Text>
//           <Text style={styles.performaDesc}>Date: 25-06-2023</Text>
//           <Text style={styles.performaDesc}>Buyer Order No: BO12345</Text>
//           <Text style={styles.performaDesc}>Buyer Order Date: 20-06-2023</Text>
//         </View>
//       </View>

//       <View style={styles.sectionContainer}>
//         <View style={styles.sectionRow}>
//           <View style={styles.section}>
//             <Text style={styles.sectionHeader}>Exporter Details</Text>
//             <Text>Name: Exporter A</Text>
//             <Text> Address: 123 Street, City, Country</Text>
//             <Text>PAN: ABCDE1234F</Text>
//             <Text>IEC: IEC1234567</Text>
//             <Text>GST: GST123456</Text>
//             <Text>Mail Id: exporter@example.com</Text>
//             <Text>Contact Person: John Doe</Text>
//             <Text>Contact No: 1234567890</Text>
//           </View>
//           <View style={styles.separator} />
//           <View style={styles.section}>
//             <Text style={styles.sectionHeader}>
//               Importer / Consignee Details
//             </Text>
//             <Text>Name: Consignee A</Text>
//             <Text>Address: 123 Street, City, Country</Text>
//             <Text>Country: Country B</Text>
//             <Text>Mail Id: importer@example.com</Text>
//             <Text>Contact Person: John Doe</Text>
//             <Text>Contact No: 1234567890</Text>
//           </View>
//         </View>
//       </View>

//       <View style={styles.table}>
//         <View style={styles.tableRow}>
//           <View style={{ ...styles.tableCol, width: "20%" }}>
//             <Text style={styles.tableCellHeader}>Port of Loading</Text>
//           </View>
//           <View style={{ ...styles.tableCol, width: "20%" }}>
//             <Text style={styles.tableCellHeader}>Port of Discharge</Text>
//           </View>
//           <View style={{ ...styles.tableCol, width: "20%" }}>
//             <Text style={styles.tableCellHeader}>Final Destination Port</Text>
//           </View>
//           <View style={{ ...styles.tableCol, width: "20%" }}>
//             <Text style={styles.tableCellHeader}>
//               Country of Origin of Goods
//             </Text>
//           </View>
//           <View style={{ ...styles.tableCol, width: "20%" }}>
//             <Text style={styles.tableCellHeader}>
//               Country of Final Destination
//             </Text>
//           </View>
//         </View>
//         <View style={styles.tableRow}>
//           <View style={{ ...styles.tableCol, width: "20%" }}>
//             <Text style={styles.tableCell}>Port A</Text>
//           </View>
//           <View style={{ ...styles.tableCol, width: "20%" }}>
//             <Text style={styles.tableCell}>Port B</Text>
//           </View>
//           <View style={{ ...styles.tableCol, width: "20%" }}>
//             <Text style={styles.tableCell}>Port C</Text>
//           </View>
//           <View style={{ ...styles.tableCol, width: "20%" }}>
//             <Text style={styles.tableCell}>Country A</Text>
//           </View>
//           <View style={{ ...styles.tableCol, width: "20%" }}>
//             <Text style={styles.tableCell}>Country B</Text>
//           </View>
//         </View>
//       </View>

//       <View style={styles.table}>
//         <View style={styles.tableRow}>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCellHeader}>Size</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCellHeader}>Type</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCellHeader}>Packaging Description</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCellHeader}>Rolls/Pallet</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCellHeader}>No of Pallets</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCellHeader}>Total Rolls</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCellHeader}>Container</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCellHeader}>Quantity</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCellHeader}>Unit</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCellHeader}>Rate (USD)</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCellHeader}>Amount (USD)</Text>
//           </View>
//         </View>
//         <View style={styles.tableRow}>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>--</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>--</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>--</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>--</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>--</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>--</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>--</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>--</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>--</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>--</Text>
//           </View>
//           <View style={styles.tableCol}>
//             <Text style={styles.tableCell}>--</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.tableCalculation}>
//         <View style={styles.totalAmount}>
//           <Text>Total FOB Value: 1000</Text>
//           <Text>Freight Charges: 50</Text>
//           <Text>Total CFR Value: 1050</Text>
//           <Text>Insurance Charges: 20</Text>
//           <Text>Total CIF Value: 1070</Text>
//         </View>
//       </View>
//       <View style={styles.Fob}>
//         <Text style={styles.tableCellHeader}>
//           Amount in Words: One Thousand Seventy
//         </Text>
//         <Text style={styles.tableCellHeader}>Total FOB Value: 1000</Text>
//       </View>

//       {/*bank and payment section  */}
//       <View style={styles.sectionContainer}>
//         <View style={styles.sectionRow}>
//           <View style={styles.section}>
//             <Text style={styles.sectionHeader}>Bank Details</Text>
//             <Text>Bank Name: Bank A</Text>
//             <Text> Address: 123 Street, City, Country</Text>
//             <Text>Account No: 123456789012</Text>
//             <Text>IFSC Code: IFSC12345</Text>
//             <Text>AD Code: AD12345</Text>
//             <Text>Swift Code: SWIFT12345</Text>
//           </View>
//           <View style={styles.separator} />
//           <View style={styles.section}>
//             <Text style={styles.sectionHeader}>Payment Terms</Text>
//             <Text>Payment Terms</Text>
//             <Text>Payment Terms: 30 days</Text>
//             <Text>Delivery Terms: CIF</Text>
//           </View>
//         </View>
//       </View>

//       <View style={styles.notesContainer}>
//         <View style={styles.notesSection}>
//           <Text style={styles.tableCellHeader}>Notes:</Text>
//           <Text style={styles.notesText}>
//             1. Above Prices Are As Per Delivery Terms & Conditions Accepted By
//             Consignee.
//           </Text>
//           <Text style={styles.notesText}>
//             2. FOB / CFR Advisable To Take Marine Insurance At Your End.
//           </Text>
//           <Text style={styles.notesText}>
//             3. All Legal Matters Are Subject To Indian Jurisdiction
//           </Text>
//           <Text style={styles.notesText}>
//             4. Pallet Are Fumigated, And Fumigation Certificate Will Be Sent
//             Along With Original Documents
//           </Text>
//           <Text style={styles.notesText}>
//             5. To produce this material we are using 30% recycled content
//           </Text>
//           <Text style={styles.notesText}>
//             6. Subject to Morbi, (Gujarat) INDIA jurisdiction only
//           </Text>
//           <Text style={styles.notesText}>
//             7. We declare this invoice shows the actual price and details of
//             goods described and that all the particulars are true and correct.
//           </Text>
//           <Text style={styles.notesText}>
//             8. Tolerance +/- 10 % variation to be permitted in Quantity &
//             Invoice Value.
//           </Text>
//           <Text style={styles.notesText}>
//             9. This is computer generated Proforma Invoice therefore does not
//             require signature.
//           </Text>
//           <Text style={styles.notesText}>
//             10. Each rolls will be supplied on a 76mm Diameter Paper Core. Cargo
//             will be packed as per standard packing.
//           </Text>
//         </View>
//         <View style={styles.signatureSection}>
//           <View style={styles.signatureItem}>
//             <Text style={styles.signatureLabel}>Name:</Text>
//           </View>
//           <Image style={styles.roundLogo} src={logo} />
//           <View style={styles.signatureItem}>
//             <Text style={styles.signatureLabel}>Authorized Sign</Text>
//           </View>
//         </View>
//       </View>
//     </Page>
//   </Document>
//   )
// }

// export default PiExportPdf

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
})

const PiExportPdf = ({ formData }) => {
  console.log(formData, "@@@@@@@@@@@@")

  if (!formData) {
    return (
      <Document>
        <Page style={styles.page}>
          <Text>No data available</Text>
        </Page>
      </Document>
    )
  }

  const {
    pi_no = "",
    date = "",
    buyer_order_no = "",
    buyer_order_date = "",
    exporter_name = "",
    exporter_address = "",
    exporter_pan = "",
    exporter_iec = "",
    exporter_gst = "",
    exporter_mail = "",
    exporter_contact_person = "",
    exporter_contact_no = "",
    consignee_name = "",
    consignee_address = "",
    consignee_country = "",
    consignee_mail = "",
    consignee_contact_person = "",
    consignee_contact_no = "",
    port_of_loading = "",
    port_of_discharge = "",
    final_destination_port = "",
    country_of_origin_of_goods = "",
    country_of_final_destination = "",
    size_and_details = [],
    total_amount = "",
    notes = [],
    amount_in_words = "",
    bank_account_no = "",
    bank_ad_code = "",
    bank_address = "",
    bank_ifsc_code = "",
    bank_name = "",
    bank_swift_code = "",
    freight_charges = "",
    insurance_charges = "",
    payment_delivery_terms = "",
    payment_delivery_time = "",
    payment_terms = "",
    total_cfr_value = "",
    total_cif_value = "",
    total_fob_value = "",
    products = [],
  } = formData

  const parsedNotes = typeof notes === "string" ? JSON.parse(notes) : notes

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
              <Text style={styles.sectionHeader}>Exporter Details</Text>
              <Text>Name: {exporter_name}</Text>
              <Text>Address: {exporter_address}</Text>
              <Text>PAN: {exporter_pan}</Text>
              <Text>IEC: {exporter_iec}</Text>
              <Text>GST: {exporter_gst}</Text>
              <Text>Mail Id: {exporter_mail}</Text>
              <Text>Contact Person: {exporter_contact_person}</Text>
              <Text>Contact No: {exporter_contact_no}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>
                Importer / Consignee Details
              </Text>
              <Text>Name: {consignee_name}</Text>
              <Text>Address: {consignee_address}</Text>
              <Text>Country: {consignee_country}</Text>
              <Text>Mail Id: {consignee_mail}</Text>
              <Text>Contact Person: {consignee_contact_person}</Text>
              <Text>Contact No: {consignee_contact_no}</Text>
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
              <Text style={styles.tableCell}>{port_of_loading}</Text>
            </View>
            <View style={{ ...styles.tableCol, width: "20%" }}>
              <Text style={styles.tableCell}>{port_of_discharge}</Text>
            </View>
            <View style={{ ...styles.tableCol, width: "20%" }}>
              <Text style={styles.tableCell}>{final_destination_port}</Text>
            </View>
            <View style={{ ...styles.tableCol, width: "20%" }}>
              <Text style={styles.tableCell}>{country_of_origin_of_goods}</Text>
            </View>
            <View style={{ ...styles.tableCol, width: "20%" }}>
              <Text style={styles.tableCell}>
                {country_of_final_destination}
              </Text>
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
          {products.map((product, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{product.size}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{product.type}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {product.packaging_description}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{product.rolls_pallet}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{product.no_of_pallets}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{product.total_rolls}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{product.container}</Text>
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
                <Text style={styles.tableCell}>{product.amount_in_usd}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.tableCalculation}>
          <View style={styles.totalAmount}>
            {total_fob_value !== "0" && <Text>Total FOB Value: {total_fob_value}</Text>}
            {freight_charges && <Text>Freight Charges: {freight_charges}</Text>}
            {total_cfr_value && <Text>Total CFR Value: {total_cfr_value}</Text>}
            {insurance_charges && (
              <Text>Insurance Charges: {insurance_charges}</Text>
            )}
            {total_cif_value !== "0" && <Text>Total CIF Value: {total_cif_value}</Text>}
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
              <Text>SWIFT Code: {bank_swift_code}</Text>
              <Text>IFSC Code: {bank_ifsc_code}</Text>
              <Text>AD Code: {bank_ad_code}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>Payment Terms</Text>
              <Text>Payment Terms: {payment_terms}</Text>
              <Text>Delivery Time: {payment_delivery_time}</Text>
              <Text>Delivery Terms: {payment_delivery_terms}</Text>
            </View>
          </View>
        </View>

        <View style={styles.notesContainer}>
          <View style={styles.notesSection}>
            <Text style={styles.sectionHeader}>Notes</Text>
            <Text style={styles.notesText}>Notes:</Text>
            {parsedNotes.map((note, index) => (
              <Text key={index} style={styles.notesText}>
                {index + 1}. {note.note}
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

export default PiExportPdf
