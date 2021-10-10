import React from 'react'
import Slider from 'components/Slider/Slider'
import Recipe from 'components/Recipe/Recipe'
import { Row, Col } from "reactstrap";
import HomeCardVideo from 'components/Card/HomeCardVideo/HomeCardVideo';
import CarouselComponent from 'components/Carousel/Carousel';
import RectangleContainer from 'components/RectangleContainer/RectangleContainer';
import Coctail from 'components/Coctail/Coctail';
import VideoColumContent from 'components/Card/VideoColumContent/VideoColumContent';
import ImageColumnContent from 'components/Card/ImageColumnContent/ImageColumnContent';

const Home = () => {

    return (
        <>
            {/*<Slider />*/}
            <CarouselComponent />
            <Recipe />
            <HomeCardVideo />
            <Coctail />
            {/*<VideoColumContent />*/}
            <ImageColumnContent />
        </>
    )
}

export default Home
