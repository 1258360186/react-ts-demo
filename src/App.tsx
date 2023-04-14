import React from 'react';
import './App.css';
import {RouterProvider} from 'react-router-dom';
import routerconfig from './router';

function App() {
  return (
    <div className="App">
      <h1>问卷 FE</h1>
      <RouterProvider router={routerconfig}></RouterProvider>
    </div>
  );
}

export default App;
