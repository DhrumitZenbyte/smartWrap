import toast from "react-hot-toast"
import { piExportEndpoints } from "services/operations/api"
import { apiconnector } from "services/operations/apiconnector"

const { PI_NO_API, GENERATE_BY_ID } = piExportEndpoints

export async function getPiNo(token) {
  const toastId = toast.loading("Fetching Pi No...")
  try {
    const response = await apiconnector("GET", PI_NO_API, null, {
      Authorization: `Bearer ${token}`,
    })

    if (response.status !== 200) {
      throw new Error(response.data.message)
    }

    if (response.data) {
      toast.success("PI no fetched successfully!")
      return response.data
    }
  } catch (error) {
    toast.error("Could Not Get Pi export no")
  } finally {
    toast.dismiss(toastId)
  }
}

export async function generatePDFById(piNo, token) {
  try {
    const response = await apiconnector("GET", GENERATE_BY_ID(piNo), null, {
      Authorization: `Bearer ${token}`,
    })

    if (response.status !== 200) {
      throw new Error(response.data.message)
    }

    if (response) {
      return response
    }
  } catch (error) {
    console.error("Could Not Generate pdf")
  } 
}
