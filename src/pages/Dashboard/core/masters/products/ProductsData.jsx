import React from "react"
import { useTranslation } from "react-i18next"

const ProductsData = ({ products, onEdit, onDelete }) => {
  const { t } = useTranslation()

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">
              {t("Sr. No")}
            </th>
            <th className="py-2 px-4 border-b border-gray-200">
              {t("HSN Code")}
            </th>
            <th className="py-2 px-4 border-b border-gray-200">
              {t("Product Name")}
            </th>
            <th className="py-2 px-4 border-b border-gray-200">
              {t("Sale (unit)")}
            </th>
            <th className="py-2 px-4 border-b border-gray-200">
              {t("Purchase (unit)")}
            </th>
            <th className="py-2 px-4 border-b border-gray-200">
              {t("Action")}
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-200">
                {index + 1}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.hsnCode}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.name}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.saleUnit}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.purchaseUnit}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button
                  onClick={() => onEdit(product.id)}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  {t("Edit")}
                </button>
                <button
                  onClick={() => onDelete(product.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  {t("Delete")}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsData


// import React from "react"
// import { Link } from "react-router-dom"
// const HSNCode = cell => {
//   return cell.value ? cell.value : ""
// }
// const ProductName = cell => {
//   return cell.value ? cell.value : ""
// }
// const Purchase = cell => {
//   return cell.value ? cell.value : ""
// }
// const Sell = cell => {
//   return cell.value ? cell.value : ""
// }
// export { HSNCode, ProductName, Purchase, Sell }