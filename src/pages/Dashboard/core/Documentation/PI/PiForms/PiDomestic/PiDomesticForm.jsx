import { PDFViewer, pdf } from "@react-pdf/renderer"
import React, { useState, useEffect } from "react"
import { useForm, Controller, useFieldArray } from "react-hook-form"
import PiDomesticPdf from "./PiDomesticPdf"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import numberToWords from 'number-to-words';

const PiDomesticForm = () => {
  const [formData, setFormData] = useState(null)
  const navigate = useNavigate()
  const [totalWeight, setTotalWeight] = useState("")

  const { control, handleSubmit, watch, register, setValue } = useForm({
    defaultValues: {
      pi_no: "",
      date: "",
      buyer_order_no: "",
      buyer_order_date: "",
      supplier_name: "",
      supplier_address: "",
      supplier_pan: "",
      supplier_gst: "",
      supplier_mail: "",
      supplier_contact_person: "",
      supplier_contact_no: "",
      consignee_name: "",
      consignee_address: "",
      consignee_pan: "",
      consignee_iec: "",
      consignee_gst: "",
      consignee_mail: "",
      consignee_contact_person: "",
      consignee_contact_no: "",
      igst: "",
      sgst: "",
      cgst: "",
      total_fob_value: "",
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
      notes: [
        {
          note: "",
        },
      ],
      products: [
        {
          description: "",
          hsn_code: "",
          no_of_box: "",
          weight_per_box: "",
          total_weight: "",
          rate: "",
          amount: "",
          amount_in_words: ""
        },
      ],
    },
  })

  const {
    fields: productFields,
    append: appendProduct,
    remove: removeProduct,
  } = useFieldArray({
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

  const onSubmit = async (data, shouldHitApi) => {
    // Handle form submission here
    console.log(data, "i am the ops")
    setFormData(data)

    if (shouldHitApi) {
      const token = localStorage.getItem("token")

      const dataToSend = {
        ...data,
      }
      console.log(formData, "@@formdata from the godd")
      try {
        const response = await axios.post(
          "https://api.smartwrapfilms.com/api/pi-reports-domestic",
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
        a.download = "pi-domestic.pdf"
        document.body.appendChild(a)
        a.click()
        a.remove()
        navigate("/dashboard/pi-report")
      } catch (error) {
        console.error("Error generating PDF:", error)
      }
    }
  }

    
  const generatePdf = async (data) => {
    const doc = <PiDomesticPdf formData={data} />
    const blob = await pdf(doc).toBlob()
    return blob
  }

  const handleAddProduct = () => {
    appendProduct({
      description: "",
      hsn_code: "",
      no_of_box: "",
      weight_per_box: "",
      total_weight: "",
      rate: "",
      amount: "",
      amount_in_words: ""
    })
  }

  const handleAddNote = () => {
    appendNote({
      note: "",
    })
  }

  const handleEdit = () => {
    setFormData(null)
  }

  const calculateTotalWeight = (index) => {
    const noOfBoxes = watch(`products[${index}].no_of_box`) || 0
    const weightPerBox = watch(`products[${index}].weight_per_box`) || 0
    const finalWeight = Number(noOfBoxes) * Number(weightPerBox)
    setTotalWeight(finalWeight)
    return finalWeight
  }
  
  const updateTotalWeight = (index) => {
    const getTotalWeight = calculateTotalWeight(index)?.toString();
    setValue(`products[${index}].total_weight`, getTotalWeight);
  };

  useEffect(() => {
    productFields?.forEach((_, index) => {
      updateTotalWeight(index)
    })
  }, [watch(`products`), totalWeight])

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">PI Domestic</h2>

      {formData ? (
        <div>
          <PDFViewer style={{ height: "500px" }} className="w-full">
            <PiDomesticPdf formData={formData} />
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
          {/* Proforma Invoice Section */}
          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium">PI No:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("pi_no")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Date:</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded"
                  {...register("date")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">
                  Buyer Order No:
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("buyer_order_no")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">
                  Buyer Order Date:
                </label>
                <input
                  type="date"
                  className="w-full p-2 border rounded"
                  {...register("buyer_order_date")}
                />
              </div>
            </div>
          </div>

          {/* Supplier Details Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Supplier Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium">Name:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("supplier_name")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Address:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("supplier_address")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">PAN:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("supplier_pan")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">GST:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("supplier_gst")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Mail:</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  {...register("supplier_mail")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">
                  Contact Person:
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("supplier_contact_person")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Contact No:</label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded"
                  {...register("supplier_contact_no")}
                />
              </div>
            </div>
          </div>

          {/* Consignee Details Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Consignee Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium">Name:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("consignee_name")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Address:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("consignee_address")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">PAN:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("consignee_pan")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">IEC:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("consignee_iec")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">GST:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("consignee_gst")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Mail:</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  {...register("consignee_mail")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">
                  Contact Person:
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("consignee_contact_person")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Contact No:</label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded"
                  {...register("consignee_contact_no")}
                />
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Products</h3>
            {productFields.map((item, index) => (
              <div key={item.id} className="border p-4 mb-4 rounded">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-medium">
                      Description:
                    </label>
                    <Controller
                      control={control}
                      name={`products[${index}].description`}
                      render={({ field }) => (
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">HSN Code:</label>
                    <Controller
                      control={control}
                      name={`products[${index}].hsn_code`}
                      render={({ field }) => {
                        return (
                          <input
                            type="text"
                            className="w-full p-2 border rounded"
                            {...field}
                          />
                        )
                      }}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">No of Box:</label>
                    <Controller
                      control={control}
                      name={`products[${index}].no_of_box`}
                      render={({ field }) => (
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...field}
                          onChange={e => {
                            field.onChange(e)
                            calculateTotalWeight(index) // Update total weight
                          }}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">
                      Weight Per Box:
                    </label>
                    <Controller
                      control={control}
                      name={`products[${index}].weight_per_box`}
                      render={({ field }) => (
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...field}
                          onChange={e => {
                            field.onChange(e)
                            calculateTotalWeight(index) // Update total weight
                          }}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">
                      Total Weight:
                    </label>
                    <Controller
                      control={control}
                      name={`products[${index}].total_weight`}
                      render={({ field }) => (
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...field}
                          value={calculateTotalWeight(index)}
                          readOnly
                        />
                      )}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Rate:</label>
                    <Controller
                      control={control}
                      name={`products[${index}].rate`}
                      render={({ field }) => (
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Amount:</label>
                    <Controller
                      control={control}
                      name={`products[${index}].amount`}
                      render={({ field }) => (
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...field}
                          onChange={(e) => {
                            const value = (e.target.value)
                            field.onChange(value);
                            const amountInWords = numberToWords.toWords(Number(value));  
                            setValue(`products[${index}].amount_in_words`, amountInWords); 
                          }}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Amount in Words:</label>
                    <Controller
                      control={control}
                      name={`products[${index}].amount_in_words`}
                      render={({ field }) => (
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...field}
                        />
                      )}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-4 bg-red-500 text-white p-2 rounded"
                  onClick={() => removeProduct(index)}
                >
                  Remove Product
                </button>
              </div>
            ))}
            <button
              type="button"
              className="bg-blue-500 text-white p-2 rounded"
              onClick={handleAddProduct}
            >
              Add Product
            </button>
          </div>

          {/* Tax Details Section */}
          {/* <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Tax Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block mb-2 font-medium">IGST:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("igst")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">SGST:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("sgst")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">CGST:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("cgst")}
                />
              </div>
            </div>
          </div> */}

          {/* Bank Details Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Bank Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium">Bank Name:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("bank_name")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Bank Address:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("bank_address")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Account No:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("bank_account_no")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">IFSC Code:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("bank_ifsc_code")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">AD Code:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("bank_ad_code")}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Swift Code:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("bank_swift_code")}
                />
              </div>
            </div>
          </div>

          {/* Payment Details Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium">Payment Terms:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("payment_terms")}
                />
              </div>
              {/* <div>
                <label className="block mb-2 font-medium">Delivery Time:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("payment_delivery_time")}
                />
              </div> */}
              <div>
                <label className="block mb-2 font-medium">
                  Delivery Terms:
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  {...register("payment_delivery_terms")}
                />
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Notes</h3>
            {noteFields.map((item, index) => (
              <div key={item.id} className="mb-4">
                <div className="flex gap-4 items-center">
                  <Controller
                    control={control}
                    name={`notes[${index}].note`}
                    render={({ field }) => (
                      <input
                        type="text"
                        className="w-full p-2 border rounded"
                        {...field}
                      />
                    )}
                  />
                  <button
                    type="button"
                    className="bg-red-500 text-white p-2 rounded"
                    onClick={() => removeNote(index)}
                  >
                    Remove Note
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="bg-blue-500 text-white p-2 rounded"
              onClick={handleAddNote}
            >
              Add Note
            </button>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded"
            >
              Preview Pdf
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default PiDomesticForm
