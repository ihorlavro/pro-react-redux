import React, { Component } from 'react';

import Spinner from '../Spinner';

const withData = View => {
  return class extends Component {
    state = {
      data: null,
      loading: false,
      error: false
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    update() {
      this.props.getData().then(data => {
        this.setState({
          loading: true,
          data
        });
      });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
