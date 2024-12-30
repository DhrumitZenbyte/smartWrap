import React from "react"
import Breadcrumb from "../../../../components/Common/Breadcrumb"
import { Card, CardBody, Col, Row } from "reactstrap"
import { Link, useLocation, useNavigate } from "react-router-dom"

export const SalesCustomer = props => {
  const navigate = useNavigate()

  const handleActionChange = e => {
    const value = e.target.value
    if (value === "commercialInvoiceForm") {
      navigate("/dashboard/customer/commercial-invoice/generate")
    }

    if (value === "packagingListForm") {
      navigate("/dashboard/customer/packaging-list-invoice/generate")
    }

    if (value === "StandardPackagingListForm") {
      navigate("/dashboard/customer/standard-packaging-list/generate")
    }
  }
  return (
    <div className="container-fluid">
      <Breadcrumb title="Smart-wrap" breadcrumbItem="View customer" />
      <Row>
        <Col lg="12">
          <Card>
            <CardBody className="border-bottom">
              <div className="flex justify-between items-center mb-5 gap-2">
                <h2 className="text-xl font-bold">View Customer</h2>
                <Link
                  to="/dashboard/customer/generate"
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary"
                >
                  New Customer
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                  <thead>
                    <tr className="bg-gray-50 ">
                      <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                        Customer Type
                      </th>
                      <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                        Company
                      </th>
                      <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                        Name
                      </th>
                      <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                        Contact No
                      </th>
                      <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                        Email
                      </th>
                      <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                        Country
                      </th>
                      <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                        Opening Balance
                      </th>
                      <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                        Export
                      </td>
                      <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                        cerazon ceramic
                      </td>
                      <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                        shailesh patel
                      </td>
                      <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                        9978933033
                      </td>
                      <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                        abc@gmail.com
                      </td>
                      <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                        GREECE
                      </td>
                      <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                        $ 0 Debit
                      </td>
                      <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                        <select
                          onChange={handleActionChange}
                          className="w-full border border-gray-300 p-2"
                        >
                          <option value="">Action</option>
                          <option value="commercialInvoiceForm">
                            Create Commercial Invoice
                          </option>
                          <option value="packagingListForm">
                            Create Packaging List Invoice
                          </option>
                          <option value="StandardPackagingListForm">
                            Create Standard Packaging List
                          </option>
                          <option value="invoicePDF">View invoice PDF </option>
                          <option value="packagingList">
                            View packaging list PDF
                          </option>
                          <option value="annexurePDF">View ANNEXURE PDF</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
