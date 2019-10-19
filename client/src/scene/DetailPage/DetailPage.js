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
        const detail = toJS(this.props.BaseStore.DetailProduct);
        return (
            <div>
                <div className="product-details">
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="view-product">
                                <img src="images/product-details/1.jpg" alt=""/>
                                <h3>ZOOM</h3>
                            </div>
                            <div id="similar-product" className="carousel slide" data-ride="carousel">
                                {/* Wrapper for slides */}
                                <div className="carousel-inner">
                                    <div className="item">
                                        {detail && detail.images.map((i, index) => (
                                            <img key={index} src={`http://localhost:3000/${i}`} alt=""/>
                                        ))}
                                    </div>
                                </div>
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
                            <div className="product-information">{/*/product-information*/}
                                <img src="images/product-details/new.jpg" className="newarrival" alt=""/>
                                <h2>{detail.name}</h2>
                                <p>Web ID: 1089772</p>
                                <img src="images/product-details/rating.png" alt=""/>
                                <span>
                                  <span>US $59</span>
                                  <label>Quantity:</label>
                                  <input type="text" defaultValue={3}/>
                                  <button type="button" className="btn btn-fefault cart">
                                    <i className="fa fa-shopping-cart"/>
                                    Add to cart
                                  </button>
                                </span>
                                <p><b>Availability:</b> In Stock</p>
                                <p><b>Condition:</b> New</p>
                                <p><b>Brand:</b> E-SHOPPER</p>
                                <a href><img src="images/product-details/share.png" className="share img-responsive"
                                             alt=""/></a>
                            </div>
                            {/*/product-information*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('BaseStore')(withRouter(observer(DetailPage)))
