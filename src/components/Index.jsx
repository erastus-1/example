import React from "react";
import Cook from "../scss/img/cook.jpg";
import { Grid } from "semantic-ui-react";

const GridRows = () => (
  <Grid
    columns={3}
    style={{
      paddingTop: "50px",
      paddingBottom: "50px",
      backgroundImage: `url(${Cook})`,
      width: "100%",
      height: 400,
    }}
  >
    <Grid.Row>
      <Grid.Column>
        <button
          style={{
            borderRadius: "50%",
            borderWidth: 2,
            color: "white",
            backgroundColor: "black",
          }}
          classname="btn btn-outline-dark"
          href="/"
        >
          Offers
        </button>
        <small
          classname="btn btn-outline-dark"
          style={{ fontSize: "large", borderWidth: 2, color: "white" }}
        ></small>
      </Grid.Column>
      <Grid.Column
        style={{
          float: "left",
          marginTop: "10%",
          marginRight: "10%",
          fontWeight: "bolder",
        }}
      >
        <div>
          <button
            style={{
              borderRadius: "50%",
              borderWidth: 2,
              color: "white",
              backgroundColor: "black",
            }}
            classname="btn btn-outline-dark"
            href="/"
          >
            Likes
          </button>
          <button
            style={{
              borderRadius: "50%",
              borderWidth: 2,
              color: "white",
              backgroundColor: "black",
            }}
            classname="btn btn-outline-dark"
            href="/"
          >
            Delivery
          </button>
        </div>
      </Grid.Column>
      <Grid.Column
        style={{
          fontSize: "x-large",
          color: "white",
        }}
      >
        <h2 style={{ fontWeight: "bold", paddingLeft: "150px" }}>
          We Provide all foods at affordable prices..
        </h2>
        <h2
          style={{ fontStyle: "italic", paddingLeft: "150px", color: "white" }}
        >
          By<strong> Ruiru limited </strong> From Nairobi,Kenya
        </h2>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridRows;
