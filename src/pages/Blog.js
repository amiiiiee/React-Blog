import React, { useContext } from "react";
import { BlogContext } from "../App";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Blog = () => {
  const { post } = useContext(BlogContext);

  return (
    <>
     <h2 className="border p-4 m-5 bg-secondary ">Blogs Titles</h2>
      {post.map((item) => {
        return (
          <Container className="border p-4 m-5  ">
           
            <div key={item.id} className="title">
              <Link to={`/blogs/${item.id}`}>
                <h4>{item.title}</h4>
              </Link>
            </div>
          </Container>
        );
      })}
    </>
  );
};

export default Blog;
