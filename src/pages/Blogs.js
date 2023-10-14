import React, { useContext } from "react";
import { BlogContext } from "../App";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const Blogs = () => {
  const { post } = useContext(BlogContext);

  const { id } = useParams();
  const selectId = post.find((item) => item.id === parseInt(id));

  return (
    <div >
      <h2 className="border p-4 m-5  bg-success">Blog Content</h2>
        <Container className="border p-4 m-5  ">
        
        <h1>{selectId.title}</h1>
        <hr />
        <p>{selectId.body}</p>
    </Container>
      </div>
  );
};

export default Blogs;
