// finishGoodsApi.js
import toast from 'react-hot-toast';
import { apiconnector } from '../apiconnector';
import { finishGoodsEndpoints } from "../api";
const { ADD_FINISH_GOODS_API, GET_FINISH_GOODS_API,PUT_FINISH_GOODS_API,DELETE_FINISH_GOODS_API } = finishGoodsEndpoints;

export async function addFinishGoods(finishGoodsData, token) {
    const toastId = toast.loading("Adding finish goods...");
    console.log(ADD_FINISH_GOODS_API, "")
    try {       
        const response = await apiconnector("POST", ADD_FINISH_GOODS_API, finishGoodsData, {
            Authorization: `Bearer ${token}`,
        });

        console.log("ADD FINISH GOODS API RESPONSE:", response);

        if (response.status !== 200 && response.status !== "success") {
            throw new Error(response.data.message || "Unknown error occurred");
        }

        toast.success("Finish goods added successfully!");
        return response.data;
    } catch (error) {
        console.error("ADD FINISH GOODS API ERROR:", error);

        if (error.response && error.response.status === 422) {
            const validationErrors = error.response.data.errors;
            Object.keys(validationErrors).forEach(field => {
                toast.error(`${field}: ${validationErrors[field].join(", ")}`);
            });
        } else {
            toast.error("Failed to add finish goods. Please try again.");
        }

        throw error;
    } finally {
        toast.dismiss(toastId);
    }
}


export const fetchFinishGoods = async (token) => {
    try {
        const response = await apiconnector("GET", GET_FINISH_GOODS_API, null, {
            Authorization: `Bearer ${token}`,
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch finish goods:', error);
        throw error;
    }
};



// Update Finish Goods API function
export async function updateFinishGoods(id, updatedData, token) {
    const toastId = toast.loading("Updating finish goods...");
    try {
        const response = await apiconnector("PUT", PUT_FINISH_GOODS_API(id), updatedData, {
            Authorization: `Bearer ${token}`,
        });

        console.log("UPDATE FINISH GOODS API RESPONSE:", response);

        if (response.status !== 200 && response.status !== "success") {
            throw new Error(response.data.message || "Unknown error occurred");
        }

        toast.success("Finish goods updated successfully!");
        return response.data;
    } catch (error) {
        console.error("UPDATE FINISH GOODS API ERROR:", error);

        if (error.response && error.response.status === 422) {
            const validationErrors = error.response.data.errors;
            Object.keys(validationErrors).forEach(field => {
                toast.error(`${field}: ${validationErrors[field].join(", ")}`);
            });
        } else {
            toast.error("Failed to update finish goods. Please try again.");
        }

        throw error;
    } finally {
        toast.dismiss(toastId);
    }
}

// Delete Finish Goods API function
export async function deleteFinishGoods(id, token) {
    const toastId = toast.loading("Deleting finish goods...");
    try {
        const response = await apiconnector("DELETE", DELETE_FINISH_GOODS_API(id), null, {
            Authorization: `Bearer ${token}`,
        });

        console.log("DELETE FINISH GOODS API RESPONSE:", response);

        if (response.status !== 200 && response.status !== "success") {
            throw new Error(response.data.message || "Unknown error occurred");
        }

        toast.success("Finish goods deleted successfully!");
        return response.data;
    } catch (error) {
        console.error("DELETE FINISH GOODS API ERROR:", error);

        toast.error("Failed to delete finish goods. Please try again.");
        throw error;
    } finally {
        toast.dismiss(toastId);
    }
}