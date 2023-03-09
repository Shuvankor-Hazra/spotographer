import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import SingleBlog from "../SingleBlog/SingleBlog";
import SectionHeading from "../SectionHeading/SectionHeading";
import Row from "react-bootstrap/esm/Row";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  });
  return (
    <div className="blog-page-area py-5">
      <Container>
        <SectionHeading heading="Questions Answer" />
        <Row>
          {blogs.map((item) => (
            <SingleBlog key={item.id} item={item}></SingleBlog>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BlogPage;
