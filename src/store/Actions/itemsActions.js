import { items } from "../Actions/constants";
import axios from "axios";
import { history } from "../../_helpers/history";
import { mapItem } from "../../_helpers/mapItem";
import { instance as axiosInstance } from "../../_helpers/serviceConf";


export function FailedRequest(error) {
  return {
    type: items.FAILED_REQUEST,
    asyncPetition: true,
    err: error
  }
}

export function getItemsRequest(){
  return {
    type: items.LIST_REQUEST,
    asyncPetition: true
  }
}

export function getItemsSuccess(response) {
  return {
    type: items.LIST_SUCCESS,
    asyncPetition: true,
    payload: response
  }
}

export function getItems(search, callback) {
  return function (dispatch) {
    dispatch(getItemsRequest());
    axiosInstance.get(`/sites/MLA/search?q=${search}`, null, {})
    .then((response) => {
      let itemsList = response.data.results.map(item=> {
        return {
          ...mapItem(item)
        }
      });
      dispatch(getItemsSuccess({
        author: {
          name: 'dany',
          lastname: 'menjura'
        },
        items: itemsList
      }))
      callback()
    }, (err) => {
      let error = {
        code : err?.response?.data?.error.code || 0, 
        message: err?.response?.data?.error.message || err.message || err, 
        details: err?.response?.data?.error.details || '', 
        trace: err?.response?.data?.error.trace || ['']
      }
      dispatch(FailedRequest(error))
    });
  }
}

export function getItemDetailRequest(){
  return {
    type: items.DETAIL_REQUEST,
    asyncPetition: true
  }
}

export function getItemDetailSuccess(response) {
  return {
    type: items.DETAIL_SUCCESS,
    asyncPetition: true,
    payload: response
  }
}

export function getItemDetail(id,callback) {
  return function (dispatch) {
    dispatch(getItemDetailRequest());
    axiosInstance.get(`/items/${id}`, null, {})
    .then((response) => {
      let item = mapItem(response.data)
      item.picture = response.data.pictures[0].url
      item.sold_quantity = response.data.sold_quantity
      item.price = {}
      item.price.amount = response.data.price+''

      dispatch(getItemDetailSuccess({
        author: {
          name: 'dany',
          lastname: 'menjura'
        },
        item: item
      }))
      callback()
    }, (err) => {
      let error = {
        code : err?.response?.data?.error.code || 0, 
        message: err?.response?.data?.error.message || err.message || err, 
        details: err?.response?.data?.error.details || '', 
        trace: err?.response?.data?.error.trace || ['']
      }
      dispatch(FailedRequest(error))
    });
  }
}

export function getItemDescriptionRequest(){
  return {
    type: items.DESCRIPTION_REQUEST,
    asyncPetition: true
  }
}

export function getItemDescriptionSuccess(response) {
  return {
    type: items.DESCRIPTION_SUCCESS,
    asyncPetition: true,
    payload: response
  }
}

export function getItemDescription(id) {
  return function (dispatch) {
    dispatch(getItemDescriptionRequest());
    axiosInstance.get(`/items/${id}/description`, null, {})
    .then((response) => {
      let item ={}
      item.description = response.data.plain_text
      dispatch(getItemDescriptionSuccess({
        author: {
          name: 'dany',
          lastname: 'menjura'
        },
        item: item
      }))
    }, (err) => {
      let error = {
        code : err?.response?.data?.error.code || 0, 
        message: err?.response?.data?.error.message || err.message || err, 
        details: err?.response?.data?.error.details || '', 
        trace: err?.response?.data?.error.trace || ['']
      }
      dispatch(FailedRequest(error))
    });
  }
}