import React from "react";
import { Col, Row } from "reactstrap";
import {
    Box,
    Container,
    CustomRow,
    Column,
    FooterLink,
    Heading,
    Driver,
    SubscribeButton,
    SubscribeForm,
    LogoImg,
    LogoText,
    CopywrightNotice,
    FooterText,
    SocialLink,
    Input,
} from "./FooterStyles";

import LogoImage from "assets/images/Logo.png";
import { ReactComponent as FacebookIcon } from "assets/images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "assets/images/twitter-icon.svg";
import { ReactComponent as InstagramIcon } from "assets/images/instagram-icon.svg";


const Footer = () => {
    return (
        <Box>
                <CustomRow >
                    <Column>
                        <Heading>CONTACT</Heading>
                        <FooterLink className="mb-2" ><b>Phoıne:</b> +90 999 999 99 99</FooterLink>
                        <FooterLink className="mb-2" ><b>Fax:</b> +90 999 999 99 99</FooterLink>
                        <FooterLink className="mb-2" ><b>Email:</b> email@gmail.com</FooterLink>
                        <FooterLink className="mb-2" ><b>Address:</b> LUNEOIR GmbH | Langer Anger 7-9 | 69115 Heidelberg | Germany</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Subscribe</Heading>

                        <FooterText>SIGN UP FOR OUR NEWSLETTER NOW</FooterText>

                        <SubscribeForm method="get" href="/">
                            <Input type="email" placeholder="Your email address" />
                            <SubscribeButton type="submit">Register</SubscribeButton>
                        </SubscribeForm>

                    </Column>
                </CustomRow>
                <Driver />
                <Row style={{ alignItems: 'center' }}>
                    <Col lg={3} md={4} sm={12} className="float-left">
                        <Row style={{ justifyContent: 'center', textAlign: 'center' }}>
                            <LogoImg className="col-lg-4 col-md-4 col-sm-4" src={LogoImage} style={{height:"10rem", width:"20rem"}} />
                        </Row>
                    </Col>
                    <Col lg={6} md={4} sm={12}>
                        <CopywrightNotice>&copy; All copyrights belong to LUNEOIR, 2021.</CopywrightNotice>
                    </Col>
                    <Col lg={3} md={4} sm={12}>
                        <Row style={{ justifyContent: 'center' }}>
                            {/* style={{justifyContent:'flex-end'}} */}
                            <SocialLink className="col-lg-2 col-md-2 col-sm-2" href="#">
                                <FacebookIcon />
                            </SocialLink>
                            <SocialLink className="col-lg-2 col-md-2 col-sm-2" href="#">
                                <TwitterIcon />
                            </SocialLink>
                            <SocialLink className="col-lg-2 col-md-2 col-sm-2" href="#">
                                <InstagramIcon />
                            </SocialLink>
                        </Row>
                    </Col>
                </Row>
        </Box>
    );
};
export default Footer;
