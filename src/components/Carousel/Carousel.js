import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import carouselPhoto1 from "assets/images/singleMalt1.jpg"
import carouselPhoto2 from "assets/images/singleMalt2.jpg"
import carouselPhoto3 from "assets/images/singleMalt3.jpg"
import { Button } from 'reactstrap';
import Aos from 'aos'

import "./Carousel.css"

const CarouselComponent = () => {
    const width = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight ||
        document.body.clientHeight;

    console.log(width, height);

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <Carousel fade interval={5000} >
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={carouselPhoto1}
                    alt="First slide"
                />
                <Carousel.Caption data-aos="fade-up" className="carouselText">
                    <div>
                        <p style={{ fontSize: "23px", fontFamily: "Crimson Pro", fontStyle: "italic" }}>Timeless flavor</p>
                        <h1 style={{
                            fontFamily: "Rakkas",
                            textTransform: "uppercase",
                            height: "auto",
                            width: "auto",
                            whiteSpace: "normal",
                            fontWeight: "bolder",
                            textAlign: "center",
                            lineHeight: "90px",
                            fontSize: "76px",
                            letterSpacing: "19px",
                            visibility: "visible",
                        }}>Authentic Taste</h1>
                        <Button className="exploreButtonClass mt-4">Explore
                            <svg className="iconArrow" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="14" height="7" viewBox="0 0 14.26 7.012" enable-background="new 0 0 14.26 7.012">
                                <line fill="none" stroke="#232323" stroke-miterlimit="10" x1="0" y1="3.506" x2="13.553" y2="3.506" />
                                <polyline fill="none" stroke="#232323" stroke-miterlimit="10" points="10.4,0.354 13.553,3.507 10.4,6.659 " />
                            </svg>
                        </Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselPhoto2}
                    alt="Second slide"
                />
                <Carousel.Caption className="carouselText">
                    <div data-aos="fade-up">
                        <p style={{ fontSize: "23px", fontFamily: "Crimson Pro", fontStyle: "italic" }}>Timeless flavor</p>
                        <h1 style={{
                            fontFamily: "Rakkas",
                            textTransform: "uppercase",
                            height: "auto",
                            width: "auto",
                            whiteSpace: "normal",
                            fontWeight: "bolder",
                            textAlign: "center",
                            lineHeight: "90px",
                            fontSize: "76px",
                            letterSpacing: "19px",
                            visibility: "visible",
                        }}> Special Releases</h1>
                        <Button className="exploreButtonClass mt-4">Explore
                            <svg className="iconArrow" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="14" height="7" viewBox="0 0 14.26 7.012" enable-background="new 0 0 14.26 7.012">
                                <line fill="none" stroke="#232323" stroke-miterlimit="10" x1="0" y1="3.506" x2="13.553" y2="3.506" />
                                <polyline fill="none" stroke="#232323" stroke-miterlimit="10" points="10.4,0.354 13.553,3.507 10.4,6.659 " />
                            </svg>
                        </Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselPhoto3}
                    alt="Third slide"
                />
                <Carousel.Caption className="carouselText">
                    <div>
                        <p style={{ fontSize: "23px", fontFamily: "Crimson Pro", fontStyle: "italic" }}>Timeless flavor</p>
                        <h1 style={{
                            fontFamily: "Rakkas",
                            textTransform: "uppercase",
                            height: "auto",
                            width: "auto",
                            whiteSpace: "normal",
                            fontWeight: "bolder",
                            textAlign: "center",
                            lineHeight: "90px",
                            fontSize: "76px",
                            letterSpacing: "19px",
                            visibility: "visible",
                        }}>Whisky's Pleasure</h1>
                        <Button className="exploreButtonClass mt-4">Explore
                            <svg className="iconArrow" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="14" height="7" viewBox="0 0 14.26 7.012" enable-background="new 0 0 14.26 7.012">
                                <line fill="none" stroke="#232323" stroke-miterlimit="10" x1="0" y1="3.506" x2="13.553" y2="3.506" />
                                <polyline fill="none" stroke="#232323" stroke-miterlimit="10" points="10.4,0.354 13.553,3.507 10.4,6.659 " />
                            </svg>
                        </Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent
