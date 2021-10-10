import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Row, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import shopImg from "assets/images/shopImg.jpg";

import "./ProductViewModal.css"

const ProductViewModal = ({ productId, modal_, toggle_ }) => {

    return (
        <Modal size="xl" centered={true} isOpen={modal_} toggle={toggle_}>
            <ModalBody>
                <div>
                    <div style={{ textAlign: "right" }}>
                        <Button onClick={toggle_} className="modalCloseButton" outline>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                                    fill="black"
                                />
                            </svg>
                        </Button>
                    </div>
                    <Row className="p-5">
                        <Col lg="4" className="m-3 pt-3">
                            <Card className="productModalCard">
                                <CardImg top width="100%" src={shopImg} alt="Card image cap" />
                            </Card>
                        </Col>

                        <Col lg="7" className="m-3">
                            <div className="m-1" style={{ fontWeight: "bold" }}>{`RYE ISLAND DOUBLE`}</div>
                            <div className="m-1" style={{ fontSize: "0.5rem" }}>
                                {/*item.productStar*/}
                                <i className="star fa fa-star sm checked"></i>
                                <i className="star fa fa-star sm checked"></i>
                                <i className="star fa fa-star sm checked"></i>
                                <i className="star fa fa-star sm checked"></i>
                                <i className="star fa fa-star sm checked"></i>
                            </div>
                            <div className="m-1 mt-4">
                                {productId}
                                Commodo aliqua occaecat nisi tempor est. Consectetur aliquip labore esse consequat. Pariatur aliqua sint quis commodo duis amet voluptate veniam esse est voluptate do irure labore. Est labore culpa elit veniam occaecat. Incididunt anim ea consequat aliquip Lorem veniam irure Lorem reprehenderit. Do officia incididunt aliqua fugiat est. Officia commodo aliquip nisi aliqua pariatur ullamco irure consequat occaecat quis ipsum sit ea eiusmod.
                            </div>
                            <div className="m-1 mt-5">
                                <Button className="exploreButtonClass" href={`/product/${productId}`} >EXPLORE IT
                                    <svg className="iconArrow" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="14" height="7" viewBox="0 0 14.26 7.012" enable-background="new 0 0 14.26 7.012">
                                        <line fill="none" stroke="#232323" stroke-miterlimit="10" x1="0" y1="3.506" x2="13.553" y2="3.506" />
                                        <polyline fill="none" stroke="#232323" stroke-miterlimit="10" points="10.4,0.354 13.553,3.507 10.4,6.659 " />
                                    </svg>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </ModalBody>
        </Modal>
    );
}

export default ProductViewModal;
