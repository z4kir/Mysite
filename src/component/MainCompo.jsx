import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBRow,
} from "mdb-react-ui-kit";
import Footer from "./Footer";
import LeftNav from "./LeftNav";

const MainCompo = () => {
  return (
    <div className="my-2">
      <Navbar />
      <MDBContainer fluid>
<Outlet/>
      </MDBContainer>
      <Footer />
    </div>
  );
};

export default MainCompo;
