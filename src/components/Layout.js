import React from 'react'
import Appbar from '../components/Appbar.js'

const Layout = ({ children }) => (
    <div>
    <Appbar/>
    <hr/>
    {children}
    </div>
)

export default Layout