import React from "react";
import { connect } from "react-redux";
import { history } from "../../_helpers/history";
import ProductDetail from "../Presenters/productDetail";
import { itemsActions, mainActions } from "../../store/Actions";

function mapStateToProps(state) {
  return {  
    ...state.itemsReducer 
  };

}

class Deatail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    let exp = /\//i;
    let id = this.props.location.pathname.split(exp);

    if (!id[2]){
      history.push(`/`);
      return
    }
    this.props.dispatch(itemsActions.getItemDetail(id[2], ()=>{
      this.props.dispatch(mainActions.getCategory(this.props.item.item.category_id))
    }))
    this.props.dispatch(itemsActions.getItemDescription(id[2]))
  }

  render() {
    return (
      <div className="container">
        <ProductDetail
          {...this.props.item.item}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Deatail);