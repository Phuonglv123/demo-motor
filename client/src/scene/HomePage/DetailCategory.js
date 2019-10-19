import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {toJS} from "mobx";
import API from "../../services/API";

class DetailCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailCat: [],
        }
    }

    async componentDidMount(): void {
        const id = this.props.match.params.category_id;
        debugger
        const res = await API.getDetailCategory(id)
        this.setState({
            detailCat: res
        })
    }

    render() {
        console.log(this.state.detailCat)
        return (
            <div className="features_items">
                <h2 className="title text-center">Features Items</h2>
                <div className="row">
                    {/*{data.map((i, index) => (*/}
                    {/*    <div className="col-sm-4" key={index}>*/}
                    {/*        <div className="product-image-wrapper">*/}
                    {/*            <div className="single-products">*/}
                    {/*                <div className="productinfo text-center">*/}
                    {/*                    <img src={`http://localhost:3000/${i.images[0]}`} alt=""/>*/}
                    {/*                    <h2>${i.price}</h2>*/}
                    {/*                    <p>{i.name}</p>*/}
                    {/*                    <button className="btn btn-default add-to-cart">*/}
                    {/*                        <i className="fa fa-shopping-cart"/>View detail*/}
                    {/*                    </button>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*))}*/}
                </div>
            </div>
        );
    }
}

export default inject('BaseStore')(observer(DetailCategory))
