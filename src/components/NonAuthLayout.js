// import React from 'react';
// import PropTypes from 'prop-types';
// import withRouter from './Common/withRouter';

// const NonAuthLayout = (props) => {
//   return (
//     <React.Fragment>{props.children}</React.Fragment>
//   );
// };

// NonAuthLayout.propTypes = {
//   children: PropTypes.any,
//   location: PropTypes.object
// };

// export default withRouter(NonAuthLayout);


import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const NonAuthLayout = ({ children }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token from localStorage:', token);
    // Redirect to /dashboard if token exists (user is authenticated)
    if (token) {
      window.location.href = '/dashboard'; // Redirect imperatively
    }
  }, []); // Run this effect only once on component mount

  return <React.Fragment>{children}</React.Fragment>;
};

NonAuthLayout.propTypes = {
  children: PropTypes.any,
};

export default NonAuthLayout;


// import React from 'react';
// import PropTypes from 'prop-types';
// import { Navigate } from 'react-router-dom';

// const NonAuthLayout = ({ children }) => {
//   const token = localStorage.getItem('token');
//   console.log('Token from localStorage:', token);

//   // Conditionally render the Navigate component if the token exists
//   if (token) {
//     return <Navigate to="/dashboard" />;
//   }

//   // Render children if no token is found
//   return <React.Fragment>{children}</React.Fragment>;
// };

// NonAuthLayout.propTypes = {
//   children: PropTypes.any,
// };

// export default NonAuthLayout;
