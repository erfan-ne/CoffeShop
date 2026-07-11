import React from "react";
import MenuItem from "@/components/modules/MenuItem/MenuItem";

function Menu() {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Menu &amp; Pricing
          </h4>
          <h1 className="display-4">Competitive Pricing</h1>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-5">Hot Coffee</h1>

            <MenuItem
              img="images/menu-1.jpg"
              price="$5"
              title="Black Coffee"
              text="Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"
            />

            <MenuItem
              img="images/menu-2.jpg"
              price="$7"
              title="Chocolete Coffee"
              text="Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"
            />

            <MenuItem
              img="images/menu-3.jpg"
              price="$9"
              title="Black Coffee"
              text="Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"
            />
          </div>

          <div className="col-lg-6">
            <h1 className="mb-5">Cold Coffee</h1>

            <MenuItem
              img="images/menu-1.jpg"
              price="$5"
              title="Black Coffee"
              text="Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"
            />

            <MenuItem
              img="images/menu-2.jpg"
              price="$7"
              title="Chocolete Coffee"
              text="Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"
            />

            <MenuItem
              img="images/menu-3.jpg"
              price="$9"
              title="Black Coffee"
              text="Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
