import React from "react"
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
  PDFDownloadLink,
} from "@react-pdf/renderer"
import logo from "../../../../../assets/images/brands/smartWrap.jpeg" // Adjust the path to your logo

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  address: {
    marginLeft: 20,
    fontSize: 12,
    textAlign: "right",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: 20,
  },
  tableHeader: {
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
    borderBottom: "1px solid #ddd",
    textAlign: "center",
  },
  tableRow: {
    borderBottom: "1px solid #ddd",
    textAlign: "center",
  },
  totalsRow: {
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
    borderBottom: "1px solid #ddd",
    textAlign: "center",
  },
  tableCell: {
    padding: 5,
  },
})

const RawMaterialsPDF = ({ companies }) => {
  const totals = companies.reduce(
    (acc, company) => {
      acc.total_pallet += company.total_pallet
      acc.total_bag += company.total_bag
      acc.weight_per_bag += company.weight_per_bag
      acc.total_weight += company.total_weight
      return acc
    },
    {
      total_pallet: 0,
      total_bag: 0,
      weight_per_bag: 0,
      total_weight: 0,
    }
  )

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} />
          <Text style={styles.address}>
            Your Company Name{"\n"}
            Your Company Address Line 1{"\n"}
            Your Company Address Line 2{"\n"}
            Your Company City, State, ZIP Code
          </Text>
        </View>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCell}>Company Name</Text>
            <Text style={styles.tableCell}>Total Pallet</Text>
            <Text style={styles.tableCell}>Bag per Pallet</Text>
            <Text style={styles.tableCell}>Total Bag</Text>
            <Text style={styles.tableCell}>Weight per Bag</Text>
            <Text style={styles.tableCell}>Total Weight</Text>
          </View>
          {companies.map((company, index) => (
            <View
              key={index}
              style={[
                styles.tableRow,
                { backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white" },
              ]}
            >
              <Text style={styles.tableCell}>{company.company_name}</Text>
              <Text style={styles.tableCell}>{company.total_pallet}</Text>
              <Text style={styles.tableCell}>{company.bag_per_pallet}</Text>
              <Text style={styles.tableCell}>{company.total_bag}</Text>
              <Text style={styles.tableCell}>{company.weight_per_bag}</Text>
              <Text style={styles.tableCell}>{company.total_weight}</Text>
            </View>
          ))}
          <View style={[styles.tableRow, styles.totalsRow]}>
            <Text style={styles.tableCell}>Total</Text>
            <Text style={styles.tableCell}>{totals.total_pallet}</Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}>{totals.total_bag}</Text>
            <Text style={styles.tableCell}>{totals.weight_per_bag}</Text>
            <Text style={styles.tableCell}>{totals.total_weight}</Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default RawMaterialsPDF
