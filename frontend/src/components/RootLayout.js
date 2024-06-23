import React from 'react'
import MyNavbar from './MyNavbar'
import { Outlet } from 'react-router'

function RootLayout() {
    return (
        <div>
            <MyNavbar/>
            <Outlet/>
            
        </div>
    )
}

export default RootLayout
