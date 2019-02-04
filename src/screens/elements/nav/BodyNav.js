  import styled from 'styled-components'


const BodyNav = styled.div`


@media (max-width: 768px) { 
  .fa-bars{
    border-radius: 4px 
    background: #991818
    box-shadow: inset  0px 0px 10px 2px
    border: none
    width: 60px
  }
  .fa-bars:hover{
    border-radius: 7px
    background: #991818
    box-shadow: 0px 0px 15px 5px 
    border: none
  }
  .fa{
    width: 55px
  }
  .navbar-nav{
    width: 156px
    position: absolute
  }
  #navbarSupportedContent{
    display: ${props => props.displayUl === 'block'? 'block': 'none'}
  }

  .nav-item{
    background-color: rgba(0, 0, 0, 0.5)
    border-radius: 5px
  }

  .nav-link{
    color: red
  }
  .nav-link:hover {
    color:white 
  }
  .fa:focus{   
    outline: 0
  }
  .setting {
    background-color: rgba(0, 0, 0, 0.7)
  }
  ul{
    background-color: rgba(0, 0, 0, 0.5)
    border-radius: 5px
  }

  .iconeHome {
    display: ${props => props.display === '' ? 'block' : 'none'}
    color: white
    margin-left: -2%;
  }
  .iconeSeries {
    display: ${props => props.display === 'Action' || props.display === 'Drama' || props.display === 'Comedy' ? 'inline'  : 'none'}
    color: white
    margin-left: -2%;
  }
  .iconeNewSeries {
    display: ${props => props.display === 'new' ? 'block' : 'none'}
    color: white
    margin-left: -2%;
  }
  .iconeAbout {
    display: ${props => props.display === 'about' ? 'block' : 'none'}
    color: white
    margin-left: -2%;
  }
  .iconeComment {
    display: ${props => props.display === 'comments'? 'block'  : 'none'}
    color: white
    margin-left: -2%;
  }
  .iconeSignIn {
    display: ${props => props.display === 'login'  ? 'block' : 'none'}
    color: white
    margin-left: -2%;
  }
  .iconeRegister {
    display: ${props => props.display === 'register' ? 'block' : 'none'}
    color: white
    margin-left: -2%;
  }
  .iconeSetting{
    display: ${props => props.display === 'setting' ? 'block' : 'none'}
    color: white
    margin-left: -2%;
  }
  ul{
    margin-top: 50px
  }
} 

@media (min-width: 768px) and (max-width: 992px) { 
  .nav-link {
    color: #BDBDBD
  }
  .nav-link:hover {
    color: white
  }
  .iconeHome {
    position: relative
    margin-left: -2%;
    margin-right: 0%;
    display: ${props => props.display === '' ? 'none' : 'none'}
  }
  .iconeSeries {
    position: relative
    margin-left: -2%;
    margin-right: 0%;
    display: ${props => props.display === 'Action' || props.display === 'Drama' || props.display === 'Comedy' ? 'none'  : 'none'}
  }
  .iconeNewSeries {
    position: relative
    margin-left: -2%;
    margin-right: 0%;
    display: ${props => props.display === 'new' ? 'none'  : 'none'}
  }
  .iconeAbout {
    position: relative
    margin-left: -2%;
    margin-right: 0%;
    display: ${props => props.display === 'about' ? 'none'  : 'none'}
  }
  .iconeComment {
    position: relative
    margin-left: -2%;
    margin-right: 0%;
    display: ${props => props.display === 'comments'? 'none'  : 'none'}
  }
  .iconeSignIn {
    margin-left: -2%;
    margin-right: 0%;
    display: ${props => props.display === 'login'  ? 'none'  : 'none'}
    color: white
  }
  .iconeRegister {
    margin-left: -2%;
    margin-right: 0%;
    display: ${props => props.display === 'register' ? 'none'  : 'none'}
    color: white
  }
  .iconeSetting {
    margin-left: -2%;
    margin-right: 0%;
    display: ${props => props.display === 'setting' ? 'none'  : 'none'}
    color: white
  }
  .iconeEditSerie{
    margin-left: -2%;
    margin-right: 0%;
    display: ${props => props.display === 'edit' ? 'none' : 'none'}
    color: white
  }

  ul {
    height: 40px
    margin-bottom: 12px
    padding-left: -5px 
  }
  li {
    background: #A90B21;
    border-radius: 4px
    top: 5px;
    margin-right: 1px
    white-space: nowrap             //nao quebra linha de jeito nenhum
  }
}

@media (min-width: 992px) {
  .nav-link {
    color: #BDBDBD
  }
  .nav-link:hover {
    color: white
  }
  .iconeHome {
    display: ${props => props.display === '' ? 'block' : 'none'}
  }
  .iconeSeries {
    display: ${props => props.display === 'Action' || props.display === 'Drama' || props.display === 'Comedy' ? 'inline'  : 'none'}
  }
  .iconeNewSeries {
    display: ${props => props.display === 'new' ? 'block' : 'none'}
  }
  .iconeAbout {
    display: ${props => props.display === 'about' ? 'block' : 'none'}
  }
  .iconeComment {
    display: ${props => props.display === 'comments'? 'block'  : 'none'}
  }
  .iconeSignIn {
    display: ${props => props.display === 'login'  ? 'block' : 'none'}
  }
  .iconeRegister {
    display: ${props => props.display === 'register' ? 'block' : 'none'}
  }
  .iconeSetting {
    display: ${props => props.display === 'setting' ? 'block' : 'none'}
  }
  .iconeEditSerie{
    display: ${props => props.display === 'edit' ? 'block' : 'none'}
  }

  li{
    background: #A90B21;
    border-radius: 4px
    top: 5px;
    margin-right: 8px
    box-shadow: 2px 2px 5px 1px
  }
  li:hover {
    box-shadow: 0px 0px 0px 0px
  }
  .active{
    box-shadow: 1px 1px 5px 1px
  }
  
  ul {
    height: 40px 
    margin-bottom: 12px
    margin-left: -50px
  }
  
}

nav {
  background: #991818; 
  box-shadow: 0px 0px 15px 8px;
  height: 80px
}

.dropdown {
  top:0px;
  position: relative
}

#logo{
  background: black
  border: none
}
#logo:hover{
  box-shadow: inset 0px 0px 5px 5px #999494
  background: white
  cursor: alias
  border: none
}


`
export default BodyNav