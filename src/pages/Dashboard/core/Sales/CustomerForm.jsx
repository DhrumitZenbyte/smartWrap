import React from "react"
import Breadcrumb from "../../../../components/Common/Breadcrumb"
import { Card, CardBody, Col, Row } from "reactstrap"
import { Link } from "react-router-dom"

export const CustomerForm = props => {
  return (
    <div>
      <Breadcrumb title="Smart-wrap" breadcrumbItem="New Customer" />
      <Row>
        <Col lg="12">
          <Card>
            <CardBody className="border-bottom">
              <div className="flex justify-between items-center mb-5 gap-2">
                <h2 className="text-xl font-bold">New Customer</h2>
                <div>
                  <Link
                    to="/dashboard/customer"
                    className="px-4 py-2 mr-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
                  >
                    Back
                  </Link>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-200"
                  >
                    Save
                  </button>
                </div>
              </div>
              <form>
                {/*  */}
                <div className="mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block">Customer Type:</label>
                      <select className="w-full border border-gray-300 p-2">
                        <option value="">-- Customer Type --</option>
                        <option>Export</option>
                        <option>Merchant</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">
                        Company Name:
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Address:</label>
                      <textarea className="w-full p-2 border rounded" />
                    </div>
                  </div>
                </div>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
