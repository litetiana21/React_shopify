import React from 'react'
import "./RectangleContainer.css"
import Bg from "assets/images/background.png";

const RectangleContainer = ({ content, contentStyle }) => {
    return (
        <div className="m-3">
            <div style={{ width: "100%" }} >
                <div className="rectangleContainer" style={contentStyle}>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default RectangleContainer
