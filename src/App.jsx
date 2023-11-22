import React from 'react';
import RegisterForm from './components/RegisterForm';
import Unregister from './components/Unregister';
import SetErrors from './components/SetErrors';

const App = () => {
  return (
    <div class="flex flex-col gap-10 bg-yellow-200">
      <RegisterForm/>
      <Unregister/>
      <SetErrors/>
    </div>
  );
}

export default App;
