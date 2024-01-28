import React from 'react';
import LoggedInRouter from './router/logged-in-router';
import LoggedOutRouter from './router/logged-out-router';

function App() {
  return (
    <div className="App">
       <LoggedInRouter />
       <LoggedOutRouter />
    </div>
  );
}

export default App;
