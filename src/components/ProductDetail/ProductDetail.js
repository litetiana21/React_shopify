import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import shopImg from "assets/images/shopImg.jpg";

import "./ProductDetail.css"

const ProductDetail = () => {
    return (
        <Card className="productCard">
            <CardImg top width="100%" src={shopImg} alt="Card image cap" />
        </Card>
    )
}

export default ProductDetail
