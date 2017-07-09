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
        <Row>
          { [1, 1, 1, 1].map((value, key) => {
            return (
              <Col
                sm={ 3 }
                md={ 3 }
                key={ key }
              >
                <Link>
                  <img
                    src="http://th-live-02.slatic.net/p/2/dt-p47-wireless-2747-0387108-e4aba6806e1c3f9d2dc11088db8c3c12-webp-product.jpg"
                    className="prod-img"
                  />
                </Link>
              </Col>
            )
          }) }
        </Row>
        <Link href="/productDetail">
          <a>Headphone</a>
        </Link>
      </div>
    </TemplateDefault>
    <style jsx>{`
      .container {
        padding-top: 50px;
      }

      .prod-img {
        width: 100%;
      }
    `}</style>
  </div>
)
