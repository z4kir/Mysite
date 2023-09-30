import React, { useContext, useEffect, useState } from "react";
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
import ZAKContext from "../Context";

const MainCompo = () => {
  const {navHeight,footerHeight} = useContext(ZAKContext)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(footerHeight,navHeight);
    if (footerHeight!=0) {
      setLoading(false)
    }
  }, [footerHeight])
  return (
    <div className="">
      <Navbar />
      <MDBContainer fluid className="body-theme p-0">
      {!loading? <Outlet />:<></>}
      </MDBContainer>
      <Footer />
    </div>
  );
};

export default MainCompo;
