import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <div>
    <SEO title="404" description="Page Not Found" />
    <div>
      <p>Page Not Found</p>
      <p>
        Please return <Link to="/">home</Link> or use the menu to navigate to a
        different page.
      </p>
    </div>
  </div>
)

export default NotFoundPage
