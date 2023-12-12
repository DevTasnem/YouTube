import React from 'react'
import { Routes, Route as R } from 'react-router-dom'
import Home from '../Pages/Home'
import Video from '../Pages/Video'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'

function Route() {
  return (
    <>
        <Routes>
            <R path='/' element={<Home/>}></R>
            <R path='/SignIn' element={<SignIn/>}></R>
            <R path='/SignUp' element={<SignUp/>}></R>
            <R path='/Video/:videoId' element={<Video/>}></R>

        </Routes>
    </>
  )
}

export default Route