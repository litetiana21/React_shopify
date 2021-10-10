import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import { Row, Col, Card, Button } from "reactstrap";

import "components/Card/HomeCardVideo/HomeCardVideo.css"
import 'components/Card/HomeCardVideo/modal-video.scss';

import { width } from 'dom-helpers';

const HomeCardVideo = () => {
    const [isOpen1, setOpen1] = useState(false);
    const [isOpen2, setOpen2] = useState(false);
    const [isOpen3, setOpen3] = useState(false);
    const [isOpen4, setOpen4] = useState(false);

    return (
        <React.Fragment>
            <Row style={{ display: "flex", justifyContent: "center", alignCenter: "center", width: "100%", "--bs-gutter-x": 0 }}>
                <Col className='container p-0 m-0' lg='6' md='6' sm='12' xs='12'>
                    <ModalVideo channel='youtube' autoplay={true} isOpen={isOpen1} videoId="L61p2uyiMSo" onClose={() => setOpen1(false)} />
                    <Button style={{ border: 0, borderRadius: "0px", padding: 0 }} onClick={() => setOpen1(true)}>
                        <Card className="videoCard img-wrapper border-0" >
                            <img className='image_ hover-zoom' src={require("assets/images/videoCard1.jpg").default} alt="Cover Image" />
                            <svg className="svgOverImage" xmlns="http://www.w3.org/2000/svg" width="42.578" height="42.547">
                                <circle className="circleSvg" fill="none" stroke="#bc9d72" stroke-width="1.4" stroke-miterlimit="10" cx="21.297" cy="21.278" r="20.5"></circle>
                                <path fill="#FFF" d="M18.625 28.278v-14l8 7z"></path>
                            </svg>
                            <div className="bottom-left">
                                <div> Campaigns</div>
                                <div> ONE FOR ALL CAMPAIGNS</div>
                            </div>
                        </Card>
                    </Button>
                </Col>
                <Col className='container p-0 m-0' lg='6' md='6' sm='12' xs='12'>
                    <ModalVideo channel='youtube' autoplay={true} isOpen={isOpen2} videoId="L61p2uyiMSo" onClose={() => setOpen2(false)} />
                    <Button style={{ border: 0, borderRadius: "0px", padding: 0 }} onClick={() => setOpen2(true)}>
                        <Card className="videoCard img-wrapper border-0">
                            <img className='image_ hover-zoom' src={require("assets/images/videoCard2.jpg").default} alt="Cover Image" />
                            <svg className="svgOverImage" xmlns="http://www.w3.org/2000/svg" width="42.578" height="42.547">
                                <circle className="circleSvg" fill="none" stroke="#bc9d72" stroke-width="1.4" stroke-miterlimit="10" cx="21.297" cy="21.278" r="20.5"></circle>
                                <path fill="#FFF" d="M18.625 28.278v-14l8 7z"></path>
                            </svg>
                            <div className="bottom-left">
                                <div> Our Blog</div>
                                <div> RECIPE OF THE WEEK</div>
                            </div>
                        </Card>
                    </Button>

                </Col>
                <Col className='container p-0 m-0' lg='6' md='6' sm='12' xs='12'>
                    <ModalVideo channel='youtube' autoplay={true} isOpen={isOpen3} videoId="L61p2uyiMSo" onClose={() => setOpen3(false)} />
                    <Button style={{ border: 0, borderRadius: "0px", padding: 0 }} onClick={() => setOpen3(true)}>
                        <Card className="videoCard img-wrapper border-0">
                            <img className='image_ hover-zoom' src={require("assets/images/videoCard3.jpg").default} alt="Cover Image" />
                            <svg className="svgOverImage" xmlns="http://www.w3.org/2000/svg" width="42.578" height="42.547">
                                <circle className="circleSvg" fill="none" stroke="#bc9d72" stroke-width="1.4" stroke-miterlimit="10" cx="21.297" cy="21.278" r="20.5"></circle>
                                <path fill="#FFF" d="M18.625 28.278v-14l8 7z"></path>
                            </svg>
                            <div className="bottom-left">
                                <div> Real Stories</div>
                                <div> WOOD AND FLAME</div>
                            </div>
                        </Card>
                    </Button>

                </Col>
                <Col className='container p-0 m-0' lg='6' md='6' sm='12' xs='12'>
                    <ModalVideo channel='youtube' autoplay={true} isOpen={isOpen4} videoId="L61p2uyiMSo" onClose={() => setOpen4(false)} />
                    <Button style={{ border: 0, borderRadius: "0px", padding: 0 }} onClick={() => setOpen4(true)}>
                        <Card className="videoCard img-wrapper border-0">
                            <img className='image_ hover-zoom' src={require("assets/images/videoCard4.jpg").default} alt="Cover Image" />

                            <svg className="svgOverImage" xmlns="http://www.w3.org/2000/svg" width="42.578" height="42.547">
                                <circle className="circleSvg" fill="none" stroke="#bc9d72" stroke-width="1.4" stroke-miterlimit="10" cx="21.297" cy="21.278" r="20.5"></circle>
                                <path fill="#FFF" d="M18.625 28.278v-14l8 7z"></path>
                            </svg>
                            <div className="bottom-left">
                                <div> Promotions</div>
                                <div> HOLIDAY TIME</div>
                            </div>
                        </Card>
                    </Button>

                </Col>
            </Row>
        </React.Fragment>
    )
}

export default HomeCardVideo
