/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from 'react';
import classnames from "classnames";
import { API } from '../api-service';
import { useCookies } from 'react-cookie';
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

export default function Signup() {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ isLoginView, setIsLoginView ] = useState(true);

  const [access_token, setToken] = useCookies(['access_token']);

  const navigate = useNavigate();

  useEffect( () => {
    console.log(access_token);
    //if(access_token['access_token']) window.location.href = '/display';
    if(access_token['access_token']) setTimeout(() => {navigate('/display', { replace:true });}, 3000);
    document.body.classList.toggle("register-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
       document.body.classList.toggle("register-page");
    };
}, [access_token])

  const loginClicked = () => {
      API.loginUser({username, password}) 
          .then( resp => setToken('access_token', resp.access_token))
          .catch( error => console.log(error))
  }

  const registerClicked = () => {
      API.registerUser({username, password}) 
          .then( () => loginClicked())
          .catch( error => console.log(error))
  }

  const isDisabled = username.length === 0 || password.length === 0;
  
  // const [fullNameFocus, setFullNameFocus] = React.useState(false);
  // const [emailFocus, setEmailFocus] = React.useState(false);
  // const [passwordFocus, setPasswordFocus] = React.useState(false);
  return (
    <div className="section section-signup">
      <Container>
        <div className="squares square-1" />
        <div className="squares square-2" />
        <div className="squares square-3" />
        <div className="squares square-4" />
        <Row className="row-grid justify-content-between align-items-center">
          <Col lg="6">
            <h3 className="display-3 text-white">
              Sign Up{" "}
              <span className="text-white">to join</span>
            </h3>
            <p className="text-white mb-3">
              PDD 2023 will be an exciting event with a focus on learning and networking.
            </p>
            {/* <div className="btn-wrapper">
              <Button color="primary" to="auth" tag={Link}>
                Register Page
              </Button>
            </div> */}
          </Col>
          <Col className="mb-lg-auto" lg="6">
            <Card className="card-register">
              <CardHeader>
                <CardImg
                  alt="..."
                  src={require("../assets/img/square-purple-1.png")}
                />
                <CardTitle tag="h4">Register</CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form">
                  <InputGroup
                    className={classnames({
                      "input-group-focus": username
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="username"
                      id="username"
                      type="text"
                      value={username}
                      onChange={ (e) => setUsername(e.target.value)}
                      // onFocus={(e) => setFullNameFocus(true)}
                      // onBlur={(e) => setFullNameFocus(false)}
                    />
                  </InputGroup>
                  {/* <InputGroup
                    className={classnames({
                      "input-group-focus": emailFocus
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="text"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}
                    />
                  </InputGroup> */}
                  <InputGroup
                    className={classnames({
                      "input-group-focus": password
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-lock-circle" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="password"
                      placeholder="password"
                      type="password"
                      value={password}
                      onChange={ (e) => setPassword(e.target.value)}
                      // onFocus={(e) => setPasswordFocus(true)}
                      // onBlur={(e) => setPasswordFocus(false)}
                    />
                  </InputGroup>
                  <FormGroup check className="text-left">
                    <Label check>
                      <Input type="checkbox" />
                      <span className="form-check-sign" />I agree to the{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        terms and conditions
                      </a>
                      .
                    </Label>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>

                {isLoginView ? 
                  <Button className="btn-round" color="primary" size="lg" onClick={registerClicked} disabled={isDisabled}>Register</Button>
                  :
                  <Button className="btn-round" color="primary" size="lg" onClick={loginClicked} disabled={isDisabled}>Login</Button>
                } 
                {/* <Button className="btn-round" color="primary" size="lg">
                  Get Started
                </Button> */}
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
