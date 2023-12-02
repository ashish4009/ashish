import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeaderComponent from './components/Header';
import BodyComponent from './components/Body';
import FooterComponent from './components/Footer';

const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);