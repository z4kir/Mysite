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
        <MDBRow className="my-2" center>
          <MDBCol md={3} center>
            <MDBCard>
              <MDBCardHeader
                style={{ fontSize: "2rem" }}
                className=" fw-bold text-center"
              >
                Personal Info
              </MDBCardHeader>
              <MDBCardBody className="justify-content-center">
                <LeftNav />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md={7} center>
            <MDBCard>
              <MDBCardBody>
                <Outlet />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          {/* <MDBCol center><MDBCard>
            <MDBCardHeader></MDBCardHeader>
            <MDBCardBody>
              left
            </MDBCardBody>
          </MDBCard></MDBCol> */}
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
};

export default MainCompo;
