import React, {Component} from 'react';
import './App.css';

class Likebutton extends Component {
  state = {
    numberOfLikes: 0,
    like: "Likes"
  }
  handleClick = (e) => {
    this.setState({
      numberOfLikes: this.state.numberOfLikes +1,
      like: this.state.numberOfLikes ===0 ? "Like" : "Likes"
    })
  }
  render(){
      return (
        <>
        <div class="press">
        <button onClick={this.handleClick}>{this.state.numberOfLikes} {this.state.like}</button>
        </div>
        </>
      )
  }}

export default Likebutton;
