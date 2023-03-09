import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="not-found-area">
      <Container>
        <div className="not-found-text text-center">
          <h2>404</h2>
          <h3>Not Found</h3>
          <h4>There's nothing here.</h4>
          <a href="/" class="router-link-active">
            Bring me home!
          </a>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
