import React from 'react'
import Header from '../components/Header'
import BottomMenu from './BottomMenu'

const DashboardLayout = ({ children }) => {
  return (
    <div className='page'>
      <Header />
      <main className='pt-5 relative'>
        {children}

        <BottomMenu />
      </main>
    </div>
  )
}

export default DashboardLayout