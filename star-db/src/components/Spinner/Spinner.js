import React, { Component } from "react";

import "./Spinner.scss";

export default class Spinner extends Component {
  render() {
    return (
      <div className="spinner-wrap">
        <div className="lds-hourglass"/>
      </div>
    );
  }
}
