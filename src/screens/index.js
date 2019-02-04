import React, {Fragment, Component} from 'react'
import ScreensElementsNav from './elements/nav'
import ScreensElementsRoot from './elements/Root'
import ScreensElementsFooter from './elements/Footer' 

import {auth} from '../firebase'


class Screens extends Component {

    state = {
        verify: false
    }

    funcVerify = new Promise(resolve => 
        resolve(auth.onAuthStateChanged(() => {
            this.setState({verify:true})
        }))
    )  
    render(){
        return(
            <Fragment>
            <div>
                <ScreensElementsNav/>
                {this.state.verify && <ScreensElementsRoot/>}
                <ScreensElementsFooter/>
            </div>
            </Fragment>
        )
    }
   
    
}

export default Screens