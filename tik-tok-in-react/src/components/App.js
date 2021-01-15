// import logo from './logo.svg';   // REMOVE THIS FILE
import React from "react";
import Video from "./Video";
// import './App.css';
// import './index.css';


function App() {
  return (
    <div className="app">
      {/* BEM */}
      <div className="app_videos">
        {/* Video Footer component */}
        <Video /> 
        {/* Video Sidebar component (heart, chat, share) */}
        <Video />
        {/* Video component (ticker, disk spinner) */}
        <Video />
        <Video />
      </div>    
    </div>
  );
}

export default App;
