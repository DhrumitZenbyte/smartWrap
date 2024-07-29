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

const { GET_PROFILE_DETAILS_API, ADD_BANK_DETAILS, GET_BANK_DETAILS } = profileEndpoints

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

// bank ops

export async function getBankDetails(token) {
    const toastId = toast.loading("Loading...");
    try {
        console.log("Starting the API call for getting bank details...");
        const response = await apiconnector("GET", GET_BANK_DETAILS, null, {
            Authorization: `Bearer ${token}`,
        });
        console.log("GET BANK DETAILS API RESPONSE............", response);

        if (response.status !== 200) {
            throw new Error(response.data.message);
        }

        if (response?.data && response?.data?.banks) {
            console.log("Bank details set:", response.data.banks);
            toast.dismiss(toastId);
            return response;
        } else {
            console.error("No bank details found in the response");
        }
    } catch (error) {
        console.log("GET BANK DETAILS API ERROR............", error);
        toast.error("Could Not Get Bank Details");
    }
    toast.dismiss(toastId);
}


export async function addBankDetails(token, bankDetails) {
    const toastId = toast.loading("Submitting...");
    try {
        console.log("Starting the API call for adding bank details...");
        const response = await apiconnector("POST", ADD_BANK_DETAILS, bankDetails, {
            Authorization: `Bearer ${token}`,
        });
        console.log("ADD BANK DETAILS API RESPONSE............", response);

        if (response.status !== 200) {
            throw new Error(response.data.message);
        }

        if (response.data && response.data.bank_details) {
            console.log("Bank details added:", response.data.bank_details);
            toast.success("Bank Details Added Successfully");
        } else {
            console.error("Failed to add bank details");
        }
    } catch (error) {
        console.log("ADD BANK DETAILS API ERROR............", error);
        toast.error("Could Not Add Bank Details");
    }
    toast.dismiss(toastId);
}
