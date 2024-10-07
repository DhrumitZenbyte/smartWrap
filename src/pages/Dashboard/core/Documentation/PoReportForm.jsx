// import React from "react"
// import { useForm } from "react-hook-form"

// const PoReportForm = () => {
//   const { register, handleSubmit } = useForm()

//   const onSubmit = data => {
//     // Handle form submission
//     console.log(data)
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-6 text-center">
//         Purchase Order
//       </h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <h2 className="text-xl font-semibold mb-4">Purchase Order</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-2 font-semibold">PO No:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("poNo")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Date:</label>
//             <input
//               type="date"
//               className="w-full p-2 border rounded"
//               {...register("date")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Quotation No:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("quotationNo")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Quotation Date:</label>
//             <input
//               type="date"
//               className="w-full p-2 border rounded"
//               {...register("quotationDate")}
//             />
//           </div>
//         </div>

//         <h2 className="text-xl font-semibold my-4">Buyer Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-2 font-semibold">Buyer Name:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("buyer.name")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Buyer Address:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("buyer.address")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Buyer PAN:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("buyer.pan")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Buyer IEC:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("buyer.iec")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Buyer GST:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("buyer.gst")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Buyer Mail:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("buyer.mail")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">
//               Buyer Contact Person:
//             </label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("buyer.contactPerson")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">
//               Buyer Contact No:
//             </label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("buyer.contactNo")}
//             />
//           </div>
//         </div>

//         <h2 className="text-xl font-semibold my-4">Supplier Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-2 font-semibold">Supplier Name:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("supplier.name")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">
//               Supplier Address:
//             </label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("supplier.address")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Supplier PAN:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("supplier.pan")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Supplier IEC:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("supplier.iec")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Supplier GST:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("supplier.gst")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Supplier Mail:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("supplier.mail")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">
//               Supplier Contact Person:
//             </label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("supplier.contactPerson")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">
//               Supplier Contact No:
//             </label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("supplier.contactNo")}
//             />
//           </div>
//         </div>

//         <h2 className="text-xl font-semibold my-4">Product Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-2 font-semibold">Description:</label>
//             <input
//               type="string"
//               step="0.01"
//               className="w-full p-2 border rounded"
//               {...register("description")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">HSN</label>
//             <input
//               type="string"
//               step="0.01"
//               className="w-full p-2 border rounded"
//               {...register("hsn")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Qty:</label>
//             <input
//               type="string"
//               step="0.01"
//               className="w-full p-2 border rounded"
//               {...register("qty")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Unit:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("unit")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Rate:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("rate")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Amount:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("amount")}
//             />
//           </div>
//         </div>

//         <h2 className="text-xl font-semibold my-4">Payment Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-2 font-semibold">IGST %:</label>
//             <input
//               type="number"
//               step="0.01"
//               className="w-full p-2 border rounded"
//               {...register("igst")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">SGST %:</label>
//             <input
//               type="number"
//               step="0.01"
//               className="w-full p-2 border rounded"
//               {...register("sgst")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">CGST %:</label>
//             <input
//               type="number"
//               step="0.01"
//               className="w-full p-2 border rounded"
//               {...register("cgst")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Payment Terms:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("paymentTerms")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Amount in Words:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("amountInWords")}
//             />
//           </div>
//         </div>

//         <h2 className="text-xl font-semibold my-4">Notes</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-2 font-semibold">Note 1:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("note1")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Note 2:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("note2")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Note 3:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("note3")}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Note 4:</label>
//             <input
//               className="w-full p-2 border rounded"
//               {...register("note4")}
//             />
//           </div>
//         </div>

//         <div className="flex justify-end mt-6">
//           <button
//             type="submit"
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
//           >
//             Generate PDF
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default PoReportForm

import React, { useState } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { PDFViewer } from "@react-pdf/renderer"
import PoReportPdf from "./PoReportPdf"
import axios from "axios"
import { pdf } from "@react-pdf/renderer"
import { useNavigate } from "react-router-dom"

const PoReportForm = () => {
  const { register, handleSubmit, control } = useForm()
  const [formData, setFormData] = useState(null)
  const [downloadLink, setDownloadLink] = useState(null)
  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  })

  const {
    fields: noteFields,
    append: appendNote,
    remove: removeNote,
  } = useFieldArray({
    control,
    name: "notes",
  })
  const navigate = useNavigate()

  const calculateTotals = (products, igst, sgst, cgst) => {
    let subtotal = 0
    let totalIGST = 0
    let totalSGST = 0
    let totalCGST = 0

    products.forEach(product => {
      const quantity = parseFloat(product.quantity)
      const rate = parseFloat(product.rate)
      const amount = quantity * rate
      subtotal += amount
    })

    totalIGST = (subtotal * parseFloat(igst)) / 100
    totalSGST = (subtotal * parseFloat(sgst)) / 100
    totalCGST = (subtotal * parseFloat(cgst)) / 100

    const grandTotal = subtotal + totalIGST + totalSGST + totalCGST

    return {
      subtotal,
      totalIGST,
      totalSGST,
      totalCGST,
      grandTotal,
    }
  }

  const onSubmit = async (data, shouldHitApi) => {
    setFormData(data)
    const totals = calculateTotals(
      data.products || [],
      data.igst || 0,
      data.sgst || 0,
      data.cgst || 0
    )

    const postData = {
      po_no: data.poNo,
      po_date: data.date,
      quotation_no: data.quotationNo,
      quotation_date: data.quotationDate,
      buyer_name: data.buyer?.name,
      buyer_address: data.buyer?.address,
      buyer_pan: data.buyer?.pan,
      buyer_iec: data.buyer?.iec,
      buyer_gst: data.buyer?.gst,
      buyer_mail: data.buyer?.mail,
      buyer_contact_person: data.buyer?.contactPerson,
      buyer_contact_no: data.buyer?.contactNo,
      igst: data.igst,
      sgst: data.sgst,
      cgst: data.cgst,
      total_value: totals.grandTotal,
      amount_in_words: data.amountInWords,
      products: data.products.map(product => ({
        product_description: product.product_description,
        hsn_code: product.hsn_code,
        quantity: product.quantity,
        unit: product.unit,
        rate: product.rate,
        amount: product.amount,
      })),
      notes_1: data.note1,
      notes_2: data.note2,
      notes_3: data.note3,
      notes_4: data.note4,
    }

    if (shouldHitApi) {
      const token = localStorage.getItem("token")

      try {
        await axios.post(
          "https://api.smartwrapfilms.com/api/po-reports",
          postData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        )

        // Generate and download the PDF
        const blob = await generatePdf(data)
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = "PurchaseOrder.pdf"
        document.body.appendChild(a)
        a.click()
        a.remove()

        navigate("/dashboard/po-report")
      } catch (error) {
        console.error("Error while calling the API:", error.response?.data)
      }
    }
  }

  const generatePdf = async data => {
    const doc = <PoReportPdf formData={data} />
    const blob = await pdf(doc).toBlob()
    return blob
  }

  const handleEdit = () => {
    setFormData(null)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Purchase Order</h1>
      {formData ? (
        <div>
          <PDFViewer style={{ height: "500px" }} className="w-full">
            <PoReportPdf formData={formData} />
          </PDFViewer>
          <div className="flex justify-end mt-6">
            <button
              onClick={handleEdit}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-200"
            >
              Edit
            </button>
            <button
              onClick={() => onSubmit(formData, true)}
              className="px-6 py-2 ml-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
            >
              OK
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(data => onSubmit(data, false))}>
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
              <label className="block mb-2 font-semibold">
                Quotation Date:
              </label>
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
              <label className="block mb-2 font-semibold">
                {" "}
                Buyer Mail ID:
              </label>
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
              <label className="block mb-2 font-semibold">
                Supplier Mail ID:
              </label>
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

          <h2 className="text-xl font-semibold my-4">Products</h2>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
                <label className="block mb-2 font-semibold">Description:</label>
                <input
                  className="w-full p-2 border rounded"
                  {...register(`products.${index}.product_description`)}
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">HSN Code:</label>
                <input
                  className="w-full p-2 border rounded"
                  {...register(`products.${index}.hsn_code`)}
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Quantity:</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  {...register(`products.${index}.quantity`)}
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Unit:</label>
                <input
                  className="w-full p-2 border rounded"
                  {...register(`products.${index}.unit`)}
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Rate:</label>
                <input
                  type="number"
                  step="0.01"
                  className="w-full p-2 border rounded"
                  {...register(`products.${index}.rate`)}
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Amount:</label>
                <input
                  type="number"
                  step="0.01"
                  className="w-full p-2 border rounded"
                  {...register(`products.${index}.amount`)}
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-200"
                >
                  Remove Product
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <button
              type="button"
              onClick={() => append({})}
              className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-200"
            >
              Add Product
            </button>
          </div>

          {/* <h2 className="text-xl font-semibold my-4">Taxes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2 font-semibold">IGST:</label>
              <input
                type="number"
                step="0.01"
                className="w-full p-2 border rounded"
                {...register("igst")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">SGST:</label>
              <input
                type="number"
                step="0.01"
                className="w-full p-2 border rounded"
                {...register("sgst")}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">CGST:</label>
              <input
                type="number"
                step="0.01"
                className="w-full p-2 border rounded"
                {...register("cgst")}
              />
            </div>
          </div> */}

          <h2 className="text-xl font-semibold my-4">Amount in Words</h2>
          <input
            className="w-full p-2 border rounded"
            {...register("amountInWords")}
          />

          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Notes</h2>
            {noteFields.map((note, index) => (
              <div
                key={note.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2"
              >
                <div>
                  <label className="block">Note:</label>
                  <input
                    type="text"
                    {...register(`notes[${index}].note`)}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>
                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={() => removeNote(index)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-200"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => appendNote({ note: "" })}
              className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-200"
            >
              Add Note
            </button>
          </section>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
            >
              Preview PDF
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default PoReportForm
