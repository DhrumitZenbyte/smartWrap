import toast from "react-hot-toast";
import { apiconnector } from "../apiconnector";
import { productEndpoints } from "../api";

const { ADD_PRODUCT_API } = productEndpoints;
const { GET_PRODUCTS_API, DELETE_PRODUCT_API } = productEndpoints;
export async function addProduct(product, token) {
    const toastId = toast.loading("Adding product...");

    try {
        const response = await apiconnector("POST", ADD_PRODUCT_API, product, {
            Authorization: `Bearer ${token}`,
        });

        console.log("ADD PRODUCT API RESPONSE:", response);

        if (response.status !== 200) {
            throw new Error(response.data.message); // Adjust based on your API response structure
        }

        toast.success("Product added successfully!");
        return response.data; // Return any data if needed
    } catch (error) {
        console.error("ADD PRODUCT API ERROR:", error);
        toast.error("Failed to add product. Please try again.");

        // Optionally rethrow the error if needed in the calling component
        throw error;
    } finally {
        toast.dismiss(toastId);
    }
}




export async function getProducts(token, setProducts) {
    const toastId = toast.loading("Loading products...");

    try {
        const response = await apiconnector("GET", GET_PRODUCTS_API, null, {
            Authorization: `Bearer ${token}`,
        });

        console.log("GET PRODUCTS API RESPONSE:", response);

        if (response.status !== 200 || response.data.status !== "success") {
            throw new Error(response.data.message || "Failed to fetch products");
        }

        if (response.data && response.data.products) {
            setProducts(response.data.products);
            console.log("Products set:", response.data.products);
        } else {
            console.error("No products found in the response");
        }
    } catch (error) {
        console.error("GET PRODUCTS API ERROR:", error);
        toast.error("Could not fetch products. Please try again.");
    } finally {
        toast.dismiss(toastId);
    }
}


export const deleteProduct = async (id, token) => {
    try {
        const response = await apiconnector("DELETE", DELETE_PRODUCT_API(id), null, {
            Authorization: `Bearer ${token}`,
        });
        if (response.status !== 200 || response.data.status !== "success") {
            throw new Error(response.data.message || "Failed to delete product");
        }
        return response.data;
    } catch (error) {
        console.error("There was an error deleting the product!", error);
        throw error;
    }
};