import React from 'react'
import Navbar from '../components/navbar'
import { Outlet } from "react-router"
import Footer from '../components/footer'

function UserRoot() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default UserRoot
