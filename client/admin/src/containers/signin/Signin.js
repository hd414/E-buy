import React, { useState, useEffect } from 'react';

import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/UI/Input/input.ui';
// import { login } from '../../actions';
// import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Layout from '../../components/Layout/layout.component';

const Signin = () => {
    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form >
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

export default Signin
