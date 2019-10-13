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
        const detail = toJS(this.props.BaseStore.DetailProduct);
        return (
            <div>
                <div className="product-details">{/*product-details*/}
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="view-product">
                                <img src={`http://localhost:3000/${detail.images}`} alt=""/>
                                <h3>ZOOM</h3>
                            </div>
                            <div id="similar-product" className="carousel slide" data-ride="carousel">
                                {/* Wrapper for slides */}
                                {/*<div className="carousel-inner">*/}
                                {/*    <div className="item">*/}
                                {/*        {detail && detail.images.map((i, index) => (*/}
                                {/*            <a key={index}><img src={`http://localhost:3000/${i}`} alt=""/></a>*/}
                                {/*        ))}*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/* Controls */}
                                <a className="left item-control" href="#similar-product" data-slide="prev">
                                    <i className="fa fa-angle-left"/>
                                </a>
                                <a className="right item-control" href="#similar-product" data-slide="next">
                                    <i className="fa fa-angle-right"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div className="product-information">
                                <h2>{detail.name}</h2>
                                <span>
                                    <span>Giá bán:</span>
                                    <span>Liên hệ</span>
                                </span>
                                <p><b>Availability:</b> In Stock</p>
                                <p><b>Condition:</b> New</p>
                                <p><b>Brand:</b> E-SHOPPER</p>
                                <p>Số lượng: <b>Còn hàng</b></p>
                            </div>
                            {/*/product-information*/}
                        </div>
                    </div>
                </div>
                <div className="recommended_items">
                    <h2 className="title text-center">recommended items</h2>

                    <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="item active">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src="images/home/recommend1.jpg" alt=""/>
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <button type="button" className="btn btn-default add-to-cart"><i
                                                        className="fa fa-shopping-cart"></i>Add to cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src="images/home/recommend2.jpg" alt=""/>
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <button type="button" className="btn btn-default add-to-cart"><i
                                                        className="fa fa-shopping-cart"></i>Add to cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src="images/home/recommend3.jpg" alt=""/>
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <button type="button" className="btn btn-default add-to-cart"><i
                                                        className="fa fa-shopping-cart"></i>Add to cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src="images/home/recommend1.jpg" alt=""/>
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <button type="button" className="btn btn-default add-to-cart"><i
                                                        className="fa fa-shopping-cart"></i>Add to cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src="images/home/recommend2.jpg" alt=""/>
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <button type="button" className="btn btn-default add-to-cart"><i
                                                        className="fa fa-shopping-cart"></i>Add to cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src="images/home/recommend3.jpg" alt=""/>
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <button type="button" className="btn btn-default add-to-cart"><i
                                                        className="fa fa-shopping-cart"></i>Add to cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="left recommended-item-control" href="#recommended-item-carousel"
                           data-slide="prev">
                            <i className="fa fa-angle-left"></i>
                        </a>
                        <a className="right recommended-item-control" href="#recommended-item-carousel"
                           data-slide="next">
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('BaseStore')(withRouter(observer(DetailPage)))
