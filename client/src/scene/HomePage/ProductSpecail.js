import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';
import {toJS} from "mobx";
import Slider from "react-slick";
import API from "../../services/API";

class ProductSpecail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topProduct: [],
            centerProduct: [],
            bottomProduct: []
        }
    }


    async componentDidMount(): void {
        await this.props.BaseStore.getAllProductStore();
        const topProduct = await API.ListTopProduct();
        const centerProduct = await API.ListCenterProduct();
        const bottomProduct = await API.ListBottomProduct();
        this.setState({
            topProduct: topProduct,
            centerProduct: centerProduct,
            bottomProduct: bottomProduct,
        })
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
                        {this.state.topProduct.map((i, index) => (
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
                        {this.state.centerProduct.map((i, index) => (
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
                        {this.state.bottomProduct.map((i, index) => (
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
