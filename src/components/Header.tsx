import React from "react";
import { Navbar, Container } from "react-bootstrap";
interface IHeaderProps {}
const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>React TypeScript Todo List</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
