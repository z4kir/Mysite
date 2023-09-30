import React, { useContext, useEffect, useRef } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import ZAKContext from "../Context";

export default function Footer() {

  const {setFooterHeight} = useContext(ZAKContext)
  const refFooter = useRef(0)

  useEffect(() => {
    if (refFooter.current) {
      console.log(refFooter.current?.getBoundingClientRect().height);
      setFooterHeight(Math.ceil(refFooter.current?.getBoundingClientRect().height))
    }
      }, [])
  return (
    <MDBFooter ref={refFooter} className="sec-theme nav-shadow  text-center text-white">
      <MDBContainer className=" p-4 pb-0">
        <section className="mb-4">
          <button
            floating="true"
            className="m-1 social-media-btns"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
            onClick={() => {
              window.open(
                "https://www.facebook.com/zakir.shaikh.5059/",
                "_blank"
              );
            }}
          >
            <MDBIcon fab icon="facebook-f" />
          </button>

          <button
        floating="true"
            className="m-1 social-media-btns"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
            onClick={() => {
              window.open("https://www.instagram.com/sk_zak786/", "_blank");
            }}
          >
            <MDBIcon fab icon="instagram" />
          </button>

          <button
            floating="true"
            className="m-1 social-media-btns"
            type="button"
            style={{ backgroundColor: "#0082ca" }}
            onClick={() => {
              window.open(
                "https://linkedin.com/in/zakir-shaikh-b805871ba",
                "_blank"
              );
            }}
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </button>

          <button
            floating="true"
            className="m-1 social-media-btns"
            style={{ backgroundColor: "#333333" }}
            href="#!"
            role="button"
            onClick={() => window.open("https://github.com/z4kir", "_blank")}
          >
            <MDBIcon fab icon="github" />
          </button>
          <button
            floating="true"
            className="m-1 fiverr-btns"
            href="#!"
            role="button"
            onClick={() =>
              window.open(
                "https://www.fiverr.com/users/zakirshaikh692",
                "_blank"
              )
            }
          >
            <img
              // onClick={() => window.open("https://github.com/z4kir", "_blank")}
              className=" fiverr-img"
              src="images/fiverr.png"
            />
          </button>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3 base-theme"
        // style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          skzak.online
        </a>
      </div>
    </MDBFooter>
  );
}
