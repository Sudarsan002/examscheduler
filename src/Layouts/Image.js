import React from "react";
import TextComponent from "../Components/TextComponent";

const Image = () => {
  return (
    <div style={{
        marginTop:"5%",
        padding:"relative"
    }}>
    <div style={{display:"flex",align:"center",marginLeft:"36%"}}>
      <img src="https://i.ibb.co/m6n1ZR4/Events-rafiki-1.png"/>
    </div>
    <div style={{marginLeft:"38%",marginBottom:"30px",fontSize:"16px", fontFamily:"Nunito"}}>
      <TextComponent
        label="There are no schedules get started by creating schedules"/>
      </div>
    
    </div>
  );
};

export default Image;