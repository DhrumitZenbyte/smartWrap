import React from "react"
import { PDFViewer } from "@react-pdf/renderer"
import axios from "axios"
import Breadcrumb from "components/Common/Breadcrumb"
import numberToWords from "number-to-words"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Card, CardBody, Col, Row } from "reactstrap"

const CommercialInvoiceForm = () => {
  const [formData, setFormData] = useState(null)
  const navigate = useNavigate()

  const getCurrentDate = () => {
    const today = new Date()
    return today.toISOString().split("T")[0]
  }

  const { control, handleSubmit, watch, register, setValue } = useForm({
    defaultValues: {
      pi_no: "",
      date: getCurrentDate(),
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
          amount_in_words: "",
        },
      ],
    },
  })

  const onSubmit = async (data, shouldHitApi) => {
    const totalAmount = data?.products?.reduce((sum, product) => {
      const amount = parseFloat(product.amount)
      return sum + (isNaN(amount) ? 0 : amount)
    }, 0)

    const amountInWord = totalAmount && numberToWords.toWords(totalAmount)

    const finaldata = {
      ...data,
      amount_in_words: amountInWord,
    }
    setFormData(finaldata)

    if (shouldHitApi) {
      const token = localStorage.getItem("token")

      const dataToSend = {
        ...data,
        amount_in_words: amountInWord,
      }
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

  return (
    <div>
      <Breadcrumb title="Smart-wrap" breadcrumbItem="Commercial Invoice" />

      <Row>
        <Col lg="12">
          <Card>
            <CardBody className="border-bottom">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-semibold">Commercial Invoice</h3>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-200"
                >
                  Preview Pdf
                </button>
              </div>
              {formData ? (
                <div>
                  <PDFViewer style={{ height: "500px" }} className="w-full">
                    {/* <PiDomesticPdf formData={formData} /> */}
                  </PDFViewer>
                  <div className="flex justify-end mt-6">
                    <button className="px-6 py-2 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-200">
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
                        <label className="block mb-2 font-medium">
                          Invoice No:
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("invoice_no")}
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

                  {/* Shipper Details Section */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Shipper Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 font-medium">Name:</label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("shipper_name")}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">
                          Address:
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("shipper_address")}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">PAN:</label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("shipper_pan")}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">
                          GST NO:
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("shipper_gst")}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">
                          IEC NO:
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("shipper_iec_no")}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Consignee Details Section */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Consignee Details
                    </h3>
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
                        <label className="block mb-2 font-medium">Buyer:</label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("consignee_buyer")}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipment Details */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4 ">
                      Shipment Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 font-medium">
                          Pre Carriage By :
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("pre_carriage_by")}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">
                          Place of Receipt by :
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("place_of_receipt_by")}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">
                          Country of Origin of Goods:
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("country_of_origin_of_goods")}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">
                          Country of Final Destination:
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("country_of_final_destination")}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">
                          Vessel No:
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("vessel_no")}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">
                          Port of Loading:
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("port_of_loading")}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">
                          Port of Loading:
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("port_of_loading")}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">
                          Shipment Terms:
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("port_of_loading")}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">
                          Payment Terms:
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("payment_terms")}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">
                          Date of Shipment:
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("date_of_shipment")}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">
                          Port of Discharge:
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("port_of_discharge")}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">
                          Port of Discharge:
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("port_of_discharge")}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">
                          Place of Delivery:
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          {...register("place_of_delivery")}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product details */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4 w-[15%]">
                      Products
                    </h3>
                    <div className="border p-4 mb-4 rounded">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-2 font-medium">
                            Container No:
                          </label>
                          <Controller
                            control={control}
                            name={`container_no`}
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
                          <label className="block mb-2 font-medium">
                            Shipping Seal No:
                          </label>
                          <Controller
                            control={control}
                            name={`shipping_seal_no`}
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
                          <label className="block mb-2 font-medium">
                            No of Pallets:
                          </label>
                          <Controller
                            control={control}
                            name={`no_of_pallets`}
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
                          <label className="block mb-2 font-medium">
                            Particulars:
                          </label>
                          <Controller
                            control={control}
                            name={`particulars`}
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
                          <label className="block mb-2 font-medium">
                            Width:
                          </label>
                          <Controller
                            control={control}
                            name={`width`}
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
                          <label className="block mb-2 font-medium">
                            Micron:
                          </label>
                          <Controller
                            control={control}
                            name={`micron`}
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
                          <label className="block mb-2 font-medium">
                            Total Rolls per Size:
                          </label>
                          <Controller
                            control={control}
                            name={`total_rolls_per_size`}
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
                          <label className="block mb-2 font-medium">
                            Weight:
                          </label>
                          <Controller
                            control={control}
                            name={`weight`}
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
                          <label className="block mb-2 font-medium">
                            Price per roll:
                          </label>
                          <Controller
                            control={control}
                            name={`price_per_roll`}
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
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-200"
                          // onClick={() => removeProduct(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Amount Details Section */}
                  <section className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Grand Total</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block">Amount in Words:</label>
                        <input
                          type="text"
                          {...register("amount_in_words")}
                          className="w-full border border-gray-300 p-2"
                        />
                      </div>
                      <div>
                        <label className="block">Total Weight:</label>
                        <input
                          type="number"
                          {...register("total_weight")}
                          className="w-full border border-gray-300 p-2"
                        />
                      </div>
                      <div>
                        <label className="block">Total FOB:</label>
                        <input
                          type="number"
                          {...register("total_fob")}
                          className="w-full border border-gray-300 p-2"
                        />
                      </div>
                    </div>
                  </section>

                  {/* Submit Button */}
                </form>
              )}
              <div className="flex gap-2 justify-end">
                <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700">
                  Back
                </button>
                <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary hover:opacity-80">
                  Next
                </button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default CommercialInvoiceForm
