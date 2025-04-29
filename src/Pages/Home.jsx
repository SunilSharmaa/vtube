import React from 'react'
import Sidebar from '../Components/Sidebar'
import MainContainer from '../Components/MainContainer'

const Home = () => {
  return (
    <div className='grid grid-flow-col grid-cols-12 h-[calc(100vh-4rem)]'>
        <Sidebar />
        <MainContainer />
    </div>
  )
}

export default Home