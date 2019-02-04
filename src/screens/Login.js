import React, {Component, Fragment} from 'react'
import  {Redirect, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import ActionCreator from '../redux/actionCreators'

import styled from 'styled-components'

import FormAccount from './elements/formAccount'


const BodyLogin = styled.div`
  .fa{
    padding-top: 10px
  }
  .positionMessage{
    position: absolute 
    width: 100%
    top: 260px
  }
`

export class ScreensLogin extends Component {

    state = {
        email: '',
        password: '',
        sendEmail: ''   
    }

    componentDidMount(){
        this.props.reset()  
    }

    handleChange = field => event => {
        this.setState({[field]:event.target.value})
    }
    
    login = () => {   
        if (this.state.email === ''){
            this.props.error('Put your e-mail!')
            return
        }
        if (this.state.password  === ''){
            this.props.error('Write your password!')
            return
        }
        const {email, password} = this.state
        const user = {email, password}
        this.props.login(user)
    }

    sendEmail = () => {
        this.props.sendEmail(this.state.sendEmail)
        this.setState({sendEmail: ''})
    }
                                
    render(){
        return (
            <Fragment>  
                {this.props.auth.isAuth && <Redirect to={'/'}/>} 
                <BodyLogin>                             
                    <div>
                        {this.props.auth.error &&  
                            <p className='text-danger positionMessage'>{this.props.auth.errorMessage}</p>
                        }
                        {this.props.auth.isSigningin && 
                            <p className="text-info positionMessage">Is signing in...</p>
                        }
                        {this.props.auth.isLoadding && 
                            <p className="text-info positionMessage">Is sending email...</p>
                        }
                        {this.props.auth.emailSended && 
                            <p className="text-success positionMessage">Access your email for change password!</p>
                        }
                        <div>
                            <FormAccount handleChange={this.handleChange} state={this.state} login={this.login}/> 
                            <Link to='' className="text-warning" data-toggle="modal" data-target="#exampleModal">
                                Forgot your password?
                            </Link>
                            <section>
                                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title mx-auto font-weight-bold" id="exampleModalLabel">Receive your new password</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <i className="fa fa-times-circle" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="input-group">
                                                    <div className="input-group-prepend mx-auto mb-2">
                                                        <span className="input-group-text fa fa-envelope"></span>   
                                                    </div> 
                                                    <input autoComplete="on" id='sendEmail' onChange={this.handleChange('sendEmail')} value={this.state.sendEmail}  type="email" placeholder='Email' className="form-control mb-2"/>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" onClick={this.sendEmail} data-dismiss="modal" className="btn btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <p className='text-info mt-4'>Do you haven't register? <Link to='/user/register'>Register</Link></p>     
                        </div>  
                    </div>  
                </BodyLogin>       
            </Fragment>
        )
    }
    
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(ActionCreator.signinRequest(user)),
        sendEmail: email => dispatch(ActionCreator.sendEmailRequest(email)),
        error: message => dispatch(ActionCreator.signinFailure(message)),
        reset: () => dispatch(ActionCreator.resetAuth())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ScreensLogin)