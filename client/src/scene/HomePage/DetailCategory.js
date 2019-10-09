import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {toJS} from "mobx";

class DetailCategory extends Component {
    async componentDidMount(): void {
        const id = this.props.match.params.category_id;
        console.log(id)
        await this.props.BaseStore.getDetailCategory(id)
    }

    render() {
        console.log(toJS(this.props.BaseStore.DetailCategory));
        return (
            <div>
                DetailCategory
            </div>
        );
    }
}

export default inject('BaseStore')(observer(DetailCategory))
