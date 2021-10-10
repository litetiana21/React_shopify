import React from 'react'
import Parallax from 'components/Parallax/Parallax'
import backgroundImg from "assets/images/BG_contact.jpg"
import RectangleContainer from 'components/RectangleContainer/RectangleContainer'
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import "assets/css/Contact.css"

const Contact = () => {
    const rectangleContainerContent = () => {
        return (
            <div>
                <Row className="centerContext m-5">
                    <Col lg="2" className="m-2">
                        <h6>CONTACT TITLE</h6>
                        <div>Address</div>
                        <div>Phone Number</div>
                        <div>mail.mail@gmail.com</div>
                    </Col>
                    <Col lg="2" className="m-2">
                        <h6>CONTACT TITLE</h6>
                        <div>Address</div>
                        <div>Phone Number</div>
                        <div>mail.mail@gmail.com</div>
                    </Col>
                    <Col lg="2" className="m-2">
                        <h6>CONTACT TITLE</h6>
                        <div>Address</div>
                        <div>Phone Number</div>
                        <div>mail.mail@gmail.com</div>
                    </Col>
                    <Col lg="2" className="m-2">
                        <h6>CONTACT TITLE</h6>
                        <div>Address</div>
                        <div>Phone Number</div>
                        <div>mail.mail@gmail.com</div>
                    </Col>
                </Row>
                <Row className="m-5 contactClassContext pt-2">

                    {/* ----- CONTACT FORM ---- */}
                    <Col lg="4" className="mr-2">
                        <p style={{ fontSize: "18px", fontWeight: "bold", fontFamily: "Crimson Pro", fontStyle: "italic", color: "#bc9d72" }}> Contact Us </p>
                        <h4 className="mb-4" style={{ fontStyle: "25px", letterSpacing: ".13em", lineHeight: "1.36em", fontFamily: "Catamaran,sans-serif", color: "#232323" }} > GET IN TOUCH </h4>
                        <Form>
                            <FormGroup className="m-3">
                                <Input className="formInput" type="email" name="email" id="email" placeholder="E-mail" />
                            </FormGroup>
                            <FormGroup className="m-3">
                                <Input className="formInput" type="text" name="name" id="name" placeholder="Name" />
                            </FormGroup>
                            <FormGroup className="m-3">
                                <Input className="formInput" type="textarea" style={{ paddingBottom: "3rem" }} name="message" id="message" placeholder="Message" />
                            </FormGroup>
                            <FormGroup className="m-3 centerContext">
                                <Button className="formButton" outline>Submit</Button>
                            </FormGroup>
                        </Form>
                    </Col>

                    {/* ----- demo MAP ---- */}
                    <Col lg="6" className="ml-2">
                        <div style={{ width: '100%', height: 500, position: "relative", backgroundColor: "whitesmoke" }}>

                            <iframe style={{ width: '100%', height: 500, position: "relative" }}
                                title="morreklam"
                                width="100%"
                                height={600}
                                frameBorder={0}
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2596.5444083047!2d8.670299915693578!3d49.398609579344125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c0dae2ec2f17%3A0x9ed667c2fe63e8f1!2sLanger%20Anger%207%2C%2069115%20Heidelberg%2C%20Almanya!5e0!3m2!1str!2str!4v1631732961148!5m2!1str!2str"
                                allowFullScreen={true}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
    return (
        <>
            <Parallax backgroundImg={backgroundImg} container={"parallaxContactContent"} headerName="CONTACT US" />
            <RectangleContainer content={rectangleContainerContent()} />
        </>
    )
}

export default Contact
