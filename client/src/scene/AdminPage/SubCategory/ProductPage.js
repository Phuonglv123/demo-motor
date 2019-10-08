import React, {Component} from 'react';
import {Button, Table} from "antd";
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';
import {toJS} from "mobx";

class ProductPage extends Component {
    async componentDidMount(): void {
        this.props.BaseStore.getAllProductStore();
    }

    render() {
        const dataTable = toJS(this.props.BaseStore.AllProduct);
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Description',
                dataIndex: 'description',
                key: 'description',
            }, {
                title: 'Price',
                dataIndex: 'price',
                key: 'price',
            }, {
                title: 'images',
                key: 'images',
                dataIndex: 'images',
                render: items => console.log(items)
            },
        ];
        return (
            <div>
                <Button type="primary">add</Button>
                <Table dataSource={dataTable} columns={columns} rowKey={record => record.id}/>
            </div>
        );
    }
}

export default inject('BaseStore')(withRouter(observer(ProductPage)))
