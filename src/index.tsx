import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import IconButton from './common/components/IconButton';
import { IoAdd, IoBag, IoClose } from 'react-icons/io5';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      {/* <IconButton variant="primary">
        <IoBag />
      </IconButton>
      <IconButton variant="secondary">
        <IoAdd />
      </IconButton>
      <IconButton variant="secondary" disabled>
        <IoAdd />
      </IconButton>

      <IconButton variant="tertiary">
        <IoClose />
      </IconButton> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
