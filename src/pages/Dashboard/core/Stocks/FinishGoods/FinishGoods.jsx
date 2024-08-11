// import React, { useState } from "react"
// import ProductModal from "../../masters/products/ProductModel";
// import FinishGoodsModal from "./FinishGoodsModal"
// import { useNavigate } from "react-router-dom";
// const FinishGoods = () => {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       product: "Product 1",
//       hsnCode: "1234",
//       micron : "",
//       size: "10x10",
//       sqmPerRoll: "50",
//       rollQuantity: "20",
//       totalSqm: "1000",
//       pallet: "Pallet 1",
//       palletName: "ABC",
//       details: "abb",
//       boxes: "22",
//     },
//     {
//       id: 2,
//       product: "Product 2",
//       micron : "",
//       hsnCode: "5678",
//       size: "5x5",
//       sqmPerRoll: "30",
//       rollQuantity: "10",
//       totalSqm: "300",
//       pallet: "Pallet 2",
//       palletName: "XYZ",
//       details: "abb",
//       boxes: "22",
//     },
//     // Add more products as needed
//   ])

//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const navigate = useNavigate();
//   const handleEdit = id => {
//     console.log(`Edit product with id ${id}`)
//   }

//   const handleDelete = id => {
//     console.log(`Delete product with id ${id}`)
//   }

//   const handleAddProduct = product => {
//     setProducts([...products, { ...product, id: products.length + 1 }])
//   }

//    const handleRedirect = () => {
//      navigate("/dashboard/production")
//    }

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-2xl font-bold mb-4">Finish Goods</h1>
//       <div className="mb-4">
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Add Product
//         </button>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="text-left py-2 px-4">Product</th>
//               <th className="text-left py-2 px-4">Size</th>
//               <th className="text-left py-2 px-4">Micron</th>
//               <th className="text-left py-2 px-4">Sqm per Roll</th>
//               <th className="text-left py-2 px-4">Roll Quantity</th>
//               <th className="text-left py-2 px-4">Total Sqm</th>
//               <th className="text-left py-2 px-4">Pallet</th>
//               <th className="text-left py-2 px-4">Pallet Name</th>
//               <th className="text-left py-2 px-4">Details</th>
//               <th className="text-left py-2 px-4">Boxes</th>
//               <th className="text-left py-2 px-4">Date</th>
//               <th className="text-left py-2 px-4">Company</th>
//               <th className="text-left py-2 px-4">Company</th>
//               <th className="text-left py-2 px-4">
//                 Material / Grade / Discription of Goods
//               </th>
//               <th className="text-left py-2 px-4">Qty in Storage (Start)</th>
//               <th className="text-left py-2 px-4">Qty Issued</th>
//               <th className="text-left py-2 px-4">Qty in Storage (End)</th>
//               <th className="text-left py-2 px-4">Qty Returned</th>
//               <th className="text-left py-2 px-4">Wastage</th>
//               <th className="text-left py-2 px-4">Actual Qty Consumed</th>

//               <th className="text-left py-2 px-4">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map(item => (
//               <tr key={item.id} className="border-t border-gray-200">
//                 <td className="py-2 px-4">{item.product}</td>
//                 <td className="py-2 px-4">{item.size}</td>
//                 <td className="py-2 px-4">{item.micron}</td>
//                 <td className="py-2 px-4">{item.sqmPerRoll}</td>
//                 <td className="py-2 px-4">{item.rollQuantity}</td>
//                 <td className="py-2 px-4">{item.totalSqm}</td>
//                 <td className="py-2 px-4">{item.pallet}</td>
//                 <td className="py-2 px-4">{item.palletName}</td>
//                 <td className="py-2 px-4">{item.details}</td>
//                 <td className="py-2 px-4">{item.boxes}</td>
//                 <td className="py-2 px-4">
//                   <button className="text-blue-500 hover:text-blue-700 mr-2">
//                     Edit
//                   </button>
//                   <button className="text-red-500 hover:text-red-700">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {isModalOpen && (
//         <FinishGoodsModal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           onAddProduct={handleAddProduct}
//         />
//       )}
//     </div>
//   )
// }

// export default FinishGoods


import React from "react"
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer"
import companylogo from "../../../../../assets/images/brands/smartWrap.jpeg"

const styles = StyleSheet.create({
  table: { display: "table", width: "auto" },
  tableRow: { flexDirection: "row" },
  tableCol: { width: "10%", borderStyle: "solid", borderWidth: 1 },
  tableCell: { margin: "auto", marginTop: 5, fontSize: 10 },
  header: {
    fontSize: 14,
    bold: true,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottom: "1px solid #EEE",
  },
  tabletitle: {
    fontSize: 14,
    bold: true,
    marginBottom: 20,
    textAlign: "center",
  },
  logo: {
    width: 100,
    height: 50,
  },
})

const FinishGoodsPDF = ({ data }) => {
  // Calculate totals
  const totals = data.reduce(
    (acc, item) => {
      acc.sqmPerRoll += item.sqm_per_roll || 0
      acc.rollQuantity += item.roll_quantity || 0
      acc.totalSqm += item.total_sqm || 0
      acc.Boxes += item.boxes || 0
      acc.Micron += item.size?.micron || 0 // Properly access micron inside size
      return acc
    },
    { sqmPerRoll: 0, rollQuantity: 0, totalSqm: 0, Boxes: 0, Micron: 0 }
  )

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
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Product</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Size</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Pallet</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Pallet Name</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Details</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Micron</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Sqm per Roll</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Roll Quantity</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Total Sqm</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Boxes</Text>
            </View>
          </View>
          {data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {item.product?.product_name || "N/A"}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {item.size
                    ? `${item.size.size_in_cm}x${item.size.size_in_mm}`
                    : "N/A"}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.pallet}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.pallet_name}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.details}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {item.size?.micron || "N/A"}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.sqm_per_roll}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.roll_quantity}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.total_sqm}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.boxes}</Text>
              </View>
            </View>
          ))}
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Totals</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{totals.Micron}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{totals.sqmPerRoll}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{totals.rollQuantity}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{totals.totalSqm}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{totals.Boxes}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default FinishGoodsPDF
