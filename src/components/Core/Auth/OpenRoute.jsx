// This will prevent authenticated users from accessing this route
import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function OpenRoute({ children }) {
  // const { token } = useSelector(state => state.auth)
  const token = localStorage.getItem("token");
  if (token === null) {
    return children
  } else {
    return <Navigate to="/dashboard/my-profile" />
  }
}

export default OpenRoute;
