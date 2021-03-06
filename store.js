import superagent from 'superagent';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  productList: [],
  product: null,
  seller: null,
}

export const actionTypes = {
  GET_PRODUCT_LIST: 'PRODUCT/GET_PRODUCT_LIST',
  GET_PRODUCT: 'PRODUCT/GET_PRODUCT',
  GET_PRODUCT_SUCCESS: 'PRODUCT/GET_PRODUCT_SUCCESS',
  GET_SELLER: 'PRODUCT/GET_SELLER',
  GET_SELLER_SUCCESS: 'PRODUCT/GET_SELLER_SUCCESS',
  CLEAR_PRODUCT: 'PRODUCT/CLEAR_PRODUCT',
  CLEAR_SELLER: 'PRODUCT/CLEAR_SELLER',
  ERROR: 'ERROR'
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.productList
      }
    case actionTypes.GET_PRODUCT:
      return {
        ...state,
        product: null,
        productLoading: true
      }
    case actionTypes.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.product,
        productLoading: false
      }
    case actionTypes.GET_SELLER:
      return {
        ...state,
        seller: null,
        sellerLoading: true
      }
    case actionTypes.GET_SELLER_SUCCESS:
      return {
        ...state,
        seller: action.seller,
        sellerLoading: false
      }
    case actionTypes.CLEAR_PRODUCT:
      return {
        ...state,
        product: null
      }
    case actionTypes.CLEAR_SELLER:
      return {
        ...state,
        seller: null
      }
    default: return state
  }
}

const fetchProductList = () => {
  return new Promise((resolve, reject) => {
    const request = superagent.get('http://localhost:3000/products')

    request.end((err, { body, text } = {}) => {
      if (err) reject(body || err);
      else resolve(body || JSON.parse(text))
    })
  })
}

const fetchProduct = (productId) => {
  return new Promise((resolve, reject) => {
    const request = superagent.get(`http://localhost:3000/products/${ productId }`)

    request.end((err, { body, text } = {}) => {
      if (err) reject(body || err);
      else resolve(body || JSON.parse(text))
    })
  })
}

const fetchSeller = (sellerId) => {
  return new Promise((resolve, reject) => {
    const request = superagent.get(`http://localhost:3000/sellers/${ sellerId }`)

    request.end((err, { body, text } = {}) => {
      if (err) reject(body || err);
      else resolve(body || JSON.parse(text))
    })
  })
}

export const getProductList = () => dispatch => {
  return fetchProductList().then(
    result => {
      return dispatch({
        type: actionTypes.GET_PRODUCT_LIST,
        productList: result
      })
    },
    error => dispatch({
      type: actionTypes.ERROR,
    })
  )
}

export const getProduct = (productId) => dispatch => {
  dispatch({ type: actionTypes.GET_PRODUCT })

  return fetchProduct(productId).then(
    result => {
      return dispatch({
        type: actionTypes.GET_PRODUCT_SUCCESS,
        product: result
      })
    },
    error => dispatch({
      type: actionTypes.ERROR
    })
  )
}

export const getSeller = (sellerId) => dispatch => {
  dispatch({ type: actionTypes.GET_SELLER })

  return fetchSeller(sellerId).then(
    result => {
      return dispatch({
        type: actionTypes.GET_SELLER_SUCCESS,
        seller: result
      })
    },
    error => dispatch({
      type: actionTypes.ERROR
    })
  )
}

export const clearProduct = () => dispatch => {
  return dispatch({
    type: actionTypes.CLEAR_PRODUCT
  })
}

export const clearSeller = () => dispatch => {
  return dispatch({
    type: actionTypes.CLEAR_SELLER
  })
}

export const initStore = (state = initialState) => {
  return createStore(reducer, state, applyMiddleware(thunkMiddleware))
}
