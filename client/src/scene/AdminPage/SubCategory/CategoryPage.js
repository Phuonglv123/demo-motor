import React, {Component} from 'react';
import {Button, Table, Modal, Input} from "antd";
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';
import {toJS} from "mobx";
import API from "../../../services/API";
import axios from 'axios'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
];

class CategoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            confirmLoading: false,
            name: ''
        }
    }


    async componentDidMount(): void {
        this.props.BaseStore.getAllCategoryStore();
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = async () => {
        const {name} = this.state;
        await axios.post('/api/categories/create', {
            name: name
        });
        this.setState({
            visible: false,
        });
        this.props.history.push('/admin')

    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };

    render() {
        const dataTable = toJS(this.props.BaseStore.AllCategory);
        const {visible, confirmLoading, ModalText} = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>add</Button>
                <Table dataSource={dataTable} columns={columns}/>

                <Modal
                    title="Title"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <Input onChange={(e) => {
                        this.setState({name: e.target.value})
                    }} placeholder="Basic usage"/>
                </Modal>
            </div>
        );
    }
}

export default inject('BaseStore')(withRouter(observer(CategoryPage)))
