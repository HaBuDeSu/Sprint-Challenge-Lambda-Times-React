import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      index: 0
    }
  }
  componentDidMount(){
    this.setState({
      images: carouselData
    })
  }

  leftClick = () => {
    this.setState({
      index: (this.state.index - 1 + this.state.images.length) % this.state.images.length
    })
  }

  rightClick = () => {
    this.setState({
      index: (this.state.index + 1) % this.state.images.length
    })
  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.index]} style={{display: 'block'}} />
  }

  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div>{this.selectedImage()}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
