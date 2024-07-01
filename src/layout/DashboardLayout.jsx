import React from 'react'
import Header from '../components/Header'

const DashboardLayout = ({ children }) => {
  return (
    <div className='page'>
      <Header />
      <div>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout