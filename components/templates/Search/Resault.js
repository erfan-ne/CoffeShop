import MenuItem from "@/components/modules/Menu/MenuItem";
import React from "react";

function Resault({ Search }) {
  return (
    <>
      {Search.length ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mb-5" style={{ textAlign: "center" }}>
                Hot Coffee
              </h1>

              {Search.filter((menu) => menu.type === "hot").map((menu) => {
              return <MenuItem key={menu.id} {...menu} />;
              })}
            </div>

            <div className="col-lg-6">
              <h1 className="mb-5" style={{ textAlign: "center" }}>
                Cold Coffee
              </h1>

              {Search.filter((menu) => menu.type === "cold").map((menu) => {
              return <MenuItem key={menu.id} {...menu} />;
              })}
            </div>
          </div>
        </div>
      ):(
        <h3 style={{textAlign:"center"}}>The product you are looking for was not found!</h3>
      )}
    </>
  );
}

export default Resault;
