import "./App.css";
import Video from "./Video";

function App() {
  return (
    // BEM Naming Convention
    <div className="app">
      <h1>TikTok CLone</h1>

      <div className="app__videos">
        <Video
          url="https://cdn.videvo.net/videvo_files/video/free/2018-11/small_watermarked/181015_01_011_preview.webm"
          channel="teetangh"
          description="MERN stack tinder clone"
          song="99 problems but REACT aint one"
          likes={111}
          messages={222}
          shares={333}
        />
        <Video
          url="https://ak.picdn.net/shutterstock/videos/1014188483/preview/stock-footage-aerial-shot-top-view-circle-road-traffic-in-city-at-night-k-time-lapse-bangkok-thailand.webm"
          channel="kaustav"
          description="MERN stack tinder clone"
          song="99 problems but REACT aint one"
          likes={123}
          messages={456}
          shares={789}
        />
      </div>

      {/* app container */}
      {/* videos */}
      {/* videos */}
      {/* videos */}
      {/* videos */}
      {/* videos */}
      {/* videos */}
    </div>
  );
}

export default App;
