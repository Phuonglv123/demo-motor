import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';
import {toJS} from "mobx";

class NewProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            todosPerPage: 8
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }


    async componentDidMount(): void {
        await this.props.BaseStore.getAllProductStore();
    }

    render() {
        const dataProduct = toJS(this.props.BaseStore.AllProduct);
        const {currentPage, todosPerPage} = this.state;

        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = dataProduct.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderTodos = currentTodos.map((i, index) => {
            return <div className="col-sm-4" key={index}>
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <img src={i.images[0]} alt=""/>
                            <h2>${i.price}</h2>
                            <p>{i.name}</p>
                            <button className="btn btn-default add-to-cart"><i
                                className="fa fa-shopping-cart"/>View detail</button>
                        </div>
                        <div className="product-overlay">
                            <div className="overlay-content">
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <button className="btn btn-default add-to-cart" onClick={() => {
                                    this.props.history.push(`/detail/${i._id}`)
                                }}><i className="fa fa-shopping-cart"/>View detail</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>;
        });
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(dataProduct.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li key={number} className="page-item">
                    <a id={number} onClick={this.handleClick} className="page-link">{number}</a>
                </li>
            );
        });
        return (
            <div className="features_items">
                <h2 className="title text-center">Features Items</h2>
                <div className="row">
                    {renderTodos}
                </div>
                <div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center d-flex">
                            {renderPageNumbers}
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default inject('BaseStore')(withRouter(observer(NewProductPage)))
