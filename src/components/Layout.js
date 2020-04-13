import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './layout.css'

function Layout (props) {
    return (
        <main>
            <Navbar />
            {props.children}
            <Footer />
        </main>
    )
}

export default Layout

