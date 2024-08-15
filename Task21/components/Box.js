import React, { Component } from 'react'

export class Box extends Component {
  render() {
    let {number, image} = this.props;
    return (
      <div className="box">
        <img src={image} alt="image" />
        <p>Card {number}</p>
        <p>This is Card {number} Description.</p>
      </div>
    )
  }
}

export default Box;
