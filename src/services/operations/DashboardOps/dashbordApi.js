import toast from 'react-hot-toast';
import { apiconnector } from '../apiconnector';
import { dashboardndpoints } from "../api";
const { DASHBOARD_API } = dashboardndpoints;

export async function fetchDashboardData(token, setProducts) {
    const toastId = toast.loading("Fetcthing dashboard...");

    try {
        const response = await apiconnector("GET", DASHBOARD_API, null, {
            Authorization: `Bearer ${token}`,
        });

        if (response.status !== 200 || response.data.status !== "success") {
            throw new Error(response.data.message || "Failed to fetch dashboard");
        }

        if (response.data) {
            return response.data
        } else {
            console.error("No dashboard data found in the response");
        }
    } catch (error) {
        console.error("DASHBOARD DATA ERROR:", error);
        toast.error("Could not fetch dashboard. Please try again.");
    } finally {
        toast.dismiss(toastId);
    }
}