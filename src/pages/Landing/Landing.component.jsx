import React, { useState } from 'react';
import './Landing.styles.scss';
import { SignIn } from "../../components/SignIn/SignIn.component";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Landing = () => {

    return (
        <div className="Landing">
            <div className="main-navbar">
                <div className="navbaritems"><p>Why ichat?</p></div>
                <div className="navbaritems"><p>Set Up</p></div>
                <div className="navbaritems"><p>Pricing</p></div>
                <div className="navbaritems"><p>Contacts</p></div>
            </div>

            <div className="Landing-background-pic">
                <SignIn />
            </div>

            <div className="landing-bottom">
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






            </div>

        </div>
    )

};