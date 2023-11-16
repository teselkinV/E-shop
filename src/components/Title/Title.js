import React from "react";

function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto mb-2 text-title">
        <h4 className="text-capitalize mt-2">
          {name} {title}
        </h4>
      </div>
    </div>
  );
}

export default Title;
