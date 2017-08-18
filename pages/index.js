import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, getProductList } from '../store'
import withRedux from 'next-redux-wrapper'

import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'

import LayoutDefault from '../components/LayoutDefault'
import ProductDisplayPanel from '../components/ProductDisplayPanel'

const HomePage = ({
  productList
}) => (
  <LayoutDefault>
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
    </div>
    <style jsx>{`
      .container {
        padding-top: 50px;
        min-height: 550px;
      }
    `}</style>
  </LayoutDefault>
)

class HomePageContainer extends React.Component {
  static async getInitialProps({ store, isServer }) {
    await store.dispatch(getProductList())

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
