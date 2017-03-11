import React, {Component} from 'react';
import moment from 'moment';
import GoogleMap from 'google-map-react';

import { hackathons } from './data';

const HackathonElementOnMap = ({ content }) => (
  <div className="point">
    <div className="mapTag">
      <div className="time">
        <i className="fa fa-map-pin"></i>{moment(content.startingDate).fromNow()}
      </div>
      <b>{content.title}</b>
      <div>{content.project.title}</div>
    </div>
  </div>
);

export default class Hackathons extends Component {
  constructor(){
    super();
    this.state = {
      hackathons: hackathons.reverse()
    }
  }
  renderMap(){
    return (<div className="map">
      <GoogleMap
      defaultCenter={{lat: 37.62, lng: -122.214742}}
      defaultZoom={10}
    >
      {this.renderHackathonsOnMaps()}
    </GoogleMap></div>)
  }
  renderHackathonsOnMaps(){
    return this.state.hackathons.map((hackathon, index)=>{
      return (<HackathonElementOnMap
          key={index}
          lat={hackathon.coordinate.lat}
          lng={hackathon.coordinate.lng}
          content={hackathon}
          />)
    })
  }
  changeOrder(){
    this.setState({
      topics: hackathons.reverse()
    })
  }
  renderLead(){
    return (<div className="lead">
      <b>{this.state.hackathons.length} Hackathons</b>
      <div>
          <span className="smallBtn" onClick={this.changeOrder.bind(this)}>Reverse order</span>
      </div>
    </div>)
  }
  renderHackathons(){
    if(this.state.hackathons){
      return this.state.hackathons.map((hackathon, index)=> {
        return (<div className="hackathon" key={index}>
          <div className="title">{hackathon.title}</div>
          <div className="info">
            {this.renderDate(hackathon.startingDate, hackathon.endingDate)}
            &nbsp;&nbsp;
            {hackathon.location}, {hackathon.city}
            </div>
          <div className="comment">{hackathon.comment}</div>
          {hackathon.project.title && <div className="resourceTitle">Project our team built:</div>}
          {hackathon.project.title && this.renderProject(hackathon)}
        </div>)
      })
    }
  }
  renderProject({prizes,project}){
    console.log()
    if(project.title){
      return (<a>
        <div className="project">
          <div className="title"><b>{project.title}</b></div>
          {prizes.length > 0 && this.renderPrizes(prizes)}
        </div>
      </a>)
    }
  }
  renderPrizes(prizes){
    return prizes.map((prize, index)=>{
      return (<div className="prize" key={index}>
        <div className="left">
          <i className="fa fa-trophy" aria-hidden="true"></i>
        </div>
        <div className="right">
          <div className="title">{prize.title}</div>
          <div className="benefit">{prize.benefit}</div>
        </div>
      </div>)
    })
  }
  renderDate(startingDate, endingDate){
    if(startingDate-endingDate===0){
      return (<span>
        {moment(startingDate).format('MMM D, YYYY')}
      </span>)
    }else{
      return (<span>
      {moment(startingDate).format('MMM D')}~{moment(endingDate).format('MMM D, YYYY')}
      </span>)
    }
  }
  render() {
    return (
      <div className="component hackathon">
        {this.renderLead()}
        {this.renderHackathons()}
        <br/>
        {this.renderMap()}
      </div>
    );
  }
}