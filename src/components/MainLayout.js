import React from 'react'
import Sidebar from './common/Sidebar'
import Home from './Home';

export default function MainLayout() {
  return (
    <div className="flex h-screen transition-all duration-300 ease-in-out">
      <Sidebar/>
      <Home/>
    </div>
  )
}
