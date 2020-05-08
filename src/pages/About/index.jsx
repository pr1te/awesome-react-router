import React from 'react';

import { useHistory } from 'react-router-dom';


/**
 * About page
 *
 * @return {JSX.Element}
 */
function About () {
  const history = useHistory();

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => history.push({ pathname: '/home', search: '?lang=th', state: { some: 'state' } })}>Home</button>
    </div>
  );
}

export default About;
