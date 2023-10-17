import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Gaming from "./components/Gaming";
import Learning from "./components/Learning";
import Live from "./components/Live";
import Movies from "./components/Movies";
import Music from "./components/Music";
import News from "./components/News";
import Trending from "./components/Trending";
import Sports from "./components/Sports";

function App() {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/live" element={<Live />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/sports" element={<Sports />} />
        </Routes>
    </>
  );
}

export default App;
