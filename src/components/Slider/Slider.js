import { Carousel } from 'react-carousel-minimal';
import "./Slider.css"
import carouuselPhoto1 from "assets/images/singleMalt1.jpg"
import carouuselPhoto2 from "assets/images/singleMalt2.jpg"
import carouuselPhoto3 from "assets/images/singleMalt3.jpg"


function Slider() {

    const data = [
        {
            image: carouuselPhoto1,
            caption: `<div data-aos="fade-up">
                        <h4>
                            Single Malt 1
                        </h4>
                        <br />
                        Next line
                    </div>`
        },
        {
            image: carouuselPhoto2,
            caption: `<div>
                        <h4>
                            Single Malt 2
                        </h4>
                        <br />
                        Next line
                        
                    </div>`
        },
        {
            image: carouuselPhoto3,
            caption: `<div>
                        <h4>
                            Single Malt 3
                        </h4>
                        <br />
                        Next line
                    </div>`
        },
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <div className="slider">
            <div style={{ textAlign: "center" }}>
                <div style={{
                    padding: "0"
                }}>
                    <Carousel
                        data={data}
                        time={5000}
                        width="100%"
                        height="800px"
                        captionStyle={captionStyle}
                        radius="0px"
                        slideNumber={false}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="center"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={false}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "100%",
                            maxHeight: "800px",
                            margin: "0",
                        }}

                    />
                </div>
            </div>
        </div>
    );
}

export default Slider;