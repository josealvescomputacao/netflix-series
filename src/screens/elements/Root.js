import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import ScreensHome from '../Home'
import ScreensAbout from '../About'
import ScreensNewSeries from '../NewSeries'
import ScreensSeries from '../Series'
import ScreensEditSeries from '../EditSeries'
import ScreensComments from '../comments'
import ScreensLogin from '../Login'
import ScreensRegister from '../CreateAccount'
import ScreensSetting from '../Setting'

 
import styled from 'styled-components'


const BodyMain = styled.div`
    .components {
        padding-top: 120px
        min-height: 95vh
        position: relative
        overflow: auto
    }
`     

const ScreensElementsRoot = () => {
    return (
        <BodyMain>
            <div className="text-center components">
                <Switch>
                    <Route exact path='/' component={ScreensHome}/>
                    <Route exact path='/series/edit/:genre/:id' component={ScreensEditSeries}/>
                    <Route exact path='/series/:genre' component={ScreensSeries}/>  
                    <Route exact path='/new' component={ScreensNewSeries}/>
                    <Route exact path='/about' component={ScreensAbout}/>
                    <Route exact path='/comments' component={ScreensComments}/>
                    <Route exact path='/user/login' component={ScreensLogin}/>
                    <Route exact path='/user/register' component={ScreensRegister}/> 
                    <Route exact path='/user/setting' component={ScreensSetting}/>                 
                </Switch>
            </div>
        </BodyMain>
    )
}

export default ScreensElementsRoot