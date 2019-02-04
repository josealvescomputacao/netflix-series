import React, { Component, Fragment } from 'react'
import  {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import ActionCreator from '../redux/actionCreators'
import styled from 'styled-components'

import FormSeries from './elements/FormSeries'


const BodyNewSerie = styled.div`
    .positionMessage{
        position: absolute 
        width: 100%
        top: 400px
      }
`

class ScreensNewSeries extends Component{
    state = { 
        name: '',
        status: '',
        genre: '',
        notes: '',
        redirect: ''    
    }

    componentDidMount(){
        this.props.reset() 
    }

    handleChange = field => event => {
        this.setState({[field] : event.target.value})
    }

    saveSeries = () => {
        if (this.state.name === ''){
            this.props.error('The series need to have a name!')
            return
        }
        if (this.state.status === ''){
            this.props.error('Select a status!')
            return
        }
        if (this.state.genre === ''){
            this.props.error('Select a genre!')
            return
        }
        const serie = {
            name : this.state.name,
            status : this.state.status,
            genre : this.state.genre,
            notes : this.state.notes
        }
        const {uid} = this.props.auth.user
        this.props.saveSeries(serie, uid)   
        this.setState({
            name: '',
            status: '',
            genre: '',
            notes: '',
            redirect: `/series/${this.state.genre}`
        })   
    }
  
    render(){
            return (
                <Fragment>
                    {this.props.series.saved && <Redirect to={this.state.redirect} />}
                    <BodyNewSerie>
                        {this.props.series.error && 
                            <p className='text-danger positionMessage'>{this.props.series.errorMessage}</p>
                        }
                        {this.props.series.isLoadding && 
                            <p className='text-success positionMessage'>Waiting...</p>
                        }
                        {this.props.auth.isAuth ?
                            <div>
                                <div>
                                    <FormSeries handleChange={this.handleChange} saveSeries={this.saveSeries} auth={this.props.auth} series={this.props.series} state={this.state}/>
                                </div>
                            </div> :
                            <h2 className='text-warning'>Do login to add series! <Link to={'/user/login'}>Login</Link></h2>
                        }     
                    </BodyNewSerie>      
                </Fragment>          
            )
        }

}

const mapStateToProps = state => {
    return {
        series : state.series,
        auth: state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        saveSeries : (serie, uid) => dispatch(ActionCreator.createSerieRequest(serie, uid)),
        error : message => dispatch(ActionCreator.createSerieFailure(message)),
        reset : () => dispatch(ActionCreator.resetSeries())
    }
}
        
export default connect(mapStateToProps, mapDispatchToProps)(ScreensNewSeries) 
