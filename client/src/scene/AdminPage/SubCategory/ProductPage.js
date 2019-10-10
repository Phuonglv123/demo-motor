import React, {Component} from 'react';
import {Button, Input, Modal, Table, Select, Checkbox} from "antd";
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';
import {toJS} from "mobx";
import axios from "axios";
import API from "../../../services/API";

const {Option} = Select;

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            confirmLoading: false,
            name: '',
            description: '',
            price: '',
            category: '',
            shipping: '',
            available: '',
            images: [],
            test: null
        }
    }

    async componentDidMount(): void {
        this.props.BaseStore.getAllProductStore();
        this.props.BaseStore.getAllCategoryStore();
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = async () => {
        const {name, description, price, category, shipping, available, images} = this.state;
        const dataForm = new FormData();
        dataForm.append('name', name);
        dataForm.append('description', description);
        dataForm.append('price', price);
        dataForm.append('category', category);
        dataForm.append('shipping', shipping);
        dataForm.append('available', available);
        dataForm.append('images', images);
        const token = localStorage.getItem('AUTH');
        const res = await axios({
            method: 'POST',
            url: '/api/products/create',
            header: {
                Authorization: token,
                'content-type': 'multipart/form-data'
            },
            data: dataForm
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
        const dataTable = toJS(this.props.BaseStore.AllProduct);
        const dataCategory = toJS(this.props.BaseStore.AllCategory);
        console.log(this.state.images, this.state.test);
        const {visible, confirmLoading} = this.state;
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
                    this.showModal()
                }}>add</Button>
                <Table dataSource={dataTable} columns={columns} rowKey={record => record.id}/>

                <Modal
                    title="Title"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <div>
                        <Input onChange={(e) => {
                            this.setState({name: e.target.value})
                        }} placeholder="name product"/>
                    </div>
                    <div>
                        <Input onChange={(e) => {
                            this.setState({description: e.target.value})
                        }} placeholder="description"/>
                    </div>
                    <div>
                        <Input onChange={(e) => {
                            this.setState({price: e.target.value})
                        }} placeholder="Price"/>
                    </div>
                    <div>
                        <Select placeholder='select category' onChange={(e) => {
                            this.setState({category: e})
                        }} style={{width: '100%'}}>
                            {dataCategory.map((i, index) => (
                                <Option key={index} value={i._id}>{i.name}</Option>
                            ))}
                        </Select>
                    </div>
                    <div>
                        <Checkbox onChange={(e) => {
                            this.setState({shipping: e.target.checked})
                        }}>shipping</Checkbox>
                    </div>
                    <div>
                        <Checkbox onChange={(e) => {
                            this.setState({available: e.target.checked})
                        }}>available</Checkbox>
                    </div>
                    <div>
                        <input className="fileInput"
                               type="file"
                               multiple={true}
                               onChange={(e) => {
                                   this.setState({images: e.target.files[0]})
                               }}/>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default inject('BaseStore')(withRouter(observer(ProductPage)))
