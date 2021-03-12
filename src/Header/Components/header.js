import React from "react";
import {connect} from "react-redux";
import Search from "../Presenters/search";
import { history } from "../../_helpers/history";
import { mainActions, itemsActions } from "../../store/Actions";
import { category } from "../../_helpers/category";


function mapStateToProps(state) {
  return {  
    ...state.mainReducer,
    ...state.itemsReducer
  };
}

class Header extends React.Component {
  constructor(props){
    super(props)
  }

  goToSearch(){
    history.push(`/items?search="${this.props.search}"`);
    this.props.dispatch(itemsActions.getItems(this.props.search, ()=>{
      this.props.dispatch(mainActions.getCategory(category(this.props.items.items)))
    }))
  }

  onKeyPress(e){
    if (e.charCode == 13) {
      this.goToSearch()
    }
  }

  change(e) {
    this.props.dispatch(mainActions.ChangeSearchValue(e.target.value));
  }

  render(){
    return (
      <header>
        <div className="container row">
          <div className="logo column-content column-content--1">
            < img src='/img/Logo_ML.png' srcSet="/img/Logo_ML@2x.png 2x" alt='logo'/>
          </div>
          <Search
            value = {this.props.search}
            onChange = {this.change.bind(this)}
            goTo = {this.goToSearch.bind(this)}
            keyPress = {this.onKeyPress.bind(this)}
          />
        </div> 
      </header>
    );
  }
}

export default connect(mapStateToProps)(Header);