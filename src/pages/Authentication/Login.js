import PropTypes from "prop-types";
import React, { useState } from "react";
import { Row, Col, CardBody, Card, Alert, Container, Form, Input, FormFeedback, Label } from "reactstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import withRouter from "components/Common/withRouter";
import profile from "assets/images/profile-img.png";
import logo from "assets/images/logo.svg";
import { loginFailure, loginStart, loginSuccess, setToken } from "slices/userSlice";
import { post } from "../../helpers/api_helper";
import { POST_LOGIN } from "../../helpers/url_helper";
import { LoginToken, loginUser } from "store/actions";
import { toast } from "react-hot-toast"

import { authEndpoints } from "../../services/operations/api";
const { LOGIN_URL } = authEndpoints;

const Login = (props) => {
  document.title = "Login | Skote - React Admin & Dashboard Template";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("smartwrap.admin@gmail.com");
  const [password, setPassword] = useState("smartwrap@admin2610");

  const [error, setError] = useState(null);
  const [touched, setTouched] = useState({
    email: false,
    password: false
  });

  const handleBlur = (field) => (e) => {
    setTouched({
      ...touched,
      [field]: true
    });
  };

  const validate = () => {
    const errors = {
      email: '',
      password: ''
    };

    if (!email) {
      errors.email = 'Please Enter Your Email';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }

    if (!password) {
      errors.password = 'Please Enter Your Password';
    }

    return errors;
  };

  const errors = validate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      email: true,
      password: true
    });

    if (errors.email || errors.password) {
      setError("Please fill all required fields correctly.");
      return;
    }

    dispatch(loginStart());
    try {
      const toastId = toast.loading("Loading...")
      const response = await post(LOGIN_URL, { email, password });
      console.log(response);
      if (response.status === "success") {
        const user = response.data.user.name;
        const token = response.data.token;
        const email = response.data.user.email;

        console.log("Dispatching LoginToken with:", { token, email, user });

        dispatch(LoginToken({ token, email, name: user }));
        console.log("Token is set in Redux state:", token);

        console.log("Token is set in Redux state:", token);
        localStorage.setItem("token", token);
        navigate("/dashboard/company-profile");
        toast.success("LoggedIn successfully");
        toast.dismiss(toastId);
      } else {
        dispatch(loginFailure(response.message));
        setError(response.message);
      }
    } catch (err) {
      dispatch(loginFailure(err.message));
      setError(err.message);
    }
  };


  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="bx bx-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col xs={7}>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to Skote.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/" className="logo-light-element">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img src={logo} alt="" className="rounded-circle" height="34" />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <Form className="form-horizontal" onSubmit={handleSubmit}>
                      {error ? <Alert color="danger">{error}</Alert> : null}

                      <div className="mb-3">
                        <Label className="form-label">Email</Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          onBlur={handleBlur('email')}
                          value={email}
                          invalid={touched.email && !!errors.email}
                        />
                        {touched.email && errors.email && (
                          <FormFeedback type="invalid">{errors.email}</FormFeedback>
                        )}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Password</Label>
                        <Input
                          name="password"
                          type="password"
                          placeholder="Enter Password"
                          onChange={(e) => setPassword(e.target.value)}
                          onBlur={handleBlur('password')}
                          value={password}
                          invalid={touched.password && !!errors.password}
                        />
                        {touched.password && errors.password && (
                          <FormFeedback type="invalid">{errors.password}</FormFeedback>
                        )}
                      </div>

                      <div className="mt-3 d-grid">
                        <button className="btn btn-primary btn-block" type="submit">
                          Log In
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted">
                          <i className="mdi mdi-lock me-1" />
                          Forgot your password?
                        </Link>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Don't have an account?{" "}
                  <Link to="/register" className="fw-medium text-primary">
                    Signup now
                  </Link>
                </p>
                <p>
                  © {new Date().getFullYear()} Skote. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by ZenByte Technology
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

Login.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Login);
