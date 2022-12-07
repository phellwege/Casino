import React, {useState} from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import Home from './views/Home';
import GameSelector from './views/gameSelector';
import GameRoom from './views/gameRoom';
import UserProfile from './views/userProfile'
import './App.css';



function App() {
  const [theme, setTheme] = useState({mode: 'light'})

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <React.Fragment>
          <Router>
            <Home path="/"/>
            <GameSelector path='/gameSelector'/>
            <GameRoom path='/gameRoom'/>
            <UserProfile path='/userProfile'/>
          </Router>
      </React.Fragment>
      </div>
    </ThemeProvider>
  );
}

export default App;
