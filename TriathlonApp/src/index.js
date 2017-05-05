import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import 'expose?$!expose?jQuery!jquery';
//require("expose?$!jquery");

import Admin from './views/Admin';
import About from './views/About';
import EventInfo from './views/EventInfo';
import Info from './views/Info';
import Layout from './views/Layout';
import Register from './views/Register';
import ReviewComments from './ReviewComments';
import ReviewsPage from './views/ReviewsPage';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Info} />
      <Route path="events" component={EventInfo} />
      <Route path="about" component={About} />
      <Route path="admin" component={Admin} />
      <Route path="register" component={Register} />
      <Route path="reviews" component={ReviewsPage} />
      <Route path="reviews/:postId" component={ReviewComments} /> 
    </Route>
  </Router>
),

  document.getElementById('triathlonApp')
);