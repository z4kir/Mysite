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
    <div className="">
      <Navbar />
      <MDBContainer fluid className="body-theme p-0">
        <Outlet />
      </MDBContainer>
      <Footer />
    </div>
  );
};

export default MainCompo;
