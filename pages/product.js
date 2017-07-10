import Head from 'next/head'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { initStore, getProduct, clearProduct } from '../store'
import withRedux from 'next-redux-wrapper'

import LayoutDefault from '../components/LayoutDefault'

const ProductPage = ({
  productLoading,
  product
}) => (
  <div>
    <Head>
      { productLoading ?
        <title>Loading - Mini Shopping</title> :
        <title>{ product.title } - Mini Shopping</title>
      }
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
    </Head>
    <LayoutDefault>
      { productLoading ?
        <div className="container">
          <h1>{ product.title }</h1>
          <img src={ product.image } />
          <label>{ product.price }</label>
        </div> :
        <div className="container">
          loading...
        </div>
      }
    </LayoutDefault>
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

class ProductPageContainer extends React.Component {
  static async getInitialProps({ query, store, isServer }) {
    const productId = query.id
    await store.dispatch(getProduct(productId))

    return { isServer }
  }

  componentWillUnmount() {
    this.props.clearProduct()
  }

  render() {
    console.log(this.props);
    return (
      <ProductPage
        product={ this.props.product }
        productLoading={ this.props.productLoading }
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.productLoading,
    product: state.product
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    getProduct: bindActionCreators(getProduct, dispatch),
    clearProduct: bindActionCreators(clearProduct, dispatch)
  }
}

export default withRedux(initStore, mapStateToProps, mapDispathToProps)(ProductPageContainer)
