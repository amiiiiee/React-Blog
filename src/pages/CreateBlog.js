import React, { useContext, useRef } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BlogContext } from "../App";
  
const CreateBlog = () => {
  const { post, setPost } = useContext(BlogContext);    
  const titleref = useRef({});
  const blogref = useRef({});
  const handleClick = () => {
    const newTitle = titleref.current.value;
    const newBlog = blogref.current.value;

    const value = { title: newTitle, body: newBlog, id: Date.now() };

    setPost([...post, value]);
  };
  return (
    <div>
      <Container className="border p-4 m-5  ">
        <h1>Create Blog</h1>
        <textarea
          placeholder="Write..titile..."
          ref={titleref}
          rows={2}
          cols={50}
        />
        <br />
        <br />
        <textarea
          placeholder="Write..body..."
          ref={blogref}
          rows={10}
          cols={80}
        />
        <br />
        <br />

        <Link to="/blog">
          <Button className="bg-success" onClick={handleClick}>
            Save
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default CreateBlog;
