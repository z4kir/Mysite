import React, { useContext, useEffect, useRef, useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import ZAKContext from "../Context";

const Navbar = () => {

  const {setNavHeight} = useContext(ZAKContext)
  const navigate = useNavigate();
  const [showBasic, setShowBasic] = useState(false);
  const refNav = useRef(0)

  useEffect(() => {
if (refNav.current) {
  console.log(Math.floor(refNav.current?.getBoundingClientRect().height));
  setNavHeight(Math.ceil(refNav.current?.getBoundingClientRect().height))
}
  }, [])
  

  return (
    <div ref={refNav}>
      <MDBNavbar className="base-theme nav-shadow text-light" expand="lg" light >
        <MDBContainer fluid>
          <MDBNavbarBrand href="#" onClick={()=>{navigate("/")}} ><img className="logo-shadow" height={"40px"} src="images/logo.png"/></MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 ">
              <MDBNavbarItem>
                <MDBNavbarLink onClick={()=>{navigate("/")}} className="nav-links"  active aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink onClick={()=>{navigate("/projects")}} className="nav-links" active aria-current="page" href="#">
                  Project
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink onClick={()=>{navigate("/about")}} className="nav-links"  active aria-current="page" href="#">
                  About Me
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink onClick={()=>{navigate("/video")}} className="nav-links"  active aria-current="page" href="#">
                  Videos
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default Navbar;
