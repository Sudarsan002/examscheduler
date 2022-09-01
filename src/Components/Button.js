import React from "react";
import TextComponent from "./TextComponent";
const ButtonComponent = (props) => {
  const { type } = props;
  return (
    <div>
    <div>
      <button
        type={type}
        style={{
          
          marginLeft:"44%",
          backgroundColor: "#5375e2",
          borderRadius: "10px",
          borderColor:"white",
        }}
      >
      <div style={{fontSize:"20px",color:"white",padding:"15px 27px"}}>
        <TextComponent label="+ Create New" />
      </div>
      </button>
    </div>
    </div>
  );
};

export default ButtonComponent;
