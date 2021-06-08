import React, { useState } from 'react';

// import Components
import Title from './components/Title/Title'
import CountView from './components/CountView/CountView'
import DecrementBtn from './components/DecrementBtn/DecrementBtn'
import IncrementBtn from './components/IncrementBtn/IncrementBtn'
import ResetBtn from './components/ResetBtn/ResetBtn'

function App() {

  const [count, setCount] = useState(() => 0)

  return (
    <>
      <Title />
      <CountView countState={count} />
      <DecrementBtn />
      <IncrementBtn />
      <ResetBtn />
    </>
  );
}

export default App;
