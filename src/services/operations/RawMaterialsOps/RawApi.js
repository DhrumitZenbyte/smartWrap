// services/operations/RawMaterialOps/RawMaterialApi.js

import toast from "react-hot-toast";
import { rawEndpoints } from "../api";
import { apiconnector } from "../apiconnector";

const { ADD_RAW_MATERIAL_API, GET_RAW_MATERIALS_API, UPDATE_RAW_MATERIAL_API, DELETE_RAW_MATERIAL_API } = rawEndpoints;

export async function addRawMaterial(rawMaterialData, token) {
    const toastId = toast.loading("Adding raw material...");

    try {
        // Convert string values to numbers if necessary and map to snake_case
        const processedData = {
            company_name: rawMaterialData.companyName,
            total_pallet: parseInt(rawMaterialData.totalPallet, 10),
            bag_per_pallet: parseInt(rawMaterialData.bagPerPallet, 10),
            total_bag: parseInt(rawMaterialData.totalBag, 10),
            weight_per_bag: parseFloat(rawMaterialData.weightPerBag),
            total_weight: parseFloat(rawMaterialData.totalWeight),
        };

        // Log the processed data being sent
        console.log("Processed Raw Material Data being sent:", processedData);

        const response = await apiconnector("POST", ADD_RAW_MATERIAL_API, processedData, {
            Authorization: `Bearer ${token}`,
        });

        console.log("ADD RAW MATERIAL API RESPONSE:", response);

        // Check if the response status indicates success
        if (response.status !== 200 && response.status !== "success") {
            throw new Error(response.data.message || "Unknown error occurred"); // Adjust based on your API response structure
        }

        toast.success("Raw material added successfully!");
        return response.data; // Return any data if needed
    } catch (error) {
        console.error("ADD RAW MATERIAL API ERROR:", error);

        // Handle validation errors
        if (error.response && error.response.status === 422) {
            const validationErrors = error.response.data.errors;
            Object.keys(validationErrors).forEach(field => {
                toast.error(`${field}: ${validationErrors[field].join(", ")}`);
            });
        } else {
            toast.error("Failed to add raw material. Please try again.");
        }

        // Optionally rethrow the error if needed in the calling component
        throw error;
    } finally {
        toast.dismiss(toastId);
    }
}



export async function getRawMaterials(token) {
    const toastId = toast.loading("Loading Raw Materials...");

    try {
        const response = await apiconnector("GET", GET_RAW_MATERIALS_API, null, {
            Authorization: `Bearer ${token}`,
        });

        console.log("GET RAW MATERIALS API RESPONSE:", response);

        if (response.status !== 200 && response.status !== "success") {
            throw new Error(response.data.message || "Unknown error occurred");
        }

        return response.data.company_raw_materials; // Adjust based on your API response structure
    } catch (error) {
        console.error("GET RAW MATERIALS API ERROR:", error);
        toast.error("Failed to fetch raw materials. Please try again.");
        throw error;
    } finally {
        toast.dismiss(toastId);
    }
}


export async function updateRawMaterial(rawMaterialData, token) {
    const toastId = toast.loading("Updating raw material...");

    try {
        const { id, company_name, total_pallet, bag_per_pallet, total_bag, weight_per_bag, total_weight } = rawMaterialData;
        console.log(id, "id from update");

        const processedData = {
            company_name,
            total_pallet: parseInt(total_pallet, 10),
            bag_per_pallet: parseInt(bag_per_pallet, 10),
            total_bag: parseInt(total_bag, 10),
            weight_per_bag: parseFloat(weight_per_bag),
            total_weight: parseFloat(total_weight),
        };

        console.log("Processed Raw Material Data being sent:", processedData);

        const response = await apiconnector("PUT", UPDATE_RAW_MATERIAL_API(id), processedData, {
            Authorization: `Bearer ${token}`,
        });

        console.log("UPDATE RAW MATERIAL API RESPONSE:", response);

        if (response.status !== "success" && response.status !== 200) {
            throw new Error(response.data.message || "Unknown error occurred");
        }

        toast.success("Raw material updated successfully!");
        return response.data;
    } catch (error) {
        console.error("UPDATE RAW MATERIAL API ERROR:", error);

        if (error.response && error.response.status === 422) {
            const validationErrors = error.response.data.errors;
            Object.keys(validationErrors).forEach(field => {
                toast.error(`${field}: ${validationErrors[field].join(", ")}`);
            });
        } else {
            toast.error("Failed to update raw material. Please try again.");
        }

        throw error;
    } finally {
        toast.dismiss(toastId);
    }
}


//delete api
export const deleteRawMaterial = async (id, token) => {
    try {
        const response = await apiconnector(
            "delete",
            rawEndpoints.DELETE_RAW_MATERIAL_API(id),
            null,
            { Authorization: `Bearer ${token}` }
        )
        return response.data
    } catch (error) {
        console.error("Error deleting raw material:", error)
        throw error
    }
}
