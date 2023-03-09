import Col from "react-bootstrap/esm/Col";
import "./SingleBlog.css";

const SingleBlog = ({ item }) => {
  return (
    <Col md={4}>
      <div className="single-blog p-3">
        <h3>{item.h3}</h3>
        <p>{item.p}</p>
      </div>
    </Col>
  );
};

export default SingleBlog;
