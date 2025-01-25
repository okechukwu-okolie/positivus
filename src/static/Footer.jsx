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
                <li>About Us</li>
                <li>Services</li>
                <li>Use Cases</li>
                <li>Pricing </li>
                <li>Blogs</li>
            </ul>
        </div>
        <div>
          <img src="/linkedin.png" alt="" />
          <img src="/facebook.png" alt="" />
          <img src="/twitter.png" alt="" />
        </div>
       </div>
       <div className='contact'>
        <div className='info'>
          <button>Contact Us</button>
          <p>Email: info@positivus.com</p>
          <p>Phone:555-556-5570</p>
          <p>Address:1234, Main Street <br />Moonstone City, Startdust state, 12345</p>
        </div>
        <div>
          <input type="text" placeholder='Email' /><button>Subscribe to News</button>
        </div>

       </div>
    </Container>
  )
}

export default Footer

    const Container = styled.div`
    background-color: black;
    color:white;
    height: 300px;
    padding-top: 1px;
    border-radius: 30px 30px 0px 0px;
  .headers{
    
    display:flex;
    justify-content: space-around;
    margin-top: 35px;
    align-items: center
  }
  .logo{
            display:flex;
            align-items: center;
        }
        .links{
            margin-right: -120px;
        }
        .links ul{
            display: flex;
            align-items: center;
            list-style: none;
        }
        .links li{
            margin: 0px 17px ;
            font-size: 20px;
        }
  
  img{
    
  }
`