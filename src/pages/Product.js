import React from 'react'
import Parallax from 'components/Parallax/Parallax'
import backgroundImg from "assets/images/background.jpg"
import RectangleContainer from 'components/RectangleContainer/RectangleContainer'
import ProductDetail from 'components/ProductDetail/ProductDetail'
import { Col, Row } from "reactstrap"

import "assets/css/Product.css"

const Product = () => {

    const rectangleContainerContent = () => {
        return (
            <div>
                <Row>
                    <Col lg="4">
                        <ProductDetail />
                    </Col>
                    <Col lg="6">
                        <h4>RYE ISLAY DOUBLE</h4>
                        <div style={{ fontSize: "0.8rem" }}>
                            <span className="star fa fa-star checked"></span>
                            <span className="star fa fa-star checked"></span>
                            <span className="star fa fa-star checked"></span>
                            <span className="star fa fa-star checked"></span>
                            <span className="star fa fa-star"></span>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

    return (
        <>
            <Parallax backgroundImg={backgroundImg} container={"parallaxProductContent"} headerName="SHOP" />
            <RectangleContainer content={rectangleContainerContent()} />
        </>
    )
}

export default Product
