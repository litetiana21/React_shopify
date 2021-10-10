import React from 'react'
import RectangleContainer from 'components/RectangleContainer/RectangleContainer'
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ButtonComponent from 'components/Button/Button';

import "./Coctail.css"

const Coctail = () => {
    const circles = () => {
        return (
            <div>
                <span className="inner-circle" />
                <span className="inner-circle" />
                <span className="inner-circle" />
                <span className="inner-circle" />
                <span className="inner-circle" />
            </div>
        )
    }
    const rectangleContainerContent = () => {
        return (
            <div>
                <Row className="centerContext m-5">
                    <Col className="mt-5" lg="3">
                        <div className="mt-5"> Our legacy </div>
                        <h4 className="mt-1">A LONG JOURNEY</h4>
                        <div className="mt-3">Lorem ipsum dolor sit amet consec tetur se isicin elit, sed do eiusm od tempor inset incia diduni ut labore et sins dolore sine magnas aliqua uta eniad sen</div>
                        <div className="mt-5 mb-5"><ButtonComponent hrefPage="/product/5" content="BUY NOW" /></div>
                    </Col>
                    <Col lg="4">
                        <img src={require("assets/images/whiskey.png").default} /></Col>
                    <Col className="mt-5" lg="3">
                        <Row className="ml-5 mt-3 centerContext">
                            <h6 className="coctailWidget mt-5">THE TEXTURE</h6>
                            <Col className="mt-3" lg="6" md="2">
                                Bone dry
                                {circles()}
                            </Col>
                            <Col className="mt-3" lg="6" md="2">
                                Dry
                                {circles()}
                            </Col>
                        </Row>
                        <Row className="centerContext">
                            <Col className="mt-3" lg="6" md="2">
                                Sweet
                                {circles()}
                            </Col>
                            <Col className="mt-3" lg="6" md="2">
                                Sour
                                {circles()}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="centerContext mr-5 ml-5 mb-5">
                    <Col lg="2" md="4" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="42.578" height="42.547">
                            <circle fill="none" stroke="#bc9d72" stroke-width="1.4" stroke-miterlimit="10" cx="21.297" cy="21.278" r="20.5"></circle>
                        </svg>
                        <span style={{ marginLeft: "10px", display: "inline-block" }}>
                            Available on stock
                        </span>
                    </Col>
                    <Col lg="2" md="4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42.578" height="42.547">
                            <circle fill="none" stroke="#bc9d72" stroke-width="1.4" stroke-miterlimit="10" cx="21.297" cy="21.278" r="20.5"></circle>
                        </svg>
                        <span style={{ marginLeft: "10px", display: "inline-block" }}>
                            Alcohol by volume
                        </span>
                    </Col>
                    <Col lg="2" md="4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42.578" height="42.547">
                            <circle fill="none" stroke="#bc9d72" stroke-width="1.4" stroke-miterlimit="10" cx="21.297" cy="21.278" r="20.5"></circle>
                        </svg>
                        <span style={{ marginLeft: "10px", display: "inline-block" }}>
                            Sold in packages of 10
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }

    return (
        <RectangleContainer content={rectangleContainerContent()} />
    )
}

export default Coctail
