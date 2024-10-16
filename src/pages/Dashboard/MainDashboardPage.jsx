import React, { useEffect, useState } from "react"
import { fetchDashboardData } from "services/operations/DashboardOps/dashbordApi"

export const MainDashboardPage = () => {
  const [dashboardData, setDashboardData] = useState(null)
  const token = localStorage.getItem("token")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getDashboardData = await fetchDashboardData(token)
        setDashboardData(getDashboardData?.dashboard)
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error)
      }
    }

    fetchData()
  }, [token])

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Company Raw Materials
      </h1>

      {dashboardData?.company_raw_materials?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-50 ">
                <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                  Company Name
                </th>
                <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                  Grade
                </th>
                <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                  Total Pallets
                </th>
                <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                  Total Bags
                </th>
                <th className="py-3 px-6 text-left text-sm text-gray-600 border-b">
                  Total Weight
                </th>
              </tr>
            </thead>
            <tbody>
              {dashboardData?.company_raw_materials?.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                    {item?.company_name}
                  </td>
                  <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                    {item?.grade}
                  </td>
                  <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                    {item?.total_pallet}
                  </td>
                  <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                    {item?.total_bag}
                  </td>
                  <td className="py-3 px-6 text-left text-sm text-gray-700 border-b">
                    {item?.total_weight}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No data available</p>
      )}
    </div>
  )
}
