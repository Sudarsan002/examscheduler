import React from "react";
import TextComponent from "../src/Components/TextComponent";
import Header from "../src/Layouts/Header";
import GlobalStyle from "../src/GlobalStyle";
import Footer from "../src/Layouts/Footer";
import { SubEs } from "./SubEs";

const Examschedule = () => {
  return ( 
    <div>
      <GlobalStyle />
      <Header />
      <div style={{ padding: "39px 19px 32px 122px" }}>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <img
            style={{
              display: "flex",
              flexDirection: "row",
              height: "24px",
              width: "24px",
              marginTop: "36px",
            //   Arrow image
            }}
            src="https://i.ibb.co/HnM1WDs/Vectorarrow.png"
          />
          <div
            style={{
              marginLeft: "19px",
              marginBottom: "4px",
              flexDirection: "row",
              display: "flex",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "33px",
              marginTop: "30px",
            }}
          >
            <TextComponent label="Create new schedule" />
          </div>
        </div>
      </div>
      <SubEs/>
      <Footer />
    </div>
  );
};
export default Examschedule;

