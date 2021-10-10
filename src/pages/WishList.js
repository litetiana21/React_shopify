import React from 'react'
import Parallax from 'components/Parallax/Parallax'
import RectangleContainer from 'components/RectangleContainer/RectangleContainer'
import backgroundImg from "assets/images/BG_about.jpg"

const WishList = () => {
    const recContent = () => {

        return (
            <div>
                Wishlist
            </div>
        )
    }
    return (
        <>
            <Parallax backgroundImg={backgroundImg} container={"parallaxAboutContent"} headerName="WISHLIST" />
            <RectangleContainer content={recContent()} />
        </>
    )
}

export default WishList
