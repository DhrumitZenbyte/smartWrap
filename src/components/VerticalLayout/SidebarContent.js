// import React, { useEffect, useRef, useCallback } from "react";
// import { useLocation } from "react-router-dom";
// import PropTypes from "prop-types";

// // //Import Scrollbar
// import SimpleBar from "simplebar-react";

// // MetisMenu
// import MetisMenu from "metismenujs";
// import withRouter from "components/Common/withRouter";
// import { Link } from "react-router-dom";

// //i18n
// import { withTranslation } from "react-i18next";

// const SidebarContent = props => {
//   const ref = useRef();
//   const activateParentDropdown = useCallback((item) => {
//     item.classList.add("active");
//     const parent = item.parentElement;
//     const parent2El = parent.childNodes[1];

//     if (parent2El && parent2El.id !== "side-menu") {
//       parent2El.classList.add("mm-show");
//     }

//     if (parent) {
//       parent.classList.add("mm-active");
//       const parent2 = parent.parentElement;

//       if (parent2) {
//         parent2.classList.add("mm-show"); // ul tag

//         const parent3 = parent2.parentElement; // li tag

//         if (parent3) {
//           parent3.classList.add("mm-active"); // li
//           parent3.childNodes[0].classList.add("mm-active"); //a
//           const parent4 = parent3.parentElement; // ul
//           if (parent4) {
//             parent4.classList.add("mm-show"); // ul
//             const parent5 = parent4.parentElement;
//             if (parent5) {
//               parent5.classList.add("mm-show"); // li
//               parent5.childNodes[0].classList.add("mm-active"); // a tag
//             }
//           }
//         }
//       }
//       scrollElement(item);
//       return false;
//     }
//     scrollElement(item);
//     return false;
//   }, []);

//   const removeActivation = (items) => {
//     for (var i = 0; i < items.length; ++i) {
//       var item = items[i];
//       const parent = items[i].parentElement;

//       if (item && item.classList.contains("active")) {
//         item.classList.remove("active");
//       }
//       if (parent) {
//         const parent2El =
//           parent.childNodes && parent.childNodes.lenght && parent.childNodes[1]
//             ? parent.childNodes[1]
//             : null;
//         if (parent2El && parent2El.id !== "side-menu") {
//           parent2El.classList.remove("mm-show");
//         }

//         parent.classList.remove("mm-active");
//         const parent2 = parent.parentElement;

//         if (parent2) {
//           parent2.classList.remove("mm-show");

//           const parent3 = parent2.parentElement;
//           if (parent3) {
//             parent3.classList.remove("mm-active"); // li
//             parent3.childNodes[0].classList.remove("mm-active");

//             const parent4 = parent3.parentElement; // ul
//             if (parent4) {
//               parent4.classList.remove("mm-show"); // ul
//               const parent5 = parent4.parentElement;
//               if (parent5) {
//                 parent5.classList.remove("mm-show"); // li
//                 parent5.childNodes[0].classList.remove("mm-active"); // a tag
//               }
//             }
//           }
//         }
//       }
//     }
//   };

//   const path = useLocation();
//   const activeMenu = useCallback(() => {
//     const pathName = path.pathname;
//     let matchingMenuItem = null;
//     const ul = document.getElementById("side-menu");
//     const items = ul.getElementsByTagName("a");
//     console.log(items, "itemsss");
//     removeActivation(items);

//     for (let i = 0; i < items.length; ++i) {
//       if (pathName === items[i].pathname) {
//         matchingMenuItem = items[i];
//         break;
//       }
//     }
//     if (matchingMenuItem) {
//       activateParentDropdown(matchingMenuItem);
//     }
//   }, [path.pathname, activateParentDropdown]);

//   useEffect(() => {
//     ref.current.recalculate();
//   }, []);

//   useEffect(() => {
//     new MetisMenu("#side-menu");
//     activeMenu();
//   }, []);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     activeMenu();
//   }, [activeMenu]);

//   function scrollElement(item) {
//     if (item) {
//       const currentPosition = item.offsetTop;
//       if (currentPosition > window.innerHeight) {
//         ref.current.getScrollElement().scrollTop = currentPosition - 300;
//       }
//     }
//   }

//   return (
//     <React.Fragment>
//     <SimpleBar className="h-100" ref={ref}>
//       <div id="sidebar-menu">
//         <ul className="metismenu list-unstyled" id="side-menu">
//           <li>
//             <Link to="/#">
//               <i className="bx bx-home-circle"></i>
//               <span>{props.t("Dashboards")}</span>
//             </Link>
//           </li>

//           <li>
//             <Link to="/#" className="has-arrow">
//               <i className="bx bx-store"></i>
//               <span>{props.t("Stocks")}</span>
//             </Link>
//             <ul className="sub-menu">
//               <li>
//                 <Link to="#">{props.t("Raw Materials")}</Link>
//               </li>
//               <li>
//                 <Link to="#">
//                   {props.t("Finish Goods")}
//                 </Link>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <Link to="/#" className="has-arrow ">
//               <i className="bx bx-receipt"></i>
//               <span>{props.t("Documentation")}</span>
//             </Link>
//             <ul className="sub-menu">
//               <li>
//                 <Link to="#">{props.t("PI Report")}</Link>
//               </li>
//               <li>
//                 <Link to="#">{props.t("PO Report")}</Link>
//               </li>
//             </ul>
//           </li>
//           <li>
//               <Link to="/dashboard/company-profile" className="has-arrow ">
//               <i className="bx bx-slider-alt"></i>
//               <span>{props.t("Masters")}</span>
//             </Link>
//             <ul className="sub-menu">
//               <li>
//                   <Link to="/dashboard/company-profile">{props.t("Company Profile")}</Link>
//               </li>
//               <li>
//                 <Link to="#">{props.t("Products")} </Link>
//               </li>
//               <li>
//                 <Link to="#">{props.t("Sizes")} </Link>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </SimpleBar>
//   </React.Fragment>
//   );
// };

// SidebarContent.propTypes = {
//   location: PropTypes.object,
//   t: PropTypes.any,
// };

// export default withRouter(withTranslation()(SidebarContent));


import React, { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import withRouter from "components/Common/withRouter";
import { Link } from "react-router-dom";

// i18n
import { withTranslation } from "react-i18next";

const SidebarContent = (props) => {
  const ref = useRef();
  const location = useLocation();

  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active");
    let parent = item.parentElement;

    while (parent && parent.id !== "side-menu") {
      if (parent.tagName === "UL") {
        parent.classList.add("mm-show");
      }
      if (parent.tagName === "LI") {
        parent.classList.add("mm-active");
      }
      parent = parent.parentElement;
    }

    scrollElement(item);
  }, []);

  const removeActivation = (items) => {
    for (let i = 0; i < items.length; ++i) {
      const item = items[i];
      item.classList.remove("active");
      let parent = item.parentElement;

      while (parent && parent.id !== "side-menu") {
        if (parent.tagName === "UL") {
          parent.classList.remove("mm-show");
        }
        if (parent.tagName === "LI") {
          parent.classList.remove("mm-active");
        }
        parent = parent.parentElement;
      }
    }
  };

  const activeMenu = useCallback(() => {
    const pathName = location.pathname;
    const ul = document.getElementById("side-menu");
    const items = ul.getElementsByTagName("a");
    removeActivation(items);

    for (let i = 0; i < items.length; ++i) {
      if (items[i].pathname === pathName) {
        activateParentDropdown(items[i]);
        break;
      }
    }
  }, [location.pathname, activateParentDropdown]);

  useEffect(() => {
    ref.current.recalculate();
  }, []);

  useEffect(() => {
    new MetisMenu("#side-menu");
    activeMenu();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    activeMenu();
  }, [activeMenu]);

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li>
              <Link to="/#">
                <i className="bx bx-home-circle"></i>
                <span>{props.t("Dashboards")}</span>
              </Link>
            </li>
            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-store"></i>
                <span>{props.t("Stocks")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/dashboard/raw-materials">{props.t("Raw Materials")}</Link>
                </li>
                <li>
                  <Link to="/dashboard/finish-goods">{props.t("Finish Goods")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-receipt"></i>
                <span>{props.t("Documentation")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/dashboard/pi-report">{props.t("PI Report")}</Link>
                </li>
                <li>
                  <Link to="/dashboard/po-report">{props.t("PO Report")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-slider-alt"></i>
                <span>{props.t("Masters")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/dashboard/company-profile">{props.t("Company Profile")}</Link>
                </li>
                <li>
                  <Link to="/dashboard/products">{props.t("Products")}</Link>
                </li>
                <li>
                  <Link to="/dashboard/sizes">{props.t("Sizes")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/dashboard/purchase-order">
                {/* <i className="bx bx-home-circle"></i> */}
                <span>{props.t("Purchase Order")}</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/production">
                {/* <i className="bx bx-home-circle"></i> */}
                <span>{props.t("production")}</span>
              </Link>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));
