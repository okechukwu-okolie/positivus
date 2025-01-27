import React from 'react'
import styled from 'styled-components'

const ThingsHappenCard = () => {
  return (
    <Container>
        <div className='thingsHappen'>
        <div className='happenText'>
            <h1>
                Let's make things happen
            </h1>
            <p>
            Contact us today to learn more about how our digital <br /> marketing services can help your business grow and<br /> succeed online.
            </p>
            <button>
                Get your free proposal
            </button>
        </div>
        <div className='thingsHappenImage'>
            <img src="/thingsHappenImage.png" alt="" />
        </div>
        </div>
    </Container>
  )
}

export default ThingsHappenCard
const Container = styled.div`


.thingsHappen{
    display: flex;
    justify-content: space-between;
    background-color: #f9f7f7;
    margin: 30px 0;
    padding: 30px;
    border-radius: 20px;
}

.thingsHappenImage{

    img{
        width: 50%;
    }
}
    

`