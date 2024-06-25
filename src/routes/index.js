import React from "react"
import { Navigate } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import CompanyProfile from "pages/Dashboard/core/masters/CompanyProfile"
import ProfileSettings from "pages/Dashboard/core/masters/ProfileSettings"
import Products from "pages/Dashboard/core/masters/products/Products"
import Sizes from "pages/Dashboard/core/masters/sizes/Sizes"
import { element } from "prop-types"
import RawMaterials from "pages/Dashboard/core/Stocks/RawMaterials/RawMaterials"
import FinishGoods from "pages/Dashboard/core/Stocks/FinishGoods/FinishGoods"

const authProtectedRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "company-profile", element: <CompanyProfile /> },
      { path: "profile-settings", element: <ProfileSettings /> },
      { path: "products", element: <Products /> },
      { path: "sizes", element: <Sizes /> },
      { path: "raw-materials", element: <RawMaterials /> },
      { path: "finish-goods", element: <FinishGoods />}
    ],
  },
  { path: "/profile", element: <UserProfile /> },
  { path: "/", exact: true, element: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  { path: "/logout", element: <Logout /> },
  { path: "/login", element: <Login /> },
  { path: "/forgot-password", element: <ForgetPwd /> },
  { path: "/register", element: <Register /> },
];

export { authProtectedRoutes, publicRoutes };
