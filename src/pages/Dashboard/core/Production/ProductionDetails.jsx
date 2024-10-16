import React, { useState, useEffect } from "react"
import toast from "react-hot-toast"
import { deleteFinishGoods, fetchFinishGoods } from "services/operations/FinishGoodsOps/FinishGoodsApi"
import FinishGoodTable from "../Stocks/FinishGoods/FinishGoodTable"

export const ProductionDetails = props => {
  const [products, setProducts] = useState([])

  const token = localStorage.getItem("token")

  const fetchData = async () => {
    try {
      const toastid = toast.loading("Loading Finish Goods Data...")
      const response = await fetchFinishGoods(token)

      console.log(response, "@@response")
      // Ensure response data structure matches your expectations
      if (response && response.finishGoods) {
        setProducts(response.finishGoods)
      } else {
        console.error("Unexpected response structure:", response)
        toast.error("Unexpected response structure.")
      }

      toast.dismiss(toastid)
    } catch (error) {
      toast.error("Failed to fetch finish goods data.")
      console.error("Failed to fetch products:", error)
    }
  }

  const handleDelete = async id => {
    const token = localStorage.getItem("token")

    try {
      await deleteFinishGoods(id, token)
      toast.success("Product deleted successfully")
      // Optionally, refetch the data
      fetchData()
    } catch (error) {
      console.error("Failed to delete product:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <FinishGoodTable data={products} handleDeleteCompany={handleDelete} />
    </div>
  )
}
