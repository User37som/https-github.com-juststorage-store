import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import DocsPage from './pages/DocsPage';
import LinksPage from './pages/LinksPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={MainPage} />
        <Route path="/docs" component={DocsPage} />
        <Route path="/links" component={LinksPage} />
      </div>
    </BrowserRouter>
  )
}

export default App;