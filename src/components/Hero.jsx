import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <Container>
        <div className='imageAndText'>
        <div>
                <h1>Navigating the <br /> digital landscape <br />for success</h1>
            <p>Our digital marketing agency helps businesses<br /> grow and succeed online through a range of<br /> services including SEO, PPC, social media marketing,<br /> and content creation.</p>
            <button>Book a consultation</button>
        </div>
        <div className='heroImage'>
            <img src="/Illustration.png" alt="home hero image" />
        </div>
        </div>
        <div className='images'>
            <div><img src="/amazon.png" alt="" /></div>
            <div><img src="/dribble.png" alt="" /></div>
            <div><img src="/hubspot.png" alt="" /></div>
            <div><img src="/notion.png" alt="" /></div>
            <div><img src="/netflix.png" alt="" /></div>
            <div><img src="/zoom.png" alt="" /></div>
        </div>
    </Container>
  )
}

export default Hero

const Container = styled.div`

    .imageAndText{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 50px;    
}
   

    h1{
        font-size: 50px;
        margin-bottom: 15px;
    }
    p{
        font-size: 17px;
        margin-bottom: 15px;
    }
    button{
        padding: 12px 25px;
        background-color: black;
        color: white;
        cursor: pointer;
        border-radius: 10px;
    }
    .heroImage{
        /* width: 10%; */
    }
    .images{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 20px;
    }
        
        
    .images img{
        width: 65%;
    }

`