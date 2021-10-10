import React from 'react'
import "./Button.css"
import { Button } from "reactstrap"

const ButtonComponent = ({styleProp, content, hrefPage}) => {
    return (
        <Button outline className={`customButton`} href={hrefPage}>
            {content}
        </Button>
    )
}

export default ButtonComponent
