import React from 'react'
import Sidebar from './common/Sidebar'
import Home from './Home';

export default function MainLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar/>
      <Home/>
    </div>
  )
}
