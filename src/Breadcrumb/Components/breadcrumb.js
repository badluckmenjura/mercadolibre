import React from "react";
import {connect} from "react-redux";

function mapStateToProps(state) {
  return {
    ...state.mainReducer
  };
  
}

class Breadcrumb extends React.Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return (
        <div className=" breadcrumb container row">
            {this.props.breadcrumb.map((item, index) => {
              return ( 
                <h4 key={index}>{item.name}</h4>
              )
            })
          }
        </div> 
    );
  }
}

export default connect(mapStateToProps)(Breadcrumb);