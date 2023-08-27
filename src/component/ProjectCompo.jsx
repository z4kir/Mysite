import {
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import React from "react";

const ProjectCompo = () => {
  return (
    <div style={{height:"70vh"}}>
      {/* <MDBCard> */}
        <MDBCardBody className="p-2 tab-overflow" >
          <MDBTable border className="text-ligth align-middle text-center" striped hover >
            <MDBTableHead dark>
              <tr>
                <th>#</th>
                <th>Project Name</th>
                <th>Project Description</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody >
              <tr>
                <td>1</td>
                <td>Student Management Application</td>
                <td>FullStack Spring Boot Application</td>
                <th>september 2021</th>
                <th>November 2021</th>
              </tr>
              <tr>
                <td>2</td>
                <td>tag chat app</td>
                <td>Backend Spring Boot and Front React js</td>
                <th>November 2021</th>
                <th>december 2021</th>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBCardBody>
      {/* </MDBCard> */}
    </div>
  );
};

export default ProjectCompo;
