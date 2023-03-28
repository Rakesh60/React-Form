import './App.css';
import PlayButton from './components/PlayButton';
import Video from './components/Video';
import videos from './data/data';
function App() {
  return (
    <div className="App" onClick={()=>console.log('App')}>
      <div>Videos</div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        ></Video>
      ))}

      <div style={{ clear: 'both' }}>
        <PlayButton message="play-msg" >Play</PlayButton>

        <PlayButton message="pause-msg">Pause</PlayButton>
      </div>
    </div>
  );
}

export default App;
