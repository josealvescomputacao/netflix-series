import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ActionCreator from '../redux/actionCreators'

import styled from 'styled-components'

var BodySeries = styled.div`


.card {
    border: none;
    background: black;
}

.card-body {
    background: black;
}

#serie {
    border: 1px solid grey
    border-radius: 3px
}

#serie:hover, img:hover {
    box-shadow: 0px 0px 25px 15px;
}


.jumbotron {
    overflow: auto;
    width: 30%;
    border-radius: 10px;
    background: #848484;
    color: white    
}

`

const statsuser = {
    'Assistido' : 'Watched',
    'Assistindo': 'Watching',
    'Assistir': 'Watch' 
}


class ScreensSeries extends Component {

    componentDidMount = () => {  
        if (this.props.auth.isAuth){
            const {uid} = this.props.auth.user
            this.props.load(this.props.match.params.genre, uid) 
        }  
    }

    componentDidUpdate(prevProps){
        if (this.props.auth.isAuth){
            if (prevProps.match.params.genre !== this.props.match.params.genre){
                const {uid} = this.props.auth.user
                this.props.load(this.props.match.params.genre, uid) 
            }
        } 
    }
    
    deleteSeries(serie) { 
        const {uid} = this.props.auth.user
        this.props.remove(serie, uid)
    }


    renderSeries = serie => { 
        return (        
            <div className='mx-auto' key={serie.id}>
                <BodySeries>
                    <div id="serie">
                        <div className="card">
                            <div className="card-header">
                                <h1 className= 'text-danger'>{serie.name.toUpperCase()}</h1>
                                <h4 className='text-info'>{serie.status}</h4>
                            </div>
                            <div className="card-body">
                                <img className="img-fluid" alt="Responsive" src="http://placehold.it/700x350/000/fff" />
                            </div>
                            <h3 className='text-info'>{statsuser[serie.status]}</h3>
                        </div>
                        <p className='text-light  mt-5'>Notes</p>
                        <div  className="jumbotron ml-auto mr-auto">
                            {serie.notes}
                        </div>
                        <div className="d-flex flex-row-reverse mb-3 mr-5">
                            <div className="row">
                                <Link className="btn btn-success mr-3" to={`/series/edit/${serie.genre}/${serie.id}`}>Edit</Link><br/>
                                <Link className="btn btn-success" to='#' onClick={() => this.deleteSeries(serie)}>Delete</Link>
                            </div>
                        </div>    
                    </div>
                </BodySeries>
                <br/>
                <br/>
            </div>    
        )
    }

    
    render(){
        let keys = Object.keys(this.props.series.data)
        return (
            <Fragment>
                {this.props.auth.isAuth ?
                    <div>
                        <h1 className="text-center text-white">Series {this.props.match.params.genre}</h1>
                        {this.props.series.isLoadding &&
                            <p style={{position: 'absolute', width: '100%'}} className='text-info mx-auto'>Loadding...</p>    //used when we mount the component (after newSerie, edit, click into it, and refresh the page)         
                        }   
                        {this.props.series.error &&
                            <p style={{position: 'absolute', width: '100%'}} className='text-danger mt-2 mx-auto'>{this.props.series.errorMessage}</p>    //used when we mount the component (after newSerie, edit, click into it, and refresh the page)         
                        } 
                        <div className='mt-5 mx-auto' style={{width: '60%'}}>
                            {!this.props.series.isLoading && this.props.series.data.length === 1 &&
                                <div className='alert alert-info'>No series resgristred.
                                    <br/>
                                    <Link className="btn btn-default active" to={"/new"}>Add</Link>
                                </div>
                            }   
                            {!this.props.series.isLoading && this.props.series.data.length !== 1 && 
                                keys.map((value,key) => key !== keys.length ? 
                                (value = keys[keys.length-key]) && this.renderSeries(this.props.series.data[value]) :
                                null)
                            }
                        </div>
                    </div> :
                    <h2 className='text-warning'>You need is logged in for seeing your series! <Link to='/user/login'>Login</Link></h2>
                }
            </Fragment>
        )
    }  
}
        

const mapStateToProps = state => {
    return {
        series: state.series,
        auth : state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        load : (genre, uid) => dispatch(ActionCreator.getSeriesRequest(genre, uid)),
        remove : (serie, uid) => dispatch(ActionCreator.removeSerieRequest(serie, uid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreensSeries) 


