import React from 'react'
import Helmet from 'react-helmet'
import '../assets/scss/init.scss'

class Layout extends React.Component {
  render () {
    const { children } = this.props

    return (
      <div className='layout'>
        <Helmet defaultTitle='Blog by Paulina Grunwald' />
        {children()}
      </div>
    )
  }
}

export default Layout
