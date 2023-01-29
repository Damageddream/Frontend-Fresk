import React from "react";


const Jumbotron = (props) => {
  
  return (
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage:
        `url(${props.photo})`,
        height: 300,
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">{props.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
