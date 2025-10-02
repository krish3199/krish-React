import React, { useRef } from "react";

const App = () => {
  let videoRef = useRef();

  let handlePlay = () => {
    videoRef.current.play();
  };

  let handlePause = () => {
    videoRef.current.pause();
  };

  let handleplus = () => {
    videoRef.current.currentTime += 1
  }

  let handlemins = () => {
    videoRef.current.currentTime -= 1

  }

  let handlemuted = () => {
    videoRef.current.muted = !videoRef.current.muted
  }

  let handekfull = () => {
    videoRef.current.volume += 0.1
  }

  let handekmin = () => {
    videoRef.current.volume -= 0.1
  }
  return (
    <>
      <video
        src="https://www.w3schools.com/html/mov_bbb.mp4" 
        ref={videoRef}
        width="500"
       
      ></video>
      <br />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleplus}>++</button>
      <button onClick={handlemins}>--</button>
      <button onClick={handlemuted}>Muted</button>
      <button onClick={handekfull}>Vul ++</button>
      <button onClick={handekmin}>Vul --</button>
    </>
  );
};

export default App;
  