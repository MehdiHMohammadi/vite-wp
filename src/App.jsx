import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Post from "./components/post/post";

function App() {
  console.log('App.jsx');

  return (
    <HashRouter>
      <Routes>
        <Route path="/:id" element={<Post />} />
        {/* <Route path="/posts">
          <Route index element={<Main />} />
          <Route path=":id" element={<Post />} />
        </Route> */}
        <Route exact path="/" element={<Main />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
