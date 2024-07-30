import React from "react"
import { useForm } from "react-hook-form"

const PoReportForm = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    // Handle form submission
    console.log(data)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Purchase Order
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-semibold mb-4">Purchase Order</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">PO No:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("poNo")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Date:</label>
            <input
              type="date"
              className="w-full p-2 border rounded"
              {...register("date")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Quotation No:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("quotationNo")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Quotation Date:</label>
            <input
              type="date"
              className="w-full p-2 border rounded"
              {...register("quotationDate")}
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold my-4">Buyer Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">Buyer Name:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("buyer.name")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Buyer Address:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("buyer.address")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Buyer PAN:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("buyer.pan")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Buyer IEC:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("buyer.iec")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Buyer GST:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("buyer.gst")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Buyer Mail:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("buyer.mail")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">
              Buyer Contact Person:
            </label>
            <input
              className="w-full p-2 border rounded"
              {...register("buyer.contactPerson")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">
              Buyer Contact No:
            </label>
            <input
              className="w-full p-2 border rounded"
              {...register("buyer.contactNo")}
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold my-4">Supplier Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">Supplier Name:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("supplier.name")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">
              Supplier Address:
            </label>
            <input
              className="w-full p-2 border rounded"
              {...register("supplier.address")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Supplier PAN:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("supplier.pan")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Supplier IEC:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("supplier.iec")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Supplier GST:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("supplier.gst")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Supplier Mail:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("supplier.mail")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">
              Supplier Contact Person:
            </label>
            <input
              className="w-full p-2 border rounded"
              {...register("supplier.contactPerson")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">
              Supplier Contact No:
            </label>
            <input
              className="w-full p-2 border rounded"
              {...register("supplier.contactNo")}
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold my-4">Product Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">Description:</label>
            <input
              type="string"
              step="0.01"
              className="w-full p-2 border rounded"
              {...register("description")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">HSN</label>
            <input
              type="string"
              step="0.01"
              className="w-full p-2 border rounded"
              {...register("hsn")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Qty:</label>
            <input
              type="string"
              step="0.01"
              className="w-full p-2 border rounded"
              {...register("qty")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Unit:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("unit")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Rate:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("rate")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Amount:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("amount")}
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold my-4">Payment Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">IGST %:</label>
            <input
              type="number"
              step="0.01"
              className="w-full p-2 border rounded"
              {...register("igst")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">SGST %:</label>
            <input
              type="number"
              step="0.01"
              className="w-full p-2 border rounded"
              {...register("sgst")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">CGST %:</label>
            <input
              type="number"
              step="0.01"
              className="w-full p-2 border rounded"
              {...register("cgst")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Payment Terms:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("paymentTerms")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Amount in Words:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("amountInWords")}
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold my-4">Notes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">Note 1:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("note1")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Note 2:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("note2")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Note 3:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("note3")}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Note 4:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("note4")}
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            Generate PDF
          </button>
        </div>
      </form>
    </div>
  )
}

export default PoReportForm
