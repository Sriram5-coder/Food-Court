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

            <section style={{backgroundColor:'rgb(251, 150, 0)'}}>
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                <div class="container form_feed" style={{backgroundColor:'lightgreen'}}>
                  <h2>Feedback Form</h2>
                  <br></br>
                  <form>
                    <div class="form-group">
                      <label for="email">Email:</label>
                      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"></input>
                    </div>
                    <div class="form-group">
                      <label for="pwd">Password:</label>
                      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"></input>
                    </div>
                    <div class="form-group">
                      <label for="pwd">Feedback</label>
                      <input type="text" class="form-control" id="pwd" placeholder="Please Enter your Feedback" name="pwd"></input>
                    </div>
                    <br></br>
                    <button type="submit" class="btn btn-info">Submit</button>
                  </form>
                </div>
                </div>
                <div className="col-md-5 ">
                  <div className="contact_details">
                    <h2>Contact Number</h2>
                    <h6 >8008191766</h6>
                    <h2>Contact Mail</h2>
                    <h6 >saisriramkollepara@gmail.com</h6>
                  </div>
                </div>
                <div className="col-md-1"></div>

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