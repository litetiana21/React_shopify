import React from 'react'
import { Col, Row, Card, Button } from 'reactstrap'
import HoverVideoPlayer from 'react-hover-video-player';
import videoCol1 from "assets/videos/Col1.mp4"
import videoCol2 from "assets/videos/Col2.mp4"
import videoCol3 from "assets/videos/Col3.mp4"

const VideoColumContent = () => {
    return (
        <Row style={{ width: "100%", margin: "0" }}>
            <Col className=' p-0 m-0' lg='4' md='4' sm='12' xs='12'>
                <HoverVideoPlayer
                    className="container p-0 m-0"
                    videoSrc={videoCol1}
                    /*pausedOverlay={
                        <img
                            src="thumbnail-image.jpg"
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    }
                    loadingOverlay={
                        <div className="loading-overlay centered">
                            <h1>TEXT</h1>
                            <div className="loading-spinner" />
                        </div>
                    }*/
                    pausedOverlay={
                        <div className="loading-overlay centered ">
                            <h4>FAMILY BUSINESS LEGACY</h4>
                            <div className="loading-spinner" />
                        </div>
                    }
                    hoverOverlay={
                        <div className="centered">

                            <Button style={{ color: "white", textDecoration: "none" }} href="/about">
                                <div>
                                    VIEW MORE
                                </div>
                            </Button>
                        </div>
                    }
                />

            </Col>
            <Col className='container p-0 m-0' lg='4' md='4' sm='12' xs='12'>
                <HoverVideoPlayer
                    className="p-0 m-0"
                    videoSrc={videoCol3}
                    /*pausedOverlay={
                        <img
                            src="thumbnail-image.jpg"
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    }
                    loadingOverlay={
                        <div className="loading-overlay centered">
                            <h1>TEXT</h1>
                            <div className="loading-spinner" />
                        </div>
                    }*/
                    pausedOverlay={
                        <div className="loading-overlay centered">
                            <h4>DISTRIBUTION WORLDWIDE</h4>
                            <div className="loading-spinner" />
                        </div>
                    }
                    hoverOverlay={
                        <div className="centered">
                            <Button style={{ color: "white", textDecoration: "none" }} href="/about">
                                <div>
                                    VIEW MORE
                                </div>
                            </Button>
                        </div>
                    }
                />
            </Col>
            <Col className='container p-0 m-0' lg='4' md='4' sm='12' xs='12'>
                <HoverVideoPlayer
                    videoSrc={videoCol2}
                    /*pausedOverlay={
                        <img
                            src="thumbnail-image.jpg"
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    }
                    loadingOverlay={
                        <div className="loading-overlay centered">
                            <h1>TEXT</h1>
                            <div className="loading-spinner" />
                        </div>
                    }*/
                    pausedOverlay={
                        <div className="loading-overlay centered">
                            <h4>THE BEST RECIPE SELECTION</h4>
                            <div className="loading-spinner" />
                        </div>
                    }
                    hoverOverlay={
                        <div className="centered">
                            <Button style={{ color: "white", textDecoration: "none" }} href="/about">
                                <div>
                                    VIEW MORE
                                </div>
                            </Button>
                        </div>
                    }
                />
            </Col>
        </Row>
    )
}

export default VideoColumContent
