import React from 'react'
import ServicesCard from './ServicesCard'
import styled from 'styled-components'

const ServicesSection = () => {
  return (
    <Container>
         <div className='services'>
            <h1>Services</h1>
            <p>At our digital marketing agency, we offer a range of services to<br /> help businesses  grow and succeed online. These services include:</p>
        </div>

        <div className='serviceCards'>
            <ServicesCard/>
            <ServicesCard/>
            <ServicesCard/>
            <ServicesCard/>
            <ServicesCard/>
            <ServicesCard/>
        </div>
    </Container>
  )
}

export default ServicesSection

const Container = styled.div`
        

        .services{
            display: flex;
            margin: 40px 0px;
            margin-left:10px;



            h1{
            background-color: #B9FF66;
            width: fit-content;
            padding:5px;
            border-radius: 7px;
            margin-right: 50px;
        }
        }

        .serviceCards{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }

        
        
        `