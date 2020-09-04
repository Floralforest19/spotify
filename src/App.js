import React from 'react';
import SpotifyPlayer from 'react-spotify-player'
import './App.css';

function App() {
  const size = {
    width: '100%',
    height: 300,
  };
  const view = 'list';
  const theme = ' black';

  return (
    <div className="App">
      <header className="App-header">

        <SpotifyPlayer
          uri="https://open.spotify.com/track/0RiRZpuVRbi7oqRdSMwhQY?si=LIq7lCeSRQeIOzFdrpbM_A"
          size={size}
          view={view}
          theme={theme}
        />
      </header>
    </div>
  );
}

export default App;
