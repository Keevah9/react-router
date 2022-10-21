import React from 'react'
import { Outlet } from 'react-router'

const SharedProducts = () => {
  return (
    <div>
        <h2>Products</h2>
        <Outlet/>
    </div>
  )
}

export default SharedProducts