import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  productList: [],
  name: 'thew'
}

export const actionTypes = {
  GET_PRODUCT_LIST: 'PRODUCT/GET_PRODUCT_LIST',
  GET_PRODUCT: 'PRODUCT/GET_PRODUCT'
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

export const getProductList = () => (dispatch, getState) => {
  return dispatch({
    type: actionTypes.GET_PRODUCT_LIST,
    productList: [{
      title: 'Title',
      price: 100,
      image: 'http://th-live-02.slatic.net/p/8/travel-folding-bag-black-6087-3992659-a3186cf1ab5cefff550b05aaae6607d7-webp-product.jpg'
    }]
  })
}

export const getProduct = () => dispatch => {
  return dispatch({
    type: actionTypes.GET_PRODUCT
  })
}

export const initStore = (state = initialState) => {
  return createStore(reducer, state, applyMiddleware(thunkMiddleware))
}
