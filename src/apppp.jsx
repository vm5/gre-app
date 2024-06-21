import React from "react";
import Entry from "./entry";

function Createentry(props) {
    return (
      <Entry
        key={props.id}
        text={props.text}
        description={props.description}
      />
    );
  }
  
export default Createentry;  