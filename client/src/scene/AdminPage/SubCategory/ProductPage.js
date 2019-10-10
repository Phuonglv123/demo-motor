import React, {Component} from 'react';
import {Button, Table} from "antd";
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';
import {toJS} from "mobx";

class ProductPage extends Component {

    async componentDidMount(): void {
        this.props.BaseStore.getAllProductStore();
        this.props.BaseStore.getAllCategoryStore();
    }

    render() {
        const dataTable = toJS(this.props.BaseStore.AllProduct);
        console.log(dataTable)
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
                render: items => <img src={`http://localhost:3000/${items[0]}`} alt=""/>
            },
        ];
        return (
            <div>
                <Button type="primary" onClick={() => {
                    this.props.history.push('/admin/product/create');
                }}>add</Button>
                <Table dataSource={dataTable} columns={columns} rowKey={record => record.id}/>
            </div>
        );
    }
}

export default inject('BaseStore')(withRouter(observer(ProductPage)))
