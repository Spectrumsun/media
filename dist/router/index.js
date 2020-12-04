import React from 'react';
import Home from '../Home'
import Series from '../Series';
import Movies from '../Movies';



const routes = {
  '/': () => <Home />,
  '/series': () => <Series />,
  '/movies': () => <Movies />
};


export default routes;