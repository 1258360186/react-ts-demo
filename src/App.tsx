import React from 'react';
import './App.css';
import {RouterProvider} from 'react-router-dom';
import routerconfig from './router';
import 'antd/dist/reset.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routerconfig}></RouterProvider>
    </div>
  );
}

export default App;
