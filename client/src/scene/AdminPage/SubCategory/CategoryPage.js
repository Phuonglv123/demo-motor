import React, {Component} from 'react';
import {Button, Input, Modal, Table} from "antd";
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';
import {toJS} from "mobx";
import axios from 'axios'
import API from "../../../services/API";

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
        this.setState({
            visible: false,
        });
    };

    render() {
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
            {
                title: 'Actions',
                key: 'actions',
                render: (item) => (
                    <div>
                        <Button type="primary" icon="delete" size='default' onClick={async () => {
                            console.log(item);
                            debugger
                            await API.deleteCategoty(item._id)
                                .then(res => {
                                    alert(res.message);
                                    this.props.history.push('/admin')

                                })
                        }}/>
                        <Button type="primary" icon="edit" size='default' className='ml-3'/>
                    </div>
                )
            }
        ];
        const dataTable = toJS(this.props.BaseStore.AllCategory);
        const {visible, confirmLoading} = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>add</Button>
                <Button type="primary" onClick={this.showModal}>Create subCategory</Button>
                <Table dataSource={dataTable} columns={columns} rowKey={record => record.id}/>

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
