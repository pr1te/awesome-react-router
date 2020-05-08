import React from 'react';

import { useHistory, useParams } from 'react-router-dom';


/**
 * Home page
 *
 * @return {JSX.Element}
 */
function Home () {
  const history = useHistory();
  const params = useParams();

  return (
    <div>
      <h1>Home Page</h1>
      <p>order id: <strong>{params.id || 'please input order id'}</strong></p>
      <button onClick={() => history.push('/about')}>About</button>
    </div>
  );
}

export default Home;
