import "./App.css";
import { Route, Routes } from "react-router-dom";
import CreateBlog from "./pages/CreateBlog";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import { createContext, useState } from "react";

export const BlogContext = createContext();

function App() {
  const [post, setPost] = useState([]);

  return (
    <div className="App">
      <BlogContext.Provider value={{ post, setPost }}>
        <Routes>
          <Route path="/" element={<CreateBlog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs/:id" element={<Blogs />} />
        </Routes>
      </BlogContext.Provider>
    </div>
  );
}

export default App;
