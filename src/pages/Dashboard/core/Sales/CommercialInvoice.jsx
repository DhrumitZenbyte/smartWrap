import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer"
import React from "react"
import logo from "../../../../assets/images/brands/smartWrap.jpeg"

export const CommercialInvoice = props => {
  const commercialStyles = StyleSheet.create({
    page: {
      padding: 12,
    },
    mainContainer: {
      border: "2px solid black",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // height: "80px",
      border: "2px solid #00b0f0",
      padding: 20,
      margin: 5,
    },
    logo: {
      width: 170,
      height: 45,
    },
    title: {
      borderTop: "2px solid black",
      borderBottom: "2px solid black",
      fontFamily: "Open Sans",
      fontWeight: "bold",
      textDecoration: "underline",
      textAlign: "center",
      fontSize: 14,
      display: "flex",
      paddingTop: "4px",
      alignItems: "center",
    },
    topContent: {
      fontSize: 7,
      display: "flex",
      flexDirection: "row",
    },
    companyInfo: {
      width: "35%",
    },
    rightContent: {
      display: "flex",
      borderBottom: "1px solid black",
      flexDirection: "column",
      width: "65%",
    },
    invoiceDetails: {
      flex: 1,
      borderBottom: "1px solid black",
    },
    buyerOrderDetails: {
      flex: 1,
      borderBottom: "1px solid black",
    },
    otherReference: {
      flex: 1,
      borderBottom: "1px solid black",
    },
    buyerDetails: {
      flex: 1,
    },
    table: {
      display: "table",
      width: "100%",
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    tableRow: {
      flexDirection: "row",
    },
    tableCol: {
      border: "1px solid black",
      borderLeftWidth: 0,
      borderTopWidth: 0,
      borderBottomWidth: 0,
    },
    tableCell: {
      fontSize: 7,
    },
  })
  return (
    <Document>
      <Page style={commercialStyles.page}>
        <View style={commercialStyles.mainContainer}>
          <View style={commercialStyles.header}>
            <Image style={commercialStyles.logo} src={logo} />
          </View>
          <Text style={commercialStyles.title}>COMMERCIAL INVOICE</Text>

          {/* top content */}
          <View style={commercialStyles.topContent}>
            {/* Company details */}
            <View style={commercialStyles.companyInfo}>
              <View
                style={{
                  borderBottom: "1px solid black",
                  borderRight: "1px solid black",
                }}
              >
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <View>
                    <Text>1.</Text>
                  </View>
                  <View
                    style={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Text>Shipper / Exporter / Manufacturer: </Text>
                    <Text
                      style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
                    >
                      M/s. SMARTWRAP FILM EXTRUSIONS LLP
                    </Text>
                    <Text>PLOT NO. 1, SURVEY NO. 150/P4, 151/P3 AND 152</Text>
                    <Text>POOJA INDUSTRIAL PARK, AT. PIPALIYA</Text>
                    <Text>MORBI - 363660.</Text>
                    <Text>GUJARAT, INDIA</Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Open Sans",
                          fontWeight: "bold",
                        }}
                      >
                        IEC NO-{" "}
                      </Text>
                      <Text>AEZFS3495Q</Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "Open Sans",
                            fontWeight: "bold",
                          }}
                        >
                          GST NO-{" "}
                        </Text>
                        <Text>AEZFS3495Q</Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "Open Sans",
                            fontWeight: "bold",
                          }}
                        >
                          PAN:-{" "}
                        </Text>
                        <Text>AEZFS3495Q</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              {/* Consignee */}
              <View
                style={{
                  borderBottom: "1px solid black",
                  borderRight: "1px solid black",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingBottom: 16,
                  }}
                >
                  <View>
                    <Text>2 </Text>
                  </View>
                  <View>
                    <Text>Consignee :</Text>
                    <Text
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      A
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      B
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      C
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={commercialStyles.rightContent}>
              {/* Invoice details */}
              <View style={commercialStyles.invoiceDetails}>
                <Text>9. Invoice No. & date</Text>
                <View
                  style={{ display: "flex", flexDirection: "row", gap: 100 }}
                >
                  <Text
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    EXP/21/24-25
                  </Text>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Dt.: {""}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      25 October 2024
                    </Text>
                  </View>
                </View>
              </View>

              {/* Buyer's order details */}
              <View style={commercialStyles.buyerOrderDetails}>
                <Text>10. Buyer's Order No. & Date</Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Purchase Order No.{" "}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    JASH23102024
                  </Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Purchase Order Date:{" "}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    23/10/2024
                  </Text>
                </View>
              </View>

              {/* Other Reference */}
              <View style={commercialStyles.otherReference}>
                <Text>11. Other Reference</Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Proforma Invoice:{" "}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    SMART/004/24-25
                  </Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Dt:{" "}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    23/10/2024
                  </Text>
                </View>
              </View>

              {/* Buyer details */}
              <View style={commercialStyles.buyerDetails}>
                <Text>12. Buyer (if other than consignee)</Text>
                <Text>-</Text>
              </View>
            </View>
          </View>

          {/* center content  */}
          <View style={{ fontSize: 7, borderBottom: "1px solid black" }}>
            {/* 3rd no rows  */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                borderBottom: "1px solid black",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "35%",
                  borderRight: "1px solid black",
                }}
              >
                <View style={{ flex: 1, borderRight: "1px solid black" }}>
                  <Text>3. Pre- Carriage By</Text>
                  <Text
                    style={{
                      textAlign: "center",
                      paddingTop: 10,
                      paddingBottom: 10,
                      fontWeight: "bold",
                      fontFamily: "Open Sans",
                    }}
                  >
                    Road
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <Text>3. Place of Receipt by</Text>
                  <Text style={{ paddingLeft: 8 }}>PreCarrier</Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontFamily: "Open Sans",
                      fontWeight: "bold",
                      paddingTop: 3,
                    }}
                  >
                    N.A.
                  </Text>
                </View>
              </View>
              <View style={{ width: "40%", borderRight: "1px solid black" }}>
                <Text>13. Country of Origin of Goods</Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontFamily: "Open Sans",
                    textAlign: "center",
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  India
                </Text>
              </View>
              <View>
                <Text>14. Country of Final</Text>
                <Text style={{ paddingLeft: 12 }}>Destination</Text>
                <Text
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: "bold",
                    paddingTop: 2,
                    paddingBottom: 2,
                    paddingLeft: 10,
                    color: "red",
                  }}
                >
                  ABC ANY COUNTRY NAME
                </Text>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={{ width: "35%" }}>
                {/* 5th no rows  */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      borderBottom: "1px solid black",
                    }}
                  >
                    <View style={{ flex: 1, borderRight: "1px solid black" }}>
                      <Text>5. Vessel No.</Text>
                      <Text
                        style={{
                          textAlign: "center",
                          paddingTop: 6,
                          paddingBottom: 6,
                          fontWeight: "bold",
                          fontFamily: "Open Sans",
                        }}
                      >
                        1234
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        borderRight: "1px solid black",
                      }}
                    >
                      <Text>6. Port of Loading</Text>
                      <Text
                        style={{
                          textAlign: "center",
                          paddingTop: 6,
                          paddingBottom: 6,
                          fontWeight: "bold",
                          fontFamily: "Open Sans",
                        }}
                      >
                        MUNDRA, INDIA
                      </Text>
                    </View>
                  </View>
                </View>

                {/* 7th no row */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      borderBottom: "1px solid black",
                    }}
                  >
                    <View style={{ flex: 1, borderRight: "1px solid black" }}>
                      <Text>7. Port of Discharge</Text>
                      <Text
                        style={{
                          textAlign: "center",
                          paddingTop: 6,
                          paddingBottom: 6,
                          fontWeight: "bold",
                          fontFamily: "Open Sans",
                          color: "red",
                        }}
                      >
                        ABC ANY PORT NAME
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        borderRight: "1px solid black",
                      }}
                    >
                      <Text>8. Place of Delivery</Text>
                      <Text
                        style={{
                          textAlign: "center",
                          paddingTop: 6,
                          paddingBottom: 6,
                          fontWeight: "bold",
                          fontFamily: "Open Sans",
                          color: "red",
                        }}
                      >
                        ABC ANY PORT NAME
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Empty space for 9th no row */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: 20,
                    width: "100%",
                  }}
                >
                  <View
                    style={{ flex: 1, borderRight: "1px solid black" }}
                  ></View>
                  <View
                    style={{ flex: 1, borderRight: "1px solid black" }}
                  ></View>
                </View>
              </View>

              {/* right terms content */}
              <View style={{ width: "65%" }}>
                <View>
                  <Text>15. Terms of Delivery & Payment:</Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      fontFamily: "Open Sans",
                      fontWeight: "bold",
                      gap: 50,
                    }}
                  >
                    <Text>SHIPMENT TERMS : </Text>
                    <Text>FOB MUNDRA PORT</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      fontFamily: "Open Sans",
                      fontWeight: "bold",
                      gap: 50,
                    }}
                  >
                    <Text>PAYMENT TERMS : </Text>
                    <Text style={{ color: "red" }}>100% AGAINST B/L</Text>
                  </View>
                  <View
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "bold",
                      paddingTop: 20,
                      display: "flex",
                      flexDirection: "row",
                      paddingLeft: 30,
                    }}
                  >
                    <Text>DATE OF SHIPMENT : </Text>
                    <Text style={{ color: "red" }}>31 October 2024</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* table content */}
          <View style={commercialStyles.table}>
            {/* 16th no table row */}
            <View
              style={[
                commercialStyles.tableRow,
                { borderBottom: "1px solid black" },
              ]}
            >
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "17.5%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  },
                ]}
              >
                <Text style={commercialStyles.tableCell}>16. Marks & No</Text>
                <Text style={[commercialStyles.tableCell, { paddingLeft: 11 }]}>
                  Container No
                </Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "7%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  },
                ]}
              >
                <Text style={commercialStyles.tableCell}>17. No</Text>
                <Text style={[commercialStyles.tableCell, { paddingLeft: 7 }]}>
                  & Kind
                </Text>
                <Text style={commercialStyles.tableCell}>of Pkgs</Text>
              </View>
              <View style={[commercialStyles.tableCol, { width: "40%" }]}>
                <Text style={commercialStyles.tableCell}>
                  18. Description of Goods
                </Text>
                <Text
                  style={[
                    commercialStyles.tableCell,
                    {
                      fontFamily: "Open Sans",
                      fontWeight: "bold",
                      textAlign: "center",
                      paddingTop: 4,
                    },
                  ]}
                >
                  (HS CODE NO.:392010)
                </Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  { width: "13%", textAlign: "center" },
                ]}
              >
                <Text style={commercialStyles.tableCell}>19. Quantity</Text>
                <Text style={commercialStyles.tableCell}>of goods</Text>
              </View>
              <View style={[commercialStyles.tableCol, { width: "12%" }]}>
                <Text style={commercialStyles.tableCell}>20. Rate / Roll</Text>
                <Text style={[commercialStyles.tableCell, { paddingLeft: 4 }]}>
                  (in USD FOB )
                </Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  { width: "10.5%", borderRightWidth: 0 },
                ]}
              >
                <Text style={commercialStyles.tableCell}>21. Amount</Text>
                <Text style={commercialStyles.tableCell}> (in USD FOB )</Text>
              </View>
            </View>

            {/* hedaer table row */}
            <View
              style={[
                commercialStyles.tableRow,
                { paddingBottom: 10, borderBottom: "1px solid black" },
              ]}
            >
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "6%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid black",
                  },
                ]}
              >
                <Text style={commercialStyles.tableCell}>Container</Text>
                <Text style={commercialStyles.tableCell}>No.</Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "11.5%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid black",
                  },
                ]}
              >
                <Text style={commercialStyles.tableCell}>Shipping Seal No</Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "7%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    borderBottom: "1px solid black",
                  },
                ]}
              ></View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "28%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid black",
                  },
                ]}
              >
                <Text style={commercialStyles.tableCell}>Particulars</Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "6%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid black",
                  },
                ]}
              >
                <Text style={commercialStyles.tableCell}>Width</Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "6%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid black",
                  },
                ]}
              >
                <Text style={commercialStyles.tableCell}>Micron</Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "6%",
                    textAlign: "center",
                    borderBottom: "1px solid black",
                  },
                ]}
              >
                <Text style={commercialStyles.tableCell}>Total</Text>
                <Text style={commercialStyles.tableCell}>Rolls per</Text>
                <Text style={commercialStyles.tableCell}>Size</Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "7%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid black",
                  },
                ]}
              >
                <Text style={commercialStyles.tableCell}>Weight</Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "12%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid black",
                  },
                ]}
              >
                <Text style={commercialStyles.tableCell}>price per roll</Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "10.5%",
                    borderRightWidth: 0,
                    borderBottom: "1px solid black",
                  },
                ]}
              ></View>
            </View>

            {/* main table content */}
            <View
              style={[
                commercialStyles.tableRow,
                { borderBottom: "1px solid black" },
              ]}
            >
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "6%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    fontFamily: "Open Sans",
                    color: "red",
                    paddingTop: 5,
                    paddingBottom: 5,
                  },
                ]}
              >
                <Text style={commercialStyles.tableCell}>CAAU</Text>
                <Text style={commercialStyles.tableCell}>1234567</Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "11.5%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    fontFamily: "Open Sans",
                    color: "red",
                  },
                ]}
              >
                <Text style={commercialStyles.tableCell}>123456</Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "7%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    color: "red",
                    fontFamily: "Open Sans",
                    fontWeight: "bold",
                    height: "100%",
                  },
                ]}
              >
                <Text
                  style={[
                    commercialStyles.tableCell,
                    {
                      flex: 1,
                      textAlign: "center",
                      borderBottom: "1px solid black",
                      alignItems: "center",
                      paddingTop: 2,
                    },
                  ]}
                >
                  33
                </Text>
                <Text
                  style={[
                    commercialStyles.tableCell,
                    { flex: 1, textAlign: "center" },
                  ]}
                >
                  Pallets
                </Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "28%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text
                  style={[
                    commercialStyles.tableCell,
                    {
                      fontWeight: "bold",
                      fontFamily: "Open Sans",
                      color: "red",
                      textDecoration: "underline",
                    },
                  ]}
                >
                  Stretch Film of LLDPE
                </Text>
                <View
                  style={[
                    commercialStyles.tableCell,
                    { display: "flex", flexDirection: "row" },
                  ]}
                >
                  <Text style={[commercialStyles.tableCell, { color: "red" }]}>
                    500 MM
                  </Text>
                  <Text> Transparent Film,</Text>
                  <Text style={{ color: "red" }}>16 KG</Text>
                  <Text>Gross Roll</Text>
                </View>
                <View
                  style={[
                    commercialStyles.tableCell,
                    { display: "flex", flexDirection: "row" },
                  ]}
                >
                  <Text style={[commercialStyles.tableCell, { color: "red" }]}>
                    1.5 KG
                  </Text>
                  <Text> Core, </Text>
                  <Text style={{ color: "red" }}>280% </Text>
                  <Text>Stretch, </Text>
                  <Text style={{ color: "red" }}>46 </Text>
                  <Text>Rolls Per Pallet</Text>
                </View>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "6%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={[commercialStyles.tableCell, { color: "red" }]}>
                  500
                </Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "6%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={[commercialStyles.tableCell, { color: "red" }]}>
                  20 Micron
                </Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "6%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={[commercialStyles.tableCell, { color: "red" }]}>
                  1518
                </Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "7%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={[commercialStyles.tableCell, { color: "red" }]}>
                  22011.00
                </Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "12%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={[commercialStyles.tableCell, { color: "red" }]}>
                  10
                </Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "10.5%",
                    borderRightWidth: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={[commercialStyles.tableCell, { color: "red" }]}>
                  220110
                </Text>
              </View>
            </View>

            {/* 2nd row of main table */}
            <View
              style={[
                commercialStyles.tableRow,
                // { borderTop: "1px solid black" },
              ]}
            >
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "6%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    fontFamily: "Open Sans",
                    color: "red",
                    paddingTop: 5,
                    paddingBottom: 5,
                  },
                ]}
              >
                <Text style={commercialStyles.tableCell}>CAAU</Text>
                <Text style={commercialStyles.tableCell}>1234567</Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "11.5%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    fontFamily: "Open Sans",
                    color: "red",
                  },
                ]}
              >
                <Text style={commercialStyles.tableCell}>123456</Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "7%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    color: "red",
                    fontFamily: "Open Sans",
                    fontWeight: "bold",
                    height: "100%",
                  },
                ]}
              >
                <Text
                  style={[
                    commercialStyles.tableCell,
                    {
                      flex: 1,
                      textAlign: "center",
                      borderBottom: "1px solid black",
                      alignItems: "center",
                      paddingTop: 2,
                    },
                  ]}
                >
                  33
                </Text>
                <Text
                  style={[
                    commercialStyles.tableCell,
                    { flex: 1, textAlign: "center" },
                  ]}
                >
                  Pallets
                </Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "28%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text
                  style={[
                    commercialStyles.tableCell,
                    {
                      fontWeight: "bold",
                      fontFamily: "Open Sans",
                      color: "red",
                      textDecoration: "underline",
                    },
                  ]}
                >
                  Stretch Film of LLDPE
                </Text>
                <View
                  style={[
                    commercialStyles.tableCell,
                    { display: "flex", flexDirection: "row" },
                  ]}
                >
                  <Text style={[commercialStyles.tableCell, { color: "red" }]}>
                    500 MM
                  </Text>
                  <Text> Transparent Film,</Text>
                  <Text style={{ color: "red" }}>16 KG</Text>
                  <Text>Gross Roll</Text>
                </View>
                <View
                  style={[
                    commercialStyles.tableCell,
                    { display: "flex", flexDirection: "row" },
                  ]}
                >
                  <Text style={[commercialStyles.tableCell, { color: "red" }]}>
                    1.5 KG
                  </Text>
                  <Text> Core, </Text>
                  <Text style={{ color: "red" }}>280% </Text>
                  <Text>Stretch, </Text>
                  <Text style={{ color: "red" }}>46 </Text>
                  <Text>Rolls Per Pallet</Text>
                </View>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "6%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={[commercialStyles.tableCell, { color: "red" }]}>
                  500
                </Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "6%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={[commercialStyles.tableCell, { color: "red" }]}>
                  20 Micron
                </Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "6%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={[commercialStyles.tableCell, { color: "red" }]}>
                  1518
                </Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "7%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={[commercialStyles.tableCell, { color: "red" }]}>
                  22011.00
                </Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "12%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={[commercialStyles.tableCell, { color: "red" }]}>
                  10
                </Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "10.5%",
                    borderRightWidth: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={[commercialStyles.tableCell, { color: "red" }]}>
                  220110
                </Text>
              </View>
            </View>

            {/* total row */}
            <View
              style={[
                commercialStyles.tableRow,
                {
                  borderTop: "2px solid black",
                  borderBottom: "2px solid black",
                },
              ]}
            >
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "6%",
                  },
                ]}
              ></View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "11.5%",
                  },
                ]}
              ></View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "7%",
                  },
                ]}
              ></View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "28%",
                  },
                ]}
              ></View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "6%",
                  },
                ]}
              ></View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "6%",
                  },
                ]}
              ></View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "6%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  },
                ]}
              >
                <Text
                  style={[
                    commercialStyles.tableCell,
                    {
                      borderBottom: "1px solid black",
                      fontWeight: "bold",
                      fontFamily: "Open Sans",
                      width: "100%",
                      flex: 1,
                      textAlign: "center",
                    },
                  ]}
                >
                  Total
                </Text>
                <Text style={[commercialStyles.tableCell, { flex: 1 }]}></Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "7%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text
                  style={[
                    commercialStyles.tableCell,
                    {
                      fontFamily: "Open Sans",
                      fontWeight: "bold",
                      color: "red",
                      borderBottom: "1px solid black",
                      width: "100%",
                      textAlign: "center",
                    },
                  ]}
                >
                  44022.00
                </Text>
                <Text
                  style={[
                    commercialStyles.tableCell,
                    {
                      fontFamily: "Open Sans",
                      fontWeight: "bold",
                      color: "red",
                      width: "100%",
                      textAlign: "center",
                    },
                  ]}
                >
                  KGS
                </Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "12%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={[commercialStyles.tableCell, { color: "red" }]}>
                  10
                </Text>
              </View>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "10.5%",
                    borderRightWidth: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={[commercialStyles.tableCell, { color: "red" }]}>
                  220110
                </Text>
              </View>
            </View>

            {/* amount in words row */}
            <View
              style={[
                commercialStyles.tableRow,
                {
                  borderBottom: "1px solid black",
                },
              ]}
            >
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "64.5%",
                    borderRightWidth: 0,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 18,
                    height: 18,
                  },
                ]}
              >
                <Text style={commercialStyles.tableCell}>
                  Amount Chargeable (In words)
                </Text>
                <Text style={commercialStyles.tableCell}>FOB</Text>
                <Text
                  style={[
                    commercialStyles.tableCell,
                    {
                      color: "red",
                      fontFamily: "Open Sans",
                      fontWeight: "bold",
                    },
                  ]}
                >
                  CUR IN WORDS
                </Text>
              </View>
            </View>

            {/* footer content */}
            <View style={commercialStyles.tableRow}>
              <View
                style={[
                  commercialStyles.tableCol,
                  {
                    width: "58.5%",
                  },
                ]}
              >
                <Text
                  style={[
                    commercialStyles.tableCell,
                    { fontFamily: "Open Sans", fontWeight: "bold" },
                  ]}
                >
                  Declaration:
                </Text>
                <Text style={commercialStyles.tableCell}>
                  We declare that this Invoice shows the actual price of goods
                  described and the all particulars
                </Text>
                <Text
                  style={[commercialStyles.tableCell, { paddingBottom: 5 }]}
                >
                  are true and correct.
                </Text>
                <Text style={commercialStyles.tableCell}>
                  The Exporter of products covered by this document (custom
                  identification no. AEZFS3495Q) declares that, except
                </Text>
                <Text style={commercialStyles.tableCell}>
                  where otherwise clearly indicated, these products are of
                  "INDIAN ORIGIN" preferencial origin in accordance with
                </Text>
                <Text
                  style={[commercialStyles.tableCell, { paddingBottom: 5 }]}
                >
                  the rules of origin of the developing countries trading scheme
                  of the UK and that the origin criterion met is "P".
                </Text>
                <Text
                  style={[
                    commercialStyles.tableCell,
                    { fontFamily: "Open Sans", fontWeight: "bold" },
                  ]}
                >
                  The Film Contains 30% Recycled Content
                </Text>
                <Text
                  style={[
                    commercialStyles.tableCell,
                    { fontFamily: "Open Sans", fontWeight: "bold" },
                  ]}
                >
                  EXPORTER'S BANKER DETAILS:
                </Text>
                <Text
                  style={[
                    commercialStyles.tableCell,
                    { fontFamily: "Open Sans", fontWeight: "bold" },
                  ]}
                >
                  Bank Name:- HDFC BANK LTD
                </Text>
                <Text
                  style={[
                    commercialStyles.tableCell,
                    { fontFamily: "Open Sans", fontWeight: "bold" },
                  ]}
                >
                  Address:- OM SHOPPING COMPLEX, RAVAPAR MAIN ROAD, MORVI,
                  GUJARAT, 363641.
                </Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text
                    style={[
                      commercialStyles.tableCell,
                      {
                        fontFamily: "Open Sans",
                        fontWeight: "bold",
                        paddingRight: 30,
                      },
                    ]}
                  >
                    Account No.:- 50200091231081
                  </Text>
                  <Text
                    style={[
                      commercialStyles.tableCell,
                      {
                        fontFamily: "Open Sans",
                        fontWeight: "bold",
                      },
                    ]}
                  >
                    IFSC Code:- HDFC0000307
                  </Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text
                    style={[
                      commercialStyles.tableCell,
                      {
                        fontFamily: "Open Sans",
                        fontWeight: "bold",
                        paddingRight: 30,
                      },
                    ]}
                  >
                    AD Code:- 0510111-5800008
                  </Text>
                  <Text
                    style={[
                      commercialStyles.tableCell,
                      {
                        fontFamily: "Open Sans",
                        fontWeight: "bold",
                      },
                    ]}
                  >
                    Swift Code:- HDFCINBBXXX
                  </Text>
                </View>
              </View>

              <View
                style={[
                  commercialStyles.tableCol,
                  { width: "41.5%", borderRightWidth: 0 },
                ]}
              >
                <Text
                  style={[
                    commercialStyles.tableCell,
                    {
                      textDecoration: "underline",
                      fontFamily: "Open Sans",
                      fontWeight: "bold",
                    },
                  ]}
                >
                  22, For SMARTWRAP FILM EXTRUSIONS LLP
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}
