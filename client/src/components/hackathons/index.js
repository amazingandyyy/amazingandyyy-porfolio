import React, {Component} from 'react';
import { hackathons } from './data';

export default class Hackathons extends Component {
  constructor(){
    super();
    this.state = {
      hackathons: hackathons.reverse()
    }
  }
  renderHackathons(){
    if(this.state.hackathons){
      return this.state.hackathons.map(hackathon=> {
        return (<div className="hackathon">
          <div className="title">{hackathon.title}</div>
        </div>) 
      })
    }
  }
  render() {
    return (
      <div className="component hackathon">
      <div className="lead"><b>{this.state.hackathons.length} Hackathons</b></div>
      {this.renderHackathons()}
      </div>
    );
  }
}