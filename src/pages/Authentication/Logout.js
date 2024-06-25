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