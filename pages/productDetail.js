import Head from 'next/head'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'

import TemplateDefault from '../components/TemplateDefault'

export default () => (
  <div>
    <Head>
      <title>Mini Shopping - Million of Shops in Your Pocket</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
    </Head>
    <TemplateDefault>
      <div className="container">
        <h1>DT หูฟังบลูทูธแบบครอบหู รุ่น P47 Wireless (สีเขียวเทา)</h1>
      </div>
    </TemplateDefault>
    <style jsx>{`
      .container {
        padding-top: 50px;
      }

      h1 {
        text-style: bold;
      }
    `}</style>
  </div>
)
