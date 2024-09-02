// import React from "react"

// const PiExportForm = () => {
//   return (
//     <div className="container mx-auto p-4 max-w-4xl">
//       <h1 className="text-2xl font-bold mb-4">Pi Export Invoice</h1>

//       {/* PI Details Section */}
//       <section className="mb-4">
//         <h2 className="text-xl font-semibold mb-2">PI Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block">PI No:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Date:</label>
//             <input type="date" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Buyer Order No:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Buyer Order Date:</label>
//             <input type="date" className="w-full border border-gray-300 p-2" />
//           </div>
//         </div>
//       </section>

//       {/* Exporter Details Section */}
//       <section className="mb-4">
//         <h2 className="text-xl font-semibold mb-2">Exporter Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block">Name:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Address:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">PAN:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">IEC:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">GST:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Mail Id:</label>
//             <input type="email" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Contact Person:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Contact No:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//         </div>
//       </section>

//       {/* Importer Details Section */}
//       <section className="mb-4">
//         <h2 className="text-xl font-semibold mb-2">
//           Importer / Consignee Details
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block">Name:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Address:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Country:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Mail Id:</label>
//             <input type="email" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Contact Person:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Contact No:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//         </div>
//       </section>

//       {/* Shipment Details Section */}
//       <section className="mb-4">
//         <h2 className="text-xl font-semibold mb-2">Shipment Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <label className="block">Port of Loading:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Port of Discharge:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Final Destination Port:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Country of Origin of Goods:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Country of Final Destination:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//         </div>
//       </section>

//       {/* Item Details Section */}
//       <section className="mb-4">
//         <h2 className="text-xl font-semibold mb-2">Item Details</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-300">
//             <thead>
//               <tr>
//                 <th className="border border-gray-300 p-2">Size</th>
//                 <th className="border border-gray-300 p-2">Type</th>
//                 <th className="border border-gray-300 p-2">
//                   Packaging Description
//                 </th>
//                 <th className="border border-gray-300 p-2">Rolls/Pallet</th>
//                 <th className="border border-gray-300 p-2">No of Pallets</th>
//                 <th className="border border-gray-300 p-2">Total Rolls</th>
//                 <th className="border border-gray-300 p-2">Container</th>
//                 <th className="border border-gray-300 p-2">Quantity</th>
//                 <th className="border border-gray-300 p-2">Unit</th>
//                 <th className="border border-gray-300 p-2">Rate (USD)</th>
//                 <th className="border border-gray-300 p-2">Amount (USD)</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="border border-gray-300 p-2">
//                   <input type="text" className="w-full" />
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   <input type="text" className="w-full" />
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   <input type="text" className="w-full" />
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   <input type="text" className="w-full" />
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   <input type="text" className="w-full" />
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   <input type="text" className="w-full" />
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   <input type="text" className="w-full" />
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   <input type="text" className="w-full" />
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   <input type="text" className="w-full" />
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   <input type="text" className="w-full" />
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   <input type="text" className="w-full" />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* Bank Details Section */}
//       <section className="mb-4">
//         <h2 className="text-xl font-semibold mb-2">Bank Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block">Bank Name:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Address:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Account No:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">IFSC Code:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">AD Code:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Swift Code:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//         </div>
//       </section>

//       {/* Payment Details Section */}
//       <section className="mb-4">
//         <h2 className="text-xl font-semibold mb-2">Payment Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block">Payment Terms:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Delivery Time:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//           <div>
//             <label className="block">Delivery Terms:</label>
//             <input type="text" className="w-full border border-gray-300 p-2" />
//           </div>
//         </div>
//       </section>

//       {/* Notes Section */}
//       <section className="mb-4">
//         <h2 className="text-xl font-semibold mb-2">Notes</h2>
//         <textarea
//           className="w-full border border-gray-300 p-2"
//           rows="6"
//         ></textarea>
//       </section>

//       <div className="text-right">
//         <button className="bg-blue-500 text-white px-4 py-2 rounded">
//           Generate PDF
//         </button>
//       </div>
//     </div>
//   )
// }

// export default PiExportForm
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useForm, useFieldArray } from "react-hook-form"
import { PDFViewer, pdf } from "@react-pdf/renderer"
import PiExpertPdf from "./PiExportPdf"
import { useNavigate } from "react-router-dom"

const PiExportForm = () => {
  const [piNumber, setPiNumber] = useState("")
  const [formData, setFormData] = useState(null)

  // Initialize React Hook Form
  const { register, control, handleSubmit, setValue } = useForm({
    defaultValues: {
      pi_no: "",
      date: "",
      buyer_order_no: "",
      buyer_order_date: "",
      exporter_name: "",
      exporter_address: "",
      exporter_pan: "",
      exporter_iec: "",
      exporter_gst: "",
      exporter_mail: "",
      exporter_contact_person: "",
      exporter_contact_no: "",
      consignee_name: "",
      consignee_address: "",
      consignee_country: "",
      consignee_mail: "",
      consignee_contact_person: "",
      consignee_contact_no: "",
      port_of_loading: "",
      port_of_discharge: "",
      final_destination_port: "",
      country_of_origin_of_goods: "",
      country_of_final_destination: "",
      total_fob_value: 0,
      freight_charges: 0,
      total_cfr_value: 0,
      insurance_charges: 0,
      total_cif_value: 0,
      amount_in_words: "",
      bank_name: "",
      bank_address: "",
      bank_account_no: "",
      bank_ifsc_code: "",
      bank_ad_code: "",
      bank_swift_code: "",
      payment_terms: "",
      payment_delivery_time: "",
      payment_delivery_terms: "",
      notes: [],
      products: [
        {
          size: "",
          type: "",
          packaging_description: "",
          rolls_pallet: "",
          no_of_pallets: "",
          total_rolls: "",
          container: "",
          unit: "",
          rate_in_usd: "",
          amount_in_usd: "",
          quanity: "",
        },
      ],
    },
  })
  const navigate = useNavigate()

  const {
    fields: noteFields,
    append: appendNote,
    remove: removeNote,
  } = useFieldArray({
    control,
    name: "notes",
  })

  const {
    fields: productFields,
    append: appendProduct,
    remove: removeProduct,
  } = useFieldArray({
    control,
    name: "products",
  })

  //   const generatePiNumber = async () => {
  //     const currentYear = new Date().getFullYear()
  //     const currentMonth = new Date().getMonth() + 1
  //     const yearSuffix =
  //       currentMonth > 4
  //         ? `${currentYear}-${currentYear + 1}`
  //         : `${currentYear - 1}-${currentYear}`

  //     const piCount = 3 // Example static count, replace with dynamic count
  //     const newPiNumber = `SFW/PI/EX/${piCount}/${yearSuffix}`
  //     setPiNumber(newPiNumber)
  //     setValue("pi_no", newPiNumber) // Set the PI Number value in the form
  //   }

  //   useEffect(() => {
  //     generatePiNumber()
  //   }, [])

  const onSubmit = async (data, shouldHitApi) => {
    console.log(data, "@@form data")
    setFormData(data)

    if (shouldHitApi) {
      const token = localStorage.getItem("token")
      console.log(data.products, "@@productsss")
      const dataToSend = {
        ...data,
      }
      console.log(formData, "@@formdata from the godd")
      try {
        const response = await axios.post(
          "https://api.smartwrapfilms.com/api/pi-reports-export",
          dataToSend,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        console.log("API Response:", response.data)
        // Generate and download the PDF
        const blob = await generatePdf(data)
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = "pi-export.pdf"
        document.body.appendChild(a)
        a.click()
        a.remove()
        navigate("/dashboard/pi-report")
      } catch (error) {
        console.error("Error generating PDF:", error)
      }
    }
  }

  const generatePdf = async data => {
    const doc = <PiExpertPdf formData={data} />
    const blob = await pdf(doc).toBlob()
    return blob
  }

  const handleEdit = () => {
    setFormData(null)
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">Pi Export Invoice</h1>

      {formData ? (
        <div>
          <PDFViewer style={{ height: "500px" }} className="w-full">
            <PiExpertPdf formData={formData} />
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
          {/* Render your form sections here */}
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">PI Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block">PI No:</label>
                <input
                  // type="text"
                  //   value={piNumber}
                  {...register("pi_no", { required: true })}
                  //   readOnly
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Date:</label>
                <input
                  type="date"
                  {...register("date")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Buyer Order No:</label>
                <input
                  type="text"
                  {...register("buyer_order_no")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Buyer Order Date:</label>
                <input
                  type="date"
                  {...register("buyer_order_date")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
            </div>
          </section>

          {/* Exporter Details Section */}
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Exporter Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block">Name:</label>
                <input
                  type="text"
                  {...register("exporter_name")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Address:</label>
                <input
                  type="text"
                  {...register("exporter_address")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">PAN:</label>
                <input
                  type="text"
                  {...register("exporter_pan")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">IEC:</label>
                <input
                  type="text"
                  {...register("exporter_iec")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">GST:</label>
                <input
                  type="text"
                  {...register("exporter_gst")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Mail Id:</label>
                <input
                  type="email"
                  {...register("exporter_mail")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Contact Person:</label>
                <input
                  type="text"
                  {...register("exporter_contact_person")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Contact No:</label>
                <input
                  type="text"
                  {...register("exporter_contact_no")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
            </div>
          </section>

          {/* Importer Details Section */}
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Importer Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block">Name:</label>
                <input
                  type="text"
                  {...register("consignee_name")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Address:</label>
                <input
                  type="text"
                  {...register("consignee_address")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Country:</label>
                <input
                  type="text"
                  {...register("consignee_country")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Mail Id:</label>
                <input
                  type="email"
                  {...register("consignee_mail")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Contact Person:</label>
                <input
                  type="text"
                  {...register("consignee_contact_person")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Contact No:</label>
                <input
                  type="text"
                  {...register("consignee_contact_no")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
            </div>
          </section>

          {/* Port Details Section */}
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Port Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block">Port of Loading:</label>
                <input
                  type="text"
                  {...register("port_of_loading")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Port of Discharge:</label>
                <input
                  type="text"
                  {...register("port_of_discharge")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Final Destination Port:</label>
                <input
                  type="text"
                  {...register("final_destination_port")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Country of Origin of Goods:</label>
                <input
                  type="text"
                  value="india"
                  {...register("country_of_origin_of_goods")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Country of Final Destination:</label>
                <input
                  type="text"
                  {...register("country_of_final_destination")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
            </div>
          </section>

          {/* Product Details Section */}
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Product Details</h2>
            {productFields.map((product, index) => (
              <div
                key={product.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2"
              >
                <div>
                  <label className="block">Size:</label>
                  <input
                    type="text"
                    {...register(`products[${index}].size`)}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>
                <div>
                  <label className="block">Type:</label>
                  <input
                    type="text"
                    {...register(`products[${index}].type`)}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>
                <div>
                  <label className="block">Packaging Description:</label>
                  <input
                    type="text"
                    {...register(`products[${index}].packaging_description`)}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>
                <div>
                  <label className="block">Rolls Per Pallet:</label>
                  <input
                    type="text"
                    {...register(`products[${index}].rolls_pallet`)}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>
                <div>
                  <label className="block">No of Pallets:</label>
                  <input
                    type="text"
                    {...register(`products[${index}].no_of_pallets`)}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>
                <div>
                  <label className="block">Total Rolls:</label>
                  <input
                    type="text"
                    {...register(`products[${index}].total_rolls`)}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>
                <div>
                  <label className="block">Weight Per Roll:</label>
                  <input
                    type="text"
                    {...register(`products[${index}].container`)}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>
                <div>
                  <label className="block">Core Weight:</label>
                  <input
                    type="text"
                    {...register(`products[${index}].unit`)}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>
                <div>
                  <label className="block">Rate in USD:</label>
                  <input
                    type="number"
                    {...register(`products[${index}].rate_in_usd`)}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>
                <div>
                  <label className="block">Amount in USD:</label>
                  <input
                    type="number"
                    {...register(`products[${index}].amount_in_usd`)}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>
                <div>
                  <label className="block">Quantity:</label>
                  <input
                    type="number"
                    {...register(`products[${index}].quanity`)}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>

                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={() => removeProduct(index)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-200"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                appendProduct({
                  size: "",
                  type: "",
                  packaging_description: "",
                  rolls_pallet: 0,
                  no_of_pallets: 0,
                  total_rolls: 0,
                  container: "",
                  unit: "",
                  rate_in_usd: 0,
                  amount_in_usd: 0,
                  quantity: 0,
                })
              }
              className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-200"
            >
              Add Product
            </button>
          </section>

          {/* Amount Details Section */}
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Amount Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block">Total FOB Value:</label>
                <input
                  type="number"
                  {...register("total_fob_value")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Freight Charges:</label>
                <input
                  type="number"
                  {...register("freight_charges")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Total CFR Value:</label>
                <input
                  type="number"
                  {...register("total_cfr_value")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Insurance Charges:</label>
                <input
                  type="number"
                  {...register("insurance_charges")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Total CIF Value:</label>
                <input
                  type="number"
                  {...register("total_cif_value")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Amount in Words:</label>
                <input
                  type="text"
                  {...register("amount_in_words")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
            </div>
          </section>

          {/* Bank Details Section */}
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Bank Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block">Bank Name:</label>
                <input
                  type="text"
                  {...register("bank_name")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Bank Address:</label>
                <input
                  type="text"
                  {...register("bank_address")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Bank Account No:</label>
                <input
                  type="text"
                  {...register("bank_account_no")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Bank IFSC Code:</label>
                <input
                  type="text"
                  {...register("bank_ifsc_code")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Bank AD Code:</label>
                <input
                  type="text"
                  {...register("bank_ad_code")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block">Bank SWIFT Code:</label>
                <input
                  type="text"
                  {...register("bank_swift_code")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
            </div>
          </section>

          {/* Payment Terms Section */}
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Payment Terms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block">Payment Terms:</label>
                <input
                  type="text"
                  {...register("payment_terms")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              {/* <div>
                <label className="block">Delivery Time:</label>
                <input
                  type="text"
                  {...register("payment_delivery_time")}
                  className="w-full border border-gray-300 p-2"
                />
              </div> */}
              <div>
                <label className="block">Delivery Terms:</label>
                <input
                  type="text"
                  {...register("payment_delivery_terms")}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
            </div>
          </section>

          {/* Notes Section */}
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

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
            >
              Preview Pdf
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default PiExportForm
