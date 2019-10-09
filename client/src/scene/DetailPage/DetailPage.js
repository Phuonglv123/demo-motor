import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';
import {toJS} from "mobx";

class DetailPage extends Component {
    async componentDidMount(): void {
        const id = this.props.match.params.id;
        await this.props.BaseStore.getDetailProduct(id)
    }

    render() {
        console.log(toJS(this.props.BaseStore.DetailProduct));
        return (
            <div>
                sadasd
            </div>
        );
    }
}

export default inject('BaseStore')(withRouter(observer(DetailPage)))
