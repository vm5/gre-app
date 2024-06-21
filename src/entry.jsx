import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span>
          {props.test}
        </span>
        <span>{props.text}</span>
      </dt>
      <div className="round-box">{props.description}</div>
    </div>
  );
}

export default Entry;
