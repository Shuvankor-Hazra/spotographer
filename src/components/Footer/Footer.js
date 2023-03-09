import React from "react";
import Container from "react-bootstrap/esm/Container";
import Logo from "../Logo/Logo";
import LogoImage from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-area text-center bg-dark">
      <Container>
        <Logo image={LogoImage} />
        <p>© 2022 Spotographer, All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
