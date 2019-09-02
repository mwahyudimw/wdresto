import React, { Component } from 'react';
import './Style.css';

class About extends Component {
  render() {
    return (
        <div>
        <div className="space"></div>
          <div className="container_contact">
         		<div className="img_about"></div>
         		<div className="txt_about">
         		<h2>Muhammad Wahyudi</h2>
         		<p>Founder Of WD Resto</p>
         		<p><b>Address</b></p>
         		<p>Kota Pinang, Sumatera Utara, Indonesia</p>
         		<p><b>Contact</b></p>
                <p>082273927853</p>
                </div>
         		
         	</div>
        </div>
    );
  }
}

export default About;