import React from 'react'
import PropTypes from 'prop-types'
import Appbar from '../components/Appbar.js'

const Layout = ({ children }) => (
    <div>
    <Appbar/>
    <hr/>
    {children}
    </div>
)

Layout.proptype = {
    children: PropTypes.element.isRequired,
  }

export default Layout