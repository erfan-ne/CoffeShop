import MenuItem from "@/components/modules/Menu/MenuItem";
import React from "react";

function MenuPage({ Menus }) {
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

            {Menus.filter((menu) => menu.type === "hot")
              .map((menu) => {
                return (
                  <MenuItem
                    key={menu.id}
                    img={menu.img}
                    price={`$${menu.price}`}
                    title={menu.title}
                    text={menu.desc}
                  />
                );
              })}
          </div>

          <div className="col-lg-6">
            <h1 className="mb-5">Cold Coffee</h1>

            {Menus.filter((menu) => menu.type === "cold")
              .map((menu) => {
                return (
                  <MenuItem
                    key={menu.id}
                    img={menu.img}
                    price={`$${menu.price}`}
                    title={menu.title}
                    text={menu.desc}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
