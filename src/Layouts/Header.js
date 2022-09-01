import React from "react";
import TextComponent from "../Components/TextComponent";
import GlobalStyle from "../GlobalStyle";
import { Font } from "../../font";

const Header = () => {
  return (
    <div>
     <Font/>
    <div
       
      style={{
        
        //Header 
        padding: "8px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#5375e2",
        width: "100%",
      }}
    >
      <div
        style={{
          //College Logo
          width: "50px",
          height: "50px",
          padding: "21px 27px 23px",
        }}
      >
        <img src="https://i.ibb.co/5M3FrMX/image-2.png" />
      </div>
      <div>
        <div
          style={{
            //College name
            color: "white",
            
            fontStyle: "Bold",
            fontSize: "16px",
            lineHeight: "22px",
            marginLeft: "41px",
            marginTop: "16px",
          }}
        >
          <TextComponent label="SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY" />
        </div>
        <div
          style={{
            //Exam Scheduler
            color: "white",
         
            fontStyle: "Bold",
            fontSize: "32px",
            lineHeight: "41px",
            lineHight: "100%",
            marginLeft: "41px",
            marginTop: "3px",
          }}
        >
          <TextComponent label="Exam Scheduler" />
        </div>
      </div>
      <div
        style={{
          //Was
          display:"flex",
          flexDirection:"row",
          fontWeight: "700",
          fontSize: "20px",
          lineHeight: "27px",
          color: "#ffffff",
          marginTop:"30px",
          marginLeft:"650px",

        }}
      >
        <div style={{marginBottom:"7px",marginRight:"12px"}}>
        <img src="https://i.ibb.co/wBgCczS/healthicons-ui-user-profile-User-Prof.png" /></div>
        <TextComponent label="Waseem" />
      </div>
    
    </div>
      </div>
  );
};
export default Header;