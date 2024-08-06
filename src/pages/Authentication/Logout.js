import React, { useEffect } from "react";
import PropTypes from "prop-types";
import withRouter from "components/Common/withRouter";
import { logoutUser } from "../../store/actions";
import { toast } from "react-hot-toast"

//redux
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "slices/userSlice";

const Logout = () => {
  // const toastId = toast.loading("Loading...");
  console.log(":i am calling");
  const history = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

useEffect(() => {
    const logout = async () => {
      try {
        const toastId = toast.loading("Logging out...");
        const response = await axios.post(
          "https://api.smartwrapfilms.com/api/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          dispatch(logoutUserSuccess());
          localStorage.removeItem("token");
          toast.success("Logged out successfully");
          history("/login"); // redirect to login page after logout
        } else {
          toast.error("Logout failed. Please try again.");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
        console.error("Logout error:", error);
      } finally {
        toast.dismiss();
      }
    };

    logout();
  }, [dispatch, token, history]);

  useEffect(() => {
    dispatch(logoutUser(history));
  }, [dispatch, history]);

  // toast.dismiss(toastId);
  return <></>;
  };

Logout.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Logout);