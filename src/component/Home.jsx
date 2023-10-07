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
import React, { useContext, useEffect, useState,useRef } from "react";
import LeftNav from "./LeftNav";
import ZAKContext from "../Context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { navHeight, footerHeight } = useContext(ZAKContext);
  const navigation = useNavigate();
  const [minH, setminH] = useState(0);
  const [loading, setLoading] = useState(true);
  const [forward, setForward] = useState(true);
  const [heading, setHeading] = useState({ title: "", index: 0 });

  const stop = useRef(false)

  function typeWriter() {
    let txt = "Hi There! Want to see my portfolio ";
    let jj = heading;

    if (jj.index < txt.length && !stop.current) {
      jj.title += txt.charAt(jj.index);
      jj.index += 1;
      setHeading({ ...jj });
      setTimeout(typeWriter, 50);
      if (jj.index === txt.length - 1) {
        setTimeout(() => {
          typeWriterRev();
        }, 3000);
      }
    }

    // console.log(g);
    // if (i = txt.length-1) {
    //   cnt++;
    // }

    // if (i >= txt.length && cnt===1) {
    //   document.getElementById("head").innerHTML = txt.slice(0,txt.length-2)
    //   i--;
    // }
  }

  function typeWriterRev() {
    let txt = "Hi There! Want to see my portfolio ";
    let jj = heading;
    if (jj.index > 0 && !stop.current) {
      let gg = jj.title.slice(0, -1);
      jj.title = gg;
      jj.index -= 1;
      setHeading({ ...jj });
      setTimeout(typeWriterRev, 50);
      if (jj.index === 1) {
        setForward(false);
        setTimeout(() => {
          typeWriter();
        }, 500);
      }
    }
  }

  useEffect(() => {
    let h = window.innerHeight - navHeight - footerHeight;
    setminH(h);
    setLoading(false);
    setTimeout(() => {
      stop.current=false;
      typeWriter();
    }, 500);
    return ()=>{
      stop.current=true;
    }
  }, []);

  if (!loading) {
    return (
      <div style={{ height: minH }} className="overflow-auto">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <div class="  container   o">
          <div className=" mt-3 card card-body">
            <div className="string">
              <div className="text-center">
                <button
                  className="btn btn-primary btn-sm z-5"
                  onClick={() => {
                    navigation("/about");
                  }}
                >
                  Let's Go
                </button>
              </div>
            </div>
            <div className="row">
              <h1 id="head" className="text-center ">
                {heading.title}
                <span className="typed"></span>
              </h1>
            </div>
            <p className="fs-4 text-center">
              click the swinging button to see my Portfolio
            </p>
          </div>
          <div className=" mt-3 card card-body">
            <div className="row">
              <h3 className="text-start ">
               Projects
              </h3>
            </div>
            <hr></hr>
            <p className="fs-6 text-start">
              During my Learning time i also created some of the projects for better understanding. Click Below to see
            </p>

            <div className="text-center">
              <button
                className="btn btn-primary btn-sm  text-capitalize"
                onClick={() => {
                  navigation("/projects");
                }}
              >
                projects
              </button>
            </div>
          </div>
          <div className=" mt-3 mb-3 card card-body">
            <div className="row">
              <h3 className="text-start ">
               Current Status
              </h3>
            </div>
            <hr></hr>
            <p className="fs-6 text-start">
             Currently I am learning <b>MachineLearning </b> on pyCharm. I already understand some of the basic concept of machine learning and <b>Deep Learning.</b> In upcoming  days i will create a machine learning project and add that on my Project directory
            </p>

       
          </div>
        </div>
        {/* <div class="container mt-1 mb-1 card card-body justify-content-center align-items-center">
  <h1>Hi</h1>
</div> */}
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
    return <></>;
  }
};

export default Home;
