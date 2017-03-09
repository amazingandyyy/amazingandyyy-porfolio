import React, {Component} from 'react';
import Youtube from 'react-youtube';

export default class Projects extends Component {
  constructor(){
    super();
    this.state = {
      page: 1,
      total: 5
    }
  }
  lastPage(){
    var currentPage = this.state.page;
    this.setState({
      page: currentPage-1
    })
  }
  nextPage(){
    var currentPage = this.state.page;
    this.setState({
      page: currentPage+1
    })
  }
  render() {
    return (
      <div className="findTheTune">
        {this.state.page%this.state.total===1&&<Youtube videoId="AF87J1fMkWo"/>}
        {this.state.page%this.state.total===2&&<Youtube videoId="GFR8UJK3Mzc"/>}
        {this.state.page%this.state.total===3&&<Youtube videoId="olehUbN21U8"/>}
        {this.state.page%this.state.total===4&&<Youtube videoId="EKcviWIDFKQ"/>}
        {this.state.page%this.state.total===0&&<Youtube videoId="Tt67dHedYF0"/>}
        <div className="question">
          How do you like this sound? ({this.state.page}/{this.state.total})
        </div>
        <div className="question">
          <input type="range" min="0" max="5" />
        </div>
        <hr/>
        <div className="actions">
          <button onClick={this.lastPage.bind(this)}>last sound</button>
          <button onClick={this.nextPage.bind(this)}>next sound</button>
        </div>
      </div>
    );
  }
}