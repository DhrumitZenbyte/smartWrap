// import PropTypes from "prop-types";
// import React from "react";
// import { useSelector } from "react-redux";
// import { Routes, Route } from "react-router-dom";
// import { layoutTypes } from "./constants/layout";
// import { authProtectedRoutes, publicRoutes } from "./routes";
// import Authmiddleware from "./routes/route";
// import VerticalLayout from "./components/VerticalLayout/";
// import HorizontalLayout from "./components/HorizontalLayout/";
// import NonAuthLayout from "./components/NonAuthLayout";
// import "./assets/s/theme.scss";
// import fakeBackend from "./helpers/AuthType/fakeBackend";
// import "./App.css";



// const getLayout = (layoutType) => {
//   switch (layoutType) {
//     case layoutTypes.HORIZONTAL:
//       return HorizontalLayout;
//     case layoutTypes.VERTICAL:
//     default:
//       return VerticalLayout;
//   }
// };

// const App = () => {
//   const { layoutType } = useSelector((state) => ({
//     layoutType: state.Layout.layoutType,
//   }));

//   const Layout = getLayout(layoutType);

//   return (
//     <React.Fragment>
//       <Routes>
//         {publicRoutes.map((route, idx) => (
//           <Route
//             path={route.path}
//             element={
//               <NonAuthLayout>
//                 {route.element}
//               </NonAuthLayout>}
//             key={idx}
//             exact
//           />
//         ))}

//         {authProtectedRoutes.map((route, idx) => (
//           <Route
//             path={route.path}
//             element={
//               <Authmiddleware>
//                 <Layout>
//                   {route.element}
//                 </Layout>
//               </Authmiddleware>
//             }
//             key={idx}
//           >
//             {route.children &&
//               route.children.map((childRoute, childIdx) => (
//                 <Route
//                   path={childRoute.path}
//                   element={
//                     <Authmiddleware>
//                       {/* <Layout> */}
//                         {childRoute.element}
//                       {/* </Layout> */}
//                     </Authmiddleware>
//                   }
//                   key={childIdx}
//                   exact
//                 />
//               ))}
//           </Route>
//         ))}
//       </Routes>
//     </React.Fragment>
//   );
// };

// App.propTypes = {
//   layout: PropTypes.any,
// };

// export default App;


import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { layoutTypes } from "./constants/layout";
import { authProtectedRoutes, publicRoutes } from "./routes";
import Authmiddleware from "./routes/route";
import VerticalLayout from "./components/VerticalLayout/";
import HorizontalLayout from "./components/HorizontalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";
import "./assets/scss/theme.scss";
import fakeBackend from "./helpers/AuthType/fakeBackend";
import "./App.css";

// Activate fake backend if needed
// fakeBackend();

const getLayout = (layoutType) => {
  switch (layoutType) {
    case layoutTypes.HORIZONTAL:
      return HorizontalLayout;
    case layoutTypes.VERTICAL:
    default:
      return VerticalLayout;
  }
};

const App = () => {
  const { layoutType } = useSelector((state) => ({
    layoutType: state.Layout.layoutType,
  }));

  const Layout = getLayout(layoutType);

  // Function to check if the user is authenticated
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token; // Convert to boolean
  };

  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <NonAuthLayout>
                {route.element}
              </NonAuthLayout>
            }
            key={idx}
            exact
          />
        ))}

        {authProtectedRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={
              isAuthenticated() ? (
                <Authmiddleware>
                  <Layout>
                    {route.element}
                  </Layout>
                </Authmiddleware>
              ) : (
                <Navigate to="/login" />
              )
            }
          >
            {route.children &&
              route.children.map((childRoute, childIdx) => (
                <Route
                  key={childIdx}
                  path={childRoute.path}
                  element={
                    isAuthenticated() ? (
                      <Authmiddleware>
                        {childRoute.element}
                      </Authmiddleware>
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                  exact
                />
              ))}
          </Route>
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default App;
