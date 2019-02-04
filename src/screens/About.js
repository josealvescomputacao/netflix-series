import React, {Fragment} from 'react'
import styled from 'styled-components'

const BodyAbout = styled.div`

.corTexto {
    color: white
}

h1{
    font-family: Brush Serpt, cursive;
}

`

const ScreensAbout = () => {
    return (
        <Fragment>
            <BodyAbout>
                <h1 className="jumbotron font-weight-bold">Make your life more simple, with smart and easy solutions</h1>
                <h4 className="text-monospace corTexto container">We are a company that creates software solutions, both web and mobile, that helps people to have greater and better control
                 of its life and its businesses, where the system besides providing more time, also of more convenience and security to the user who uses it
                </h4>
           </BodyAbout>
        </Fragment>
    )
}



export default ScreensAbout