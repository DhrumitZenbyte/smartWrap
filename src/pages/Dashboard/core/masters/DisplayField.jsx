import React from "react"

const DisplayField = ({ label, value }) => {
  return (
    <div className="col-span-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <p className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm bg-gray-100">
        {value}
      </p>
    </div>
  )
}

export default DisplayField
