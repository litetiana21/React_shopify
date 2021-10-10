import React from 'react'
import Parallax from 'components/Parallax/Parallax'
import backgroundImg from "assets/images/BG_about.jpg"
import RectangleContainer from 'components/RectangleContainer/RectangleContainer'
import { Row, Col } from 'reactstrap'

import "assets/css/About.css"
import Recipe from 'components/Recipe/Recipe'

const About = () => {

    const rectangleContainerContent = () => {
        return (
            <div className="aboutContext">
                <Row className="aboutRectangle centerText pb-2" >
                    <Col lg="4">
                        <div className="pb-2 header">
                            Original recipe
                        </div>
                        <h3 >
                            REFINED WHISKEY
                        </h3>
                        <div className="pt-2">
                            Ele atterum signiferumque his, sit in augue populae intellegam id tales accusata in sea
                        </div>
                    </Col>
                </Row>
                <Row className="aboutRectangle pt-3 mt-2">
                    <Col lg="5">
                        <div>
                            Senserit definitionem mei ad.
                            Vocent numquam corrumpit usu an.
                            Harum definitionem sea id, wisi tota est ex.
                            Pro in discere intellegam, at eum melius eruditi.
                            Ut viderer offendit nec, ea purto populo vituperata vim.
                        </div>
                        <br />
                        <div>
                            Eum ut volumus gloriatur omittantur.
                            Integre appareat et pro, no nec errem iriure. ü
                            Quodsi contentiones usu ne, no nam civibus definiebas.
                            Eum vero omittam te. Te eirmod diceret senserit quo, per ut laoreet fuisset.
                            Harum definitionem sea id, wisi tota est ex. Ea eum quando assentior, posse singulis adipiscing vel ex,
                            oporteat senserit has in. Ut usu utinam dolore appareat.
                        </div>
                    </Col>
                    <Col lg="5">
                        <div>
                            Senserit definitionem mei ad.
                            Vocent numquam corrumpit usu an.
                            Harum definitionem sea id, wisi tota est ex.
                            Pro in discere intellegam, at eum melius eruditi.
                            Ut viderer offendit nec, ea purto populo vituperata vim.
                        </div>
                        <br />
                        <div>
                            Eum ut volumus gloriatur omittantur.
                            Integre appareat et pro, no nec errem iriure. ü
                            Quodsi contentiones usu ne, no nam civibus definiebas.
                            Eum vero omittam te. Te eirmod diceret senserit quo, per ut laoreet fuisset.
                            Harum definitionem sea id, wisi tota est ex. Ea eum quando assentior, posse singulis adipiscing vel ex,
                            oporteat senserit has in. Ut usu utinam dolore appareat.
                        </div>
                    </Col>
                </Row>

            </div>
        )
    }

    return (
        <>
            <Parallax backgroundImg={backgroundImg} container={"parallaxAboutContent"} headerName="ABOUT US" />
            <RectangleContainer content={rectangleContainerContent()} />
            <Recipe />
        </>
    )
}

export default About