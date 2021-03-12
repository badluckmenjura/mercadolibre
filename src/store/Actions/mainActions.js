import { main } from "../Actions/constants";
import { instance as axiosInstance } from "../../_helpers/serviceConf";


export function FailedRequest(error) {
  return {
    type: main.FAILED_REQUEST,
    asyncPetition: true,
    err: error
  }
}

export function setRequesting() {
  return {
    type: main.SET_REQUESTING
  }
}

export function ChangeSearchValue(value) {
  return {
    type: main.UPDATE_SEARCH_TEXT,
    payload : value
  }
}

export function getCategoryRequest(){
  return {
    type: main.BREADCRUMB_REQUEST,
    asyncPetition: true
  }
}

export function getCategorySuccess(response) {
  return {
    type: main.BREADCRUMB_SUCCESS,
    asyncPetition: true,
    payload: response
  }
}

export function getCategory(id) {
  return function (dispatch) {
    dispatch(getCategoryRequest());
    axiosInstance.get(`/categories/${id}`, null, {})
    .then((response) => {
      dispatch(getCategorySuccess(response.data.path_from_root))
    }, (err) => {
      let error = {
        code : err?.response?.data?.error.code || 0, 
        message: err?.response?.data?.error.message || err.message || err, 
        details: err?.response?.data?.error.details || '', 
        trace: err?.response?.data?.error.trace || ['']
      }
      dispatch(FailedRequest(error))
      dispatch(getCategorySuccess([]))
    });
  }
}