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


import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  addFinishGoods,
  deleteFinishGoods,
  fetchFinishGoods,
  updateFinishGoods,
} from "services/operations/FinishGoodsOps/FinishGoodsApi";
import { PDFDownloadLink } from "@react-pdf/renderer";
import FinishGoodsPDF from "./FinishGoodsPDF";
import FinishGoodsModal from "./FinishGoodsModal";

const FinishGoods = () => {
  const [products, setProducts] = useState([]);
  const [generatePdf, setGeneratePdf] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4; // Show 10 rows by default
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const toastid = toast.loading("Loading Finish Goods Data...");
      const response = await fetchFinishGoods(token);

      console.log(response, "@@response");
      // Ensure response data structure matches your expectations
      if (response && response.finishGoods) {
        setProducts(response.finishGoods);
      } else {
        console.error("Unexpected response structure:", response);
        toast.error("Unexpected response structure.");
      }

      toast.dismiss(toastid);
    } catch (error) {
      toast.error("Failed to fetch finish goods data.");
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = async (id, product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    try {
      await deleteFinishGoods(id, token);
      toast.success("Product deleted successfully");
      // Optionally, refetch the data
      fetchData();
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const onAddProduct = async (newProduct) => {
    const token = localStorage.getItem("token");
    try {
      await addFinishGoods(newProduct, token);
      toast.success("Product added successfully");
      fetchData();
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  const onUpdateProduct = async (updatedProduct) => {
    const token = localStorage.getItem("token");
    try {
      await updateFinishGoods(updatedProduct.id, updatedProduct, token);
      toast.success("Product updated successfully");
      fetchData();
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  const handleRedirect = () => {
    navigate("/dashboard/production");
  };

  // Pagination calculations
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentProducts = products.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(products.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Finish Goods</h1>
        {generatePdf && (
          <PDFDownloadLink
            document={<FinishGoodsPDF data={products} />}
            fileName="finish_goods_report.pdf"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={() => setGeneratePdf(true)}
          >
            {({ loading }) =>
              loading ? "Generating PDF..." : "Download PDF"
            }
          </PDFDownloadLink>
        )}
        {!generatePdf && (
          <button
            onClick={() => setGeneratePdf(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Generate PDF
          </button>
        )}
      </div>
      <div className="mb-4">
        <button
          onClick={handleRedirect}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-2 px-4">Product</th>
              <th className="text-left py-2 px-4">Size</th>
              <th className="text-left py-2 px-4">Micron</th>
              <th className="text-left py-2 px-4">Sqm per Roll</th>
              <th className="text-left py-2 px-4">Roll Quantity</th>
              <th className="text-left py-2 px-4">Total Sqm</th>
              <th className="text-left py-2 px-4">Pallet</th>
              <th className="text-left py-2 px-4">Pallet Name</th>
              <th className="text-left py-2 px-4">Details</th>
              <th className="text-left py-2 px-4">Boxes</th>
              <th className="text-left py-2 px-4">
                Material / Grade / Description of Goods
              </th>
              <th className="text-left py-2 px-4">Qty Issued</th>
              <th className="text-left py-2 px-4">Qty in Storage (End)</th>
              <th className="text-left py-2 px-4">Qty Returned</th>
              <th className="text-left py-2 px-4">Wastage</th>
              <th className="text-left py-2 px-4">Actual Qty Consumed</th>
              <th className="text-left py-2 px-4">Qty in Storage (Start)</th>
              <th className="text-left py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((item) => (
              <tr key={item.id} className="border-t border-gray-200">
                <td className="py-2 px-4">
                  {item.product ? item.product.product_name : "N/A"}
                </td>
                <td className="py-2 px-4">
                  {item.size
                    ? `${item.size.size_in_cm}x${item.size.size_in_mm}`
                    : "N/A"}
                </td>
                <td className="py-2 px-4">
                  {item.size ? item.size.micron : "N/A"}
                </td>
                <td className="py-2 px-4">{item.sqm_per_roll}</td>
                <td className="py-2 px-4">{item.roll_quantity}</td>
                <td className="py-2 px-4">{item.total_sqm}</td>
                <td className="py-2 px-4">{item.pallet}</td>
                <td className="py-2 px-4">{item.pallet_name}</td>
                <td className="py-2 px-4">{item.details}</td>
                <td className="py-2 px-4">{item.boxes}</td>
                <td className="py-2 px-4">{item.description_of_goods}</td>
                <td className="py-2 px-4">{item.qty_issued}</td>
                <td className="py-2 px-4">{item.qty_in_storage_end}</td>
                <td className="py-2 px-4">{item.qty_returned}</td>
                <td className="py-2 px-4">{item.wastage}</td>
                <td className="py-2 px-4">{item.actual_qty_consumed}</td>
                <td className="py-2 px-4">{item.qty_in_storage_start}</td>
                <td className="py-2 px-4">
                  <button
                    className="text-blue-500 hover:text-blue-700 mr-2"
                    onClick={() => handleEdit(item.id, item)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Next
        </button>
      </div>

      {/* Finish Goods Modal */}
      <FinishGoodsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddProduct={onAddProduct}
        onUpdateProduct={onUpdateProduct}
        productData={selectedProduct}
      />
    </div>
  );
};

export default FinishGoods;
