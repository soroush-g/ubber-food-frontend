import React from 'react';
import LoggedInRouter from './router/logged-in-router';
import LoggedOutRouter from './router/logged-out-router';

function App() {
  return 
       <LoggedInRouter />
       <LoggedOutRouter />

  );
}

export default App;
