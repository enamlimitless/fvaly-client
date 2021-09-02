import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const Home = React.lazy(() => import('pages/Home/Home'));
const Help = React.lazy(() => import('pages/Help/Help'));
// const NoMatch = React.lazy(() => import('pages/NoMatch'));
const AppRouter = () => {
  return (
    <Router>
      <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={Home} />
        <Route path="/help" component={Help} />
        {/* <Route path="*" component={NoMatch} /> */}
        <Route path="/" component={Home} />
        <Route path="/" component={Home} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default AppRouter;
