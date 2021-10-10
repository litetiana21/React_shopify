import React, { useState } from 'react'
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col } from 'reactstrap'
import shopImg from "assets/images/shopImg.jpg";

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductViewModal from 'components/Modals/ProductViewModal/ProductViewModal';

import "./Product.css"

const Product = ({ productId, productName, productStar, productPrice }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const viewProductModal = (productId) => {
        setModal(!modal)
        enableModal();
    }
    const enableModal = () => {
        return (
            <ProductViewModal productId={productId} modal_={modal} toggle_={toggle} />
        )
    }

    const addToCart = (productId) => {
        console.log("product added to cart", productId)
    }

    const addToFavorite = (productId) => {

        console.log("product added to favorite list", productId)
    }

    return (
        <>
            {enableModal()}
            <Card className="productCard container">
                <a href={`product/${productId}`} style={{ textDecoration: "none" }} className="cardClass">
                    <CardImg top width="100%" src={shopImg} alt="Card image cap" />
                    <CardBody className="text-center">
                        <CardTitle style={{ color: "black" }} tag="h6">{productName}</CardTitle>
                        <CardSubtitle style={{ color: "black" }} tag="h6" className="mb-2 text-muted">{productStar}</CardSubtitle>
                        <CardText style={{ color: "black" }}>{productPrice} €</CardText>
                    </CardBody>
                </a>
                <div className="middle">
                    <Row className="iconsCenter">
                        <Col lg="3">
                            <button onClick={() => addToCart(productId)} className="buttons" data-aos="zoom-in-up" >
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19.859px" height="16.125px" viewBox="0 0 19.859 16.125" enableBackground="new 0 0 19.859 16.125" xmlSpace="preserve">
                                    <path fill="none" stroke="#FFFFFF" strokeMiterlimit={10} d="M9.905,15.542c0,0-4.889-2.521-7.834-6.5
                c-2.313-3.125-1.776-6.16,0.308-7.66c3.553-2.559,7.526,1.535,7.526,1.535s3.985-4.386,7.933-1.208
                c2.066,1.663,1.936,4.725-0.219,7.502C14.744,12.917,9.905,15.542,9.905,15.542z" />
                                </svg>
                                {/*<FontAwesomeIcon className="icons" icon="coffee" />*/}</button>
                        </Col>
                        <Col lg="3">
                            <button onClick={() => addToFavorite(productId)} className="buttons" data-aos="zoom-in-up" >
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="21px" height="18px" viewBox="0 0 21.346 18.141" enableBackground="new 0 0 21.346 18.141" xmlSpace="preserve">
                                    <polygon stroke="#fff" fill="none" strokeMiterlimit={10} points="17.673,17.641 3.673,17.641 0.673,7.683 20.673,7.683 " />
                                    <line stroke="#fff" fill="none" strokeMiterlimit={10} x1="10.673" y1="7.683" x2="10.673" y2="17.641" />
                                    <line stroke="#fff" fill="none" strokeMiterlimit={10} x1="5.673" y1="7.683" x2="7.673" y2="17.641" />
                                    <line stroke="#fff" fill="none" strokeMiterlimit={10} x1="15.673" y1="7.683" x2="13.673" y2="17.641" />
                                    <polyline stroke="#fff" fill="none" strokeMiterlimit={10} points="6.665,7.683 10.673,0.975 14.681,7.683 " />
                                    <line stroke="#fff" fill="none" strokeMiterlimit={10} x1="2.173" y1="12.662" x2="19.173" y2="12.662" />
                                </svg>
                                {/*<FontAwesomeIcon className="icons" icon="coffee" />*/}</button>
                        </Col>
                        <Col lg="3">
                            <button onClick={() => viewProductModal(productId)} className="buttons" data-aos="zoom-in-up">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12 3C17.5915 3 22.2898 6.82432 23.6219 12C22.2898 17.1757 17.5915 21 12 21C6.40848 21 1.71018 17.1757 0.378052 12C1.71018 6.82432 6.40848 3 12 3ZM12 19C7.52443 19 3.73132 16.0581 2.45723 12C3.73132 7.94186 7.52443 5 12 5C16.4756 5 20.2687 7.94186 21.5428 12C20.2687 16.0581 16.4756 19 12 19Z"
                                        fill="currentColor"
                                    />
                                </svg> {/*<FontAwesomeIcon className="icons" icon="coffee" />*/}</button>
                        </Col>
                    </Row>
                </div>
            </Card>
        </>
    )
}

export default Product
