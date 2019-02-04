import React, {Fragment, Component} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ActionCreator from '../redux/actionCreators'

const BodyHome = styled.div`

    @media (min-width: 320px) { 
    
        img{
            max-height: 150px
        }
        
        .logo{
            width: 180px
        }
      
    }
    @media (min-width: 380px) { 
    
        img{
            max-height: 200px
        }
        
        .logo{
            width: 200px
        }
      
    }
    
    @media (min-width: 480px)  { 
        
        img{
            max-height: 250px
        }
        
        .logo{
            width: 250px
        }
      
    } 
    @media (min-width: 586px)  { 
        
        img{
            max-height: 280px
        }
        
        .logo{
            width: 270px
        }
      
    } 
    @media (min-width: 768px) and (max-width: 992px) { 
        
        img{
            max-height: 380px
        }
        
        .logo{
            width: 300px
        }
      
    }
    @media (min-width: 992px) and (max-width: 1200px){ 
        
        img{
            max-height: 500px
        }
        
        .logo{
            width: 350px
        }
      
    }
    @media (min-width: 1200px) { 
        
        img{
            max-height: 550px
        }
        
        .logo{
            width: 400px
        }
      
    }

`

class ScreensHome extends Component {
    
    componentDidMount(){
        this.props.reset() 
    }
    
    render(){
        return(
            <Fragment>
                <BodyHome>
                    <section>
                        <div>
                            <img alt="logo" className="d-block img-responsive logo mx-auto" src="images/logo2.png" />
                            <p className="text-secondary">Never more forget a serie you watched or someone told you to see.</p>
                        </div>
                    </section>
                    <section>
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                                <div className="container">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100 img-responsive" src="/images/acao.jpg" alt="First slide"></img>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 img-responsive" src="/images/comedia.jpg" alt="Second slide"></img>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 img-responsive" src="/images/drama.jpg" alt="Third slide"></img>
                                        </div>
                                    </div>
                                </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </section>
                </BodyHome>
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
        reset : () => dispatch(ActionCreator.resetAuth()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreensHome) 
