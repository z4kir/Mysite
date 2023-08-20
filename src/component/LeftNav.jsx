import { MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import React from "react";

const LeftNav = () => {
  return (
    <div className="text-center">
      <img
        style={{ height: 200, width: 200 }}
        src="zakir.jpg"
        className="img-fluid rounded-circle ]"
        alt="Townhouses and Skyscrapers"
      />
      <h2>Zakir Shaikh</h2>
      <h6 style={{ color: "grey" }}>Full Stack Developer</h6>
      <MDBTable>
        <MDBTableBody>
          <tr>
            <th>Mobile</th>
            <th>Email</th>
          </tr>
          <tr>
            <td>9890370745</td>
            <td>skzakir78684@gmail.com</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default LeftNav;
