// import React, { useState, useEffect } from "react"
// import SizesTable from "./SizesTable"
// import SizeModal from "./SizeModal"
// import { useSelector } from "react-redux"
// import {
//   addSize,
//   deleteSize,
//   getSizes,
// } from "services/operations/SizeOps/SizeApi"

// const Sizes = () => {
//   const [sizes, setSizes] = useState([])
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const token = localStorage.getItem("token")

//   // Function to fetch sizes from API
//   const fetchSizes = async () => {
//     try {
//       const response = await getSizes(token)
//       setSizes(response) // Assuming response structure matches your provided example
//       console.log(response, "@@response of sizes")
//     } catch (error) {
//       console.error("Error fetching sizes:", error)
//     }
//   }

//   // Initial fetch of sizes when component mounts
//   useEffect(() => {
//     fetchSizes()
//   }, [])

//   // Function to handle edit action
//   const handleEdit = id => {
//     console.log(`Edit size with id ${id}`)
//   }

//   // Function to handle delete action
//   const handleDelete = async id => {
//     try {
//       await deleteSize(id, token)
//       fetchSizes() // Fetch sizes again to get the updated list after deletion
//       console.log(`Deleted size with id ${id}`)
//     } catch (error) {
//       console.error("Error deleting size:", error)
//     }
//   }

//   // Function to handle add size action
//   const handleAddSize = async sizeData => {
//     try {
//       const response = await addSize(sizeData, token)
//       if (response.status === "success") {
//         // Fetch sizes again to get the updated list after adding
//         fetchSizes()
//         console.log("Added size:", response.message)
//         setIsModalOpen(false) // Close the modal after successful addition
//       } else {
//         console.error("Error adding size:", response.message)
//       }
//     } catch (error) {
//       console.error("Error adding size:", error)
//     }
//   }
//   // console.log(, "@@sizes22")

//   return (
//     <div className="container mx-auto px-4">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">Sizes</h1>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Add Size
//         </button>
//       </div>
//       <SizesTable sizes={sizes} onEdit={handleEdit} onDelete={handleDelete} />
//       {isModalOpen && (
//         <SizeModal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           onAddSize={handleAddSize}
//         />
//       )}
//     </div>
//   )
// }

// export default Sizes

import React, { useState, useEffect } from "react"
import ProductModal from "./ProductModal"
import Breadcrumbs from "../../../../../components/Common/Breadcrumb"
import {
  addSize,
  updateSize,
  deleteSize,
  getSizes,
} from "services/operations/SizeOps/SizeApi"

import {
  Col,
  Row,
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  FormFeedback,
  Label,
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import ProductDataTable from "./ProductDataTable"
import { Skeleton } from "@mui/material"

const ProductsListPage = () => {
  document.title = "Products | Smart Wrap Panel"

  const [products, setProducts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editProduct, setEditProduct] = useState(null)
  const token = localStorage.getItem("token")
  const [Loader, setLoader] = useState(true)

  // Function to fetch sizes from API
  const fetchSizes = async () => {
    try {
      const response = await getSizes(token)
      setProducts(response) // Assuming response structure matches your provided example
      console.log(response, "@@response of sizes")
    } catch (error) {
      console.error("Error fetching sizes:", error)
    }
  }

  // Initial fetch of sizes when component mounts
  useEffect(() => {
    fetchSizes()
    setLoader(false)
  }, [])

  // Function to handle edit action
  const handleEdit = size => {
    setEditProduct(size)
    setIsModalOpen(true)
  }

  // Function to handle delete action
  const handleDelete = async id => {
    try {
      await deleteSize(id, token)
      fetchSizes() // Fetch sizes again to get the updated list after deletion
      console.log(`Deleted size with id ${id}`)
    } catch (error) {
      console.error("Error deleting size:", error)
    }
  }

  // Function to handle add or update size action
  const handleAddOrUpdateSize = async sizeData => {
    try {
      if (editProduct) {
        // TODO: need to change list api 
        const response = await updateSize(editProduct.id, sizeData, token)
        if (response.status === "success") {
          console.log("Updated size:", response.message)
        } else {
          console.error("Error updating size:", response.message)
        }
      } else {
        const response = await addSize(sizeData, token)
        if (response.status === "success") {
          console.log("Added size:", response.message)
        } else {
          console.error("Error adding size:", response.message)
        }
      }
      fetchSizes() // Fetch sizes again to get the updated list
      setIsModalOpen(false) // Close the modal after successful addition or update
      setEditProduct(null) // Clear the edit size state
    } catch (error) {
      console.error("Error adding or updating size:", error)
    }
  }

  return (
    <>
      <div className="container-fluid">
        <Breadcrumbs title="Smart-wrap" breadcrumbItem="PRODUCTS" />
        {Loader ? (
          <Skeleton
            variant="rounded"
            animation="wave"
            style={{
              width: "100%",
              height: "700px",
              marginBottom: "16px",
              borderRadius: "18px",
            }}
          />
        ) : (
          <Row>
            <Col lg="12">
              <Card>
                <CardBody className="border-bottom">
                  <div className="flex justify-end items-center mb-4 gap-2">
                    <div className="position-relative">
                      <Input
                        type="text"
                        className="form-control"
                        id="searchJob"
                        autoComplete="off"
                        placeholder="Search..."
                      />
                    </div>
                    <button
                      onClick={() => {
                        setEditProduct(null)
                        setIsModalOpen(true)
                      }}
                      className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Add Product
                    </button>
                  </div>
                  {/* <SizesTable
                  sizes={sizes}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                /> */}
                  <ProductDataTable
                    data={products}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}
      </div>

      {isModalOpen && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddOrUpdateSize={handleAddOrUpdateSize}
          editProduct={editProduct}
        />
      )}
    </>
  )
}

export default ProductsListPage
