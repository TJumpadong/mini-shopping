import superagent from 'superagent';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  productList: []
}

export const actionTypes = {
  GET_PRODUCT_LIST: 'PRODUCT/GET_PRODUCT_LIST',
  GET_PRODUCT: 'PRODUCT/GET_PRODUCT',
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

export const getProduct = () => dispatch => {
  return dispatch({
    type: actionTypes.GET_PRODUCT
  })
}

export const initStore = (state = initialState) => {
  return createStore(reducer, state, applyMiddleware(thunkMiddleware))
}
