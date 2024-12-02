import React from "react";
import serviceitems from "./service-items";

const Service = () => {
  return (
    <div className="service">
      <div style={{ fontSize: "30px", fontWeight: "bold" }}>
        <span className="sep">Our</span> Services
      </div>
      <div className="service-items">
        {serviceitems.map((items, index)=>(
          <div key={index}>
        <div className="item">
          <div className="top"><span>{items.icon}</span>{items.name}</div>
          <div className="detials">{items.body}</div>
        </div>
        </div>
        ))}
        
      </div>
    </div>
  );
};

export default Service;
