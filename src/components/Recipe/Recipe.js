import React from 'react'
import BgImg from 'assets/images/background.png'
import { Row, Col } from "reactstrap"

import "./Recipe.css"

const Recipe = () => {
    return (
        <div className="m-3">
            <div style={{ width: "100%" }} >
                <div className="recipeContainer" >
                    <Row className="centerOnRectangle centerText pb-2" >
                        <Col lg="4">
                            <div className="pb-2 header">
                                Original recipe
                            </div>
                            <h3 >
                                REFINED WHISKEY
                            </h3>
                            <div className="pt-2">
                                Ele atterum signiferumque his, sit in augue populae intellegam id tales accusata in sea
                            </div>
                        </Col>
                    </Row>
                    <Row className="centerOnRectangle centerText pt-3 mt-2">
                        <Col lg="2">
                            <Row data-aos="fade-up" data-aos-duration="10" className="rowClass">
                                <img className="imgClass"
                                    src={require("assets/images/malting.png").default}
                                    alt="First slide"
                                />
                                <h6>MALTING</h6>
                                <span>Lorem ipsum dolor sit amet con tetur adi isicing elit sed do eius od tempor in incide</span>
                            </Row>
                            <Row data-aos="fade-up" data-aos-duration="10" className="rowClass">
                                <img className="imgClass"
                                    src={require("assets/images/mashing.png").default}
                                    alt="First slide"
                                />
                                <h6>MASHING</h6>
                                <span>Lorem ipsum dolor sit amet con tetur adi isicing elit sed do eius od tempor in incide</span>
                            </Row>
                        </Col>
                        <Col lg="5">
                            <div>
                                <img data-aos="fade-up" data-aos-duration="10" className="bottleClass"
                                    src={require("assets/images/Bottle.png").default}
                                    alt="First slide"
                                />
                            </div>
                        </Col>
                        <Col lg="2">
                            <Row data-aos="fade-up" data-aos-duration="10" className="rowClass">
                                <img
                                    className="imgClass"
                                    src={require("assets/images/distillation.png").default}
                                    alt="First slide"
                                />
                                <h6>DISTILLATION</h6>
                                <span>Lorem ipsum dolor sit amet con tetur adi isicing elit sed do eius od tempor in incide</span>
                            </Row>
                            <Row data-aos="fade-up" data-aos-duration="10" className="rowClass">
                                <img
                                    className="imgClass"
                                    src={require("assets/images/maturation.png").default}
                                    alt="First slide"
                                />
                                <h6>MATURATION</h6>
                                <span>Lorem ipsum dolor sit amet con tetur adi isicing elit sed do eius od tempor in incide</span>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Recipe
