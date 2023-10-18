import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Gaming from "./components/Gaming";
import Learning from "./components/Learning";
import Live from "./components/Live";
import Movies from "./components/Movies";
import Music from "./components/Music";
import News from "./components/News";
import Trending from "./components/Trending";
import Sports from "./components/Sports";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="w-11/12 h-5/6 md:w-9/12">
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
        </div>
      </div>
    </>
  );
}

export default App;
