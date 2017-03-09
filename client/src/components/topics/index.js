import React, {Component} from 'react';
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
  recommendTopics(){
    var mailTo = window.open('mailto:amazingandyyy@gmail.com?subject=Recommend%20Topics/Resources/APIs%20To%20Amazingandyyy&body=Hi,%20Andy');
    setTimeout(()=>{
      mailTo.close()
    }, 100);
  }
  renderLead(){
    return (<div className="lead">
        <b>{this.state.topics.length} technical topics</b><span className="learn">learned</span><span className="willLearn">will be learned</span>
        <div>
          <span className="smallBtn" onClick={this.changeOrder.bind(this)}>Reverse order</span>
          <span className="smallBtn" onClick={this.recommendTopics.bind(this)}>Recommend Topics/Resources/APIs</span>
        </div>
    </div>)
  }
  isFuture(date){
    const currentDate = new Date();
    if(date - currentDate > 0){
      return true
    }else{
      return false
    }

  }
  renderTopics(){
    if(this.state.topics){
      return (this.state.topics).map((topic, index) => {
        return (<div className={this.isFuture(topic.date)?'topic future':'topic'} key={index}>
          <div className="note">
            <span className="date">
            {this.isFuture(topic.date)?'I plan to learn ':'I learned it '}{moment(topic.date).fromNow()}
            <span className="exactData"><i className="fa fa-calendar-check-o"></i> {moment(topic.date).format('MMMM, YYYY')} more specific</span>
            </span>
            <span className="light"></span>
          </div>
          <div className="title">{topic.title}</div>
          <div className="comment">{topic.comment}</div>
          {topic.resources && <div className="resourceTitle">Resources I highly recommended:</div>}
          {topic.resources && this.renderResources(topic.resources)}
        </div>)
      })
    }
  }
  renderResources(resources){
    if(resources){
      return resources.map((resource, index) => {
        return (<a href={resource.url} target="_blank" className="resource" key={index}>
            <div className="title">{resource.title}</div>
            <div className="instructorResource">{resource.instructor}, {resource.resource}</div>
            <div className="comment">{resource.comment}</div>
          </a>)
      })
    }
  }
  render() {
    return (
      <div className="component topic">
        {this.renderLead()}
        {this.renderTopics()}
      </div>
    );
  }
}
