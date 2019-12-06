import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({ counter, dec, inc, rnd }) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button
        className="btn btn-primary btn-lg mr-3"
        onClick={dec}
      >
        DEC
      </button>
      <button
        className="btn btn-primary btn-lg mr-3"
        onClick={inc}
      >
        INC
      </button>
      <button
        className="btn btn-primary btn-lg"
        onClick={rnd}
      >
        RND
      </button>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    counter: state
  }
};

export default connect(mapStateToProps, actions)(Counter);
