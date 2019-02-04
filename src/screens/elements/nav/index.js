import React, {Component, Fragment} from 'react'
import {
  Link
} from 'react-router-dom'
import {connect} from 'react-redux'
import ActionCreator from '../../../redux/actionCreators'

import BodyNav from './BodyNav'


class ScreensElementsNav extends Component {
  
  state = {
    finalPath: '',
    displayUl: 'none'
  }

  componentDidUpdate(){
      const valuesPath = window.location.href.split('/')
      let component = valuesPath[window.location.href.split('/').length-1] 
      
      if (valuesPath[window.location.href.split('/').length-3] === 'edit'){
        component = 'edit'
      }
      if (component !== this.state.finalPath){
        this.setState({finalPath: component})
      }
  }

  selected = (event) => {
    if (event.target.type !== 'button'){
      const valuesPath = event.target.href.split('/')
      const component = valuesPath[event.target.href.split('/').length-1]
      this.setState({finalPath: component, displayUl: 'none'})
    }else{
      if (this.state.displayUl === 'block'){
        this.setState({displayUl: 'none'})
      }else{
        this.setState({displayUl: 'block'})
      }
    } 
  }
  
  voltarTopo = () => {
    window.scrollTo(0, 0)
  }

  logout = () => {
    this.props.destroyAuth()
    this.props.destroyComments()
    this.props.destroySeries()
  }

  render() {
    const finalPath = this.state.finalPath  
    return (
        <Fragment>
            <BodyNav display={finalPath} displayUl={this.state.displayUl}>
              <nav className="navbar navbar-expand-md mb-4 fixed-top">
                <div className="container">
                  <span onClick={this.voltarTopo} id="logo" className="mr-3 img-thumbnail">
                      <img src="/images/logo2.png" height="30" alt="logo" /> 
                  </span>
                    <button className={`fa fa-bars fa-2x navbar-toggler`} onClick={this.selected} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></button>
                    <i className="fa fa-home fa-3x iconeHome"></i>
                    <i className="fa fa-database fa-3x iconeSeries"></i>
                    <i className="fa fa-upload fa-3x iconeNewSeries"></i>
                    <i className="fa fa-info-circle fa-3x iconeAbout"></i>
                    <i className="fa fa-comments fa-3x iconeComment"></i>
                    <i className="fa fa-space-shuttle fa-3x iconeSignIn"></i>
                    <i className="fa fa-address-card fa-3x iconeRegister"></i>
                    <i className="fa fa-cog fa-3x iconeSetting"></i>
                    {finalPath === 'edit' &&
                      <i className="fa fa-wrench fa-3x iconeEditSerie"></i>
                    }
                    <div className='collapse navbar-collapse'  id="navbarSupportedContent">
                      <ul className="navbar-nav nav-pills my-auto mx-auto" id="componentsList">
                        <li className="nav-item">
                          <Link onClick={this.selected} className= {`nav-link font-weight-bold ${finalPath === '' && 'active'}`} to="/">Home</Link>
                        </li>  
                        <li className= "nav-item dropdown">
                          <Link className= {`nav-link font-weight-bold ${(finalPath === 'Action' || finalPath === 'Comedy' || finalPath === 'Drama') && 'active'} dropdown-toggle`}  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to=''>Series</Link>
                          <div className='dropdown-menu' aria-labelledby="dropdownMenuButton">
                            <Link onClick={this.selected} className={` dropdown-item ${finalPath === 'Action' && 'active'}`}  to="/series/Action">Action</Link>
                            <Link onClick={this.selected} className={` dropdown-item ${finalPath === 'Comedy' && 'active'}`} to="/series/Comedy">Comedy</Link>
                            <Link onClick={this.selected} className={` dropdown-item ${finalPath === 'Drama' && 'active'}`} to="/series/Drama">Drama</Link>
                          </div>
                        </li>
                        <li className="nav-item">
                          <Link onClick={this.selected} className={`nav-link font-weight-bold ${finalPath === 'new' && 'active'}`}  to="/new">New Serie</Link>
                        </li>
                        <li className="nav-item">
                          <Link onClick={this.selected} className={`nav-link font-weight-bold ${finalPath === 'about' && 'active'} `}  to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                          <Link onClick={this.selected} className={`nav-link font-weight-bold ${finalPath === 'comments' && 'active'}`}  to="/comments">Comments</Link>
                        </li>
                        {!this.props.auth.isAuth && 
                          <li className="nav-item">
                            <Link onClick={this.selected} className={`nav-link text-info mb-2 font-weight-bold bg-dark`}  to="/user/login">Login</Link>
                          </li>
                        }
                        {this.props.auth.isAuth && 
                          <li className="nav-item">
                            <Link onClick={this.selected} className={`nav-link font-weight-bold bg-info  setting text-dark ${finalPath === 'setting' && 'active'}`} to={`/user/setting`}>Setting</Link>
                          </li> 
                        }
                        {this.props.auth.isAuth && 
                          <li className="nav-item">
                            <Link className={`nav-link text-dark font-weight-bold bg-warning`} onClick={this.logout} to="/">Leave</Link>
                          </li> 
                        } 
                        {!this.props.auth.isAuth && <li className="nav-item">
                            <Link className={`nav-link text-info font-weight-bold bg-dark`} onClick={this.selected}  to="/user/register">Register</Link>
                          </li>
                        }
                      </ul>    
                    </div>
                </div>
              </nav>
            </BodyNav>
      </Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth,
    comments: state.comments,
    series: state.series
  }
}
const mapDispatchToProps = dispatch => {
  return {
    destroyAuth : () => dispatch(ActionCreator.destroyAuthRequest()),
    destroyComments : () => dispatch(ActionCreator.destroyComments()),
    destroySeries : () => dispatch(ActionCreator.destroySeries()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ScreensElementsNav) 