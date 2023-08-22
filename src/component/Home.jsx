import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCardHeader,
  MDBCol,
  MDBRow,
  MDBContainer,
} from "mdb-react-ui-kit";
import React from "react";
import LeftNav from "./LeftNav";

const Home = () => {
  return (
    <div>
      <div>
        <MDBCarousel
          // style={{ height: "70vh" }}
          className="p-0 mb-3"
          showIndicators
          showControls
        >
          <MDBCarouselItem
           style={{ height: "70vh" }}
            className="w-100 vh-70 d-block"
            itemId={1}
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            alt="..."
          >
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselItem>

          <MDBCarouselItem
            style={{ height: "70vh" }}
            className="w-100 vh-70 d-block"
            itemId={2}
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
            alt="..."
          >
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselItem>

          <MDBCarouselItem
            style={{ height: "70vh" }}
            className="w-100 vh-70 d-block"
            itemId={3}
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
            alt="..."
          >
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
      <MDBContainer fluid className="p-0">
        <MDBRow className="my-2">
          <MDBCol md={4} >
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
          <MDBCol md={8} >
            <MDBCard shadow="3">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBBtn href="#">Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Home;
