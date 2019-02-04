import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import ActionCreator from '../redux/actionCreators' 

import styled from 'styled-components'

import FormAccount from './elements/formAccount'

const BodySetting = styled.div`
    .messagePosition{
        position: absolute
        width: 100%
        top: 350px
    }
`

class ScreensSetting extends Component {
    state = {
        email: '',
        password: '',
        passwordConfirm: '',
        receivedEmail: false  
    }
    
    componentDidMount(){
        this.props.reset() 
    }
    componentDidUpdate(){
        if (!this.state.receivedEmail && this.props.auth.user.email !== undefined){
            this.setState({email: this.props.auth.user.email, receivedEmail: true})
        } 
    }

    updateEmail = () => {
        const {email} = this.state
        this.props.updateEmail(email)
    }

    updatePassword = () => {
        if (this.state.password === this.state.passwordConfirm){
            const {passwordConfirm} = this.state
            this.props.updatePassword(passwordConfirm)
            this.setState({
                password: '',
                passwordConfirm: ''
            })
        }else{
            this.props.error('The password confirm  is wrong')
        }
        
    }

    removeProfile = () => {
        const {user} = this.props.auth
        this.props.destroyAuth()
        this.props.destroyComments()
        this.props.destroySeries()  
        this.props.removeProfile(user)
    }

    handleChange = field => event => {
        const form = {
            ...this.state,
            [field]: event.target.value
        }
        if (field === 'passwordConfirm'){
            if (form.password.length < 6){
                this.setState({password:'', passwordConfirm: ''})
                this.props.error('The password needs has to more than 6 characters!')  
                return
            }  
            if (form[field].length >= form.password.length && form[field] !== form.password){
                this.setState({passwordConfirm: ''})
                this.props.error('The password confirm is wrong')
                return
            }  
        }
        document.getElementById('password').onpaste = () => false
        document.getElementById('passwordConfirm').onpaste = () => false
        this.setState({...form})
    }

    render(){
        return (
            <BodySetting>
                <div>
                    {!this.props.auth.isAuth && this.props.auth.isLoadding && <Redirect to='/'></Redirect>}
                    {this.props.auth.isLoadding && <p className='text-info messagePosition'>Waiting...</p>}
                    {this.props.auth.error && <p className='text-danger messagePosition'>{this.props.auth.errorMessage}</p>} 
                    
                    {this.props.auth.emailChanged && <p className='text-success messagePosition'>Email changed with success!</p>}
                    {this.props.auth.passwordChanged && <p className='text-success messagePosition'>Password changed with success!</p>}
                    <section>
                        <FormAccount state={this.state} handleChange={this.handleChange} removeProfile={this.removeProfile} updateEmail={this.updateEmail} updatePassword={this.updatePassword}/>  
                    </section>
                </div>
            </BodySetting>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        series: state.series,
        comments: state.comments
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateEmail: email => dispatch(ActionCreator.updateEmailRequest(email)),
        updatePassword: password => dispatch(ActionCreator.updatePasswordRequest(password)),
        removeProfile: user => dispatch(ActionCreator.removeProfileRequest(user)),
        error: message => dispatch(ActionCreator.updatePasswordFailure(message)),
        reset: () => dispatch(ActionCreator.resetAuth()),
        destroyAuth : () => dispatch(ActionCreator.destroyAuthRequest()),
        destroyComments : () => dispatch(ActionCreator.destroyComments()),
        destroySeries : () => dispatch(ActionCreator.destroySeries()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ScreensSetting)

