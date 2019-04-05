import React from "react";


const Main = props => (
  <div className="container-fluid">
    <div className="row" style={{ height: "100vh" }}>
    <div className="col-3 bg-light  ">Side</div>
    <div className="col bg-light">
      <div className="row">
        <div className="col"> HEADER PANEL </div>
      </div>
      <div className="row">
        <div className="col h-100">Main</div>
        <div className="col-3">Side Left</div>
      </div>
    </div>
    </div>
  </div>
);

export default Main;
