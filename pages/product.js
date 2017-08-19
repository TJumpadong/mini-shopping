import Head from 'next/head'
import Link from 'next/link'
import { bindActionCreators } from 'redux'
import { initStore, getProduct, clearProduct } from '../store'
import withRedux from 'next-redux-wrapper'

import LayoutDefault from '../components/LayoutDefault'

const ProductPage = ({
  loading,
  product,
  title,
}) => (
  <LayoutDefault title={ title }>
    { loading ?
      <div className="container">
        loading...
      </div> :
      <div className="container">
        <h1>{ product.title }</h1>
        <img src={ product.image } />
        <label>{ product.price }</label>
        <Link href={{ pathname: 'seller', query: { id: product.seller }}}>
          <a>Seller</a>
        </Link>
      </div>
    }
    <style jsx>{`
      .container {
        padding-top: 20px;
      }

      h1 {
        text-style: bold;
      }
    `}</style>
  </LayoutDefault>
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
    const {
      product,
      productLoading: loading,
    } = this.props;

    const title = loading ? 'Mini Shopping' : `${ product.title } - Mini Shopping`;

    return (
      <ProductPage
        product={ product }
        loading={ loading }
        title={ title }
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
