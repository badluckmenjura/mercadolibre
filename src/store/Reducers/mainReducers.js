import { constants } from "../Actions";

const intitalState = {
  isFetching : false,
  search:'',
  breadcrumb : []
}

const mainReducers = (state = intitalState, action) => {
  switch (action.type) {
    case constants.main.SET_REQUESTING:
      return state = {
        ...state,
        isFetching: !state.isFetching
      }

    case constants.main.UPDATE_SEARCH_TEXT:
      let searchText = JSON.parse(JSON.stringify(state.search)) 
      searchText = action.payload
      state.search = searchText
      return state = {  
        ...state, 
      }

    case constants.main.BREADCRUMB_SUCCESS:
      let breadcrumbList = JSON.parse(JSON.stringify(state.breadcrumb)) 
      breadcrumbList = action.payload
      state.breadcrumb = breadcrumbList
      return state = {  
        ...state, 
      }
  
    case constants.main.BREADCRUMB_REQUEST:
    case constants.main.FAILED_REQUEST:
    default: 
      return state;
  }
}

export default mainReducers;