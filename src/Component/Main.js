import React from "react";
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpg"
import img7 from "../images/img7.jpg"

export default function Main (){
    return (
        <>
        <div className="Main-div">
        
            <img src={img1} alt="img" className="Main-img img1" />
            <img src="https://images.unsplash.com/photo-1652990739281-f708cc5e520e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500" alt="img" className="Main-img img9" />
            <img src={img5} alt="img" className="Main-img img8" />
            <img src={img2} alt="img" className="Main-img img2" />
            <img src={img3} alt="img" className="Main-img img3" />
            <img src={img4} alt="img" className="Main-img img4" />
            <img src={img5} alt="img" className="Main-img img5" />
            <img src={img6} alt="img" className="Main-img img6" />
            <img src={img1} alt="img" className="Main-img img7" />
            <img src={img7} alt="img" className="Main-img img10" />
        </div>
            <h1 className="Main-h1">Online Experiences</h1>
            <p className="Main-p">Join Unique interactive activities led by one-of-a-kind hosts all without leaving home.</p>
        </>
    )
}