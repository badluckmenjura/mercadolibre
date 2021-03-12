import React from "react";
import { connect } from "react-redux";
import { history } from "../../_helpers/history";
import EmpyResults from "../Presenters/empyResults";
import Item from "../Presenters/item";
import { itemsActions, mainActions } from "../../store/Actions";
import { category } from "../../_helpers/category";

function mapStateToProps(state) {
  return {  
    ...state.mainReducer, 
    ...state.itemsReducer
  };

}

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    let search =[]
    if (!this.props.search){
      let exp = /(?<=%22).*(?=%22)/i;
      search = this.props.location.search.match(exp);
      if (!search) {
        history.push(`/`);
        return
      }
    }
    this.props.dispatch(itemsActions.getItems(search[0] ? search[0] : this.props.search, ()=>{
      this.props.dispatch(mainActions.getCategory(category(this.props.items.items)))
    }))
  }

  goToDetail(id){
    history.push(`/items/${id}`);
  }

  render() {
    return (
      <div className="container">
        {!this.props.items.items || this.props.items.items.length == 0 &&
          <EmpyResults/>
        }
        {this.props.items.items && this.props.items.items.length > 0 &&
          <div className="results">
            { this.props.items.items.map((item, index) => {
              return ( 
                <Item 
                  key = {index}
                  {...item}
                  goTo ={this.goToDetail.bind(this)}
                />
              )
            })}
          </div>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(List);