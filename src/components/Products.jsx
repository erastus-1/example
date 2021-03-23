import React from "react";
import Sa1 from "../scss/img/sa1.jpg";
import S1 from "../scss/img/s1.jpg";
import C1 from "../scss/img/c1.jpg";
import F1 from "../scss/img/f1.jpg";
import Be1 from "../scss/img/be1.jpg";
import B1 from "../scss/img/b1.jpg";
import bla1 from "../scss/img/bla1.jpg";
import Cookie from "../scss/img/cookie.jpeg";
import P1 from "../scss/img/p1.jpg";
import { Card, Image } from "semantic-ui-react";

const CardImageCard = () => (

  <Card.Group
    itemsPerRow={3}
    className="container"
    style={{ paddingTop: "20px", paddingBottom: "20px" }}
  >
    <Card>
      <Image src={Sa1} style={{ height: "200px", width: "350px" }} />
      <Card.Content>
        <Card.Description style={{ height: 70 }}>
          <h6>
            <strong>Cookies</strong>
          </h6>
          <p>best snacks in town</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <button className="btn btn-outline-secondary add-btn">
          Make Purchase
        </button>
        <h4
          style={{
            display: "inline-block",
            float: "right",
            color: "blue",
          }}
        >
          <strong>$100</strong>
        </h4>
      </Card.Content>
    </Card>

    <Card>
      <Image src={S1} style={{ height: "200px", width: "350px" }} />
      <Card.Content>
        <Card.Description style={{ height: 70 }}>
          <h6>
            <strong>Cookies</strong>
          </h6>
          <p>best snacks in town</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <button className="btn btn-outline-secondary add-btn">
          Make Purchase
        </button>
        <h4
          style={{
            display: "inline-block",
            float: "right",
            color: "blue",
          }}
        >
          <strong>$100</strong>
        </h4>
      </Card.Content>
    </Card>

    <Card>
      <Image src={C1} style={{ height: "200px", width: "350px" }} />
      <Card.Content>
        <Card.Description style={{ height: 70 }}>
          <h6>
            <strong>Cookies</strong>
          </h6>
          <p>best snacks in town</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <button className="btn btn-outline-secondary add-btn">
          Make Purchase
        </button>
        <h4
          style={{
            display: "inline-block",
            float: "right",
            color: "blue",
          }}
        >
          <strong>$100</strong>
        </h4>
      </Card.Content>
    </Card>

    <Card>
      <Image
        src={F1}
        wrapped
        ui={true}
        style={{ height: "200px", width: "350px" }}
      />
      <Card.Content>
        <Card.Description style={{ height: 70 }}>
          <h6>
            <strong>Cookies</strong>
          </h6>
          <p>best snacks in town</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <button className="btn btn-outline-secondary add-btn">
          Make Purchase
        </button>
        <h4
          style={{
            display: "inline-block",
            float: "right",
            color: "blue",
          }}
        >
          <strong>$100</strong>
        </h4>
      </Card.Content>
    </Card>

    <Card>
      <Image src={Be1} style={{ height: "200px", width: "350px" }} />
      <Card.Content>
        <Card.Description style={{ height: 70 }}>
          <h6>
            <strong>Cookies</strong>
          </h6>
          <p>best snacks in town</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <button className="btn btn-outline-secondary add-btn">
          Make Purchase
        </button>
        <h4
          style={{
            display: "inline-block",
            float: "right",
            color: "blue",
          }}
        >
          <strong>$100</strong>
        </h4>
      </Card.Content>
    </Card>

    <Card>
      <Image src={B1} style={{ height: "200px", width: "350px" }} />
      <Card.Content>
        <Card.Description style={{ height: 70 }}>
          <h6>
            <strong>Cookies</strong>
          </h6>
          <p>best snacks in town</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <button className="btn btn-outline-secondary add-btn">
          Make Purchase
        </button>
        <h4
          style={{
            display: "inline-block",
            float: "right",
            color: "blue",
          }}
        >
          <strong>$100</strong>
        </h4>
      </Card.Content>
    </Card>

    <Card>
      <Image src={Cookie} style={{ height: "200px", width: "350px" }} />
      <Card.Content>
        <Card.Description style={{ height: 70 }}>
          <h6>
            <strong>Cookies</strong>
          </h6>
          <p>best snacks in town</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <button className="btn btn-outline-secondary add-btn">
          Make Purchase
        </button>
        <h4
          style={{
            display: "inline-block",
            float: "right",
            color: "blue",
          }}
        >
          <strong>$100</strong>
        </h4>
      </Card.Content>
    </Card>

    <Card>
      <Image src={bla1} style={{ height: "200px", width: "350px" }} />
      <Card.Content>
        <Card.Description style={{ height: 70 }}>
          <h6>
            <strong>Cookies</strong>
          </h6>
          <p>best snacks in town</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <button className="btn btn-outline-secondary add-btn">
          Make Purchase
        </button>
        <h4
          style={{
            display: "inline-block",
            float: "right",
            color: "blue",
          }}
        >
          <strong>$100</strong>
        </h4>
      </Card.Content>
    </Card>

    <Card>
      <Image src={P1} style={{ height: "200px", width: "350px" }} />
      <Card.Content>
        <Card.Description style={{ height: 70 }}>
          <h6>
            <strong>Cookies</strong>
          </h6>
          <p>best snacks in town</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <button className="btn btn-outline-secondary add-btn">
          Make Purchase
        </button>
        <h4
          style={{
            display: "inline-block",
            float: "right",
            color: "blue",
          }}
        >
          <strong>$100</strong>
        </h4>
      </Card.Content>
    </Card>
  </Card.Group>
);

export default CardImageCard;
