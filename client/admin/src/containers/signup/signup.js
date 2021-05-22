import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Layout from '../../components/Layout/layout.component';
import Input from '../../components/UI/Input/input.ui';

const Signup = () => {
    return (
        <Layout>
            <Container>
                {/* {user.message} */}
                <Row style={{ marginTop: "50px" }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form
                        // onSubmit={userSignup}
                        >
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="First Name"
                                        placeholder="First Name"
                                        // value={firstName}
                                        type="text"
                                    // onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label="Last Name"
                                        placeholder="Last Name"
                                        // value={lastName}
                                        type="text"
                                    // onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Col>
                            </Row>

                            <Input
                                label="Email"
                                placeholder="Email"
                                // value={email}
                                type="email"
                            // onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                label="Password"
                                placeholder="Password"
                                // value={password}
                                type="password"
                            // onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button variant="primary" type="submit">
                                Submit
              </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Signup
