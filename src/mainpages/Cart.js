import React, {useState,useEffect} from "react";
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
import order from '.././images/order.png';

import axios from "axios";
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
    let [data,setData] = useState([]);
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:8000/posts').then((res)=>{
            //console.log(res.data);
            setData(res.data)
        })
    })
    const reply=()=>{
        alert('Order submitted please Wait...you will receive soon on your table...')
    }
    const Remove = (id)=>{
        if(window.confirm('Do you want remove')){
        axios.delete("http://localhost:8000/posts/"+id)
        .then(res=>{console.log(res.data)
          window.location.reload()
        alert('Successfuly Detele')
        })
      }
      }
      const  Edit = (id)=>{
      alert("Edit the id"+id)
      navigate('/edit')
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
            <section style={{backgroundColor:'rgb(251, 190, 77)', paddingTop:'20px', paddingBottom:'30px'}}>
            <div className="container">
                <center><img src={order} width='30%'></img></center>
                <center><h2>Order Details</h2></center>
                <table className="table">
                    <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Full Name</th>
                        <th>Mail Id</th>
                        <th>Mobile Number</th>
                        <th>Food</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((ele,index)=>{
                        return (<tr>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.mail}</td>
                        <td>{ele.mobile}</td>
                        <td>{ele.food}</td>
                        <td>
                        {/* <button className='btn bg-info' onClick={()=>Edit(ele.id)}>Edit</button> */}
                        <button className='btn bg-primary' onClick={()=>Remove(ele.id)}>Delete</button></td>
                    </tr>)
                    })}      
                    </tbody>
                </table>
                <center><button className="btn btn-info" onClick={reply}>Submit Order</button></center>
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