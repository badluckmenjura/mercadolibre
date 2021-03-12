import React from "react";
import { connect } from "react-redux";
import EmpySearh from "../Presenters/empySearh";

function mapStateToProps(state) {
  return {};
}

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <EmpySearh/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Index);