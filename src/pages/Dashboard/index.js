import React from "react";
import {
  Container
} from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";
import CompanyProfile from "./core/masters/CompanyProfile";
import { Outlet } from "react-router-dom";
const Dashboard = props => {

  //meta title
  document.title = "Dashboard | Smart Wrap Panel";

  return (
    <React.Fragment>
      
      {/* <div className="main-content"> */}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              {/* <Breadcrumbs
                title={props.t("Dashboards")}
                breadcrumbItem={props.t("Dashboard")}
              /> */}
              <Outlet />
            </div>
          </div>
         </div>
      {/* </div> */}
    </React.Fragment>
  );
};


export default withTranslation()(Dashboard);
