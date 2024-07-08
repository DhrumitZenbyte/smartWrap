// // src/components/Products.js
// import React, { useEffect, useState } from "react"
// import ProductsTable from "./ProductsData"
// import ProductModal from "./ProductModel"
// import { useSelector } from "react-redux"
// import { addProduct } from "services/operations/ProductsOps/ProductsApi"

// const Products = () => {
//   const [products, setProducts] = useState([
//     {
//       id: null,
//       hsnCode: "",
//       name: "",
//       saleUnit: "",
//       purchaseUnit: "",
//       waterabsorbstation: "",
//       field: "",
//     },
//     ])

//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const { email, name } = useSelector(state => ({
//     email: state.Login.email,
//     name: state.Login.name,
//   }))

//   const handleEdit = id => {
//     console.log(`Edit product with id ${id}`)
//   }

//   const handleDelete = id => {
//     console.log(`Delete product with id ${id}`)
//   }

//   const token = localStorage.getItem("token");

//   const handleAddProduct = async product => {
//     try {
//       const newProduct = await addProduct(product,token);
//       setProducts([...products, { ...newProduct, id: products.length + 1 }])
//     } catch (error) {
//       console.error("Failed to add product", error)
//     }
//   }

//   return (
//     <div className="container mx-auto px-4">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">Products</h1>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Add Product
//         </button>
//       </div>
//       <ProductsTable
//         products={products}
//         onEdit={handleEdit}
//         onDelete={handleDelete}
//       />
//       {isModalOpen && (
//         <ProductModal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           onAddProduct={handleAddProduct}
//         />
//       )}
//     </div>
//   )
// }

// export default Products


import React, { useEffect, useState } from "react"
import ProductsTable from "./ProductsData"
import ProductModal from "./ProductModel"
import { useSelector } from "react-redux"
import {
  addProduct,
  getProducts,
  deleteProduct,
} from "services/operations/ProductsOps/ProductsApi"

const Products = () => {
  const [products, setProducts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { email, name } = useSelector(state => ({
    email: state.Login.email,
    name: state.Login.name,
  }))

  const token = localStorage.getItem("token")

  useEffect(() => {
    // Fetch products on component mount
    getProducts(token, setProducts)
  }, [])

  const handleEdit = id => {
    console.log(`Edit product with id ${id}`)
  }

  const handleDelete = async (id) => {
    try {
      console.log(id, "@@delete iddddddd");
      await deleteProduct(id, token)
      setProducts(products.filter(product => product.id !== id))
    } catch (error) {
      console.error("Failed to delete product", error)
    }
  }

    const handleAddProduct = async (product) => {
      try {
        const response = await addProduct(product, token)
        if (response.status === "success") {
          getProducts(token, setProducts);
          console.log("Added product:", response.message)
          setIsModalOpen(false);
        } else {
          console.error("Error adding product:", response.message)
        }
      } catch (error) {
        console.error("Failed to add product", error)
      }
    }

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>
      <ProductsTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {isModalOpen && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddProduct={handleAddProduct}
        />
      )}
    </div>
  )
}

export default Products
