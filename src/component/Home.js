import React, { Component } from 'react';
import './Style.css';

class Home extends Component {
  render() {
    return (
        <div>
        	<div className="space"></div>
          <div className="container_home">
      			<h1>Welcome To WD Resto</h1>
         	</div>
         	<div className="container_home2">
         	</div>
         	<div className="footer">
            © 2019 WD Resto - All Right Reserved
          </div>
        </div>
    );
  }
}

export default Home;