import React from "react"

const PiExportForm = () => {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">Pi Export Invoice</h1>

      {/* PI Details Section */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">PI Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block">PI No:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Date:</label>
            <input type="date" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Buyer Order No:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Buyer Order Date:</label>
            <input type="date" className="w-full border border-gray-300 p-2" />
          </div>
        </div>
      </section>

      {/* Exporter Details Section */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Exporter Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block">Name:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Address:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">PAN:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">IEC:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">GST:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Mail Id:</label>
            <input type="email" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Contact Person:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Contact No:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
        </div>
      </section>

      {/* Importer Details Section */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">
          Importer / Consignee Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block">Name:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Address:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Country:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Mail Id:</label>
            <input type="email" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Contact Person:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Contact No:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
        </div>
      </section>

      {/* Shipment Details Section */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Shipment Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block">Port of Loading:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Port of Discharge:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Final Destination Port:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Country of Origin of Goods:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Country of Final Destination:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
        </div>
      </section>

      {/* Item Details Section */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Item Details</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Size</th>
                <th className="border border-gray-300 p-2">Type</th>
                <th className="border border-gray-300 p-2">
                  Packaging Description
                </th>
                <th className="border border-gray-300 p-2">Rolls/Pallet</th>
                <th className="border border-gray-300 p-2">No of Pallets</th>
                <th className="border border-gray-300 p-2">Total Rolls</th>
                <th className="border border-gray-300 p-2">Container</th>
                <th className="border border-gray-300 p-2">Quantity</th>
                <th className="border border-gray-300 p-2">Unit</th>
                <th className="border border-gray-300 p-2">Rate (USD)</th>
                <th className="border border-gray-300 p-2">Amount (USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">
                  <input type="text" className="w-full" />
                </td>
                <td className="border border-gray-300 p-2">
                  <input type="text" className="w-full" />
                </td>
                <td className="border border-gray-300 p-2">
                  <input type="text" className="w-full" />
                </td>
                <td className="border border-gray-300 p-2">
                  <input type="text" className="w-full" />
                </td>
                <td className="border border-gray-300 p-2">
                  <input type="text" className="w-full" />
                </td>
                <td className="border border-gray-300 p-2">
                  <input type="text" className="w-full" />
                </td>
                <td className="border border-gray-300 p-2">
                  <input type="text" className="w-full" />
                </td>
                <td className="border border-gray-300 p-2">
                  <input type="text" className="w-full" />
                </td>
                <td className="border border-gray-300 p-2">
                  <input type="text" className="w-full" />
                </td>
                <td className="border border-gray-300 p-2">
                  <input type="text" className="w-full" />
                </td>
                <td className="border border-gray-300 p-2">
                  <input type="text" className="w-full" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Bank Details Section */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Bank Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block">Bank Name:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Address:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Account No:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">IFSC Code:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">AD Code:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Swift Code:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
        </div>
      </section>

      {/* Payment Details Section */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Payment Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block">Payment Terms:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Delivery Time:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block">Delivery Terms:</label>
            <input type="text" className="w-full border border-gray-300 p-2" />
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Notes</h2>
        <textarea
          className="w-full border border-gray-300 p-2"
          rows="6"
        ></textarea>
      </section>

      <div className="text-right">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Generate PDF
        </button>
      </div>
    </div>
  )
}

export default PiExportForm
