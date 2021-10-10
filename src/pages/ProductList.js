import React, { useEffect, useState } from 'react'
import Recipe from 'components/Recipe/Recipe'
import Parallax from 'components/Parallax/Parallax'
import RectangleContainer from 'components/RectangleContainer/RectangleContainer'
import { ProductListData } from "components/Product/mockProductList"
import backgroundImg from "assets/images/background.jpg"
import { Row, Col, Button } from "reactstrap"
import Product from 'components/Product/Product'
import Slider from '@mui/material/Slider';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import shopImg from "assets/images/shopImg.jpg";
import { Link } from 'react-router-dom'

import "assets/css/ProductList.css"

// MOCK DATA
const tagsList = [
    {
        href: "#",
        value: "Barrel"
    },
    {
        href: "#",
        value: "Blueberry"
    },
    {
        href: "#",
        value: "Bottle"
    },
    {
        href: "#",
        value: "Bourbon"
    },
    {
        href: "#",
        value: "Box"
    },
    {
        href: "#",
        value: "Cherry"
    },
    {
        href: "#",
        value: "Coconut"
    },
    {
        href: "#",
        value: "Drink"
    },
    {
        href: "#",
        value: "Fruit"
    },
    {
        href: "#",
        value: "Liqueur"
    },
    {
        href: "#",
        value: "Liquor"
    },
    {
        href: "#",
        value: "Multiple"
    },
    {
        href: "#",
        value: "Orange"
    },
    {
        href: "#",
        value: "Peach"
    },
    {
        href: "#",
        value: "Skotch"
    },
    {
        href: "#",
        value: "Whiskey"
    },
]

const drinkTypes = [
    {
        value: "Bourbon (1)",
        href: "#"
    },
    {
        value: "Fruit Liqueur (3)",
        href: "#"
    },
    {
        value: "Liqueur (5)",
        href: "#"
    },
    {
        value: "Skotch (1)",
        href: "#"
    },
    {
        value: "Uncategorized (0)",
        href: "#"
    },
    {
        value: "Whiskey (4)",
        href: "#"
    },
]

function valuetext(value) {
    return `${value}°C`;
}
const ProductList = () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const dropDownMenu = () => {
        return (
            <Dropdown outline isOpen={dropdownOpen} toggle={toggle} style={{ float: "right", backgroundColor: "#fff" }}>
                <DropdownToggle caret color="#bc9d72">
                    Default Sorting
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }

    const rectangleContainerContent = () => {
        return (
            <div className="productListContainer">
                <Row className="center">

                    {/* ----------- PRODUCT LIST -----------*/}

                    <Col lg="7" className="mt-5">
                        <Row>
                            <Col style={{ float: "left" }}>Showing 1–9 of 14 results</Col>
                            <Col>{dropDownMenu()}</Col>
                        </Row>
                        <Row>
                            {ProductListData.map((product) => (
                                <Col lg="4" style={{ padding: 0, marginBottom: "1rem", marginTop: "1rem", marginRight: "-1px" }}>
                                    <Product productId={product.id} productName={`${product.productName}`} productStar={`${product.productStar}`} productPrice={`${product.productPrice}`} />
                                </Col>
                            ))}
                        </Row>
                    </Col>

                    {/* ----------- FILTER SECTION -----------*/}

                    <Col lg="3" className="filterClass">
                        <h6>FILTER BY PRICE</h6>
                        <div className="rental-manager-progress-bar-container">
                            <div></div>
                            <div></div>
                        </div>
                        <Slider
                            hidden //
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                        <div className="mt-3">
                            <Button className="filterButtonClass">FILTER
                                <svg className="iconArrow" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="14" height="7" viewBox="0 0 14.26 7.012" enable-background="new 0 0 14.26 7.012">
                                    <line fill="none" stroke="#232323" stroke-miterlimit="10" x1="0" y1="3.506" x2="13.553" y2="3.506" />
                                    <polyline fill="none" stroke="#232323" stroke-miterlimit="10" points="10.4,0.354 13.553,3.507 10.4,6.659 " />
                                </svg>
                            </Button>
                            <span className="spanPriceInterval">Price: $40 — $12,400</span>
                        </div>

                        {/* ---- DRINK TYPES ----*/}

                        <div className="mt-5" >
                            <ul style={{ listStyleType: "none", padding: "0" }}>
                                <h6 className="mb-4">DRINK TYPES</h6>
                                {
                                    drinkTypes.map((drink, i) => (
                                        <li key={i} className="drinkTypes" ><a href={drink.href}>{drink.value}</a></li>
                                    ))
                                }

                            </ul>
                        </div>

                        {/* ---- TAGS ----*/}

                        <div className="mt-5">
                            <h6 className="mb-4">TAGS</h6>
                            <span>
                                {
                                    tagsList.map((tag, indx) => (
                                        <a
                                            key={indx}
                                            href={tag.href}
                                            className="tags">
                                            {tag.value},
                                        </a>
                                    ))
                                }
                            </span>
                        </div>

                        {/* ---- TOP RATED ----*/}

                        <div className="mt-5">
                            <h6 className="mb-4">TOP RATED</h6>
                            {ProductListData.map((item, index) => (
                                index < 3 ?
                                    <Row className="mt-5">
                                        <Col lg="4" style={{ padding: 0, margin: 0, width: "20%" }}>
                                            <Card className="productCard">
                                                <CardImg top width="50%" src={shopImg} alt="Card image cap" />
                                            </Card>
                                        </Col>

                                        <Col lg="4" style={{ padding: 0, margin: "1.5rem", width: "50%" }}>
                                            <div style={{ fontWeight: "bold" }}>{item.productName}</div>
                                            <div className="mb-1" style={{ fontSize: "0.5rem" }}>
                                                {/*item.productStar*/}
                                                <i className="star fa fa-star sm checked"></i>
                                                <i className="star fa fa-star sm checked"></i>
                                                <i className="star fa fa-star sm checked"></i>
                                                <i className="star fa fa-star sm checked"></i>
                                                <i className="star fa fa-star sm checked"></i>
                                            </div>
                                            <div style={{ fontWeight: "bold" }}>{`${item.productPrice} €`}</div>
                                        </Col>
                                    </Row>
                                    : " "
                            ))}
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

export default ProductList
