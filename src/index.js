import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header'
import Content from './components/content'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Content />
  </React.StrictMode>
);
