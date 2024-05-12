import React from 'react';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

const App = () => {
  return (
    <div className='max-w-full max-h-screen mx-auto bg-white'>
  <Header />
  <Section1 />
  <Section2 />
    </div>
  );
}

export default App;
