import React from "react";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import { Card, Button } from "react-bootstrap";
import Image from "./components/Image";
import Product from "./Product";

const App = () => {
  const nom = "Diadji";
  return (
    <div className="App">
      <Card style={{ width: "18rem", margin: "auto", marginTop: 30 }}>
        <Image />
        <Card.Body>
          <Card.Title style={{ textDecoration: "underlined" }}>
            <Name />
          </Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          <Button variant="primary">
            <Price />
          </Button>
        </Card.Body>
      </Card>
      <p style={{ textAlign: "center", fontWeight: "bolder", fontSize: 25 }}>
        Hello {nom}
      </p>
      <img src="/avatar.jpeg" style={{ marginLeft: "40%" }} />
    </div>
  );
};

export default App;
