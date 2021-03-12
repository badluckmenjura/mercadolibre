import {items} from "../Actions/constants";

const intitalState = {
  isFetching : false,
  items:{},
  breadcrumb : [],
  item:{}
}

const itemsReducers = (state = intitalState, action) => {
  switch (action.type) {

    case items.LIST_SUCCESS:
      let itemsList = JSON.parse(JSON.stringify(state.items))
      itemsList = action.payload
      state.items = itemsList
      return state = {  
        ...state, 
      }

    case items.DESCRIPTION_SUCCESS:
    case items.DETAIL_SUCCESS:
      let itemDetail = JSON.parse(JSON.stringify(state.item))
      itemDetail = {
        author: action.payload.author,
        item: {
          ...itemDetail.item,
          ...action.payload.item
        }
      }
      state.item = itemDetail
      return state = {  
        ...state, 
      }

    case items.DETAIL_REQUEST:
    case items.LIST_REQUEST:
    case items.FAILED_REQUEST:
    default: 
      return state;
  }
}

export default itemsReducers;