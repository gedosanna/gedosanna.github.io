import React from 'react';
import './App.css';
import Heading from './Heading';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Heading text='Licznik w React' classValue='main-heading' />
      </header>
      <Counter initValue={99} />
    </div>
  );
}

export default App;
