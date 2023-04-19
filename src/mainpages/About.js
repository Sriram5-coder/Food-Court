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
import foodimg from '.././images/foodimg.jpg';
import sriram from '.././images/sriram.jpeg'

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
            

            <section style={{backgroundColor:'orange',paddingTop:'20px'}}>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <center><strong><h1>Food Court</h1></strong></center>
                    </div>
                    <div className="col-4"></div>
                </div>
                <br></br>
                <center><img src={foodimg}></img></center>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p style={{paddingTop:'30px'}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;restaurant, establishment where refreshments or meals may be procured by the public. The public dining room that ultimately came to be known as the restaurant originated in France, and the French have continued to make major contributions to the restaurant’s development.A look at France's historic restaurant culture and what sets its cuisine apart from the rest of the world. A look at France's historic restaurant culture and what sets its cuisine apart from the rest of the worldSee all videos for this article.The first restaurant proprietor is believed to have been one A. Boulanger, a soup vendor, who opened his business in Paris in 1765. The sign above his door advertised restoratives, or restaurants, referring to the soups and broths available within. The institution took its name from that sign, and restaurant now denotes a public eating place in English, French, Dutch, Danish, Norwegian, Romanian, and many other languages, with some variations. For example, in Spanish and Portuguese the word becomes restaurante, in Italian it 
                        is ristorante, in Swedish.</p>

                        <center><ul><h1>Founder</h1></ul>
                        {/* <img src={sriram} width='35%' className="imgimg"></img> */}
                        <h1><i>" Kollepara Sai Sriram "</i></h1>
                        <br></br>
                        </center>
                        
                    </div>
                    <div className="col-md-2"></div>
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