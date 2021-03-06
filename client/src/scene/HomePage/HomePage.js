import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Link, Route, Router, Switch, withRouter} from 'react-router-dom';
import {toJS} from "mobx";
import NewProductPage from "./NewProductPage";
import {createBrowserHistory} from "history";
import DetailCategory from "./DetailCategory";
import DetailPage from "../DetailPage/DetailPage";
import MyLayout from "../../components/MyLayout/MyLayout";

const history = createBrowserHistory();

class HomePage extends Component {
    async componentDidMount(): void {
        this.props.BaseStore.getAllProductStore();
        this.props.BaseStore.getAllCategoryStore();
    }

    render() {
        const dataCate = toJS(this.props.BaseStore.AllCategory);
        return (
            <MyLayout>
                <Router history={history}>
                    <section id="slider">
                        <div className="container">
                            <div id="demo" className="carousel slide" data-ride="carousel">
                                <ul className="carousel-indicators">
                                    <li data-target="#demo" data-slide-to="0" className="active"/>
                                    <li data-target="#demo" data-slide-to="1"/>
                                    <li data-target="#demo" data-slide-to="2"/>
                                </ul>

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={require('../../res/img/bannerpump.png')} alt="banner"
                                             style={{width: '100%'}}/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require('../../res/img/bannerpump2.png')} alt="banner"
                                             style={{width: '100%'}}/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require('../../res/img/bannerpump3.png')} alt="banner"
                                             style={{width: '100%'}}/>
                                    </div>
                                </div>

                                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </a>
                                <a className="carousel-control-next" href="#demo" data-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </a>

                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="left-sidebar">
                                        <h2>Category</h2>
                                        <div className="panel-group category-products"
                                             id="accordian">
                                            {dataCate.map((i, index) => (
                                                <Link to={`/${i._id}/category/`} key={index}>
                                                    <div className="panel panel-default">
                                                        <div
                                                            className="panel-heading d-flex justify-content-start align-items-center">
                                                            <i className="fas fa-chevron-right"
                                                               style={{color: 'black'}}/>
                                                            <h4 className="panel-title ml-2"><span>{i.name}</span>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="brands_products">
                                            <h2>Brands</h2>
                                            <div className="brands-name">
                                                <ul className="nav nav-pills nav-stacked">
                                                    <li><a href="#"> <span className="pull-right">(50)</span>Acne</a>
                                                    </li>
                                                    <li><a href="#"> <span className="pull-right">(56)</span>Grüne Erde</a>
                                                    </li>
                                                    <li><a href="#"> <span className="pull-right">(27)</span>Albiro</a>
                                                    </li>
                                                    <li><a href="#"> <span className="pull-right">(32)</span>Ronhill</a>
                                                    </li>
                                                    <li><a href="#"> <span className="pull-right">(5)</span>Oddmolly</a>
                                                    </li>
                                                    <li><a href="#"> <span
                                                        className="pull-right">(9)</span>Boudestijn</a>
                                                    </li>
                                                    <li><a href="#"> <span className="pull-right">(4)</span>Rösch
                                                        creative
                                                        culture</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="price-range">
                                            <h2>Price Range</h2>
                                            <div className="well text-center">
                                                <input type="text" className="span2" value="" data-slider-min="0"
                                                       data-slider-max="600" data-slider-step="5"
                                                       data-slider-value="[250,450]" id="sl2"/><br/>
                                                <b className="pull-left">$ 0</b> <b className="pull-right">$ 600</b>
                                            </div>
                                        </div>

                                        <div className="shipping text-center">
                                            <img src="images/home/shipping.jpg" alt=""/>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-sm-9 padding-right">
                                    <Switch>
                                        <Route path='/' exact={true} component={NewProductPage}/>
                                        <Route path='/:category_id/category/' exact={true} component={DetailCategory}/>
                                        <Route path='/detail/:id' exact={true} component={DetailPage}/>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </section>
                </Router>
            </MyLayout>
        );
    }
}

export default inject('BaseStore')(withRouter(observer(HomePage)))
