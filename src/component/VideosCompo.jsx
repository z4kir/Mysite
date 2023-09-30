import { MDBCard, MDBCol, MDBContainer, MDBListGroup, MDBListGroupItem, MDBRow } from 'mdb-react-ui-kit';
import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import YouTube from "react-youtube";
import ZAKContext from '../Context';

const VideosCompo = () => {


    const loc=useLocation().state

    const [Video, setVideo] = useState([{title:"Student Management",id:"c-cVzoi-Iog"},{title:"card Tag",id:"7V-M7U3g5X0"}])
    const [vid, setVid] = useState()
    const [loading, setLoading] = useState(true)
    const {navHeight,footerHeight} = useContext(ZAKContext)

  const [minH, setminH] = useState(0)
  useEffect(() => {
    let h=window.innerHeight-navHeight-footerHeight
    console.log(h,window.screen.availHeight,navHeight)
   setminH(h)
  }, [])

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },

      };

    const _onReady=(event)=> {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

      useEffect(() => {
       if (loc) {

        setVid(loc.preVid)
        setLoading(false)
       } else {
        setVid(Video[0])
        setLoading(false)

       }
      }, [])
      
      if (!loading) {
        return (
            <MDBContainer style={{minHeight:minH}}> 
        <MDBRow  className='p-3 justify-content-center'>
            <MDBCol md={"6"}>
          <YouTube  className='d-flex justify-content-center'  videoId={vid.id} opts={opts} onReady={_onReady}    />
          </MDBCol>
          <MDBCol md={"3"}>
          <MDBListGroup style={{ minWidthL: '22rem' }} light>
            {Video.map((e,i)=>(
                <MDBListGroupItem   aria-current={e.id===vid.id?true:false} tag='a' href='#' action noBorders className={e.id===vid.id?'active px-3':'px-3'} key={i} onClick={()=>{setVid(e)}}><MDBRow><div><img
                style={{ height: 50, width: 50 }}
                src="images/playIcon.jpg"
                className="img-fluid me-1"
                alt={"play"+i}
              />{e.title}</div></MDBRow></MDBListGroupItem>
            ))}
         
          {/* <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
          <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
          <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
          <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem> */}
        </MDBListGroup>
        </MDBCol>
        </MDBRow>
        </MDBContainer>
      )
      } else {
        return<></>
      }

 
}

export default VideosCompo
