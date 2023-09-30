import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import React, { useContext, useEffect, useState } from "react";
import ZAKContext from "../Context";

const AboutMe = () => {
  const {navHeight,footerHeight} = useContext(ZAKContext)

  const [minH, setminH] = useState(0)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    let h=window.innerHeight-navHeight-footerHeight
    console.log(h,window.screen.availHeight,navHeight)
   setminH(h)
   setLoading(false)
  }, [])
  if (!loading) {
    return (
      <div style={{minHeight:minH}} className="container ">
      <div className="text-center p-2 " >
        <img
          style={{ height: 200, width: 200,    filter: "hue-rotate(45deg)" }}
          src="images/zakir1.jpg"
          className=" box  img-fluid rounded img-shadow"
          alt="Townhouses and Skyscrapers"
        />
        <div className="my-name-body mt-2" >
        <h2 className="my-name">Zakir Shaikh</h2>
        </div>
        <h6 className="my-profession">Full Stack Developer</h6>
        <hr className="border border-dark border-1 "></hr>
        <div className="text-start bg-light shadow-sm p-1 mb-5" style={{overflow:"auto"}}>
          <p className="fs-5"><b>Mobile:</b> 9890370745</p>
          <p className="fs-5"><b>Email:</b> skzakir78684@gmail.com</p>
        </div >
          <h1 className="text-center">Skills</h1>
          <hr className="border border-dark border-1"></hr>
          <div className="p-3 ">
          <p id="java" className="mb-2 text-center fs-4 bg-light shadow-sm skills-container dd" onTouchStartCapture={()=>{document.getElementById("java").classList.add("dd")}} onTouchEndCapture={()=>{document.getElementById("java").classList.remove("dd")}}>Java</p>
          <p id="js"  className="mb-2 text-center fs-4 bg-light shadow-sm skills-container dd" onTouchStartCapture={()=>{document.getElementById("js").classList.add("dd")}} onTouchEndCapture={()=>{document.getElementById("js").classList.remove("dd")}}>JavaScript</p>
          <p id="html" className="mb-2 text-center fs-4 bg-light shadow-sm skills-container dd" onTouchStartCapture={()=>{document.getElementById("html").classList.add("dd")}} onTouchEndCapture={()=>{document.getElementById("html").classList.remove("dd")}}>Html</p>
          <p id="css" className="mb-2 text-center fs-4 bg-light shadow-sm skills-container dd" onTouchStartCapture={()=>{document.getElementById("css").classList.add("dd")}} onTouchEndCapture={()=>{document.getElementById("css").classList.remove("dd")}}>Css</p>
          <p id="sql" className="mb-2 text-center fs-4 bg-light shadow-sm skills-container dd" onTouchStartCapture={()=>{document.getElementById("sql").classList.add("dd")}} onTouchEndCapture={()=>{document.getElementById("sql").classList.remove("dd")}}>MySQL</p>
          <p id="spring" className="mb-2 text-center fs-4 bg-light shadow-sm skills-container dd" onTouchStartCapture={()=>{document.getElementById("spring").classList.add("dd")}} onTouchEndCapture={()=>{document.getElementById("spring").classList.remove("dd")}}>SpringBoot</p>
          <p id="react" className="mb-2 text-center fs-4 bg-light shadow-sm skills-container dd" onTouchStartCapture={()=>{document.getElementById("react").classList.add("dd")}} onTouchEndCapture={()=>{document.getElementById("react").classList.remove("dd")}}>React Js</p>
          <p id="native" className="mb-2 text-center fs-4 bg-light shadow-sm skills-container dd" onTouchStartCapture={()=>{document.getElementById("native").classList.add("dd")}} onTouchEndCapture={()=>{document.getElementById("native").classList.remove("dd")}}>React Native</p>
          </div>
      </div>
      </div>
    )
  } else {
    return<></>
  }

}

export default AboutMe
  {/* <MDBTable striped  >
          <MDBTableHead dark>
          <tr>
              <th>Mobile</th>
              <th>Email</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody >
           
            <tr>
              <td></td>
              <td></td>
            </tr>
          </MDBTableBody>
        </MDBTable> */}