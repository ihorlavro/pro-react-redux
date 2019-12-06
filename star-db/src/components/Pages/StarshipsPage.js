import React from 'react';
import { withRouter } from 'react-router-dom';

import { StarshipList } from '../SwComponents';

const StarshipsPage = ({ history }) => {
  return <StarshipList onItemSelected={itemId => history.push(itemId)} />;
};

export default withRouter(StarshipsPage);
