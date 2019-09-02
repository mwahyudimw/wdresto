import React, { Component } from 'react';
import './Style.css';

class Galery extends Component {
  render() {
    return (
        <div>
        <div className="space"></div>
          <div className="container_galery">
                <div className="product_box">Ikan Bakar</div>
                <div className="product_box2">Magelangan</div>
                <div className="product_box3">Ayam Bakar</div>
                <div className="product_box4">Cappucino</div>
                <div className="product_box5">Aneka Jus</div>
                <div className="product_box6">Teh Jogja</div>
            </div>
        </div>
    );
  }
}

export default Galery;