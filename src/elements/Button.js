import styled from 'styled-components'

const Button = styled.button`

    width: ${props => props.width ? props.width : '100%'}
    background: ${props => props.background ? props.background : 'black'}
    color: ${props => props.color ? props.color : 'white'}
    border: none
    
    :focus{  
        outline: 0
    }


  .button {
    min-width: 100px;
    height: 50px;
    border: none;
    color: #ffffff;
    pading: 20px;
    font-size: 24px;
    border-radius: 10px;
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 900ms ease
  }

  .button:focus{
    outline: 0
  } 
    

  .button1 {
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    color: palevioletred;
    border: 2px solid palevioletred;
  }



  .button2 {
    background: rgb(8, 131, 168)
  }
  .button2:hover {
    background: white;
    color : rgba(5, 182, 236, 0.822);
    box-shadow: 0px 0px 25px 10px;
  }



  @keyframes bounce {
    0%, 20%, 60%, 100% {
      -webkit-transform: translateY(0);
      trasform: translateY(0):
    }
    40% {
      -webkit-transform: translateY(-20px);
      trasform: translateY(-20px):
    }
    80% {
      -webkit-transform: translateY(-10px);
      trasform: translateY(-10px):
    }
  }
  .button3{
    background: #f18f01;
  }
  .button3:hover{
    animation: bounce 700ms
  }


  .button4{
    background: #376693;
    transform-style: preserve-3d;
  }
  .button4:after{
    top: 0px;
    left: 0;
    width: 100%;
    height: 97%;
    padding: 5px;
    position: absolute;
    background: #3a9999;
    border-radius: 10px;
    content: "Salvar";
    transform-origin: left bottom;
    transform: rotateX(90deg);
  }
  .button4:hover{
    transform-origin: center bottom;
    transform: rotateX(-90deg) translateY(100%)
  }
  
  `


export default Button