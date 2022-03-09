import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
        <Section  
            title='Model S'
            description='Order online for touchless delivery!'
            background='model-s.jpg'
            leftBtnText='Custom Order'
            rightBtnText='Existing Inventory'
        />
        <Section 
            title='Model Y'
            description='Order online for touchless delivery!'
            background='model-y.jpg'
            leftBtnText='Custom Order'
            rightBtnText='Existing Inventory'
        />
        <Section 
            title='Model 3'
            description='Order online for touchless delivery!'
            background='model-3.jpg'
            leftBtnText='Custom Order'
            rightBtnText='Existing Inventory'
        />
        <Section 
            title='Model X'
            description='Order online for touchless delivery!'
            background='model-x.jpg'
            leftBtnText='Custom Order'
            rightBtnText='Existing Inventory'
        />
        <Section 
            title='Lowest Cost Solar Panels in America'
            description='Money-back guarantee'
            background='solar-panel.jpg'
            leftBtnText='Order now'
            rightBtnText='Learn more'
        />
        <Section 
            title='Accessories'
            description=''
            background='accessories.jpg'
            leftBtnText='Shop now'
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`