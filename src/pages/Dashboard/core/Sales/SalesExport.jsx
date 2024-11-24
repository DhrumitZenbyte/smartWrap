import React from "react"
import Breadcrumb from "../../../../components/Common/Breadcrumb"
import { Card, CardBody, Col, Row } from "reactstrap"
import { Link } from "react-router-dom"

export const SalesExport = props => {
  return (
    <div className="container-fluid">
      <Breadcrumb title="Smart-wrap" breadcrumbItem="View customer" />
      <Row>
        <Col lg="12">
          <Card>
            <CardBody className="border-bottom">
              <div className="flex justify-between items-center mb-5 gap-2">
                <h2 className="text-xl font-bold">View Export</h2>
                <Link
                  to="/dashboard/export/generate"
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary"
                >
                  Export Invoice
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                  <thead>
                    <tr className="bg-gray-50 ">
                      <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                        Invoice date
                      </th>
                      <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                        Export invoice No
                      </th>
                      <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                        Consignee name
                      </th>
                      <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                        No of container
                      </th>
                      <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                        Port of discharge
                      </th>
                      <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                        Total amount
                      </th>
                      <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                        01/04/2024
                      </td>
                      <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                        EXP-2021-22/136
                      </td>
                      <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                      Camber Industries
                      </td>
                      <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                        1
                      </td>
                      <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                      New Orleans
                      </td>
                      <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                      $ 9879.41
                      </td>
                      <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                        <select className="w-full border border-gray-300 p-2">
                          <option value="">Action</option>
                          <option>View custom excel file </option>
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
