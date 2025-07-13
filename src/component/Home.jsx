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
            <p className="mt-3 fs-4 text-center">
              Click the swinging button to see my <b>PORTFOLIO</b>
            </p>
          </div>
          <div className=" mt-3 card card-body">
            <div className="row ">
              <h3 className="text-center ">
               Projects
              </h3>
            </div>
            <hr></hr>
            <p className="fs-6 text-start">
              During my Learning time i also created some of the projects for better understanding. Click below to see
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
          {/* <div className=" mt-3 mb-3 card card-body">
            <div className="row">
              <h3 className="text-start ">
               Current Status
              </h3>
            </div>
            <hr></hr>
            <p className="fs-6 text-start">
             Currently I am learning <b>MachineLearning </b> on pyCharm. I already understand some of the basic concept of machine learning and <b>Deep Learning.</b> In upcoming  days i will create a machine learning project and add that on my Project directory
            </p>  
          </div> */}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Home;
