import React, {Component} from 'react';
import {toJS} from "mobx";
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';
import axios from 'axios'

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

    onSubmit = async (e) => {
        e.preventDefault();
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
        await axios({
            method: 'POST',
            url: '/api/products/create',
            header: {
                Authorization: token,
                'content-type': 'multipart/form-data'
            },
            data: dataForm
        })
            .then(res => {
                console.log(res);
                this.props.history.push('/admin')
            });
    };

    render() {
        const dataCategory = toJS(this.props.BaseStore.AllCategory);
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">name product</label>
                        <input type="text" className="form-control"
                               aria-describedby="emailHelp" placeholder="name product" onChange={(e) => {
                            this.setState({name: e.target.value})
                        }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Price</label>
                        <input type="number" className="form-control"
                               placeholder="Price" onChange={(e) => {
                            this.setState({price: e.target.value})
                        }}/>
                    </div>
                    <div className="form-group">
                        <select className="form-control" onChange={(e) => {
                            this.setState({category: e.target.value});
                        }}>
                            {dataCategory.map((i, index) => (
                                <option key={index} value={i._id}>{i.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                        <textarea className="form-control" onChange={(e) => {
                            this.setState({description: e.target.value})
                        }} rows="3"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Price</label>
                        <input type="file" className="form-control" multiple={true}
                               onChange={(e) => {
                                   this.setState({images: e.target.files[0]})
                               }}/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" onChange={(e) => {
                            this.setState({shipping: e.target.checked})
                        }}/>
                        <label className="form-check-label" htmlFor="exampleCheck1">shipping</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" onChange={(e) => {
                            this.setState({available: e.target.checked})
                        }}/>
                        <label className="form-check-label" htmlFor="exampleCheck1">available</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default inject('BaseStore')(withRouter(observer(AddProduct)))
