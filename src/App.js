import React, { useState, useEffect } from "react";
import { Player, ControlBar } from "video-react";
import HLSSource from "./HLSSource";
import "video-react/dist/video-react.css";
import "./App.css";

function App() {
  const url = "https://cams.cdn-surfline.com/cdn-int/au-kirra/playlist.m3u8";
  const getUrl = () => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    return params.get("streamUrl");
  };

  useEffect(() => {
    setVideoUrl(getUrl());
  }, []);
  const [videoUrl, setVideoUrl] = useState("");
  return (
    <div className="App">
      <Player>
        <HLSSource isVideoChild src={videoUrl} />
        <ControlBar></ControlBar>
      </Player>
    </div>
  );
}

export default App;
