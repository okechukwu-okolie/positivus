import React from 'react'
import styled from 'styled-components'

const ServicesCard = () => {
  return (
    <Container>
       
        <div className='textImage'>
            <div className="text">
                <h1>search engine <br />optimization</h1>
                <div className='learn'>
                    <img src="/learnMore.png" alt="" />
                    <p>Learn more</p>
                </div>
            </div>
            <div className='image'>
                <img src="/searchEngine.png" alt="" />
            </div>
        </div>

    </Container>
  )
}

export default ServicesCard

const Container = styled.div`




.textImage{
    display:flex;
    border: solid black 1px;
    padding: 20px;
    width:fit-content;
    border-radius: 15px;
    margin:10px;
    box-shadow: 0px 2px 0px 1px black;

   .image{
    margin-left: 55px;
   }
}
.text{
    h1{
        margin-bottom: 60px;
    }


    .learn{
        display: flex;
        align-items: center;
    }
    img{
        margin-right: 10px;
    }

}
 
  
  `