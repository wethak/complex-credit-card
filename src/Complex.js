import React, { Component } from "react";
import "./index.css";
export default class Complex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      number: "**** **** **** ****",
      validthru: "MM/YY",
      slashTest: 0
    };
  }
  handlechange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handlnumber = e => {
    const re = /^[0-9]*$/gm;

    // for (let i = 1; i < e.target.value; i++) {
    //   if ((e.target.value[i] = !reg)) {
    //     e.target.value[i] = "";
    //   }
    // }
    if (!re.test(e.target.value)) {
      alert("insert Number");
      e.target.value = "";
    } else {
      this.setState({ number: e.target.value });
    }
  };

  handlvalid = e => {
    let thru = e.target.value;

    if (e.target.value.length === 3) {
      e.target.value = e.target.value.replace(
        e.target.value[e.target.value.length - 1],
        ""
      );
      this.setState({
        slashTest: 0
      });
    }
    if (e.target.value.length === 2 && this.state.slashTest === 0) {
      e.target.value = e.target.value.concat("/");
      this.setState({
        slashTest: 1
      });
    }
    const re = /^[0-9/]*$/gm;
    if (re.test(e.target.value)) {
      this.setState({
        validthru: thru
      });
    }
  };

  render() {
    return (
      <div>
        <div className="main">
          <div id="card">
            <h1>CREDIT CARD</h1>
            <div class="card-elements">
              <img
                className="chip-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Zz0Wxe9sNV7gnRqdCulAuOfGGAbjadHKcdCP0xFQ8Qq7wUGO&s"
                alt="credit.chip"
              />

              <h3 id="card-number">{this.state.number}</h3>
              <span>
                <h3>4532</h3>
                <h6 className="valid">
                  VALID <br />
                  THRU
                </h6>
                <div className="month-year">
                  <h6 id="month">MONTH/YEAR</h6>
                  <h3 className="date">{this.state.validthru}</h3>
                </div>
              </span>

              <h3>{this.state.name.toUpperCase()}</h3>
            </div>
            <img
              className="visa-image"
              src="https://krebsonsecurity.com/wp-content/uploads/2012/03/mcvisa.png"
              alt="VISA"
            />
          </div>
        </div>
        <span className="input">
          <input
            onChange={this.handlechange}
            type="text"
            placeholder="User name"
            maxlength="20"
          />
          <input
            type="text"
            pattern={/^[0-9]*$/gm}
            placeholder="Card number"
            onChange={this.handlnumber}
            maxlength="16"
          />
          <input
            type="text"
            placeholder="Valid thru"
            onChange={this.handlvalid}
            maxlength="5"
          />
        </span>
      </div>
    );
  }
}
