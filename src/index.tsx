import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
import RouterView from './router/RouterView';
import { BrowserRouter } from 'react-router-dom';
// 引入mobx实例
import { Provider } from 'mobx-react';
import router from './router/router';
import store from './store'
ReactDOM.render(
  <Provider {...store}>
    <BrowserRouter>
      <RouterView routes={router.routes} />
    </BrowserRouter>
  </Provider>,
  
  document.getElementById('root') as HTMLElement
);

