// finishGoodsApi.js
import toast from 'react-hot-toast';
import { apiconnector } from '../apiconnector';

// const ADD_FINISH_GOODS_API = "http://127.0.0.1:8000/api/finish-goods";
import { finishGoodsEndpoints } from "../api";
const { ADD_FINISH_GOODS_API } = finishGoodsEndpoints;

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

// http://127.0.0.1:8000/api/finish-goods
const BASE_URL = 'http://127.0.0.1:8000/api';

export const fetchFinishGoods = async (token) => {
    try {
        const response = await apiconnector("GET", `${BASE_URL}/finish-goods`, null, {
            Authorization: `Bearer ${token}`,
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch finish goods:', error);
        throw error;
    }
};