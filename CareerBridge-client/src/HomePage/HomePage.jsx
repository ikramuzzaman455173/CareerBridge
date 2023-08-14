import React from 'react'
import Container from '../Components/Container/Container'
import App from '../App'

const HomePage = () => {
  return (
    <>
      <Container>
        <div className='text-center font-bold text-blue-400 text-4xl mt-5'>This Is Our Home Page Components 😃</div>
        <App></App>
      </Container>
      
    </>
  )
}

export default HomePage