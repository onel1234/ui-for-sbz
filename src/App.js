import React from 'react';
import Header from './Header.js';
import LoginForm from './Loginfrom.js';
import Footer from './Footer.js';

import logo from './Screenshot 2024-03-19 101205.png';

function App() {
  return (
    <div className="App">
      <Header />
      <LoginForm />
      <div style={{ textAlign: 'right' }}>
        <img src={logo} alt="" style={{ width: '50%', maxWidth: '300px', marginRight: '10px' }} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
