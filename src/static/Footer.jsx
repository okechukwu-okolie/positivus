import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
       <div className='headers'>
       <div className='logo'>
            <img src="/logoWhite.png" alt="logo" />
            <h1>Positivus</h1>
        </div>
        <div className='links'>
            <ul>
                <a href=""><li>About Us</li></a>
                <a href=""><li>Services</li></a>
                <a href=""><li>Use Cases</li></a>
                <a href=""><li>Pricing </li></a>
                <a href=""><li>Blogs</li></a>
            </ul>
        </div>
        <div className='socials'>
          <img src="/linkedin.png" alt="" />
          <img src="/facebook.png" alt="" />
          <img src="/x.png" alt="" />
        </div>
       </div>
       <div className='contact'>
        <div className='info'>
          <button>Contact Us</button>
          <p>Email: info@positivus.com</p>
          <p>Phone:555-556-5570</p>
          <p>Address:1234, Main Street <br />Moonstone City, Startdust state, 12345</p>
        </div>
        <div className='email'>
          <input type="text" placeholder='Email' /><button>Subscribe to news</button>
        </div>
       </div>

      <hr />
      <div className='copyright'>
        <span>2023 Positivus. All rights reserved.</span> <a href=""><span>Privacy policy</span></a>
      </div>
    </Container>
  )
}

export default Footer

    const Container = styled.div`
    background-color: black;
    color:white;
    border-radius: 30px 30px 0px 0px;
    padding-bottom: 30px;
  .headers{
    display:flex;
    justify-content: space-between;
    margin-top: 35px;
    padding-top: 10px;
    align-items: center
  }

  .logo{
            display:flex;
            align-items: center;
        }
        h1{
                margin-left: -10%;
            }
        
        .links ul{
            display: flex;
            align-items: center;
            list-style: none;
        }
        .links li{
            margin: 0px 10px ;
            font-size: 15px;
            color:white;
        }
        .socials{
            display: flex;
            margin-right: -30px;
        }
  
      
.contact{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
}
.info{
 
  button{
    background-color: #B9FF66;
    border-radius: 5px;
    border: none;
    padding: 3px 6px;
    margin-bottom: 15px;
}
}
.email{
  background-color: #292A32;
  height: 18vh;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 50%;

  input{
    padding: 10px;
    border: white solid 1px;
    border-radius: 10px;
    background-color: transparent;
    color: white;
    width: 48%;
  }
  button{
    background-color: #B9FF66;
    border-radius: 10px;
    border: none;
    padding: 12px 25px;
    width: 48%;
  }
}
hr{
  width: 80%;
  text-align: center;
  color: red;
  margin: 30px 0px;
}
span{
  color: white;
}
`