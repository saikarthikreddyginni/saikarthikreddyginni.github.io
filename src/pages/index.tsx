import * as React from 'react'
import Link from 'gatsby-link'

// tslint:disable-next-line:no-any
const IndexPage: React.SFC<any> = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
