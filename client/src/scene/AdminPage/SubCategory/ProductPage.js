import React, {Component} from 'react';
import {Table} from "antd";
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';
import {toJS} from "mobx";

class ProductPage extends Component {
    async componentDidMount(): void {
        this.props.BaseStore.getAllProductStore();
    }

    render() {
        console.log(this.props.BaseStore.AllProduct)
        return (
            <div>asdsa</div>
        );
    }
}

export default inject('BaseStore')(withRouter(observer(ProductPage)))
