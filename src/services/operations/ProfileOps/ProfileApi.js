// import toast from "react-hot-toast"
// import { apiconnector } from "../apiconnector"
// import { profileEndpoints } from "../api"

// const { GET_PROFILE_DETAILS_API } = profileEndpoints

// export function getProfileDetails(token, setCompanyProfile) {
//     console.log("i am in the try");
//     return async ()=>{
//         const toastId = toast.loading("Loading...")
//         try {
//             console.log("i am in the try2");
//             const response = await apiconnector("GET", GET_PROFILE_DETAILS_API, null, {
//                 Authorization: `Bearer ${token}`,
//             })
//             console.log("GET PROFILE DETAILS API RESPONSE............", response)

//             if (!response.data.success) {
//                 throw new Error(response.data.message)
//             }

//             if (response.data && response.data.company_profile) {
//                 setCompanyProfile(response.data.company_profile) // Set the company profile
//                 console.log("Company profile set:", response.data.company_profile) // Log the set company profile
//             } else {
//                 console.error("No company profile found in the response")
//             }
//         } catch (error) {
//             console.log("GET PROFILE DETAILS API ERROR............", error)
//             toast.error("Could Not Get User Details")
//         }
//         toast.dismiss(toastId)
//     }
// }

import toast from "react-hot-toast"
import { apiconnector } from "../apiconnector"
import { profileEndpoints } from "../api"

const { GET_PROFILE_DETAILS_API } = profileEndpoints

export async function getProfileDetails(token, setCompanyProfile) {
    const toastId = toast.loading("Loading...")
    try {
        console.log("Starting the API call...")
        const response = await apiconnector("GET", GET_PROFILE_DETAILS_API, null, {
            Authorization: `Bearer ${token}`,
        })
        console.log("GET PROFILE DETAILS API RESPONSE............", response)

        if (response.status !== 200) {
            throw new Error(response.data.message)
        }

        if (response.data && response.data.comapny_profile) {
            setCompanyProfile(response.data.comapny_profile)
            console.log("Company profile set:", response.data.comapny_profile)
        } else {
            console.error("No company profile found in the response")
        }
    } catch (error) {
        console.log("GET PROFILE DETAILS API ERROR............", error)
        toast.error("Could Not Get User Details")
    }
    toast.dismiss(toastId)
}
