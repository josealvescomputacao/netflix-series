import React, {Component, Fragment} from 'react'
import  {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import ActionCreator from '../redux/actionCreators'
import styled from 'styled-components'

import FormAccount from './elements/formAccount'

const BodyRegister = styled.div`

    .positionMessage{
        position: absolute
        top: 350px
        width: 100%
    }
`

export class ScreensCreateAccount extends Component {    
    
    state={ 
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",  
    }
    
    componentDidMount(){
        this.props.reset() 
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
    

    createAccount = () => { 
        if (this.state.name.length === 0){ 
            this.props.error('Write your name!')
            return           
        }else if (this.state.name.length > 0 && this.state.name.length < 3){
            this.props.error('The name needs has to more than 2 characters!')
            return           
        }
        if (this.state.passwordConfirm !== this.state.password){
            this.setState({passwordConfirm: ''})
            this.props.error('The password confirm  is wrong')
            return
        }
        const user = {
            name : this.state.name, 
            email : this.state.email, 
            passwd : this.state.passwordConfirm
        }
        this.props.createAccount(user)          
    }   

   
    render(){
        return (
            <Fragment>  
                {this.props.auth.isAuth && <Redirect to='/'/>} 
                <BodyRegister>
                    {this.props.auth.isLoadding && 
                        <p className='text-info positionMessage'>Is registring...</p>
                    }
                    {this.props.auth.error && 
                        <p className="text-danger positionMessage">{this.props.auth.errorMessage}</p>
                    }
                    <div>
                        <FormAccount handleChange={this.handleChange} createAccount={this.createAccount} state={this.state}/>  
                    </div>
                </BodyRegister>
            </Fragment>
        )   
    }
    
}

const mapStateToProps = state => {
    return {
        auth : state.auth
    }
}
const mapDispatchToProps = dispatch => { 
    return {
        createAccount : user => dispatch(ActionCreator.createProfileRequest(user)),
        error : message => dispatch(ActionCreator.createProfileFailure(message)),
        reset : () => dispatch(ActionCreator.resetAuth())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreensCreateAccount) 