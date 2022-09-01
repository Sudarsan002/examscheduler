import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Image from "./Layouts/Image";
import Button from "./Components/Button";
import Examschedule from "../Pages/Examschedule";
import Link from 'next/link'


 const App = () => {
  return (
    <div>
       
       <Header/>
       <Image/>
       <Button/>
       <Footer/>
    </div>
  )
}
export default App
