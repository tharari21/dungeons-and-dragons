import "./App.css";
import React from "react";

// JSX = javascript XML - javascript code written with XML format
// XML is a markup language like html where you can make open and closing tags with whatever names you want.
// Components can only return one thing - no siblings allowed
function App() {
  return (
    <div className="screen">
      {/*fs-overlay = full screen overlay */}
      <video autoPlay muted loop id="my-video">
        <source
          src="https://a2development.s3.amazonaws.com/H264HD1080.mov"
          type="video/mp4"
        ></source>
      </video>
      <div className="" id="fs-overlay">
        <img
          id="header-img"
          src="https://1000logos.net/wp-content/uploads/2021/08/Dungeons-and-Dragons-Logo-2014.png"
        />
      </div>
    </div>
  );
}
export default App;
