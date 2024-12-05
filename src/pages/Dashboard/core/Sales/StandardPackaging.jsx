import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer"
import React from "react"
import logo from "../../../../assets/images/brands/smartWrap.jpeg"
import { Table, TableRow, TableCell } from "reactstrap"

Font.register({
  family: "Times-Bold",
  src: "https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2",
  fontStyle: "normal",
  fontWeight: "bold",
})

export const StandardPackaging = props => {
  Font.register({
    family: "Open Sans",
    fonts: [
      {
        src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
        fontWeight: 600,
      },
    ],
  })

  const standardPageStyles = StyleSheet.create({
    page: {
      padding: 20,
    },
    mainContainer: {
      border: "2px solid #000000",
      // height: "max-content",
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      borderBottom: "2px solid #00b0f0",
    },
    logo: {
      width: 95,
      height: 30,
    },
    headerTitle: {
      padding: 20,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      borderRight: "2px solid #00b0f0",
      gap: 40,
    },
    headerText: {
      fontSize: 12,
      fontFamily: "Open Sans",
      fontWeight: 700,
      marginRight: 70,
    },
    containerText: {
      fontSize: 11,
      borderBottom: "2px solid #00b0f0",
      width: "140px",
      textAlign: "center",
    },
    containerTextId: {
      fontSize: 11,
      width: "140px",
      textAlign: "center",
    },
    table: {
      display: "table",
      width: "100%",
    },
    tableRow: {
      display: "flex",
      flexDirection: "row",
    },
    headerRow: {
      fontFamily: "Open Sans",
      fontWeight: 700,
    },
    tableCell: {
      flex: 1,
      fontSize: 8,
      textAlign: "center",
      borderRightWidth: 1,
      borderRightColor: "#000000", // Light blue border
      borderStyle: "solid",
      borderBottomWidth: 1,
      borderBottomColor: "#000000", // Light blue border
    },
    lastCell: {
      borderRight: "2px solid white",
    },
    headerCell: {
      borderRight: "2px solid #00b0f0",
      borderBottom: "2px solid #00b0f0",
      wordWrap: "no-wrap",
    },
    lastRow: {
      borderBottom: "none",
    },
    tableContentText: {
      color: "red",
      // padding: 5
      textAlign: "center",
      justifyContent: "center",
    },
    grandTotalRow: {
      borderTopWidth: 2,
      borderTopColor: "#00b0f0",
    },
    grandTotalText: {
      fontWeight: "bold",
      fontSize: 10,
    },
    grandTotalHighlight: {
      color: "red",
      fontWeight: "bold",
    },
    grandTotalAmount: {
      color: "red",
      fontWeight: "bold",
      fontSize: 10,
      textAlign: "center",
      borderBottom: "none",
      borderLeft: "2px solid #00b0f0",
      padding: 0,
    },
  })

  return (
    <Document>
      <Page style={standardPageStyles.page}>
        <View style={standardPageStyles.mainContainer}>
          <View style={standardPageStyles.header}>
            <View style={standardPageStyles.headerTitle}>
              <Image style={standardPageStyles.logo} src={logo} />
              <Text style={standardPageStyles.headerText}>
                STANDARD PACKAGING LIST
              </Text>
            </View>
            <View>
              <View style={standardPageStyles.containerText}>
                <Text
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    paddingBottom: "10px",
                  }}
                >
                  CONTAINER NO.
                </Text>
              </View>
              <View style={standardPageStyles.containerTextId}>
                <Text
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 700,
                    paddingTop: "5px",
                    color: "red",
                  }}
                >
                  TCLU 1234567
                </Text>
              </View>
            </View>
          </View>
          <View style={standardPageStyles.table}>
            {/* Table Header */}
            <View
              style={[
                standardPageStyles.tableRow,
                standardPageStyles.headerRow,
              ]}
            >
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.headerCell,
                ]}
              >
                SR NO.
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.headerCell,
                ]}
              >
                SIZE
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.headerCell,
                ]}
              >
                MICRON
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.headerCell,
                ]}
              >
                MATERIAL
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.headerCell,
                ]}
              >
                METERS
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.headerCell,
                ]}
              >
                ROLLS / BOXES PER PALLET
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.headerCell,
                ]}
              >
                NET WT / PALLET
              </Text>
            </View>

            {/* Table Rows */}
            <View style={standardPageStyles.tableRow}>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                1
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                500
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                20
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                DELTA
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                -
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                46
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.lastCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                667.00
              </Text>
            </View>
            <View style={[standardPageStyles.tableRow]}>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                1
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                500
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                20
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                DELTA
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                -
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                46
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.lastCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                667.00
              </Text>
            </View>
            <View style={[standardPageStyles.tableRow]}>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                1
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                500
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                20
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                DELTA
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                -
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                46
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.lastCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                667.00
              </Text>
            </View>
            <View style={[standardPageStyles.tableRow]}>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                1
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                500
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                20
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                DELTA
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                -
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                46
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.lastCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                667.00
              </Text>
            </View>
            <View style={[standardPageStyles.tableRow]}>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                1
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                500
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                20
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                DELTA
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                -
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                46
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.lastCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                667.00
              </Text>
            </View>
            <View style={[standardPageStyles.tableRow]}>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                1
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                500
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                20
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                DELTA
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                -
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                46
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.lastCell,
                  standardPageStyles.tableContentText,
                ]}
              >
                667.00
              </Text>
            </View>
            <View style={[standardPageStyles.tableRow]}>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                  standardPageStyles.lastRow,
                ]}
              >
                1
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                  standardPageStyles.lastRow,
                ]}
              >
                500
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                  standardPageStyles.lastRow,
                ]}
              >
                20
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                  standardPageStyles.lastRow,
                ]}
              >
                DELTA
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                  standardPageStyles.lastRow,
                ]}
              >
                -
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.tableContentText,
                  standardPageStyles.lastRow,
                ]}
              >
                46
              </Text>
              <Text
                style={[
                  standardPageStyles.tableCell,
                  standardPageStyles.lastCell,
                  standardPageStyles.tableContentText,
                  standardPageStyles.lastRow,
                ]}
              >
                667.00
              </Text>
            </View>
            {/* Table grand total row */}
            <View style={standardPageStyles.tableRow}>
              {/* First cell spanning 6 columns */}
              <Text
                style={[
                  standardPageStyles.tableCell,
                  {
                    flex: 6,
                    fontSize: "10px",
                    borderTop: "2px solid #00b0f0",
                    fontFamily: "Open Sans",
                    fontWeight: 700,
                    borderRight: "none",
                    borderBottom: "none",
                    paddingTop: "5px",
                    // alignItems: "center", 
                  },
                ]}
              >
                GRAND TOTAL - <Text style={{ color: "red" }}>33 PALLETS</Text>
              </Text>

              {/* Last cell for the total value */}
              <Text
                style={[
                  standardPageStyles.tableCell,
                  {
                    flex: 1,
                    fontSize: "10px",
                    borderTop: "2px solid #00b0f0",
                    fontFamily: "Open Sans",
                    fontWeight: "bold",
                    borderLeft: "2px solid #00b0f0",
                    borderBottom: "none",
                    paddingTop: "5px",
                    color: "red",
                  },
                ]}
              >
                22011.00
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}
