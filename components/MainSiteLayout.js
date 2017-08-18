import Link from 'next/link'
import Head from 'next/head'

const DEFAULT_TITLE = 'Mini Shopping';

export default ({ children, title = DEFAULT_TITLE }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
    </Head>
    { children }
  </div>
)
