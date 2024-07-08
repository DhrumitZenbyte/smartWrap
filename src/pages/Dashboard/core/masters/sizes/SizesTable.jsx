import React from "react"

const SizesTable = ({ sizes, onEdit, onDelete }) => {
  if (!sizes || sizes.length === 0) {
    return <p className="text-center">No sizes found.</p>
  }

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">SR No</th>
          <th className="py-2">Size in cm</th>
          <th className="py-2">Size in mm</th>
          <th className="py-2">Product Name</th>
          <th className="py-2">HSN Code</th>
          <th className="py-2">Thickness</th>
          <th className="py-2">Micron</th>
          <th className="py-2">Grade</th>
          <th className="py-2">Width</th>
          <th className="py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {sizes.map((size, index) => (
          <tr key={size.id}>
            <td className="border px-4 py-2">{index + 1}</td>
            <td className="border px-4 py-2">{size.size_in_cm}</td>
            <td className="border px-4 py-2">{size.size_in_mm}</td>
            <td className="border px-4 py-2">{size.product_name}</td>
            <td className="border px-4 py-2">{size.hsn_code}</td>
            <td className="border px-4 py-2">{size.thickness}</td>
            <td className="border px-4 py-2">{size.micron}</td>
            <td className="border px-4 py-2">{size.grade}</td>
            <td className="border px-4 py-2">{size.width}</td>
            <td className="border px-4 py-2">
              <button
                onClick={() => onEdit(size.id)}
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(size.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default SizesTable
