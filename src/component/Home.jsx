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
import React, { useContext, useEffect, useState } from "react";
import LeftNav from "./LeftNav";
import ZAKContext from "../Context";

const Home = () => {
  const {navHeight,footerHeight} = useContext(ZAKContext)

  const [minH, setminH] = useState(0)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    let h=window.innerHeight-navHeight-footerHeight
    console.log(h,window.innerHeight,navHeight)
   setminH(h)
   setLoading(false)
  }, [])
  if (!loading) {
    return (
      <div  style={{height:minH}} className="pb-2 overflow-hidden">
  <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<div class="content">
  <h1>Sliding Diagonals Background Effect</h1>
</div>
        {/* <div>
          <MDBCarousel
            style={{ background:"black"}}
            className="p-0 mb-3"
            showIndicators
            showControls
          >
            <MDBCarouselItem
             style={{ height: "70vh" }}
              className="w-100 vh-70 d-block img-gradient"
              itemId={1}
              src="images/slide1.jpg"
              alt="..."
            >
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselItem>
  
            <MDBCarouselItem
              style={{ height: "70vh" }}
              className="w-100 vh-70 d-block img-gradient"
              itemId={2}
              src="images/slide2.jpg"
              alt="..."
            >
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MDBCarouselItem>
  
            <MDBCarouselItem
              style={{ height: "70vh" }}
              className="w-100 vh-70 d-block "
              itemId={3}
              src="images/slide3.png"
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
          <MDBRow className="m-0" >
   
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
        </MDBContainer> */}
      </div>
    );
  } else {
    return <></>
  }

};

export default Home;
