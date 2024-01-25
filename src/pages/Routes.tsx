import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './frontend/home/Home'
import Search from './frontend/search/Search'


const Routing = () => {
  return (
    <div>
     

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search" element={<Search/>} />
        </Routes>
     
    </div>
  )
}

export default Routing
