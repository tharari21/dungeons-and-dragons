import React from "react";

const MainMenu = ({ setScreen }) => {
  return (
    <div className="screen">
      {/*fs-overlay = full screen overlay */}
      <video autoPlay muted loop id="my-video">
        <source src="./public/H264HD1080.mov" type="video/mp4"></source>
      </video>
      <div className="" id="fs-overlay">
        <img
          id="header-img"
          src="https://1000logos.net/wp-content/uploads/2021/08/Dungeons-and-Dragons-Logo-2014.png"
          alt=""
        />
        <div className="menu-links">
          <h3 onClick={() => setScreen("create")}>Create a Character</h3>
          <h3 onClick={() => setScreen("main")}>About Dungeouns & Dragons</h3>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
