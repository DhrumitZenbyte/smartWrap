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
import ProductsListPage from "pages/Dashboard/core/masters/UpdatedProduct/ProductsListPage"
import { element } from "prop-types"
import RawMaterials from "pages/Dashboard/core/Stocks/RawMaterials/RawMaterials"
import FinishGoods from "pages/Dashboard/core/Stocks/FinishGoods/FinishGoods"
import PurchaseOrder from "pages/Dashboard/core/Purchase/PurchaseOrder"
import Production from "pages/Dashboard/core/Production/Production"
import POReportComponent from "pages/Dashboard/core/Documentation/POReport"
import PoReportForm from "pages/Dashboard/core/Documentation/PoReportForm"
import PiReport from "pages/Dashboard/core/Documentation/PI/PiReport"
import PiExportForm from "pages/Dashboard/core/Documentation/PI/PiForms/PiExport/PiExportForm"
import PiDomesticForm from "pages/Dashboard/core/Documentation/PI/PiForms/PiDomestic/PiDomesticForm"

const authProtectedRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "company-profile", element: <CompanyProfile /> },
      { path: "profile-settings", element: <ProfileSettings /> },
      { path: "products", element: <ProductsListPage /> },
      { path: "raw-materials", element: <RawMaterials /> },
      { path: "finish-goods", element: <FinishGoods /> },
      { path: "purchase-order", element: <PurchaseOrder /> },
      { path: "production", element: <Production /> },
      { path: "po-report", element: <POReportComponent/>},
      { path: "po-report/generate", element: <PoReportForm/>},
      { path: "pi-report", element: <PiReport/>},
      { path: "pi-export-report/generate", element: <PiExportForm/>},
      { path: "pi-domestic-report/generate", element: <PiDomesticForm/>},
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
