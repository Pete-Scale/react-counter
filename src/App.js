import React, { useState } from 'react';
// import Counter from './components/counter/counter'

// import Components
import Title from './components/Title/Title'
import CountView from './components/CountView/CountView'
import DecrementBtn from './components/DecrementBtn/DecrementBtn'
import IncrementBtn from './components/IncrementBtn/IncrementBtn'
import ResetBtn from './components/ResetBtn/ResetBtn'

function App() {

  const [count, setCount] = useState(() => 0)

  function subtract() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
      <Title />
      <CountView countState={count} />
      <DecrementBtn />
      <IncrementBtn />
      <ResetBtn />
    </>

    // <Counter />
  );
}

export default App;
