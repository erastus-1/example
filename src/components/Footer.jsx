import React from "react";
import { Grid } from "semantic-ui-react";

const GridRows = () => (
  <Grid columns={4}>
    <Grid.Row style={{ backgroundColor: "wheat" }}>
      <Grid.Column>
        <div>
          <h5
            className="font-weight-bold text-uppercase mb-4"
            style={{ color: "blue", paddingLeft: "20px" }}
          >
            ABOUT US
          </h5>
          <p style={{ paddingLeft: "20px" }}>
            We ensure you get your food conviniently and provide you with
            efficient pocket friendly prices.
          </p>
        </div>
      </Grid.Column>
      <Grid.Column>
        <div>
          <h5
            className="font-weight-bold text-uppercase mb-4"
            style={{ color: "blue" }}
          >
            Why US
          </h5>
          <p>
            We ensure you get your food at the set time and provide a free
            delivery to clients within Nairobi
          </p>
        </div>
      </Grid.Column>

      <Grid.Column>
        <div>
          <h5
            className="font-weight-bold text-uppercase mb-4"
            style={{ color: "blue" }}
          >
            CONTACT US
          </h5>
          <ul className="list-unstyled">
            <li>
              <p>
                <i className="fas fa-envelope mr-3" /> ruiru@gmail.com
              </p>
            </li>
            <li>
              <p>
                <i className="fas fa-phone mr-3" /> +25477000000
              </p>
            </li>
          </ul>
        </div>
      </Grid.Column>
      <Grid.Column>
        <h5
          className="font-weight-bold text-uppercase mb-4"
          style={{ color: "blue", paddingLeft: "20px" }}
        >
          FOLLOW US
        </h5>
        <a
          href="/"
          type="button"
          style={{ paddingRight: "15px" }}
          className="btn-floating btn-fb"
        >
          <i className="fab fa-facebook-f" />
        </a>
        <a
          href="/"
          type="button"
          style={{ paddingRight: "15px" }}
          className="btn-floating btn-tw"
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          href="/"
          type="button"
          style={{ paddingRight: "15px" }}
          className="btn-floating btn-gplus"
        >
          <i className="fab fa-google-plus-g" />
        </a>
        <a
          href="/"
          type="button"
          style={{ paddingRight: "5px" }}
          className="btn-floating btn-dribbble"
        >
          <i className="fab fa-dribbble" />
        </a>
        <p>© 2021 Copyright:</p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridRows;
