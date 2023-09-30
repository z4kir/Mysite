import {
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ZAKContext from "../Context";


const ProjectCompo = () => {

const navigation=useNavigate()
const {navHeight,footerHeight} = useContext(ZAKContext)
  return (
    <div style={{minHeight:window.innerHeight-navHeight-footerHeight}}>
      {/* <MDBCard> */}
        <MDBCardBody className="p-2 tab-overflow" >
          <MDBTable border={"true"} className="text-ligth align-middle text-center" striped hover >
            <MDBTableHead dark>
              <tr>
                <th>#</th>
                <th>Project Name</th>
                <th>Project Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Video</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody >
              <tr>
                <td>1</td>
                <td>Student Management Application</td>
                <td>FullStack Spring Boot Application</td>
                <th>september 2021</th>
                <th>November 2021</th>
                <th><button className="btn btn-primary" onClick={()=>{navigation("/video",{state:{preVid:{title:"Student Management",id:"c-cVzoi-Iog"}}})}}>Go to Video</button></th>
              </tr>
              <tr>
                <td>2</td>
                <td>tag chat app</td>
                <td>Backend Spring Boot and Front React js</td>
                <th>November 2021</th>
                <th>december 2021</th>
                <th><button className="btn btn-primary"  onClick={()=>{navigation("/video",{state:{preVid:{title:"card Tag",id:"7V-M7U3g5X0"}}})}}>Go to Video</button></th>
              </tr>
            </MDBTableBody>
            
          </MDBTable>    
        </MDBCardBody>
      {/* </MDBCard> */}
    </div>
  );
};

export default ProjectCompo;
