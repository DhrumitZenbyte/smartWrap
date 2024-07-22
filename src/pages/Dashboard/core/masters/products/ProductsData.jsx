import React from "react"
import { useTranslation } from "react-i18next"

const ProductsData = ({ products, onEdit, onDelete }) => {
  const { t } = useTranslation()
  console.log(products, "@@@productsssssssssssssssss")
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
              {t("Water Absorption")}
            </th>
            <th className="py-2 px-4 border-b border-gray-200">{t("Field")}</th>
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
                {product.hsn_code}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.product_name}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.sales}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.purchase}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.water_absorption}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.field}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button
                  onClick={() => onEdit(product)}
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
