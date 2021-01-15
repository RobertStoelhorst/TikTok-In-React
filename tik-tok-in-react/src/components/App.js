// import logo from './logo.svg';   // REMOVE THIS FILE
import React, { useState, useEffect } from "react";
import Video from "./Video";
import db from "../firebase";
import "../App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    //  fires once when the component loads and whenever video changes
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      {/* BEM */}
      <div className="app_videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
        {/* // HARDCODED >>
        // <Video
        //   url="https://v16m.tiktokcdn.com/0e97cd58f86fa0ebf307a474dd3ee51b/60013af2/video/tos/alisg/tos-alisg-pve-0037c001/f3c3756f388248bd8b160cdf18b9c339/?a=1233&br=3876&bt=1938&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202101150049140101902090923501BC8A&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=Mzhxa3Npd3U1eTMzNTczM0ApNzk7M2Y0OTw4Nzc6Ojg5aWdfZWhtMDZrbnJfLS0uMTRzcy5gLy4xYWAwMzYyLjUxX2I6Yw%3D%3D&vl=&vr="
        //   channel="fedvic97"
        //   description="drunken snowman"
        //   song="unknown piano"
        //   likes={123}
        //   messages={400}
        //   shares={200}
        // /> */}
      </div>
    </div>
  );
}

export default App;
