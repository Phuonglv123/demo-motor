import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';
import {toJS} from "mobx";
import Slider from "react-slick";

class ProductSpecail extends Component {

    async componentDidMount(): void {
        await this.props.BaseStore.getAllProductStore();
    }

    render() {
        const dataProduct = toJS(this.props.BaseStore.AllProduct);
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <div>
                <div className="features_items">
                    <h2 className="title text-center">Top Items</h2>
                    <Slider {...settings}>
                        {dataProduct.map((i, index) => (
                            <div className="hover-product" key={index}>
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                        <div className="productinfo text-center">
                                            <img src={i.images[0]} alt=""/>
                                            <h2>${i.price}</h2>
                                            <p>{i.name}</p>
                                            <button onClick={() => {
                                                this.props.history.push(`/detail/${i._id}`)
                                            }} className="btn btn-default add-to-cart"><i
                                                className="fa fa-shopping-cart"/>View detail
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                {/*    center Items*/}
                <div className="features_items">
                    <h2 className="title text-center">Center Items</h2>
                    <Slider {...settings}>
                        {dataProduct.map((i, index) => (
                            <div className="hover-product" key={index}>
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                        <div className="productinfo text-center">
                                            <img src={i.images[0]} alt=""/>
                                            <h2>${i.price}</h2>
                                            <p>{i.name}</p>
                                            <button onClick={() => {
                                                this.props.history.push(`/detail/${i._id}`)
                                            }} className="btn btn-default add-to-cart"><i
                                                className="fa fa-shopping-cart"/>View detail
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                {/*    bottom Items*/}
                <div className="features_items">
                    <h2 className="title text-center">Top Items</h2>
                    <Slider {...settings}>
                        {dataProduct.map((i, index) => (
                            <div className="hover-product" key={index}>
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                        <div className="productinfo text-center">
                                            <img src={i.images[0]} alt=""/>
                                            <h2>${i.price}</h2>
                                            <p>{i.name}</p>
                                            <button onClick={() => {
                                                this.props.history.push(`/detail/${i._id}`)
                                            }} className="btn btn-default add-to-cart">
                                                <i className="fa fa-shopping-cart"/>View detail
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default inject('BaseStore')(withRouter(observer(ProductSpecail)))
