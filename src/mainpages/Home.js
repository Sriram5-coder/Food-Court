import React, {useState} from "react";
import { Link } from "react-router-dom";
import h1 from '.././images/h1.jpg';
import h2 from '.././images/h2.jpg';
import h3 from '.././images/h3.jpg';
import nvn from '.././images/vnv.png';
import bir from '.././images/bir.jpg';
import thalis from '.././images/thalis.jpg';
import northindian from '.././images/northindian.jpg';
import southindian from '.././images/southindian.jpg';
import mex from '.././images/mexican.jpeg';
import rus from '.././images/rusian.jpeg';
import china from '.././images/chinese.jpg';
import america from '.././images/american.jpeg';


import {
    MDBCarousel,
    MDBCarouselItem,
    MDBBtn
} from 'mdb-react-ui-kit';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon
  } from 'mdb-react-ui-kit';


function Navbarr(){
    // const [showNav, setShowNav] = useState(false);
    const [flip, setFlip] = useState(false);
    return(
        <>
            <div className='head' style={{backgroundColor:'blue'}}>
                <ul className='Nav_menu'>
                    <Link style={{color:'inherit',textDecoration:'inherit'}} to='/'><strong><li>Food Court</li></strong></Link>
                    <Link style={{color:'inherit',textDecoration:'inherit'}} to='/'><li>Home</li></Link>
                    <Link style={{color:'inherit',textDecoration:'inherit'}} to='/about'><li>About</li></Link>
                    <Link style={{color:'inherit',textDecoration:'inherit'}} to='/food'><li>Food</li></Link>
                    <Link style={{color:'inherit',textDecoration:'inherit'}} to='/cart'><li>Cart</li></Link>
                    <Link style={{color:'inherit',textDecoration:'inherit'}} to='/contact'><li>Contact</li></Link>
                </ul>
            </div>

            <MDBCarousel showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={h1}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={h2}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={h3}
        alt='...'
      />
    </MDBCarousel>

    <section style={{backgroundColor:'rgb(251, 190, 77)'}}>

        
        
        <center>
        <div className="row" style={{backgroundColor:'rgb(251, 190, 77)', paddingBottom:'20px', paddingTop:'20px'}}>
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <strong><h1>-- What you like</h1></strong>
            <strong><h1>we Offer --</h1></strong>
          </div>
          <div className="col-md-3"></div>
        </div>
        </center>
        
        <div className="row container" style={{marginLeft:'80px'}}>
            <div className="col-md-3">
              <img src={bir} className='im1'></img>
              
            </div>
            <div className="col-md-3">
            <img src={thalis}  className='im2'></img>

            </div>
            <div className="col-md-3">
            <img src={southindian} className='im3' width='100%' height='170vh' ></img>
            </div>
            <div className="col-md-3">
            <img src={northindian} className='im4'  height='170vh'></img>
            </div>
        </div>
        <div className="row container" style={{marginLeft:'80px'}}>
            <div className="col-md-3">
              <h3>Biryani</h3>
              
            </div>
            <div className="col-md-3">
            <h3>Thalis</h3>

            </div>
            <div className="col-md-3">
            <h3>South Indian</h3>
            </div>
            <div className="col-md-3">
            <h3>North India</h3>
            </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <div className="row container" style={{marginLeft:'80px'}}>
            <div className="col-md-3">
              <img src={america} className='im5' width='100%' height='180vh'></img>
              
            </div>
            <div className="col-md-3">
            <img src={rus}  className='im6' width='100%'></img>

            </div>
            <div className="col-md-3">
            <img src={china} className='im7' width='100%' height='170vh' ></img>
            </div>
            <div className="col-md-3">
            <img src={mex} className='im8'  height='170vh'></img>
            </div>
        </div>
        <div className="row container" style={{marginLeft:'80px'}}>
            <div className="col-md-3">
              <h3>American</h3>
              
            </div>
            <div className="col-md-3">
            <h3>Rusian</h3>

            </div>
            <div className="col-md-3">
            <h3>chinese</h3>
            </div>
            <div className="col-md-3">
            <h3>Mexican</h3>
            </div>
        </div>
    </section>
    <center>
    <section style={{backgroundColor:'black',color:'white', padding:'10px'}}>
      <div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h6> &#169;2023 Copywrite:Kollepara Sai Sriram</h6>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </section>
    </center>
        </>
    )
}
export default Navbarr;