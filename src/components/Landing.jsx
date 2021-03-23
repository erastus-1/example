import React from "react";
import Ck1 from "../scss/img/ck1.jpg";
import Shop from "../scss/img/shop.jpg";
import En from "../scss/img/en.jpg";
import Deliver from "../scss/img/deliver.png";
import { Grid } from "semantic-ui-react";

const GridRows = () => (
  <Grid
    columns={4}
    className="container"
    style={{ paddingTop: "50px", paddingBottom: "50px" }}
  >
    <h1 style={{ textalign: "center", fontStyle: "bold" }}>Our Services</h1>

    <Grid.Row>
      <Grid.Column>
        <img style={{ height: "200px", width: "200px" }} src={Ck1} alt="" />
        <h3 className style={{ marginleft: "50px", fontWeight: "bold" }}>
          WE COOK
        </h3>
      </Grid.Column>

      <Grid.Column>
        <img style={{ height: "200px", width: "200px" }} src={Shop} alt="" />
        <h3 className style={{ marginleft: "20px", fontWeight: "bold" }}>
          YOU ORDER
        </h3>
      </Grid.Column>

      <Grid.Column>
        <img
          style={{ height: "200px", width: "200px" }}
          src={Deliver}
          alt="delivery"
        />
        <h3 className style={{ marginleft: "50px", fontWeight: "bold" }}>
          WE DELIVER
        </h3>
      </Grid.Column>

      <Grid.Column>
        <img style={{ height: "200px", width: "200px" }} src={En} alt="" />
        <h3 className style={{ marginleft: "50px", fontWeight: "bold" }}>
          YOU ENJOY
        </h3>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridRows;
