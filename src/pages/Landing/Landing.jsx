import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";

import './Landing.scss';
import AppPage from "../AppPage/AppPage";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false
        }
    };

    render() {
        return (
            // <Router>
            <Switch>

                <React.Fragment>
                    <Route
                        path="/user"
                        component={AppPage}
                    />

                    <div className="Landing">
                        <div className="main-navbar">
                            <div className="navbaritems"><a href="#scroll-why"><p>Why iChat?</p></a></div>
                            <div className="navbaritems"><p>Set Up</p></div>
                            <div className="navbaritems"><p>Pricing</p></div>
                            <div className="navbaritems"><p>Contact Us</p></div>
                        </div>


                        <div className="Landing-background-pic">
                            {/* <Router> */}
                            {/* <Switch> */}
                            {/* <React.Fragment> */}
                            <Route exact path="/" component={SignIn} />
                            <Route exact path="/signup" component={SignUp} />
                            {/* </React.Fragment> */}

                            {/* </Switch> */}
                            {/* </Router> */}
                        </div>



                        <div className="main-navbar2 main-navbar">
                            <div className="navbaritems"><p>Why iChat?</p></div>
                            <div className="navbaritems"><p>Set Up</p></div>
                            <div className="navbaritems"><p>Pricing</p></div>
                            <div className="navbaritems"><p>Contact Us</p></div>
                        </div>

                        <div className="landing-bottom">
                            <div id="scroll-why"> </div>
                            <div className="why-section-wrapper">
                                <Container>
                                    <Row>
                                        <Col md={6}>
                                            <div className="why-section">
                                                <h1>Why iChat?</h1>
                                                <p>
                                                    No matter what kind of messages you have to share, iChat makes it simple and secure to just that. You’re in full control of your workflow, messages, rules, and how you interact with other users.
                                        </p>
                                            </div>
                                        </Col>

                                        <Col md={6}>
                                            <div className="why-section">
                                                <h1>We have your back</h1>
                                                <p>
                                                    To keep you, your messages, and your projects safe, we keep your messages nice and secure blah blah yea. This website was created by DJ and Ian Cha. We the best. Hire us.
                                        </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>

                            <div className="div-break"></div>

                            <div className="why-section-wrapper">
                                <h1><center>Setting up in 3 steps</center></h1>
                                <Container>
                                    <Row>
                                        <Col md={4}>
                                            <div className="why-section">
                                                <div className="checkmark-icons"></div>
                                                <h2>Sign up</h2>
                                                <p>
                                                    Sign up. Click the button. Don't be shy. Sign up for free. Doesn't cost you anything. It's cheap. Click the button now.
                                        </p>
                                            </div>
                                        </Col>

                                        <Col md={4}>
                                            <div className="why-section">
                                                <div className="checkmark-icons"></div>
                                                <h2>Join or Create workspaces</h2>
                                                <p>
                                                    Join the workspaces. Its user friendly design will let you join the work spaces you want. Ok. Once you join.
                                        </p>
                                            </div>
                                        </Col>

                                        <Col md={4}>
                                            <div className="why-section">
                                                <div className="checkmark-icons"></div>
                                                <h2>Send messages</h2>
                                                <p>
                                                    To be honest, I don't know why you keep reading this. Just send the messages. It's intuitive.
                                        </p>
                                            </div>
                                        </Col>
                                    </Row>

                                </Container>
                            </div>

                            <div className="div-break"></div>

                            <div className="why-section-wrapper">
                                <h1>
                                    <center>
                                        How much does it cost?
                            </center>
                                </h1>

                                <Container>

                                    <Row>
                                        <Col>
                                            <div className="why-section">
                                                <p>
                                                    It's cheap. It's free. I don't know why you keep reading this. I would rather sign up during the time I'm reading this. Seriously, just sign up. And log in and use our service. Stop reading and use it. Just use it. Please. We'll decide whether to monetize it from the users or the ads if we even have users. But just sign in. Stop reading and use it. Just use it. Please. We'll decide whether to monetize it from the users or the ads if we even have users. But just sign in.
                                        </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>

                            <div className="div-break"></div>

                            <div className="why-section-wrapper">
                                <h1>
                                    <center>
                                        Contact Us
                            </center>
                                </h1>

                                <Container>
                                    <Row>
                                        <Col md={6}>
                                            <div className="why-section">
                                                <div className="profile-pic profile-pic-ian">
                                                </div>
                                                <div className="div-profile-pic">
                                                    <p>
                                                        Ian is a front end developer, developing in React and Angular frameworks. He loves Javascript. He loves everything about front end development, including HTML, CSS, and the frameworks. He was responsible for developing the front end of this app, employing the socket.io on the client side, React bootstrap, React Material UI, and React.
                                            </p>
                                                </div>

                                            </div>
                                        </Col>

                                        <Col md={6}>
                                            <div className="why-section">
                                                <div className="profile-pic profile-pic-dj">
                                                </div>
                                                <div className="div-profile-pic">
                                                    <p>
                                                        DJ is an engineer at Palo Alto Networks. He was responsible for developing the back end of this app in Python. He loves using React as well. He used socket.io in this app in the backend. DJ likes to play with his baby boy in his free time. He sometimes play Starcraft. His favorite food is pizza.
                                            </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </Switch>
            // </Router>

        )
    }
};

export default Landing;
