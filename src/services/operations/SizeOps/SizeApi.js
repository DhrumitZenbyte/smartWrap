import toast from "react-hot-toast";
import { apiconnector } from "../apiconnector";
import { sizeEndpoints } from "../api";

const { ADD_SIZE_API, GET_SIZES_API, DELETE_SIZES_API, EDIT_SIZES_API } = sizeEndpoints;

export async function addSize(sizeData, token) {
    const toastId = toast.loading("Adding size...");

    try {
        const response = await apiconnector("POST", ADD_SIZE_API, sizeData, {
            Authorization: `Bearer ${token}`,
        });

        console.log("ADD SIZE API RESPONSE:", response);

        if (response.status !== 200) {
            throw new Error(response.data.message); // Adjust based on your API response structure
        }

        toast.success("Size added successfully!");
        return response.data; // Return any data if needed
    } catch (error) {
        console.error("ADD SIZE API ERROR:", error);
        toast.error("Failed to add size. Please try again.");

        // Optionally rethrow the error if needed in the calling component
        throw error;
    } finally {
        toast.dismiss(toastId);
    }
}

export async function getSizes(token) {
    const toastId = toast.loading("Loading Products...");

    try {
        const response = await apiconnector("GET", GET_SIZES_API, null, {
            Authorization: `Bearer ${token}`,
        });

        console.log("GET SIZES API RESPONSE:", response);

        // if (response.status !== "200") {
        //     throw new Error(response.data.message); // Adjust based on your API response structure
        // }

        return response.data.sizes; // Return sizes data
    } catch (error) {
        console.error("GET SIZES API ERROR:", error);
        toast.error("Failed to fetch sizes. Please try again.");

        // Optionally rethrow the error if needed in the calling component
        throw error;
    } finally {
        toast.dismiss(toastId);
    }
}

export async function deleteSize(sizeId, token) {
    const toastId = toast.loading("Deleting size...");
    console.log(DELETE_SIZES_API, "DELETE_SIZES_API");
    try {
        const response = await apiconnector("DELETE", DELETE_SIZES_API(sizeId), null, {
            Authorization: `Bearer ${token}`,
        });

        console.log("DELETE SIZE API RESPONSE:", response);

        // if (response.status !== "success") {
        //     throw new Error(response.data.message); // Adjust based on your API response structure
        // }

        toast.success("Size deleted successfully!");
        return response.data; // Return any data if needed
    } catch (error) {
        console.error("DELETE SIZE API ERROR:", error);
        toast.error("Failed to delete size. Please try again.");

        // Optionally rethrow the error if needed in the calling component
        throw error;
    } finally {
        toast.dismiss(toastId);
    }
}



export async function updateSize(sizeId, sizeData, token) {
    const toastId = toast.loading("Updating size...");

    try {
        const response = await apiconnector("PUT", EDIT_SIZES_API(sizeId), sizeData, {
            Authorization: `Bearer ${token}`,
        });

        console.log("UPDATE SIZE API RESPONSE:", response);

        if (response.status !== 200) {
            throw new Error(response.data.message); // Adjust based on your API response structure
        }

        toast.success("Size updated successfully!");
        return response.data; // Return any data if needed
    } catch (error) {
        console.error("UPDATE SIZE API ERROR:", error);
        toast.error("Failed to update size. Please try again.");

        // Optionally rethrow the error if needed in the calling component
        throw error;
    } finally {
        toast.dismiss(toastId);
    }
}
