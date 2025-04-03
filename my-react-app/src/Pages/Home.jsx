import React from 'react'
import '../Styles/Home.css'
import Adopt from '../Components/Adopt'
import Donate from '../Components/Donate'
import Success_Stories from '../Components/Success_Stories'
import HowItWorks from '../Components/HowItWorks'

const Home = () => {
  return (
    <div>
      <div id='home-img'>

        <div className='flex  justify-center items-center h-70'>

          <h1 className=' text-3xl text-black ' >Hi I'm Luna . Adopt me now !</h1>
        </div>
      </div>

      <Adopt />
      <Donate />
      <Success_Stories />
      <HowItWorks />
    </div>
  )
}

export default Home
