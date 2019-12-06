import React, { Component, Fragment } from 'react';

import SwapiService from '../../services/SwapiService';

import PlanetView from './PlanetView';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

import './RandomPlanet.scss';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {
      id: null,
      name: null,
      population: null,
      rotationPeriod: null,
      diameter: null,
    },
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false,
    });
  };

  onError = error => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 20 + 3);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorIndicator = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <Fragment>
        <div className="random-planet jumbotron rounded">
          {errorIndicator}
          {spinner}
          {content}
        </div>
      </Fragment>
    );
  }
}
