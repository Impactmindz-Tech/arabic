import React from 'react'
import Header from '../components/Header'

const DashboardLayout = ({ children }) => {
  return (
    <div className='page'>
      <Header />
      <main className='pt-5'>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout