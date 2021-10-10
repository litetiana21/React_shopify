import React from 'react'
import { Col, Row } from 'reactstrap'

import "components/Card/ImageColumnContent/ImageColumnContent.css"

const ImageColumnContent = () => {
    return (
        <Row style={{ width: "100%", margin: "0" }}>
            <Col className='container p-0 m-0' lg='4' md='4' sm='12' xs='12'>
                <img src={require("assets/images/banner-img-1.jpg").default} width="100%" alt="Col" />
                <div className="centered">
                    <h4>FAMILY BUSINESS LEGACY</h4>
                    <a style={{ color: "white", textDecoration: "none" }} href="/about">VIEW MORE </a>
                </div>
            </Col>
            <Col className='container p-0 m-0' lg='4' md='4' sm='12' xs='12'>
                <img src={require("assets/images/banner-img-2.jpg").default} width="100%" alt="Col" />
                <div className="centered">
                    <h4>DISTRIBUTION WORLDWIDE</h4>
                    <a style={{ color: "white", textDecoration: "none" }} href="/about">VIEW MORE </a>
                </div>
            </Col>
            <Col className='container p-0 m-0' lg='4' md='4' sm='12' xs='12'>
                <img src={require("assets/images/banner-img-3.jpg").default} width="100%" alt="Col" />
                <div className="centered">
                    <h4>THE BEST RECIPE SELECTION</h4>
                    <a style={{ color: "white", textDecoration: "none" }} href="/about">VIEW MORE </a>
                </div>
            </Col>
        </Row>
    )
}

export default ImageColumnContent
