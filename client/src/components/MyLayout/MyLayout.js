import React, {Component} from 'react';
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import './index.css';
import './blue.css';

class MyLayout extends Component {
    render() {
        return (
            <div>
                <MyHeader/>
                <div>
                    {this.props.children}
                </div>
                <MyFooter/>
            </div>
        );
    }
}

export default MyLayout;
