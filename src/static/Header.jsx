import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Headers>
        <div className='logo'>
            <img src="/logoBlack.png" alt="logo" />
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
        <button>Request a Quote</button>
    </Headers>
  )
}

export default Header

const Headers = styled.div`
        display:flex;
        justify-content: space-around;
        margin-top: 35px;
        align-items: center;

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
            /* justify-content: space-between; */
            list-style: none;
        }
        .links li{
            margin: 0px 17px ;
            font-size: 20px;
        }

        button{
            padding: 12px 25px;
            border: black 1px solid;
            border-radius: 10px;
            cursor: pointer;
            font-size: 16px;
            background-color: transparent;
        }
  
  `