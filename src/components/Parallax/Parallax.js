import React from 'react'
import { Parallax } from 'react-parallax';
import "./Parallax.css"

const ParallaxComponent = ({backgroundImg, container, headerName}) => {
    return (
        <Parallax className={container} bgImage={backgroundImg} bgImageAlt="the cat" strength={200} >
            <h1>{headerName}</h1>
        </Parallax>
    )
}

export default ParallaxComponent
