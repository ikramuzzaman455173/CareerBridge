import React from 'react'
import Container from '../Components/Container/Container'

const HomePage = () => {
  return (
    <>
      <Container>
        <div className='text-center text-big bor dark-bor font-bold cardbg-light font-lightFont dark:font-darkFont p-5  text-4xl mt-5'>This Is Our Header Page Components 😃</div>
        <div className='text-center dashed  text-4xl mt-5 text-rootColor dark:text-hoverRootColor'>This Is Our Header Page Components 😃</div>
      </Container>

    </>
  )
}

export default HomePage