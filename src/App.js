import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import PageContainer from './components/PageContainer'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
}


function App() {
  return (
    <div style={styles} className="App">
      <Header/>
      <PageContainer/>
    </div>
  );
}

export default App;
