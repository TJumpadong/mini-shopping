import Head from 'next/head'
import { bindActionCreators } from 'redux'
import { initStore, getSeller, clearSeller } from '../store'
import withRedux from 'next-redux-wrapper'

import LayoutDefault from '../components/LayoutDefault'

const SellerPage = ({
  loading,
  seller,
  title,
}) => (
  <LayoutDefault title={ title }>
    { loading ?
      <div className="container">
        loading...
      </div> :
      <div className="container">
        { seller.firstname }
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

class SellerPageContainer extends React.Component {
  static async getInitialProps({ query, store, isServer }) {
    const sellerId = query.id
    await store.dispatch(getSeller(sellerId))

    return { isServer }
  }

  componentWillUnmount() {
    this.props.clearSeller()
  }

  render() {
    const {
      seller,
      sellerLoading: loading,
    } = this.props;

    const title = loading ? 'Mini Shopping' : `${ seller.firstname } - Mini Shopping`;

    return (
      <SellerPage
        seller={ seller }
        loading={ loading }
        title={ title }
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.sellerLoading,
    seller: state.seller
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    getSeller: bindActionCreators(getSeller, dispatch),
    clearSeller: bindActionCreators(clearSeller, dispatch)
  }
}

export default withRedux(initStore, mapStateToProps, mapDispathToProps)(SellerPageContainer)
