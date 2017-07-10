import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, getProductList } from '../store'
import withRedux from 'next-redux-wrapper'

import Head from 'next/head'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'

import TemplateDefault from '../components/TemplateDefault'
import ProductDisplayPanel from '../components/ProductDisplayPanel'

const HomePage = ({
  productList
}) => (
  <div>
    <Head>
      <title>Mini Shopping - Million of Shops in Your Pocket</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
    </Head>
    <TemplateDefault>
      <div className="container">
        <Row>
          { productList.map((product, key) => {
            return (
              <Col
                sm={ 3 }
                md={ 3 }
                key={ key }
              >
                <ProductDisplayPanel product={ product } />
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
    `}</style>
  </div>
)

class HomePageContainer extends React.Component {
  static getInitialProps({ store, isServer }) {
    store.dispatch(getProductList())

    return { isServer }
  }

  render() {
    return (
      <HomePage productList={ this.props.productList } />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productList: state.productList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProductList: bindActionCreators(getProductList, dispatch)
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(HomePageContainer)
