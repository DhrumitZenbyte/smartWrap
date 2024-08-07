import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import companylogo from "../../../../../assets/images/brands/smartWrap.jpeg"

const styles = StyleSheet.create({
  table: { display: "table", width: "auto" },
  tableRow: { flexDirection: "row" },
  tableCol: { width: "10%", borderStyle: "solid", borderWidth: 1 },
  tableCell: { margin: "auto", marginTop: 5, fontSize: 10 },
  header: { fontSize: 14, bold: true, marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottom: "1px solid #EEE",
  },
  tabletitle: {
    fontSize: 14, bold: true, marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 50,
  },
});

const FinishGoodsPDF = ({ data }) => {
  // Calculate totals
  const totals = data.reduce((acc, item) => {
    acc.sqmPerRoll += item.sqm_per_roll || 0;
    acc.rollQuantity += item.roll_quantity || 0;
    acc.totalSqm += item.total_sqm || 0;
    acc.Boxes += item.boxes || 0;
    acc.Micron += item.size?.micron || 0; // Properly access micron inside size
    return acc;
  }, { sqmPerRoll: 0, rollQuantity: 0, totalSqm: 0, Boxes: 0, Micron: 0 });

  return (
    <Document>
      <Page size="A4" style={{ padding: 10 }}>
        <View style={styles.header}>
          <Image style={styles.logo} src={companylogo} />
          <View style={styles.address}>
            <Text>
              Address: Vaishnavi Summit, Ground Floor, 7th Main,362001
            </Text>
          </View>
        </View>
        <Text style={styles.tabletitle}>Finish Goods Report</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Product</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Size</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Pallet</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Pallet Name</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Details</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Micron</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Sqm per Roll</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Roll Quantity</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Total Sqm</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Boxes</Text></View>
          </View>
          {data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={styles.tableCol}><Text style={styles.tableCell}>{item.product?.product_name || 'N/A'}</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>{item.size ? `${item.size.size_in_cm}x${item.size.size_in_mm}` : 'N/A'}</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>{item.pallet}</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>{item.pallet_name}</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>{item.details}</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>{item.size?.micron || 'N/A'}</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>{item.sqm_per_roll}</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>{item.roll_quantity}</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>{item.total_sqm}</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>{item.boxes}</Text></View>
            </View>
          ))}
          <View style={styles.tableRow}>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Totals</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}></Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}></Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}></Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}></Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{totals.Micron}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{totals.sqmPerRoll}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{totals.rollQuantity}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{totals.totalSqm}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{totals.Boxes}</Text></View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default FinishGoodsPDF;
