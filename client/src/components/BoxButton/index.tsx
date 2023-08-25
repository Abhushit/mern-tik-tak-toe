import React from "react";
import "./index.css";

interface BoxButtonprops {
    value: string;
    handleBoxClick: () => void;
    disabled?: boolean
}

const BoxButton:React.FC<BoxButtonprops> = (props) => {
  return (
    <button className="box_button" onClick={props.handleBoxClick} disabled={props.disabled}>
      {props.value}
    </button>
  );
};

export default BoxButton;
