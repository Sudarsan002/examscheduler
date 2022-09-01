import React from "react";
import { DotBox, Box1, Box2, Box3, Box4,Box5} from "../src/Components/Dropdown";
import GlobalStyle from "../src/GlobalStyle";
import Footer from "../src/Layouts/Footer";
import Header from "../src/Layouts/Header";



const Landingpage = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {" "}
        <DotBox/>
        <Box1 />
        <Box2 />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {" "}
        <Box3 />
        <Box4 />
        <Box5 />
      </div>
      <Footer />
    </div>
  );
};
export default Landingpage;
