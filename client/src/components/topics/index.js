import React, {Component} from 'react';
import Gist from 'react-gist';
import moment from 'moment';
import { topics } from './data';

export default class Topics extends Component {
  constructor(){
    super();
    this.state = {
      topics: topics.reverse()
    }
  }
  changeOrder(){
    this.setState({
      topics: topics.reverse()
    })
  }
  renderFilter(){
    return (<span className="filter">
      <div className="orderBtn" onClick={this.changeOrder.bind(this)}> 
        Reverse
       </div>
    </span>)
  }
  renderTopics(){
    if(this.state.topics){
      return (this.state.topics).map((topic, index) => {
        return (<div className="topic" key={index}>
          <div className="date">
            {moment(topic.date).fromNow()}
          <span className="date exactData"><i className="fa fa-calendar-check-o"></i> {moment(topic.date).format('MMMM, YYYY')} more exactly</span>
          </div>
          <div className="title">{topic.title}</div>
          <div className="comment">{topic.comment}</div>
          {topic.resources && this.renderResources(topic.resources)}
        </div>)
      })
    }
  }
  renderResources(resources){
    if(resources){
      return resources.map((resource, index) => {
        return (<div className="resource" key={index}>
          <div className="title"><a href={resource.url} target="_blank">{resource.title}</a></div>
          <div className="instructorResource">{resource.instructor}, {resource.resource}</div>
          <div className="comment">{resource.comment}</div>
          </div>)
      })
    }
  }
  render() {
    return (
      <div className="component topic">
      These are technics topics that I learned/will learn:
        {this.renderFilter()}
        {this.renderTopics()}
      </div>
    );
  }
}
