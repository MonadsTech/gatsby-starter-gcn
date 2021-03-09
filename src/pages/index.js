import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/SEO'

const HomePage = () => (
  <div>
    <SEO title="Home" description="Main Page" />
    <div>
      <p>Home Page</p>
      <p>
        This is <Link to="/">homepage</Link> of your amazing future project. 
      </p>  
    </div>
  </div>
)

export default HomePage
