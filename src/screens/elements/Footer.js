import React, {Fragment} from 'react'
import styled from 'styled-components'



const BodyFooter = styled.div`
  
footer {
    background: #991818 
    box-shadow: 0px 0px 15px 10px
    width: 100%
    min-height: 37px
    text-align: center
  }
 
`

const ScreensElementsFooter = () => {
    return (
        <Fragment>
            <BodyFooter>
                    <footer>
                        <h4>Developed by<span className="text-danger"> @JoséAlvesJúnior</span></h4>
                    </footer>
            </BodyFooter>
        </Fragment>
    )
}

export default ScreensElementsFooter