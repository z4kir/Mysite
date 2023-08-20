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
    <div>
      {/* <MDBCard> */}
        <MDBCardBody>
          <MDBTable>
            <MDBTableHead>
              <tr>
                <th>#</th>
                <th>Project Name</th>
                <th>Project Description</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <th>1</th>
                <th>FullStack Spring Boot Application</th>
                <th>Project Description</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBCardBody>
      {/* </MDBCard> */}
    </div>
  );
};

export default ProjectCompo;
