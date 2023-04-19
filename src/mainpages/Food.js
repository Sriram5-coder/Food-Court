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

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate()
  const [id,setId] = useState("");
  const [name,setName] = useState("");
  const [mail,setMail] = useState(""); 
  const [mobile,setMobile] = useState("");
  const [food,setFood]=useState("");

  const handleSubmit = (e) => {
      const person = {id,name,mail,mobile,food}
      e.preventDefault()
      axios.post('http://localhost:8000/posts', person).then((res)=>{
          console.log(res);
          navigate('/cart')
      })
  }
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

          <section className="form_form" style={{backgroundColor:'rgb(251, 190, 77)'}}>
          <div className='container order_form'>
         <center><h2>Food Ordering Form</h2></center>
         <br></br>
         <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label for="fullname">Full Name:</label>
            <input type="text" className="form-control" id="fullname" 
            placeholder="Enter Name" name="name" 
            value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className="form-group">
            <label for="mail">Email id:</label>
            <input type="text" className="form-control" id="mail" 
            placeholder="Enter Email" name="mail" 
            value={mail} onChange={(e)=>{setMail(e.target.value)}}/>
            </div>
            <div className="form-group">
            <label for="mobile">Mobile Number:</label>
            <input type="number" className="form-control" id="mobile" 
            placeholder="Enter Mobile Number" name="mobile" 
            value={mobile} onChange={(e)=>{setMobile(e.target.value)}} />
            </div>
            <div className="form-group">
              <label for="order">Order</label><br></br>
              <select value={food} onChange={(e)=>{setFood(e.target.value)}}
                name="food" id="cars" className="form-control" >
                <optgroup label="Veg">
                  <option value="veg_biryani">Veg Biryani</option>
                  <option value="idly">Idly</option>
                  <option value="idly">Puri</option>
                  <option value="veg_fried_rice">Veg Fried Rice</option>
                </optgroup>
                <optgroup label="Non-Veg">
                  <option value="Chicken_biryani">Chicken Biryani</option>
                  <option value="Chicken_manchooria">Chicken Manchooria</option>
                </optgroup>
              </select>
            </div>
            <br />
            <button type="submit" className="btn btn-primary">Add to cart</button>
        </form>
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