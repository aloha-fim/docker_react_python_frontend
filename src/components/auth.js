import React, { useState, useEffect } from 'react';
import classnames from "classnames";
import { API } from '../api-service';
import { useCookies } from 'react-cookie';

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


function Auth(){
    //set const for followCursor
    const [squares1to6, setSquares1to6] = React.useState("");
    const [squares7and8, setSquares7and8] = React.useState("");

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isLoginView, setIsLoginView ] = useState(true);

    const [token, setToken] = useCookies(['mr-token']);

    useEffect( () => {
        console.log(token);
        if(token['mr-token']) window.location.href = '/moviemaker';
        document.body.classList.toggle("register-page");
        document.documentElement.addEventListener("mousemove", followCursor);
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("register-page");
            document.documentElement.removeEventListener("mousemove", followCursor);
        };
    }, [token])

    //create followCursor
    const followCursor = (event) => {
        let posX = event.clientX - window.innerWidth / 2;
        let posY = event.clientY - window.innerWidth / 6;
        setSquares1to6(
          "perspective(500px) rotateY(" +
            posX * 0.05 +
            "deg) rotateX(" +
            posY * -0.05 +
            "deg)"
        );
        setSquares7and8(
          "perspective(500px) rotateY(" +
            posX * 0.02 +
            "deg) rotateX(" +
            posY * -0.02 +
            "deg)"
        );
      };

    const loginClicked = () => {
        API.loginUser({username, password}) 
            .then( resp => setToken('mr-token', resp.token))
            .catch( error => console.log(error))
    }

    const registerClicked = () => {
        API.registerUser({username, password}) 
            .then( () => loginClicked())
            .catch( error => console.log(error))

    }
    const isDisabled = username.length === 0 || password.length === 0;

    return (
        <div className="wrapper">
            <div className="page-header">
                <div className="page-header-image" />
                <div className="content"></div>
                    <Container>
                        <Row>
                            <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                                <div
                                    className="square square-7"
                                    id="square7"
                                    style={{ transform: squares7and8 }}
                                />
                                <div
                                    className="square square-8"
                                    id="square8"
                                    style={{ transform: squares7and8 }}
                                />
                                <Card className="card-register">
                                    <CardHeader>
                                        <CardImg
                                            alt="..."
                                            src={require("../assets/img/square-purple-1.png")}
                                        />
                                        <CardTitle tag="h4">
                                            {isLoginView ? "Login" : "Register"}
                                        </CardTitle>
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
                                                <i className="tim-icons icon-email-85" />
                                            </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                            placeholder="username"
                                            id="username"
                                            type="text"
                                            value={username}
                                            onChange={ (e) => setUsername(e.target.value)}
                                            //onFocus={(e) => setUsername(true)}
                                            //onBlur={(e) => setUsername(false)}
                                            />
                                        </InputGroup>
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
                                            //onFocus={(e) => setPassword(true)}
                                            //onBlur={(e) => setPassword(false)}
                                            />

                                        </InputGroup>
                                        <FormGroup check className="text-left">
                                            <Label check>
                                            <Input type="checkbox" />
                                            <span className="form-check-sign" />I agree to the{" "}
                                            <a
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                terms and conditions
                                            </a>
                                            .
                                            <br></br>
                                            <br></br>
                                            { isLoginView ? 
                                                <p onClick={() => setIsLoginView(false)}>You don't have an account? Register here.</p> :
                                                <p onClick={() => setIsLoginView(true)}>You already have an account? Login here.</p>
                                            }
                                            </Label>
                                        </FormGroup>
                                        </Form>
                                    </CardBody>
                                    <CardFooter>

                                            {isLoginView ? 
                                                <Button className="btn-round" color="primary" size="lg" onClick={loginClicked} disabled={isDisabled}>Login</Button>
                                                :
                                                <Button className="btn-round" color="primary" size="lg" onClick={registerClicked} disabled={isDisabled}>Register</Button>
                                            } 

                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                                <div className="register-bg" />
                                <div
                                className="square square-1"
                                id="square1"
                                style={{ transform: squares1to6 }}
                                />
                                <div
                                className="square square-2"
                                id="square2"
                                style={{ transform: squares1to6 }}
                                />
                                <div
                                className="square square-3"
                                id="square3"
                                style={{ transform: squares1to6 }}
                                />
                                <div
                                className="square square-4"
                                id="square4"
                                style={{ transform: squares1to6 }}
                                />
                                <div
                                className="square square-5"
                                id="square5"
                                style={{ transform: squares1to6 }}
                                />
                                <div
                                className="square square-6"
                                id="square6"
                                style={{ transform: squares1to6 }}
                                />
                    </Container>
                        
            </div>
        </div>           
    )
}

export default Auth;