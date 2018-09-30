import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { store } from '../../../index';
import { Provider } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            showSalesModal: false
        }
    }
    
    handleCloseModal(){
        document.body.removeChild(this.modalTarget);
    }

    componentDidMount(){
        this.modalTarget = document.createElement('div');
        this.modalTarget.className = 'a-modal';
        document.body.appendChild(this.modalTarget);
        this._render()
    }

    componentWillUpdate(){
        this.modalTarget = document.createElement('div');
        this.modalTarget.className = 'a-modal animated';
        document.body.appendChild(this.modalTarget);
        this._render()
    }

    componentWillUnmount(){
         ReactDOM.unmountComponentAtNode(this.modalTarget);
    }

    _render(){
        ReactDOM.render(<Provider store={store}>
        <div className="wrapper animated bounceIn">
            <div className="close-button" onClick={this.handleCloseModal.bind(this)}>
            </div>
            <div className="body">
                {this.props.children}
            </div>
            <div className="action">

            </div>
        </div>
        </Provider>, this.modalTarget)
    }

    render(){
        return <noscript />
    }
}
export { Modal };
