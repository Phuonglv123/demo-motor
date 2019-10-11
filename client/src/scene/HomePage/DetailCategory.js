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
        const data = toJS(this.props.BaseStore.DetailCategory);
        console.log(toJS(this.props.BaseStore.DetailCategory));
        return (
            <div className="features_items">
                <h2 className="title text-center">Features Items</h2>
                <div className="row">
                    {data.map((i, index) => (
                        <div className="col-sm-4" key={index}>
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={`http://localhost:3000/${i.images[1]}`} alt=""/>
                                        <h2>${i.price}</h2>
                                        <p>{i.name}</p>
                                        <a href="#" className="btn btn-default add-to-cart">
                                            <i className="fa fa-shopping-cart"/>View detail</a>
                                    </div>
                                    {/*<div className="product-overlay">*/}
                                    {/*    <div className="overlay-content">*/}
                                    {/*        <h2>$56</h2>*/}
                                    {/*        <p>Easy Polo Black Edition</p>*/}
                                    {/*        <a href="#" className="btn btn-default add-to-cart">*/}
                                    {/*            <i className="fa fa-shopping-cart"/>View detail</a>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                                {/*<div className="choose">*/}
                                {/*    <ul className="nav nav-pills nav-justified">*/}
                                {/*        <li><a href="#"><i className="fa fa-plus-square"></i>Add to*/}
                                {/*            wishlist</a>*/}
                                {/*        </li>*/}
                                {/*        <li><a href="#"><i className="fa fa-plus-square"></i>Add to*/}
                                {/*            compare</a>*/}
                                {/*        </li>*/}
                                {/*    </ul>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default inject('BaseStore')(observer(DetailCategory))
