import React, { Component } from 'react'
import  {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import ActionCreator from '../redux/actionCreators'
import styled from 'styled-components'

import FormSeries from './elements/FormSeries'

const BodyEdit = styled.div`
    #editSerie{
        width: 100%
        position: absolute
        top: 220px
    }
`



class ScreensEditSeries extends Component{
   
    state = {
        name: '',
        status: '',
        genre: '',
        notes: '',
        received: false
    }
    componentDidMount = () => {  
        if (this.props.auth.isAuth){   
            const serie  = {...this.props.match.params}
            const {uid} = this.props.auth.user
            this.props.load(serie, uid)
        }  
    }

    componentDidUpdate(){                                                      //this case is to refresh page
        if (!this.props.series.isLoadding && !this.state.received && this.props.series.serie.name !== undefined){
            this.setState({
                name: this.props.series.serie.name,
                status: this.props.series.serie.status,
                genre: this.props.series.serie.genre,
                notes: this.props.series.serie.notes,
                received: true 
            })
        }
    }

    /*    this option works too for receive props
    static getDerivedStateFromProps(newProps, prevState){
        let serie = {}
        if (prevState.name === '' || prevState.name === undefined){  
            if (newProps.series.serie.name !== prevState.name){
                serie.name = newProps.series.serie.name
            }
            
            if (newProps.series.serie.genre !== prevState.genre){
                serie.genre = newProps.series.serie.genre
            }
            
            if (newProps.series.serie.status !== prevState.status){
                serie.status = newProps.series.serie.status
            }
            if (newProps.series.serie.notes !== prevState.notes){
                serie.notes = newProps.series.serie.notes
            }
            return serie
        }           
    }*/
    
    saveSeries = () => {
        const {name, status, genre, notes} = this.state
        if (name === ''){
            this.props.error('Write the name of the serie!')
            return
        }
        const id = this.props.match.params.id
        const newSerie = {
            id,
            name,
            status,
            genre,
            notes
        }
        const {uid} = this.props.auth.user
        if (this.props.series.serie.genre !== this.state.genre){
            this.props.remove(this.props.series.serie, uid)
        }
        this.props.save(newSerie, uid)
        
        
    }

    handleChange = field => event => {
        this.setState({[field] : event.target.value})
    }
    
    render(){ 
        return (
            <BodyEdit>
                {this.props.series.saved && <Redirect to={`/series/${this.state.genre}`}/>}
                <div>
                    <h1 className='text-white'>Edit Série</h1>
                    {this.props.series.error && 
                        <div className='text-danger'>{this.props.series.errorMessage}</div>
                    }
                    <div id='editSerie'>
                        <FormSeries handleChange={this.handleChange} saveSeries={this.saveSeries} auth={this.props.auth} series={this.props.series} state={this.state}/>
                    </div>
                </div>
            </BodyEdit>
        )
    }
}
const mapStateToProps = state => {
    return {
        series: state.series,
        auth: state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        load : (serie, uid) => dispatch(ActionCreator.getSerieRequest(serie, uid)),
        save: (newSerie, uid) => dispatch(ActionCreator.updateSerieRequest(newSerie, uid)),
        remove : (serie, uid) => dispatch(ActionCreator.removeSerieRequest(serie, uid)),
        error: message => dispatch(ActionCreator.updateSerieFailure(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreensEditSeries) 
