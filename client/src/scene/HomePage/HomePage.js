import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Link, Route, Router, Switch, withRouter} from 'react-router-dom';
import {toJS} from "mobx";
import NewProductPage from "./NewProductPage";
import {createBrowserHistory} from "history";
import DetailCategory from "./DetailCategory";
import DetailPage from "../DetailPage/DetailPage";
import MyLayout from "../../components/MyLayout/MyLayout";
import Slider from "react-slick";

const history = createBrowserHistory();

class HomePage extends Component {
    async componentDidMount(): void {
        this.props.BaseStore.getAllProductStore();
        this.props.BaseStore.getAllCategoryStore();
    }

    render() {
        const dataCate = toJS(this.props.BaseStore.AllCategory);
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5
        };
        return (
            <MyLayout>
                <div className="body-content outer-top-xs" id="top-banner-and-menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-3 sidebar">
                                <div className="side-menu animate-dropdown outer-bottom-xs">
                                    <div className="head"><i className="icon fa fa-align-justify fa-fw"/> Categories
                                    </div>
                                    <nav className="yamm megamenu-horizontal" role="navigation">
                                        <ul className="nav">
                                            <li className="dropdown menu-item">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                                    className="icon fa fa-shopping-bag" aria-hidden="true"/>Clothing</a>
                                                <ul className="dropdown-menu mega-menu">
                                                    <li className="yamm-content">
                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-3">
                                                                <ul className="links list-unstyled">
                                                                    <li><a href="#">Dresses</a></li>
                                                                    <li><a href="#">Shoes </a></li>
                                                                    <li><a href="#">Jackets</a></li>
                                                                    <li><a href="#">Sunglasses</a></li>
                                                                    <li><a href="#">Sport Wear</a></li>
                                                                    <li><a href="#">Blazers</a></li>
                                                                    <li><a href="#">Shirts</a></li>
                                                                    <li><a href="#">Shorts</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-12 col-md-3">
                                                                <ul className="links list-unstyled">
                                                                    <li><a href="#">Handbags</a></li>
                                                                    <li><a href="#">Jwellery</a></li>
                                                                    <li><a href="#">Swimwear </a></li>
                                                                    <li><a href="#">Tops</a></li>
                                                                    <li><a href="#">Flats</a></li>
                                                                    <li><a href="#">Shoes</a></li>
                                                                    <li><a href="#">Winter Wear</a></li>
                                                                    <li><a href="#">Night Suits</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-12 col-md-3">
                                                                <ul className="links list-unstyled">
                                                                    <li><a href="#">Toys &amp; Games</a></li>
                                                                    <li><a href="#">Jeans</a></li>
                                                                    <li><a href="#">Shirts</a></li>
                                                                    <li><a href="#">Shoes</a></li>
                                                                    <li><a href="#">School Bags</a></li>
                                                                    <li><a href="#">Lunch Box</a></li>
                                                                    <li><a href="#">Footwear</a></li>
                                                                    <li><a href="#">Wipes</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-12 col-md-3">
                                                                <ul className="links list-unstyled">
                                                                    <li><a href="#">Sandals </a></li>
                                                                    <li><a href="#">Shorts</a></li>
                                                                    <li><a href="#">Dresses</a></li>
                                                                    <li><a href="#">Jwellery</a></li>
                                                                    <li><a href="#">Bags</a></li>
                                                                    <li><a href="#">Night Dress</a></li>
                                                                    <li><a href="#">Swim Wear</a></li>
                                                                    <li><a href="#">Toys</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown menu-item">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                                    className="icon fa fa-laptop" aria-hidden="true"/>Electronics</a>
                                                <ul className="dropdown-menu mega-menu">
                                                    <li className="yamm-content">
                                                        <div className="row">
                                                            <div className="col-xs-12 col-sm-12 col-lg-4">
                                                                <ul>
                                                                    <li><a href="#">Gaming</a></li>
                                                                    <li><a href="#">Laptop Skins</a></li>
                                                                    <li><a href="#">Apple</a></li>
                                                                    <li><a href="#">Dell</a></li>
                                                                    <li><a href="#">Lenovo</a></li>
                                                                    <li><a href="#">Microsoft</a></li>
                                                                    <li><a href="#">Asus</a></li>
                                                                    <li><a href="#">Adapters</a></li>
                                                                    <li><a href="#">Batteries</a></li>
                                                                    <li><a href="#">Cooling Pads</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-12 col-lg-4">
                                                                <ul>
                                                                    <li><a href="#">Routers &amp; Modems</a></li>
                                                                    <li><a href="#">CPUs, Processors</a></li>
                                                                    <li><a href="#">PC Gaming Store</a></li>
                                                                    <li><a href="#">Graphics Cards</a></li>
                                                                    <li><a href="#">Components</a></li>
                                                                    <li><a href="#">Webcam</a></li>
                                                                    <li><a href="#">Memory (RAM)</a></li>
                                                                    <li><a href="#">Motherboards</a></li>
                                                                    <li><a href="#">Keyboards</a></li>
                                                                    <li><a href="#">Headphones</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="dropdown-banner-holder">
                                                                <a href="#"><img alt=""
                                                                                 src="assets/images/banners/banner-side.png"/></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown menu-item">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                                    className="icon fa fa-paw" aria-hidden="true"/>Shoes</a>
                                                <ul className="dropdown-menu mega-menu">
                                                    <li className="yamm-content">
                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-3">
                                                                <ul className="links list-unstyled">
                                                                    <li><a href="#">Dresses</a></li>
                                                                    <li><a href="#">Shoes </a></li>
                                                                    <li><a href="#">Jackets</a></li>
                                                                    <li><a href="#">Sunglasses</a></li>
                                                                    <li><a href="#">Sport Wear</a></li>
                                                                    <li><a href="#">Blazers</a></li>
                                                                    <li><a href="#">Shirts</a></li>
                                                                    <li><a href="#">Shorts</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-12 col-md-3">
                                                                <ul className="links list-unstyled">
                                                                    <li><a href="#">Handbags</a></li>
                                                                    <li><a href="#">Jwellery</a></li>
                                                                    <li><a href="#">Swimwear </a></li>
                                                                    <li><a href="#">Tops</a></li>
                                                                    <li><a href="#">Flats</a></li>
                                                                    <li><a href="#">Shoes</a></li>
                                                                    <li><a href="#">Winter Wear</a></li>
                                                                    <li><a href="#">Night Suits</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-12 col-md-3">
                                                                <ul className="links list-unstyled">
                                                                    <li><a href="#">Toys &amp; Games</a></li>
                                                                    <li><a href="#">Jeans</a></li>
                                                                    <li><a href="#">Shirts</a></li>
                                                                    <li><a href="#">Shoes</a></li>
                                                                    <li><a href="#">School Bags</a></li>
                                                                    <li><a href="#">Lunch Box</a></li>
                                                                    <li><a href="#">Footwear</a></li>
                                                                    <li><a href="#">Wipes</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-12 col-md-3">
                                                                <ul className="links list-unstyled">
                                                                    <li><a href="#">Sandals </a></li>
                                                                    <li><a href="#">Shorts</a></li>
                                                                    <li><a href="#">Dresses</a></li>
                                                                    <li><a href="#">Jwellery</a></li>
                                                                    <li><a href="#">Bags</a></li>
                                                                    <li><a href="#">Night Dress</a></li>
                                                                    <li><a href="#">Swim Wear</a></li>
                                                                    <li><a href="#">Toys</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown menu-item">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                                    className="icon fa fa-clock-o"/>Watches</a>
                                                <ul className="dropdown-menu mega-menu">
                                                    <li className="yamm-content">
                                                        <div className="row">
                                                            <div className="col-xs-12 col-sm-12 col-lg-4">
                                                                <ul>
                                                                    <li><a href="#">Gaming</a></li>
                                                                    <li><a href="#">Laptop Skins</a></li>
                                                                    <li><a href="#">Apple</a></li>
                                                                    <li><a href="#">Dell</a></li>
                                                                    <li><a href="#">Lenovo</a></li>
                                                                    <li><a href="#">Microsoft</a></li>
                                                                    <li><a href="#">Asus</a></li>
                                                                    <li><a href="#">Adapters</a></li>
                                                                    <li><a href="#">Batteries</a></li>
                                                                    <li><a href="#">Cooling Pads</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-12 col-lg-4">
                                                                <ul>
                                                                    <li><a href="#">Routers &amp; Modems</a></li>
                                                                    <li><a href="#">CPUs, Processors</a></li>
                                                                    <li><a href="#">PC Gaming Store</a></li>
                                                                    <li><a href="#">Graphics Cards</a></li>
                                                                    <li><a href="#">Components</a></li>
                                                                    <li><a href="#">Webcam</a></li>
                                                                    <li><a href="#">Memory (RAM)</a></li>
                                                                    <li><a href="#">Motherboards</a></li>
                                                                    <li><a href="#">Keyboards</a></li>
                                                                    <li><a href="#">Headphones</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="dropdown-banner-holder">
                                                                <a href="#"><img alt=""
                                                                                 src="assets/images/banners/banner-side.png"/></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown menu-item">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                                    className="icon fa fa-diamond"/>Jewellery</a>
                                                <ul className="dropdown-menu mega-menu">
                                                    <li className="yamm-content">
                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-3">
                                                                <ul className="links list-unstyled">
                                                                    <li><a href="#">Dresses</a></li>
                                                                    <li><a href="#">Shoes </a></li>
                                                                    <li><a href="#">Jackets</a></li>
                                                                    <li><a href="#">Sunglasses</a></li>
                                                                    <li><a href="#">Sport Wear</a></li>
                                                                    <li><a href="#">Blazers</a></li>
                                                                    <li><a href="#">Shirts</a></li>
                                                                    <li><a href="#">Shorts</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-12 col-md-3">
                                                                <ul className="links list-unstyled">
                                                                    <li><a href="#">Handbags</a></li>
                                                                    <li><a href="#">Jwellery</a></li>
                                                                    <li><a href="#">Swimwear </a></li>
                                                                    <li><a href="#">Tops</a></li>
                                                                    <li><a href="#">Flats</a></li>
                                                                    <li><a href="#">Shoes</a></li>
                                                                    <li><a href="#">Winter Wear</a></li>
                                                                    <li><a href="#">Night Suits</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-12 col-md-3">
                                                                <ul className="links list-unstyled">
                                                                    <li><a href="#">Toys &amp; Games</a></li>
                                                                    <li><a href="#">Jeans</a></li>
                                                                    <li><a href="#">Shirts</a></li>
                                                                    <li><a href="#">Shoes</a></li>
                                                                    <li><a href="#">School Bags</a></li>
                                                                    <li><a href="#">Lunch Box</a></li>
                                                                    <li><a href="#">Footwear</a></li>
                                                                    <li><a href="#">Wipes</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-12 col-md-3">
                                                                <ul className="links list-unstyled">
                                                                    <li><a href="#">Sandals </a></li>
                                                                    <li><a href="#">Shorts</a></li>
                                                                    <li><a href="#">Dresses</a></li>
                                                                    <li><a href="#">Jwellery</a></li>
                                                                    <li><a href="#">Bags</a></li>
                                                                    <li><a href="#">Night Dress</a></li>
                                                                    <li><a href="#">Swim Wear</a></li>
                                                                    <li><a href="#">Toys</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown menu-item">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                                    className="icon fa fa-heartbeat"/>Health and Beauty</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="home-banner outer-bottom-xs">
                                    <img src="assets/images/banners/LHS-banner.jpg" alt="Image"/>
                                </div>
                                <div className="sidebar-widget hot-deals wow fadeInUp outer-bottom-xs">
                                    <h3 className="section-title">hot deals</h3>
                                    <div
                                        className="owl-carousel sidebar-carousel custom-carousel owl-theme outer-top-ss">
                                        <div className="item">
                                            <div className="products">
                                                <div className="hot-deal-wrapper">
                                                    <div className="image">
                                                        <img src="assets/images/hot-deals/p25.jpg" alt=""/>
                                                    </div>
                                                    <div className="sale-offer-tag"><span>49%<br/>off</span></div>
                                                    <div className="timing-wrapper">
                                                        <div className="box-wrapper">
                                                            <div className="date box">
                                                                <span className="key">120</span>
                                                                <span className="value">DAYS</span>
                                                            </div>
                                                        </div>
                                                        <div className="box-wrapper">
                                                            <div className="hour box">
                                                                <span className="key">20</span>
                                                                <span className="value">HRS</span>
                                                            </div>
                                                        </div>
                                                        <div className="box-wrapper">
                                                            <div className="minutes box">
                                                                <span className="key">36</span>
                                                                <span className="value">MINS</span>
                                                            </div>
                                                        </div>
                                                        <div className="box-wrapper hidden-md">
                                                            <div className="seconds box">
                                                                <span className="key">60</span>
                                                                <span className="value">SEC</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /.hot-deal-wrapper */}
                                                <div className="product-info text-left m-t-20">
                                                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a>
                                                    </h3>
                                                    <div className="rating rateit-small"/>
                                                    <div className="product-price">
                          <span className="price">
                            $600.00
                          </span>
                                                        <span className="price-before-discount">$800.00</span>
                                                    </div>
                                                    {/* /.product-price */}
                                                </div>
                                                {/* /.product-info */}
                                                <div className="cart clearfix animate-effect">
                                                    <div className="action">
                                                        <div className="add-cart-button btn-group">
                                                            <button className="btn btn-primary icon"
                                                                    data-toggle="dropdown" type="button">
                                                                <i className="fa fa-shopping-cart"/>
                                                            </button>
                                                            <button className="btn btn-primary cart-btn"
                                                                    type="button">Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* /.action */}
                                                </div>
                                                {/* /.cart */}
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="products">
                                                <div className="hot-deal-wrapper">
                                                    <div className="image">
                                                        <img src="assets/images/hot-deals/p5.jpg" alt=""/>
                                                    </div>
                                                    <div className="sale-offer-tag"><span>35%<br/>off</span></div>
                                                    <div className="timing-wrapper">
                                                        <div className="box-wrapper">
                                                            <div className="date box">
                                                                <span className="key">120</span>
                                                                <span className="value">Days</span>
                                                            </div>
                                                        </div>
                                                        <div className="box-wrapper">
                                                            <div className="hour box">
                                                                <span className="key">20</span>
                                                                <span className="value">HRS</span>
                                                            </div>
                                                        </div>
                                                        <div className="box-wrapper">
                                                            <div className="minutes box">
                                                                <span className="key">36</span>
                                                                <span className="value">MINS</span>
                                                            </div>
                                                        </div>
                                                        <div className="box-wrapper hidden-md">
                                                            <div className="seconds box">
                                                                <span className="key">60</span>
                                                                <span className="value">SEC</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /.hot-deal-wrapper */}
                                                <div className="product-info text-left m-t-20">
                                                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a>
                                                    </h3>
                                                    <div className="rating rateit-small"/>
                                                    <div className="product-price">
                          <span className="price">
                            $600.00
                          </span>
                                                        <span className="price-before-discount">$800.00</span>
                                                    </div>
                                                    {/* /.product-price */}
                                                </div>
                                                {/* /.product-info */}
                                                <div className="cart clearfix animate-effect">
                                                    <div className="action">
                                                        <div className="add-cart-button btn-group">
                                                            <button className="btn btn-primary icon"
                                                                    data-toggle="dropdown" type="button">
                                                                <i className="fa fa-shopping-cart"/>
                                                            </button>
                                                            <button className="btn btn-primary cart-btn"
                                                                    type="button">Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* /.action */}
                                                </div>
                                                {/* /.cart */}
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="products">
                                                <div className="hot-deal-wrapper">
                                                    <div className="image">
                                                        <img src="assets/images/hot-deals/p10.jpg" alt=""/>
                                                    </div>
                                                    <div className="sale-offer-tag"><span>35%<br/>off</span></div>
                                                    <div className="timing-wrapper">
                                                        <div className="box-wrapper">
                                                            <div className="date box">
                                                                <span className="key">120</span>
                                                                <span className="value">Days</span>
                                                            </div>
                                                        </div>
                                                        <div className="box-wrapper">
                                                            <div className="hour box">
                                                                <span className="key">20</span>
                                                                <span className="value">HRS</span>
                                                            </div>
                                                        </div>
                                                        <div className="box-wrapper">
                                                            <div className="minutes box">
                                                                <span className="key">36</span>
                                                                <span className="value">MINS</span>
                                                            </div>
                                                        </div>
                                                        <div className="box-wrapper hidden-md">
                                                            <div className="seconds box">
                                                                <span className="key">60</span>
                                                                <span className="value">SEC</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /.hot-deal-wrapper */}
                                                <div className="product-info text-left m-t-20">
                                                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a>
                                                    </h3>
                                                    <div className="rating rateit-small"/>
                                                    <div className="product-price">
                          <span className="price">
                            $600.00
                          </span>
                                                        <span className="price-before-discount">$800.00</span>
                                                    </div>
                                                    {/* /.product-price */}
                                                </div>
                                                {/* /.product-info */}
                                                <div className="cart clearfix animate-effect">
                                                    <div className="action">
                                                        <div className="add-cart-button btn-group">
                                                            <button className="btn btn-primary icon"
                                                                    data-toggle="dropdown" type="button">
                                                                <i className="fa fa-shopping-cart"/>
                                                            </button>
                                                            <button className="btn btn-primary cart-btn"
                                                                    type="button">Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* /.action */}
                                                </div>
                                                {/* /.cart */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.sidebar-widget */}
                                </div>
                            </div>
                            {/* /.sidemenu-holder */}
                            <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
                                {/* ========================================== SECTION – HERO ========================================= */}
                                <div id="hero">
                                    <div id="owl-main" className="owl-carousel owl-inner-nav owl-ui-sm">
                                        <div className="item"
                                             style={{backgroundImage: 'url(assets/images/sliders/01.jpg)'}}>
                                            <div className="container-fluid">
                                                <div className="caption bg-color vertical-center text-left">
                                                    <div className="slider-header fadeInDown-1">Top Brands</div>
                                                    <div className="big-text fadeInDown-1">
                                                        New Collections
                                                    </div>
                                                    <div className="excerpt fadeInDown-2 hidden-xs">
                                                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                                                    </div>
                                                    <div className="button-holder fadeInDown-3">
                                                        <a href="index.php?page=single-product"
                                                           className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop
                                                            Now</a>
                                                    </div>
                                                </div>
                                                {/* /.caption */}
                                            </div>
                                            {/* /.container-fluid */}
                                        </div>
                                        {/* /.item */}
                                        <div className="item"
                                             style={{backgroundImage: 'url(assets/images/sliders/02.jpg)'}}>
                                            <div className="container-fluid">
                                                <div className="caption bg-color vertical-center text-left">
                                                    <div className="slider-header fadeInDown-1">Spring 2016</div>
                                                    <div className="big-text fadeInDown-1">
                                                        Women <span className="highlight">Fashion</span>
                                                    </div>
                                                    <div className="excerpt fadeInDown-2 hidden-xs">
                                                        <span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</span>
                                                    </div>
                                                    <div className="button-holder fadeInDown-3">
                                                        <a href="index.php?page=single-product"
                                                           className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop
                                                            Now</a>
                                                    </div>
                                                </div>
                                                {/* /.caption */}
                                            </div>
                                            {/* /.container-fluid */}
                                        </div>
                                        {/* /.item */}
                                    </div>
                                    {/* /.owl-carousel */}
                                </div>
                                {/* ========================================= SECTION – HERO : END ========================================= */}
                                {/* ============================================== INFO BOXES ============================================== */}
                                <div className="info-boxes wow fadeInUp">
                                    <div className="info-boxes-inner">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-4 col-lg-4">
                                                <div className="info-box">
                                                    <div className="row">
                                                        <div className="col-xs-12">
                                                            <h4 className="info-box-heading green">money back</h4>
                                                        </div>
                                                    </div>
                                                    <h6 className="text">30 Days Money Back Guarantee</h6>
                                                </div>
                                            </div>
                                            {/* .col */}
                                            <div className="hidden-md col-sm-4 col-lg-4">
                                                <div className="info-box">
                                                    <div className="row">
                                                        <div className="col-xs-12">
                                                            <h4 className="info-box-heading green">free shipping</h4>
                                                        </div>
                                                    </div>
                                                    <h6 className="text">Shipping on orders over $99</h6>
                                                </div>
                                            </div>
                                            {/* .col */}
                                            <div className="col-md-6 col-sm-4 col-lg-4">
                                                <div className="info-box">
                                                    <div className="row">
                                                        <div className="col-xs-12">
                                                            <h4 className="info-box-heading green">Special Sale</h4>
                                                        </div>
                                                    </div>
                                                    <h6 className="text">Extra $5 off on all items </h6>
                                                </div>
                                            </div>
                                            {/* .col */}
                                        </div>
                                        {/* /.row */}
                                    </div>
                                    {/* /.info-boxes-inner */}
                                </div>
                                {/* /.info-boxes */}
                                {/* ============================================== INFO BOXES : END ============================================== */}
                                {/* ============================================== SCROLL TABS ============================================== */}
                                <div id="product-tabs-slider" className="scroll-tabs outer-top-vs wow fadeInUp">
                                    <div className="more-info-tab clearfix ">
                                        <h3 className="new-product-title pull-left">New Products</h3>
                                        <ul className="nav nav-tabs nav-tab-line pull-right" id="new-products-1">
                                            <li className="active"><a data-transition-type="backSlide" href="#all"
                                                                      data-toggle="tab">All</a>
                                            </li>
                                            <li><a data-transition-type="backSlide" href="#smartphone"
                                                   data-toggle="tab">Clothing</a>
                                            </li>
                                            <li><a data-transition-type="backSlide" href="#laptop"
                                                   data-toggle="tab">Electronics</a>
                                            </li>
                                            <li><a data-transition-type="backSlide" href="#apple"
                                                   data-toggle="tab">Shoes</a></li>
                                        </ul>
                                        {/* /.nav-tabs */}
                                    </div>
                                    <div className="tab-content outer-top-xs">
                                        <div className="tab-pane in active" id="all">
                                            <div className="product-slider">
                                                <Slider {...settings}>
                                                    <div className="products">
                                                        <div className="product">
                                                            <div className="product-image">
                                                                <div className="image">
                                                                    <a href="detail.html"><img
                                                                        src="assets/images/products/p1.jpg" alt=""/></a>
                                                                </div>
                                                                {/* /.image */}
                                                                <div className="tag new"><span>new</span></div>
                                                            </div>
                                                            {/* /.product-image */}
                                                            <div className="product-info text-left">
                                                                <h3 className="name"><a href="detail.html">Floral
                                                                    Print Buttoned</a>
                                                                </h3>
                                                                <div className="rating rateit-small"/>
                                                                <div className="description"/>
                                                                <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                    <span
                                                                        className="price-before-discount">$ 800</span>
                                                                </div>
                                                                {/* /.product-price */}
                                                            </div>
                                                            {/* /.product-info */}
                                                            <div className="cart clearfix animate-effect">
                                                                <div className="action">
                                                                    <ul className="list-unstyled">
                                                                        <li className="add-cart-button btn-group">
                                                                            <button data-toggle="tooltip"
                                                                                    className="btn btn-primary icon"
                                                                                    type="button" title="Add Cart">
                                                                                <i className="fa fa-shopping-cart"/>
                                                                            </button>
                                                                            <button
                                                                                className="btn btn-primary cart-btn"
                                                                                type="button">
                                                                                Add to cart
                                                                            </button>
                                                                        </li>
                                                                        <li className="lnk wishlist">
                                                                            <a data-toggle="tooltip"
                                                                               className="add-to-cart"
                                                                               href="detail.html" title="Wishlist">
                                                                                <i className="icon fa fa-heart"/>
                                                                            </a>
                                                                        </li>
                                                                        <li className="lnk">
                                                                            <a data-toggle="tooltip"
                                                                               className="add-to-cart"
                                                                               href="detail.html" title="Compare">
                                                                                <i className="fa fa-signal"
                                                                                   aria-hidden="true"/>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                {/* /.action */}
                                                            </div>
                                                            {/* /.cart */}
                                                        </div>
                                                        {/* /.product */}
                                                    </div>
                                                    {/* /.item */}
                                                    <div className="products">
                                                        <div className="product">
                                                            <div className="product-image">
                                                                <div className="image">
                                                                    <a href="detail.html"><img
                                                                        src="assets/images/products/p1.jpg" alt=""/></a>
                                                                </div>
                                                                {/* /.image */}
                                                                <div className="tag new"><span>new</span></div>
                                                            </div>
                                                            {/* /.product-image */}
                                                            <div className="product-info text-left">
                                                                <h3 className="name"><a href="detail.html">Floral
                                                                    Print Buttoned</a>
                                                                </h3>
                                                                <div className="rating rateit-small"/>
                                                                <div className="description"/>
                                                                <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                    <span
                                                                        className="price-before-discount">$ 800</span>
                                                                </div>
                                                                {/* /.product-price */}
                                                            </div>
                                                            {/* /.product-info */}
                                                            <div className="cart clearfix animate-effect">
                                                                <div className="action">
                                                                    <ul className="list-unstyled">
                                                                        <li className="add-cart-button btn-group">
                                                                            <button data-toggle="tooltip"
                                                                                    className="btn btn-primary icon"
                                                                                    type="button" title="Add Cart">
                                                                                <i className="fa fa-shopping-cart"/>
                                                                            </button>
                                                                            <button
                                                                                className="btn btn-primary cart-btn"
                                                                                type="button">
                                                                                Add to cart
                                                                            </button>
                                                                        </li>
                                                                        <li className="lnk wishlist">
                                                                            <a data-toggle="tooltip"
                                                                               className="add-to-cart"
                                                                               href="detail.html" title="Wishlist">
                                                                                <i className="icon fa fa-heart"/>
                                                                            </a>
                                                                        </li>
                                                                        <li className="lnk">
                                                                            <a data-toggle="tooltip"
                                                                               className="add-to-cart"
                                                                               href="detail.html" title="Compare">
                                                                                <i className="fa fa-signal"
                                                                                   aria-hidden="true"/>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                {/* /.action */}
                                                            </div>
                                                            {/* /.cart */}
                                                        </div>
                                                        {/* /.product */}
                                                    </div>
                                                    <div className="products">
                                                        <div className="product">
                                                            <div className="product-image">
                                                                <div className="image">
                                                                    <a href="detail.html"><img
                                                                        src="assets/images/products/p1.jpg" alt=""/></a>
                                                                </div>
                                                                {/* /.image */}
                                                                <div className="tag new"><span>new</span></div>
                                                            </div>
                                                            {/* /.product-image */}
                                                            <div className="product-info text-left">
                                                                <h3 className="name"><a href="detail.html">Floral
                                                                    Print Buttoned</a>
                                                                </h3>
                                                                <div className="rating rateit-small"/>
                                                                <div className="description"/>
                                                                <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                    <span
                                                                        className="price-before-discount">$ 800</span>
                                                                </div>
                                                                {/* /.product-price */}
                                                            </div>
                                                            {/* /.product-info */}
                                                            <div className="cart clearfix animate-effect">
                                                                <div className="action">
                                                                    <ul className="list-unstyled">
                                                                        <li className="add-cart-button btn-group">
                                                                            <button data-toggle="tooltip"
                                                                                    className="btn btn-primary icon"
                                                                                    type="button" title="Add Cart">
                                                                                <i className="fa fa-shopping-cart"/>
                                                                            </button>
                                                                            <button
                                                                                className="btn btn-primary cart-btn"
                                                                                type="button">
                                                                                Add to cart
                                                                            </button>
                                                                        </li>
                                                                        <li className="lnk wishlist">
                                                                            <a data-toggle="tooltip"
                                                                               className="add-to-cart"
                                                                               href="detail.html" title="Wishlist">
                                                                                <i className="icon fa fa-heart"/>
                                                                            </a>
                                                                        </li>
                                                                        <li className="lnk">
                                                                            <a data-toggle="tooltip"
                                                                               className="add-to-cart"
                                                                               href="detail.html" title="Compare">
                                                                                <i className="fa fa-signal"
                                                                                   aria-hidden="true"/>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                {/* /.action */}
                                                            </div>
                                                            {/* /.cart */}
                                                        </div>
                                                        {/* /.product */}
                                                    </div>
                                                    <div className="products">
                                                        <div className="product">
                                                            <div className="product-image">
                                                                <div className="image">
                                                                    <a href="detail.html"><img
                                                                        src="assets/images/products/p1.jpg" alt=""/></a>
                                                                </div>
                                                                {/* /.image */}
                                                                <div className="tag new"><span>new</span></div>
                                                            </div>
                                                            {/* /.product-image */}
                                                            <div className="product-info text-left">
                                                                <h3 className="name"><a href="detail.html">Floral
                                                                    Print Buttoned</a>
                                                                </h3>
                                                                <div className="rating rateit-small"/>
                                                                <div className="description"/>
                                                                <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                    <span
                                                                        className="price-before-discount">$ 800</span>
                                                                </div>
                                                                {/* /.product-price */}
                                                            </div>
                                                            {/* /.product-info */}
                                                            <div className="cart clearfix animate-effect">
                                                                <div className="action">
                                                                    <ul className="list-unstyled">
                                                                        <li className="add-cart-button btn-group">
                                                                            <button data-toggle="tooltip"
                                                                                    className="btn btn-primary icon"
                                                                                    type="button" title="Add Cart">
                                                                                <i className="fa fa-shopping-cart"/>
                                                                            </button>
                                                                            <button
                                                                                className="btn btn-primary cart-btn"
                                                                                type="button">
                                                                                Add to cart
                                                                            </button>
                                                                        </li>
                                                                        <li className="lnk wishlist">
                                                                            <a data-toggle="tooltip"
                                                                               className="add-to-cart"
                                                                               href="detail.html" title="Wishlist">
                                                                                <i className="icon fa fa-heart"/>
                                                                            </a>
                                                                        </li>
                                                                        <li className="lnk">
                                                                            <a data-toggle="tooltip"
                                                                               className="add-to-cart"
                                                                               href="detail.html" title="Compare">
                                                                                <i className="fa fa-signal"
                                                                                   aria-hidden="true"/>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                {/* /.action */}
                                                            </div>
                                                            {/* /.cart */}
                                                        </div>
                                                        {/* /.product */}
                                                    </div>
                                                    <div className="products">
                                                        <div className="product">
                                                            <div className="product-image">
                                                                <div className="image">
                                                                    <a href="detail.html"><img
                                                                        src="assets/images/products/p1.jpg" alt=""/></a>
                                                                </div>
                                                                {/* /.image */}
                                                                <div className="tag new"><span>new</span></div>
                                                            </div>
                                                            {/* /.product-image */}
                                                            <div className="product-info text-left">
                                                                <h3 className="name"><a href="detail.html">Floral
                                                                    Print Buttoned</a>
                                                                </h3>
                                                                <div className="rating rateit-small"/>
                                                                <div className="description"/>
                                                                <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                    <span
                                                                        className="price-before-discount">$ 800</span>
                                                                </div>
                                                                {/* /.product-price */}
                                                            </div>
                                                            {/* /.product-info */}
                                                            <div className="cart clearfix animate-effect">
                                                                <div className="action">
                                                                    <ul className="list-unstyled">
                                                                        <li className="add-cart-button btn-group">
                                                                            <button data-toggle="tooltip"
                                                                                    className="btn btn-primary icon"
                                                                                    type="button" title="Add Cart">
                                                                                <i className="fa fa-shopping-cart"/>
                                                                            </button>
                                                                            <button
                                                                                className="btn btn-primary cart-btn"
                                                                                type="button">
                                                                                Add to cart
                                                                            </button>
                                                                        </li>
                                                                        <li className="lnk wishlist">
                                                                            <a data-toggle="tooltip"
                                                                               className="add-to-cart"
                                                                               href="detail.html" title="Wishlist">
                                                                                <i className="icon fa fa-heart"/>
                                                                            </a>
                                                                        </li>
                                                                        <li className="lnk">
                                                                            <a data-toggle="tooltip"
                                                                               className="add-to-cart"
                                                                               href="detail.html" title="Compare">
                                                                                <i className="fa fa-signal"
                                                                                   aria-hidden="true"/>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                {/* /.action */}
                                                            </div>
                                                            {/* /.cart */}
                                                        </div>
                                                        {/* /.product */}
                                                    </div>
                                                    <div className="products">
                                                        <div className="product">
                                                            <div className="product-image">
                                                                <div className="image">
                                                                    <a href="detail.html"><img
                                                                        src="assets/images/products/p1.jpg" alt=""/></a>
                                                                </div>
                                                                {/* /.image */}
                                                                <div className="tag new"><span>new</span></div>
                                                            </div>
                                                            {/* /.product-image */}
                                                            <div className="product-info text-left">
                                                                <h3 className="name"><a href="detail.html">Floral
                                                                    Print Buttoned</a>
                                                                </h3>
                                                                <div className="rating rateit-small"/>
                                                                <div className="description"/>
                                                                <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                    <span
                                                                        className="price-before-discount">$ 800</span>
                                                                </div>
                                                                {/* /.product-price */}
                                                            </div>
                                                            {/* /.product-info */}
                                                            <div className="cart clearfix animate-effect">
                                                                <div className="action">
                                                                    <ul className="list-unstyled">
                                                                        <li className="add-cart-button btn-group">
                                                                            <button data-toggle="tooltip"
                                                                                    className="btn btn-primary icon"
                                                                                    type="button" title="Add Cart">
                                                                                <i className="fa fa-shopping-cart"/>
                                                                            </button>
                                                                            <button
                                                                                className="btn btn-primary cart-btn"
                                                                                type="button">
                                                                                Add to cart
                                                                            </button>
                                                                        </li>
                                                                        <li className="lnk wishlist">
                                                                            <a data-toggle="tooltip"
                                                                               className="add-to-cart"
                                                                               href="detail.html" title="Wishlist">
                                                                                <i className="icon fa fa-heart"/>
                                                                            </a>
                                                                        </li>
                                                                        <li className="lnk">
                                                                            <a data-toggle="tooltip"
                                                                               className="add-to-cart"
                                                                               href="detail.html" title="Compare">
                                                                                <i className="fa fa-signal"
                                                                                   aria-hidden="true"/>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                {/* /.action */}
                                                            </div>
                                                            {/* /.cart */}
                                                        </div>
                                                        {/* /.product */}
                                                    </div>
                                                    <div className="products">
                                                        <div className="product">
                                                            <div className="product-image">
                                                                <div className="image">
                                                                    <a href="detail.html"><img
                                                                        src="assets/images/products/p1.jpg" alt=""/></a>
                                                                </div>
                                                                {/* /.image */}
                                                                <div className="tag new"><span>new</span></div>
                                                            </div>
                                                            {/* /.product-image */}
                                                            <div className="product-info text-left">
                                                                <h3 className="name"><a href="detail.html">Floral
                                                                    Print Buttoned</a>
                                                                </h3>
                                                                <div className="rating rateit-small"/>
                                                                <div className="description"/>
                                                                <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                    <span
                                                                        className="price-before-discount">$ 800</span>
                                                                </div>
                                                                {/* /.product-price */}
                                                            </div>
                                                            {/* /.product-info */}
                                                            <div className="cart clearfix animate-effect">
                                                                <div className="action">
                                                                    <ul className="list-unstyled">
                                                                        <li className="add-cart-button btn-group">
                                                                            <button data-toggle="tooltip"
                                                                                    className="btn btn-primary icon"
                                                                                    type="button" title="Add Cart">
                                                                                <i className="fa fa-shopping-cart"/>
                                                                            </button>
                                                                            <button
                                                                                className="btn btn-primary cart-btn"
                                                                                type="button">
                                                                                Add to cart
                                                                            </button>
                                                                        </li>
                                                                        <li className="lnk wishlist">
                                                                            <a data-toggle="tooltip"
                                                                               className="add-to-cart"
                                                                               href="detail.html" title="Wishlist">
                                                                                <i className="icon fa fa-heart"/>
                                                                            </a>
                                                                        </li>
                                                                        <li className="lnk">
                                                                            <a data-toggle="tooltip"
                                                                               className="add-to-cart"
                                                                               href="detail.html" title="Compare">
                                                                                <i className="fa fa-signal"
                                                                                   aria-hidden="true"/>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                {/* /.action */}
                                                            </div>
                                                            {/* /.cart */}
                                                        </div>
                                                        {/* /.product */}
                                                    </div>

                                                </Slider>
                                            </div>
                                            {/* /.product-slider */}
                                        </div>
                                        {/* /.tab-pane */}
                                        <div className="tab-pane" id="smartphone">
                                            <div className="product-slider">
                                                <div
                                                    className="owl-carousel home-owl-carousel custom-carousel owl-theme">
                                                    <div className="item item-carousel">
                                                        <div className="products">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="image">
                                                                        <a href="detail.html"><img
                                                                            src="assets/images/products/p5.jpg" alt=""/></a>
                                                                    </div>
                                                                    {/* /.image */}
                                                                    <div className="tag sale"><span>sale</span></div>
                                                                </div>
                                                                {/* /.product-image */}
                                                                <div className="product-info text-left">
                                                                    <h3 className="name"><a href="detail.html">Floral
                                                                        Print Buttoned</a>
                                                                    </h3>
                                                                    <div className="rating rateit-small"/>
                                                                    <div className="description"/>
                                                                    <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                        <span
                                                                            className="price-before-discount">$ 800</span>
                                                                    </div>
                                                                    {/* /.product-price */}
                                                                </div>
                                                                {/* /.product-info */}
                                                                <div className="cart clearfix animate-effect">
                                                                    <div className="action">
                                                                        <ul className="list-unstyled">
                                                                            <li className="add-cart-button btn-group">
                                                                                <button className="btn btn-primary icon"
                                                                                        data-toggle="dropdown"
                                                                                        type="button">
                                                                                    <i className="fa fa-shopping-cart"/>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary cart-btn"
                                                                                    type="button">
                                                                                    Add to cart
                                                                                </button>
                                                                            </li>
                                                                            <li className="lnk wishlist">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Wishlist">
                                                                                    <i className="icon fa fa-heart"/>
                                                                                </a>
                                                                            </li>
                                                                            <li className="lnk">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Compare">
                                                                                    <i className="fa fa-signal"
                                                                                       aria-hidden="true"/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* /.action */}
                                                                </div>
                                                                {/* /.cart */}
                                                            </div>
                                                            {/* /.product */}
                                                        </div>
                                                        {/* /.products */}
                                                    </div>
                                                    {/* /.item */}
                                                    <div className="item item-carousel">
                                                        <div className="products">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="image">
                                                                        <a href="detail.html"><img
                                                                            src="assets/images/products/p6.jpg" alt=""/></a>
                                                                    </div>
                                                                    {/* /.image */}
                                                                    <div className="tag new"><span>new</span></div>
                                                                </div>
                                                                {/* /.product-image */}
                                                                <div className="product-info text-left">
                                                                    <h3 className="name"><a href="detail.html">Floral
                                                                        Print Buttoned</a>
                                                                    </h3>
                                                                    <div className="rating rateit-small"/>
                                                                    <div className="description"/>
                                                                    <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                        <span
                                                                            className="price-before-discount">$ 800</span>
                                                                    </div>
                                                                    {/* /.product-price */}
                                                                </div>
                                                                {/* /.product-info */}
                                                                <div className="cart clearfix animate-effect">
                                                                    <div className="action">
                                                                        <ul className="list-unstyled">
                                                                            <li className="add-cart-button btn-group">
                                                                                <button className="btn btn-primary icon"
                                                                                        data-toggle="dropdown"
                                                                                        type="button">
                                                                                    <i className="fa fa-shopping-cart"/>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary cart-btn"
                                                                                    type="button">
                                                                                    Add to cart
                                                                                </button>
                                                                            </li>
                                                                            <li className="lnk wishlist">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Wishlist">
                                                                                    <i className="icon fa fa-heart"/>
                                                                                </a>
                                                                            </li>
                                                                            <li className="lnk">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Compare">
                                                                                    <i className="fa fa-signal"
                                                                                       aria-hidden="true"/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* /.action */}
                                                                </div>
                                                                {/* /.cart */}
                                                            </div>
                                                            {/* /.product */}
                                                        </div>
                                                        {/* /.products */}
                                                    </div>
                                                    {/* /.item */}
                                                    <div className="item item-carousel">
                                                        <div className="products">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="image">
                                                                        <a href="detail.html"><img
                                                                            src="assets/images/products/p7.jpg" alt=""/></a>
                                                                    </div>
                                                                    {/* /.image */}
                                                                    <div className="tag sale"><span>sale</span></div>
                                                                </div>
                                                                {/* /.product-image */}
                                                                <div className="product-info text-left">
                                                                    <h3 className="name"><a href="detail.html">Floral
                                                                        Print Buttoned</a>
                                                                    </h3>
                                                                    <div className="rating rateit-small"/>
                                                                    <div className="description"/>
                                                                    <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                        <span
                                                                            className="price-before-discount">$ 800</span>
                                                                    </div>
                                                                    {/* /.product-price */}
                                                                </div>
                                                                {/* /.product-info */}
                                                                <div className="cart clearfix animate-effect">
                                                                    <div className="action">
                                                                        <ul className="list-unstyled">
                                                                            <li className="add-cart-button btn-group">
                                                                                <button className="btn btn-primary icon"
                                                                                        data-toggle="dropdown"
                                                                                        type="button">
                                                                                    <i className="fa fa-shopping-cart"/>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary cart-btn"
                                                                                    type="button">
                                                                                    Add to cart
                                                                                </button>
                                                                            </li>
                                                                            <li className="lnk wishlist">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Wishlist">
                                                                                    <i className="icon fa fa-heart"/>
                                                                                </a>
                                                                            </li>
                                                                            <li className="lnk">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Compare">
                                                                                    <i className="fa fa-signal"
                                                                                       aria-hidden="true"/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* /.action */}
                                                                </div>
                                                                {/* /.cart */}
                                                            </div>
                                                            {/* /.product */}
                                                        </div>
                                                        {/* /.products */}
                                                    </div>
                                                    {/* /.item */}
                                                    <div className="item item-carousel">
                                                        <div className="products">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="image">
                                                                        <a href="detail.html"><img
                                                                            src="assets/images/products/p8.jpg" alt=""/></a>
                                                                    </div>
                                                                    {/* /.image */}
                                                                    <div className="tag new"><span>new</span></div>
                                                                </div>
                                                                {/* /.product-image */}
                                                                <div className="product-info text-left">
                                                                    <h3 className="name"><a href="detail.html">Floral
                                                                        Print Buttoned</a>
                                                                    </h3>
                                                                    <div className="rating rateit-small"/>
                                                                    <div className="description"/>
                                                                    <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                        <span
                                                                            className="price-before-discount">$ 800</span>
                                                                    </div>
                                                                    {/* /.product-price */}
                                                                </div>
                                                                {/* /.product-info */}
                                                                <div className="cart clearfix animate-effect">
                                                                    <div className="action">
                                                                        <ul className="list-unstyled">
                                                                            <li className="add-cart-button btn-group">
                                                                                <button className="btn btn-primary icon"
                                                                                        data-toggle="dropdown"
                                                                                        type="button">
                                                                                    <i className="fa fa-shopping-cart"/>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary cart-btn"
                                                                                    type="button">
                                                                                    Add to cart
                                                                                </button>
                                                                            </li>
                                                                            <li className="lnk wishlist">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Wishlist">
                                                                                    <i className="icon fa fa-heart"/>
                                                                                </a>
                                                                            </li>
                                                                            <li className="lnk">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Compare">
                                                                                    <i className="fa fa-signal"
                                                                                       aria-hidden="true"/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* /.action */}
                                                                </div>
                                                                {/* /.cart */}
                                                            </div>
                                                            {/* /.product */}
                                                        </div>
                                                        {/* /.products */}
                                                    </div>
                                                    {/* /.item */}
                                                    <div className="item item-carousel">
                                                        <div className="products">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="image">
                                                                        <a href="detail.html"><img
                                                                            src="assets/images/products/p9.jpg" alt=""/></a>
                                                                    </div>
                                                                    {/* /.image */}
                                                                    <div className="tag hot"><span>hot</span></div>
                                                                </div>
                                                                {/* /.product-image */}
                                                                <div className="product-info text-left">
                                                                    <h3 className="name"><a href="detail.html">Floral
                                                                        Print Buttoned</a>
                                                                    </h3>
                                                                    <div className="rating rateit-small"/>
                                                                    <div className="description"/>
                                                                    <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                        <span
                                                                            className="price-before-discount">$ 800</span>
                                                                    </div>
                                                                    {/* /.product-price */}
                                                                </div>
                                                                {/* /.product-info */}
                                                                <div className="cart clearfix animate-effect">
                                                                    <div className="action">
                                                                        <ul className="list-unstyled">
                                                                            <li className="add-cart-button btn-group">
                                                                                <button className="btn btn-primary icon"
                                                                                        data-toggle="dropdown"
                                                                                        type="button">
                                                                                    <i className="fa fa-shopping-cart"/>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary cart-btn"
                                                                                    type="button">
                                                                                    Add to cart
                                                                                </button>
                                                                            </li>
                                                                            <li className="lnk wishlist">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Wishlist">
                                                                                    <i className="icon fa fa-heart"/>
                                                                                </a>
                                                                            </li>
                                                                            <li className="lnk">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Compare">
                                                                                    <i className="fa fa-signal"
                                                                                       aria-hidden="true"/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* /.action */}
                                                                </div>
                                                                {/* /.cart */}
                                                            </div>
                                                            {/* /.product */}
                                                        </div>
                                                        {/* /.products */}
                                                    </div>
                                                    {/* /.item */}
                                                    <div className="item item-carousel">
                                                        <div className="products">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="image">
                                                                        <a href="detail.html"><img
                                                                            src="assets/images/products/p10.jpg"
                                                                            alt=""/></a>
                                                                    </div>
                                                                    {/* /.image */}
                                                                    <div className="tag hot"><span>hot</span></div>
                                                                </div>
                                                                {/* /.product-image */}
                                                                <div className="product-info text-left">
                                                                    <h3 className="name"><a href="detail.html">Floral
                                                                        Print Buttoned</a>
                                                                    </h3>
                                                                    <div className="rating rateit-small"/>
                                                                    <div className="description"/>
                                                                    <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                        <span
                                                                            className="price-before-discount">$ 800</span>
                                                                    </div>
                                                                    {/* /.product-price */}
                                                                </div>
                                                                {/* /.product-info */}
                                                                <div className="cart clearfix animate-effect">
                                                                    <div className="action">
                                                                        <ul className="list-unstyled">
                                                                            <li className="add-cart-button btn-group">
                                                                                <button className="btn btn-primary icon"
                                                                                        data-toggle="dropdown"
                                                                                        type="button">
                                                                                    <i className="fa fa-shopping-cart"/>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary cart-btn"
                                                                                    type="button">
                                                                                    Add to cart
                                                                                </button>
                                                                            </li>
                                                                            <li className="lnk wishlist">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Wishlist">
                                                                                    <i className="icon fa fa-heart"/>
                                                                                </a>
                                                                            </li>
                                                                            <li className="lnk">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Compare">
                                                                                    <i className="fa fa-signal"
                                                                                       aria-hidden="true"/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* /.action */}
                                                                </div>
                                                                {/* /.cart */}
                                                            </div>
                                                            {/* /.product */}
                                                        </div>
                                                        {/* /.products */}
                                                    </div>
                                                    {/* /.item */}
                                                </div>
                                                {/* /.home-owl-carousel */}
                                            </div>
                                            {/* /.product-slider */}
                                        </div>
                                        {/* /.tab-pane */}
                                        <div className="tab-pane" id="laptop">
                                            <div className="product-slider">
                                                <div
                                                    className="owl-carousel home-owl-carousel custom-carousel owl-theme">
                                                    <div className="item item-carousel">
                                                        <div className="products">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="image">
                                                                        <a href="detail.html"><img
                                                                            src="assets/images/products/p11.jpg"
                                                                            alt=""/></a>
                                                                    </div>
                                                                    {/* /.image */}
                                                                    <div className="tag new"><span>new</span></div>
                                                                </div>
                                                                {/* /.product-image */}
                                                                <div className="product-info text-left">
                                                                    <h3 className="name"><a href="detail.html">Floral
                                                                        Print Buttoned</a>
                                                                    </h3>
                                                                    <div className="rating rateit-small"/>
                                                                    <div className="description"/>
                                                                    <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                        <span
                                                                            className="price-before-discount">$ 800</span>
                                                                    </div>
                                                                    {/* /.product-price */}
                                                                </div>
                                                                {/* /.product-info */}
                                                                <div className="cart clearfix animate-effect">
                                                                    <div className="action">
                                                                        <ul className="list-unstyled">
                                                                            <li className="add-cart-button btn-group">
                                                                                <button className="btn btn-primary icon"
                                                                                        data-toggle="dropdown"
                                                                                        type="button">
                                                                                    <i className="fa fa-shopping-cart"/>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary cart-btn"
                                                                                    type="button">
                                                                                    Add to cart
                                                                                </button>
                                                                            </li>
                                                                            <li className="lnk wishlist">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Wishlist">
                                                                                    <i className="icon fa fa-heart"/>
                                                                                </a>
                                                                            </li>
                                                                            <li className="lnk">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Compare">
                                                                                    <i className="fa fa-signal"
                                                                                       aria-hidden="true"/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* /.action */}
                                                                </div>
                                                                {/* /.cart */}
                                                            </div>
                                                            {/* /.product */}
                                                        </div>
                                                        {/* /.products */}
                                                    </div>
                                                    {/* /.item */}
                                                    <div className="item item-carousel">
                                                        <div className="products">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="image">
                                                                        <a href="detail.html"><img
                                                                            src="assets/images/products/p12.jpg"
                                                                            alt=""/></a>
                                                                    </div>
                                                                    {/* /.image */}
                                                                    <div className="tag new"><span>new</span></div>
                                                                </div>
                                                                {/* /.product-image */}
                                                                <div className="product-info text-left">
                                                                    <h3 className="name"><a href="detail.html">Floral
                                                                        Print Buttoned</a>
                                                                    </h3>
                                                                    <div className="rating rateit-small"/>
                                                                    <div className="description"/>
                                                                    <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                        <span
                                                                            className="price-before-discount">$ 800</span>
                                                                    </div>
                                                                    {/* /.product-price */}
                                                                </div>
                                                                {/* /.product-info */}
                                                                <div className="cart clearfix animate-effect">
                                                                    <div className="action">
                                                                        <ul className="list-unstyled">
                                                                            <li className="add-cart-button btn-group">
                                                                                <button className="btn btn-primary icon"
                                                                                        data-toggle="dropdown"
                                                                                        type="button">
                                                                                    <i className="fa fa-shopping-cart"/>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary cart-btn"
                                                                                    type="button">
                                                                                    Add to cart
                                                                                </button>
                                                                            </li>
                                                                            <li className="lnk wishlist">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Wishlist">
                                                                                    <i className="icon fa fa-heart"/>
                                                                                </a>
                                                                            </li>
                                                                            <li className="lnk">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Compare">
                                                                                    <i className="fa fa-signal"
                                                                                       aria-hidden="true"/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* /.action */}
                                                                </div>
                                                                {/* /.cart */}
                                                            </div>
                                                            {/* /.product */}
                                                        </div>
                                                        {/* /.products */}
                                                    </div>
                                                    {/* /.item */}
                                                    <div className="item item-carousel">
                                                        <div className="products">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="image">
                                                                        <a href="detail.html"><img
                                                                            src="assets/images/products/p13.jpg"
                                                                            alt=""/></a>
                                                                    </div>
                                                                    {/* /.image */}
                                                                    <div className="tag sale"><span>sale</span></div>
                                                                </div>
                                                                {/* /.product-image */}
                                                                <div className="product-info text-left">
                                                                    <h3 className="name"><a href="detail.html">Floral
                                                                        Print Buttoned</a>
                                                                    </h3>
                                                                    <div className="rating rateit-small"/>
                                                                    <div className="description"/>
                                                                    <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                        <span
                                                                            className="price-before-discount">$ 800</span>
                                                                    </div>
                                                                    {/* /.product-price */}
                                                                </div>
                                                                {/* /.product-info */}
                                                                <div className="cart clearfix animate-effect">
                                                                    <div className="action">
                                                                        <ul className="list-unstyled">
                                                                            <li className="add-cart-button btn-group">
                                                                                <button className="btn btn-primary icon"
                                                                                        data-toggle="dropdown"
                                                                                        type="button">
                                                                                    <i className="fa fa-shopping-cart"/>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary cart-btn"
                                                                                    type="button">
                                                                                    Add to cart
                                                                                </button>
                                                                            </li>
                                                                            <li className="lnk wishlist">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Wishlist">
                                                                                    <i className="icon fa fa-heart"/>
                                                                                </a>
                                                                            </li>
                                                                            <li className="lnk">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Compare">
                                                                                    <i className="fa fa-signal"
                                                                                       aria-hidden="true"/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* /.action */}
                                                                </div>
                                                                {/* /.cart */}
                                                            </div>
                                                            {/* /.product */}
                                                        </div>
                                                        {/* /.products */}
                                                    </div>
                                                    {/* /.item */}
                                                    <div className="item item-carousel">
                                                        <div className="products">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="image">
                                                                        <a href="detail.html"><img
                                                                            src="assets/images/products/p14.jpg"
                                                                            alt=""/></a>
                                                                    </div>
                                                                    {/* /.image */}
                                                                    <div className="tag hot"><span>hot</span></div>
                                                                </div>
                                                                {/* /.product-image */}
                                                                <div className="product-info text-left">
                                                                    <h3 className="name"><a href="detail.html">Floral
                                                                        Print Buttoned</a>
                                                                    </h3>
                                                                    <div className="rating rateit-small"/>
                                                                    <div className="description"/>
                                                                    <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                        <span
                                                                            className="price-before-discount">$ 800</span>
                                                                    </div>
                                                                    {/* /.product-price */}
                                                                </div>
                                                                {/* /.product-info */}
                                                                <div className="cart clearfix animate-effect">
                                                                    <div className="action">
                                                                        <ul className="list-unstyled">
                                                                            <li className="add-cart-button btn-group">
                                                                                <button className="btn btn-primary icon"
                                                                                        data-toggle="dropdown"
                                                                                        type="button">
                                                                                    <i className="fa fa-shopping-cart"/>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary cart-btn"
                                                                                    type="button">
                                                                                    Add to cart
                                                                                </button>
                                                                            </li>
                                                                            <li className="lnk wishlist">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Wishlist">
                                                                                    <i className="icon fa fa-heart"/>
                                                                                </a>
                                                                            </li>
                                                                            <li className="lnk">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Compare">
                                                                                    <i className="fa fa-signal"
                                                                                       aria-hidden="true"/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* /.action */}
                                                                </div>
                                                                {/* /.cart */}
                                                            </div>
                                                            {/* /.product */}
                                                        </div>
                                                        {/* /.products */}
                                                    </div>
                                                    {/* /.item */}
                                                    <div className="item item-carousel">
                                                        <div className="products">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="image">
                                                                        <a href="detail.html"><img
                                                                            src="assets/images/products/p15.jpg"
                                                                            alt=""/></a>
                                                                    </div>
                                                                    {/* /.image */}
                                                                    <div className="tag hot"><span>hot</span></div>
                                                                </div>
                                                                {/* /.product-image */}
                                                                <div className="product-info text-left">
                                                                    <h3 className="name"><a href="detail.html">Floral
                                                                        Print Buttoned</a>
                                                                    </h3>
                                                                    <div className="rating rateit-small"/>
                                                                    <div className="description"/>
                                                                    <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                        <span
                                                                            className="price-before-discount">$ 800</span>
                                                                    </div>
                                                                    {/* /.product-price */}
                                                                </div>
                                                                {/* /.product-info */}
                                                                <div className="cart clearfix animate-effect">
                                                                    <div className="action">
                                                                        <ul className="list-unstyled">
                                                                            <li className="add-cart-button btn-group">
                                                                                <button className="btn btn-primary icon"
                                                                                        data-toggle="dropdown"
                                                                                        type="button">
                                                                                    <i className="fa fa-shopping-cart"/>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary cart-btn"
                                                                                    type="button">
                                                                                    Add to cart
                                                                                </button>
                                                                            </li>
                                                                            <li className="lnk wishlist">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Wishlist">
                                                                                    <i className="icon fa fa-heart"/>
                                                                                </a>
                                                                            </li>
                                                                            <li className="lnk">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Compare">
                                                                                    <i className="fa fa-signal"
                                                                                       aria-hidden="true"/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* /.action */}
                                                                </div>
                                                                {/* /.cart */}
                                                            </div>
                                                            {/* /.product */}
                                                        </div>
                                                        {/* /.products */}
                                                    </div>
                                                    {/* /.item */}
                                                    <div className="item item-carousel">
                                                        <div className="products">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="image">
                                                                        <a href="detail.html"><img
                                                                            src="assets/images/products/p16.jpg"
                                                                            alt=""/></a>
                                                                    </div>
                                                                    {/* /.image */}
                                                                    <div className="tag sale"><span>sale</span></div>
                                                                </div>
                                                                {/* /.product-image */}
                                                                <div className="product-info text-left">
                                                                    <h3 className="name"><a href="detail.html">Apple
                                                                        Iphone 5s 32GB</a></h3>
                                                                    <div className="rating rateit-small"/>
                                                                    <div className="description"/>
                                                                    <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                        <span
                                                                            className="price-before-discount">$ 800</span>
                                                                    </div>
                                                                    {/* /.product-price */}
                                                                </div>
                                                                {/* /.product-info */}
                                                                <div className="cart clearfix animate-effect">
                                                                    <div className="action">
                                                                        <ul className="list-unstyled">
                                                                            <li className="add-cart-button btn-group">
                                                                                <button className="btn btn-primary icon"
                                                                                        data-toggle="dropdown"
                                                                                        type="button">
                                                                                    <i className="fa fa-shopping-cart"/>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary cart-btn"
                                                                                    type="button">
                                                                                    Add to cart
                                                                                </button>
                                                                            </li>
                                                                            <li className="lnk wishlist">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Wishlist">
                                                                                    <i className="icon fa fa-heart"/>
                                                                                </a>
                                                                            </li>
                                                                            <li className="lnk">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Compare">
                                                                                    <i className="fa fa-signal"
                                                                                       aria-hidden="true"/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* /.action */}
                                                                </div>
                                                                {/* /.cart */}
                                                            </div>
                                                            {/* /.product */}
                                                        </div>
                                                        {/* /.products */}
                                                    </div>
                                                    {/* /.item */}
                                                </div>
                                                {/* /.home-owl-carousel */}
                                            </div>
                                            {/* /.product-slider */}
                                        </div>
                                        {/* /.tab-pane */}
                                        <div className="tab-pane" id="apple">
                                            <div className="product-slider">
                                                <div
                                                    className="owl-carousel home-owl-carousel custom-carousel owl-theme">
                                                    <div className="item item-carousel">
                                                        <div className="products">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="image">
                                                                        <a href="detail.html"><img
                                                                            src="assets/images/products/p18.jpg"
                                                                            alt=""/></a>
                                                                    </div>
                                                                    {/* /.image */}
                                                                    <div className="tag sale"><span>sale</span></div>
                                                                </div>
                                                                {/* /.product-image */}
                                                                <div className="product-info text-left">
                                                                    <h3 className="name"><a href="detail.html">Floral
                                                                        Print Buttoned</a>
                                                                    </h3>
                                                                    <div className="rating rateit-small"/>
                                                                    <div className="description"/>
                                                                    <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                        <span
                                                                            className="price-before-discount">$ 800</span>
                                                                    </div>
                                                                    {/* /.product-price */}
                                                                </div>
                                                                {/* /.product-info */}
                                                                <div className="cart clearfix animate-effect">
                                                                    <div className="action">
                                                                        <ul className="list-unstyled">
                                                                            <li className="add-cart-button btn-group">
                                                                                <button className="btn btn-primary icon"
                                                                                        data-toggle="dropdown"
                                                                                        type="button">
                                                                                    <i className="fa fa-shopping-cart"/>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary cart-btn"
                                                                                    type="button">
                                                                                    Add to cart
                                                                                </button>
                                                                            </li>
                                                                            <li className="lnk wishlist">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Wishlist">
                                                                                    <i className="icon fa fa-heart"/>
                                                                                </a>
                                                                            </li>
                                                                            <li className="lnk">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Compare">
                                                                                    <i className="fa fa-signal"
                                                                                       aria-hidden="true"/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* /.action */}
                                                                </div>
                                                                {/* /.cart */}
                                                            </div>
                                                            {/* /.product */}
                                                        </div>
                                                        {/* /.products */}
                                                    </div>
                                                    {/* /.item */}
                                                    <div className="item item-carousel">
                                                        <div className="products">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="image">
                                                                        <a href="detail.html"><img
                                                                            src="assets/images/products/p18.jpg"
                                                                            alt=""/></a>
                                                                    </div>
                                                                    {/* /.image */}
                                                                    <div className="tag hot"><span>hot</span></div>
                                                                </div>
                                                                {/* /.product-image */}
                                                                <div className="product-info text-left">
                                                                    <h3 className="name"><a href="detail.html">Floral
                                                                        Print Buttoned</a>
                                                                    </h3>
                                                                    <div className="rating rateit-small"/>
                                                                    <div className="description"/>
                                                                    <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                        <span
                                                                            className="price-before-discount">$ 800</span>
                                                                    </div>
                                                                    {/* /.product-price */}
                                                                </div>
                                                                {/* /.product-info */}
                                                                <div className="cart clearfix animate-effect">
                                                                    <div className="action">
                                                                        <ul className="list-unstyled">
                                                                            <li className="add-cart-button btn-group">
                                                                                <button className="btn btn-primary icon"
                                                                                        data-toggle="dropdown"
                                                                                        type="button">
                                                                                    <i className="fa fa-shopping-cart"/>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary cart-btn"
                                                                                    type="button">
                                                                                    Add to cart
                                                                                </button>
                                                                            </li>
                                                                            <li className="lnk wishlist">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Wishlist">
                                                                                    <i className="icon fa fa-heart"/>
                                                                                </a>
                                                                            </li>
                                                                            <li className="lnk">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Compare">
                                                                                    <i className="fa fa-signal"
                                                                                       aria-hidden="true"/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* /.action */}
                                                                </div>
                                                                {/* /.cart */}
                                                            </div>
                                                            {/* /.product */}
                                                        </div>
                                                        {/* /.products */}
                                                    </div>
                                                    {/* /.item */}
                                                    <div className="item item-carousel">
                                                        <div className="products">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="image">
                                                                        <a href="detail.html"><img
                                                                            src="assets/images/products/p17.jpg"
                                                                            alt=""/></a>
                                                                    </div>
                                                                    {/* /.image */}
                                                                    <div className="tag sale"><span>sale</span></div>
                                                                </div>
                                                                {/* /.product-image */}
                                                                <div className="product-info text-left">
                                                                    <h3 className="name"><a href="detail.html">Floral
                                                                        Print Buttoned</a>
                                                                    </h3>
                                                                    <div className="rating rateit-small"/>
                                                                    <div className="description"/>
                                                                    <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                        <span
                                                                            className="price-before-discount">$ 800</span>
                                                                    </div>
                                                                    {/* /.product-price */}
                                                                </div>
                                                                {/* /.product-info */}
                                                                <div className="cart clearfix animate-effect">
                                                                    <div className="action">
                                                                        <ul className="list-unstyled">
                                                                            <li className="add-cart-button btn-group">
                                                                                <button className="btn btn-primary icon"
                                                                                        data-toggle="dropdown"
                                                                                        type="button">
                                                                                    <i className="fa fa-shopping-cart"/>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary cart-btn"
                                                                                    type="button">
                                                                                    Add to cart
                                                                                </button>
                                                                            </li>
                                                                            <li className="lnk wishlist">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Wishlist">
                                                                                    <i className="icon fa fa-heart"/>
                                                                                </a>
                                                                            </li>
                                                                            <li className="lnk">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Compare">
                                                                                    <i className="fa fa-signal"
                                                                                       aria-hidden="true"/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* /.action */}
                                                                </div>
                                                                {/* /.cart */}
                                                            </div>
                                                            {/* /.product */}
                                                        </div>
                                                        {/* /.products */}
                                                    </div>
                                                    {/* /.item */}
                                                    <div className="item item-carousel">
                                                        <div className="products">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="image">
                                                                        <a href="detail.html"><img
                                                                            src="assets/images/products/p16.jpg"
                                                                            alt=""/></a>
                                                                    </div>
                                                                    {/* /.image */}
                                                                    <div className="tag new"><span>new</span></div>
                                                                </div>
                                                                {/* /.product-image */}
                                                                <div className="product-info text-left">
                                                                    <h3 className="name"><a href="detail.html">Floral
                                                                        Print Buttoned</a>
                                                                    </h3>
                                                                    <div className="rating rateit-small"/>
                                                                    <div className="description"/>
                                                                    <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                        <span
                                                                            className="price-before-discount">$ 800</span>
                                                                    </div>
                                                                    {/* /.product-price */}
                                                                </div>
                                                                {/* /.product-info */}
                                                                <div className="cart clearfix animate-effect">
                                                                    <div className="action">
                                                                        <ul className="list-unstyled">
                                                                            <li className="add-cart-button btn-group">
                                                                                <button className="btn btn-primary icon"
                                                                                        data-toggle="dropdown"
                                                                                        type="button">
                                                                                    <i className="fa fa-shopping-cart"/>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary cart-btn"
                                                                                    type="button">
                                                                                    Add to cart
                                                                                </button>
                                                                            </li>
                                                                            <li className="lnk wishlist">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Wishlist">
                                                                                    <i className="icon fa fa-heart"/>
                                                                                </a>
                                                                            </li>
                                                                            <li className="lnk">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Compare">
                                                                                    <i className="fa fa-signal"
                                                                                       aria-hidden="true"/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* /.action */}
                                                                </div>
                                                                {/* /.cart */}
                                                            </div>
                                                            {/* /.product */}
                                                        </div>
                                                        {/* /.products */}
                                                    </div>
                                                    {/* /.item */}
                                                    <div className="item item-carousel">
                                                        <div className="products">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="image">
                                                                        <a href="detail.html"><img
                                                                            src="assets/images/products/p13.jpg"
                                                                            alt=""/></a>
                                                                    </div>
                                                                    {/* /.image */}
                                                                    <div className="tag new"><span>new</span></div>
                                                                </div>
                                                                {/* /.product-image */}
                                                                <div className="product-info text-left">
                                                                    <h3 className="name"><a href="detail.html">Floral
                                                                        Print Buttoned</a>
                                                                    </h3>
                                                                    <div className="rating rateit-small"/>
                                                                    <div className="description"/>
                                                                    <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                        <span
                                                                            className="price-before-discount">$ 800</span>
                                                                    </div>
                                                                    {/* /.product-price */}
                                                                </div>
                                                                {/* /.product-info */}
                                                                <div className="cart clearfix animate-effect">
                                                                    <div className="action">
                                                                        <ul className="list-unstyled">
                                                                            <li className="add-cart-button btn-group">
                                                                                <button className="btn btn-primary icon"
                                                                                        data-toggle="dropdown"
                                                                                        type="button">
                                                                                    <i className="fa fa-shopping-cart"/>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary cart-btn"
                                                                                    type="button">
                                                                                    Add to cart
                                                                                </button>
                                                                            </li>
                                                                            <li className="lnk wishlist">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Wishlist">
                                                                                    <i className="icon fa fa-heart"/>
                                                                                </a>
                                                                            </li>
                                                                            <li className="lnk">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Compare">
                                                                                    <i className="fa fa-signal"
                                                                                       aria-hidden="true"/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* /.action */}
                                                                </div>
                                                                {/* /.cart */}
                                                            </div>
                                                            {/* /.product */}
                                                        </div>
                                                        {/* /.products */}
                                                    </div>
                                                    {/* /.item */}
                                                    <div className="item item-carousel">
                                                        <div className="products">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="image">
                                                                        <a href="detail.html"><img
                                                                            src="assets/images/products/p14.jpg"
                                                                            alt=""/></a>
                                                                    </div>
                                                                    {/* /.image */}
                                                                    <div className="tag hot"><span>hot</span></div>
                                                                </div>
                                                                {/* /.product-image */}
                                                                <div className="product-info text-left">
                                                                    <h3 className="name"><a href="detail.html">Samsung
                                                                        Galaxy S4</a></h3>
                                                                    <div className="rating rateit-small"/>
                                                                    <div className="description"/>
                                                                    <div className="product-price">
                                  <span className="price">
                                    $450.99				</span>
                                                                        <span
                                                                            className="price-before-discount">$ 800</span>
                                                                    </div>
                                                                    {/* /.product-price */}
                                                                </div>
                                                                {/* /.product-info */}
                                                                <div className="cart clearfix animate-effect">
                                                                    <div className="action">
                                                                        <ul className="list-unstyled">
                                                                            <li className="add-cart-button btn-group">
                                                                                <button className="btn btn-primary icon"
                                                                                        data-toggle="dropdown"
                                                                                        type="button">
                                                                                    <i className="fa fa-shopping-cart"/>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary cart-btn"
                                                                                    type="button">
                                                                                    Add to cart
                                                                                </button>
                                                                            </li>
                                                                            <li className="lnk wishlist">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Wishlist">
                                                                                    <i className="icon fa fa-heart"/>
                                                                                </a>
                                                                            </li>
                                                                            <li className="lnk">
                                                                                <a className="add-to-cart"
                                                                                   href="detail.html" title="Compare">
                                                                                    <i className="fa fa-signal"
                                                                                       aria-hidden="true"/>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* /.action */}
                                                                </div>
                                                                {/* /.cart */}
                                                            </div>
                                                            {/* /.product */}
                                                        </div>
                                                        {/* /.products */}
                                                    </div>
                                                    {/* /.item */}
                                                </div>
                                                {/* /.home-owl-carousel */}
                                            </div>
                                            {/* /.product-slider */}
                                        </div>
                                        {/* /.tab-pane */}
                                    </div>
                                    {/* /.tab-content */}
                                </div>
                                {/* /.scroll-tabs */}
                                {/* ============================================== SCROLL TABS : END ============================================== */}
                                {/* ============================================== WIDE PRODUCTS ============================================== */}
                                <div className="wide-banners wow fadeInUp outer-bottom-xs">
                                    <div className="row">
                                        <div className="col-md-7 col-sm-7">
                                            <div className="wide-banner cnt-strip">
                                                <div className="image">
                                                    <img className="img-responsive"
                                                         src="assets/images/banners/home-banner1.jpg" alt=""/>
                                                </div>
                                            </div>
                                            {/* /.wide-banner */}
                                        </div>
                                        {/* /.col */}
                                        <div className="col-md-5 col-sm-5">
                                            <div className="wide-banner cnt-strip">
                                                <div className="image">
                                                    <img className="img-responsive"
                                                         src="assets/images/banners/home-banner2.jpg" alt=""/>
                                                </div>
                                            </div>
                                            {/* /.wide-banner */}
                                        </div>
                                        {/* /.col */}
                                    </div>
                                    {/* /.row */}
                                </div>
                                {/* /.wide-banners */}
                                {/* ============================================== WIDE PRODUCTS : END ============================================== */}
                                {/* ============================================== FEATURED PRODUCTS ============================================== */}
                                <section className="section featured-product wow fadeInUp">
                                    <h3 className="section-title">Featured products</h3>
                                    <div
                                        className="owl-carousel home-owl-carousel custom-carousel owl-theme outer-top-xs">
                                        <div className="item item-carousel">
                                            <div className="products">
                                                <div className="product">
                                                    <div className="product-image">
                                                        <div className="image">
                                                            <a href="detail.html"><img
                                                                src="assets/images/products/p5.jpg" alt=""/></a>
                                                        </div>
                                                        {/* /.image */}
                                                        <div className="tag hot"><span>hot</span></div>
                                                    </div>
                                                    {/* /.product-image */}
                                                    <div className="product-info text-left">
                                                        <h3 className="name"><a href="detail.html">Floral Print
                                                            Buttoned</a></h3>
                                                        <div className="rating rateit-small"/>
                                                        <div className="description"/>
                                                        <div className="product-price">
                            <span className="price">
                              $450.99				</span>
                                                            <span className="price-before-discount">$ 800</span>
                                                        </div>
                                                        {/* /.product-price */}
                                                    </div>
                                                    {/* /.product-info */}
                                                    <div className="cart clearfix animate-effect">
                                                        <div className="action">
                                                            <ul className="list-unstyled">
                                                                <li className="add-cart-button btn-group">
                                                                    <button className="btn btn-primary icon"
                                                                            data-toggle="dropdown" type="button">
                                                                        <i className="fa fa-shopping-cart"/>
                                                                    </button>
                                                                    <button className="btn btn-primary cart-btn"
                                                                            type="button">Add to cart
                                                                    </button>
                                                                </li>
                                                                <li className="lnk wishlist">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Wishlist">
                                                                        <i className="icon fa fa-heart"/>
                                                                    </a>
                                                                </li>
                                                                <li className="lnk">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Compare">
                                                                        <i className="fa fa-signal" aria-hidden="true"/>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* /.action */}
                                                    </div>
                                                    {/* /.cart */}
                                                </div>
                                                {/* /.product */}
                                            </div>
                                            {/* /.products */}
                                        </div>
                                        {/* /.item */}
                                        <div className="item item-carousel">
                                            <div className="products">
                                                <div className="product">
                                                    <div className="product-image">
                                                        <div className="image">
                                                            <a href="detail.html"><img
                                                                src="assets/images/products/p6.jpg" alt=""/></a>
                                                        </div>
                                                        {/* /.image */}
                                                        <div className="tag new"><span>new</span></div>
                                                    </div>
                                                    {/* /.product-image */}
                                                    <div className="product-info text-left">
                                                        <h3 className="name"><a href="detail.html">Floral Print
                                                            Buttoned</a></h3>
                                                        <div className="rating rateit-small"/>
                                                        <div className="description"/>
                                                        <div className="product-price">
                            <span className="price">
                              $450.99				</span>
                                                            <span className="price-before-discount">$ 800</span>
                                                        </div>
                                                        {/* /.product-price */}
                                                    </div>
                                                    {/* /.product-info */}
                                                    <div className="cart clearfix animate-effect">
                                                        <div className="action">
                                                            <ul className="list-unstyled">
                                                                <li className="add-cart-button btn-group">
                                                                    <button className="btn btn-primary icon"
                                                                            data-toggle="dropdown" type="button">
                                                                        <i className="fa fa-shopping-cart"/>
                                                                    </button>
                                                                    <button className="btn btn-primary cart-btn"
                                                                            type="button">Add to cart
                                                                    </button>
                                                                </li>
                                                                <li className="lnk wishlist">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Wishlist">
                                                                        <i className="icon fa fa-heart"/>
                                                                    </a>
                                                                </li>
                                                                <li className="lnk">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Compare">
                                                                        <i className="fa fa-signal" aria-hidden="true"/>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* /.action */}
                                                    </div>
                                                    {/* /.cart */}
                                                </div>
                                                {/* /.product */}
                                            </div>
                                            {/* /.products */}
                                        </div>
                                        {/* /.item */}
                                        <div className="item item-carousel">
                                            <div className="products">
                                                <div className="product">
                                                    <div className="product-image">
                                                        <div className="image">
                                                            <a href="detail.html"><img src="assets/images/blank.gif"
                                                                                       data-echo="assets/images/products/p7.jpg"
                                                                                       alt=""/></a>
                                                        </div>
                                                        {/* /.image */}
                                                        <div className="tag sale"><span>sale</span></div>
                                                    </div>
                                                    {/* /.product-image */}
                                                    <div className="product-info text-left">
                                                        <h3 className="name"><a href="detail.html">Floral Print
                                                            Buttoned</a></h3>
                                                        <div className="rating rateit-small"/>
                                                        <div className="description"/>
                                                        <div className="product-price">
                            <span className="price">
                              $450.99				</span>
                                                            <span className="price-before-discount">$ 800</span>
                                                        </div>
                                                        {/* /.product-price */}
                                                    </div>
                                                    {/* /.product-info */}
                                                    <div className="cart clearfix animate-effect">
                                                        <div className="action">
                                                            <ul className="list-unstyled">
                                                                <li className="add-cart-button btn-group">
                                                                    <button className="btn btn-primary icon"
                                                                            data-toggle="dropdown" type="button">
                                                                        <i className="fa fa-shopping-cart"/>
                                                                    </button>
                                                                    <button className="btn btn-primary cart-btn"
                                                                            type="button">Add to cart
                                                                    </button>
                                                                </li>
                                                                <li className="lnk wishlist">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Wishlist">
                                                                        <i className="icon fa fa-heart"/>
                                                                    </a>
                                                                </li>
                                                                <li className="lnk">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Compare">
                                                                        <i className="fa fa-signal" aria-hidden="true"/>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* /.action */}
                                                    </div>
                                                    {/* /.cart */}
                                                </div>
                                                {/* /.product */}
                                            </div>
                                            {/* /.products */}
                                        </div>
                                        {/* /.item */}
                                        <div className="item item-carousel">
                                            <div className="products">
                                                <div className="product">
                                                    <div className="product-image">
                                                        <div className="image">
                                                            <a href="detail.html"><img
                                                                src="assets/images/products/p8.jpg" alt=""/></a>
                                                        </div>
                                                        {/* /.image */}
                                                        <div className="tag hot"><span>hot</span></div>
                                                    </div>
                                                    {/* /.product-image */}
                                                    <div className="product-info text-left">
                                                        <h3 className="name"><a href="detail.html">Floral Print
                                                            Buttoned</a></h3>
                                                        <div className="rating rateit-small"/>
                                                        <div className="description"/>
                                                        <div className="product-price">
                            <span className="price">
                              $450.99				</span>
                                                            <span className="price-before-discount">$ 800</span>
                                                        </div>
                                                        {/* /.product-price */}
                                                    </div>
                                                    {/* /.product-info */}
                                                    <div className="cart clearfix animate-effect">
                                                        <div className="action">
                                                            <ul className="list-unstyled">
                                                                <li className="add-cart-button btn-group">
                                                                    <button className="btn btn-primary icon"
                                                                            data-toggle="dropdown" type="button">
                                                                        <i className="fa fa-shopping-cart"/>
                                                                    </button>
                                                                    <button className="btn btn-primary cart-btn"
                                                                            type="button">Add to cart
                                                                    </button>
                                                                </li>
                                                                <li className="lnk wishlist">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Wishlist">
                                                                        <i className="icon fa fa-heart"/>
                                                                    </a>
                                                                </li>
                                                                <li className="lnk">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Compare">
                                                                        <i className="fa fa-signal" aria-hidden="true"/>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* /.action */}
                                                    </div>
                                                    {/* /.cart */}
                                                </div>
                                                {/* /.product */}
                                            </div>
                                            {/* /.products */}
                                        </div>
                                        {/* /.item */}
                                        <div className="item item-carousel">
                                            <div className="products">
                                                <div className="product">
                                                    <div className="product-image">
                                                        <div className="image">
                                                            <a href="detail.html"><img
                                                                src="assets/images/products/p9.jpg" alt=""/></a>
                                                        </div>
                                                        {/* /.image */}
                                                        <div className="tag new"><span>new</span></div>
                                                    </div>
                                                    {/* /.product-image */}
                                                    <div className="product-info text-left">
                                                        <h3 className="name"><a href="detail.html">Floral Print
                                                            Buttoned</a></h3>
                                                        <div className="rating rateit-small"/>
                                                        <div className="description"/>
                                                        <div className="product-price">
                            <span className="price">
                              $450.99				</span>
                                                            <span className="price-before-discount">$ 800</span>
                                                        </div>
                                                        {/* /.product-price */}
                                                    </div>
                                                    {/* /.product-info */}
                                                    <div className="cart clearfix animate-effect">
                                                        <div className="action">
                                                            <ul className="list-unstyled">
                                                                <li className="add-cart-button btn-group">
                                                                    <button className="btn btn-primary icon"
                                                                            data-toggle="dropdown" type="button">
                                                                        <i className="fa fa-shopping-cart"/>
                                                                    </button>
                                                                    <button className="btn btn-primary cart-btn"
                                                                            type="button">Add to cart
                                                                    </button>
                                                                </li>
                                                                <li className="lnk wishlist">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Wishlist">
                                                                        <i className="icon fa fa-heart"/>
                                                                    </a>
                                                                </li>
                                                                <li className="lnk">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Compare">
                                                                        <i className="fa fa-signal" aria-hidden="true"/>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* /.action */}
                                                    </div>
                                                    {/* /.cart */}
                                                </div>
                                                {/* /.product */}
                                            </div>
                                            {/* /.products */}
                                        </div>
                                        {/* /.item */}
                                        <div className="item item-carousel">
                                            <div className="products">
                                                <div className="product">
                                                    <div className="product-image">
                                                        <div className="image">
                                                            <a href="detail.html"><img
                                                                src="assets/images/products/p10.jpg" alt=""/></a>
                                                        </div>
                                                        {/* /.image */}
                                                        <div className="tag sale"><span>sale</span></div>
                                                    </div>
                                                    {/* /.product-image */}
                                                    <div className="product-info text-left">
                                                        <h3 className="name"><a href="detail.html">Floral Print
                                                            Buttoned</a></h3>
                                                        <div className="rating rateit-small"/>
                                                        <div className="description"/>
                                                        <div className="product-price">
                            <span className="price">
                              $450.99				</span>
                                                            <span className="price-before-discount">$ 800</span>
                                                        </div>
                                                        {/* /.product-price */}
                                                    </div>
                                                    {/* /.product-info */}
                                                    <div className="cart clearfix animate-effect">
                                                        <div className="action">
                                                            <ul className="list-unstyled">
                                                                <li className="add-cart-button btn-group">
                                                                    <button className="btn btn-primary icon"
                                                                            data-toggle="dropdown" type="button">
                                                                        <i className="fa fa-shopping-cart"/>
                                                                    </button>
                                                                    <button className="btn btn-primary cart-btn"
                                                                            type="button">Add to cart
                                                                    </button>
                                                                </li>
                                                                <li className="lnk wishlist">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Wishlist">
                                                                        <i className="icon fa fa-heart"/>
                                                                    </a>
                                                                </li>
                                                                <li className="lnk">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Compare">
                                                                        <i className="fa fa-signal" aria-hidden="true"/>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* /.action */}
                                                    </div>
                                                    {/* /.cart */}
                                                </div>
                                                {/* /.product */}
                                            </div>
                                            {/* /.products */}
                                        </div>
                                        {/* /.item */}
                                    </div>
                                    {/* /.home-owl-carousel */}
                                </section>
                                {/* /.section */}
                                {/* ============================================== FEATURED PRODUCTS : END ============================================== */}
                                {/* ============================================== WIDE PRODUCTS ============================================== */}
                                <div className="wide-banners wow fadeInUp outer-bottom-xs">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="wide-banner cnt-strip">
                                                <div className="image">
                                                    <img className="img-responsive"
                                                         src="assets/images/banners/home-banner.jpg" alt=""/>
                                                </div>
                                                <div className="strip strip-text">
                                                    <div className="strip-inner">
                                                        <h2 className="text-right">New Mens Fashion<br/>
                                                            <span className="shopping-needs">Save up to 40% off</span>
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div className="new-label">
                                                    <div className="text">NEW</div>
                                                </div>
                                                {/* /.new-label */}
                                            </div>
                                            {/* /.wide-banner */}
                                        </div>
                                        {/* /.col */}
                                    </div>
                                    {/* /.row */}
                                </div>
                                {/* /.wide-banners */}
                                {/* ============================================== WIDE PRODUCTS : END ============================================== */}
                                {/* ============================================== BEST SELLER ============================================== */}
                                <div className="best-deal wow fadeInUp outer-bottom-xs">
                                    <h3 className="section-title">Best seller</h3>
                                    <div className="sidebar-widget-body outer-top-xs">
                                        <div
                                            className="owl-carousel best-seller custom-carousel owl-theme outer-top-xs">
                                            <div className="item">
                                                <div className="products best-product">
                                                    <div className="product">
                                                        <div className="product-micro">
                                                            <div className="row product-micro-row">
                                                                <div className="col col-xs-5">
                                                                    <div className="product-image">
                                                                        <div className="image">
                                                                            <a href="#">
                                                                                <img
                                                                                    src="assets/images/products/p20.jpg"
                                                                                    alt=""/>
                                                                            </a>
                                                                        </div>
                                                                        {/* /.image */}
                                                                    </div>
                                                                    {/* /.product-image */}
                                                                </div>
                                                                {/* /.col */}
                                                                <div className="col2 col-xs-7">
                                                                    <div className="product-info">
                                                                        <h3 className="name"><a href="#">Floral Print
                                                                            Buttoned</a></h3>
                                                                        <div className="rating rateit-small"/>
                                                                        <div className="product-price">
                                    <span className="price">
                                      $450.99				</span>
                                                                        </div>
                                                                        {/* /.product-price */}
                                                                    </div>
                                                                </div>
                                                                {/* /.col */}
                                                            </div>
                                                            {/* /.product-micro-row */}
                                                        </div>
                                                        {/* /.product-micro */}
                                                    </div>
                                                    <div className="product">
                                                        <div className="product-micro">
                                                            <div className="row product-micro-row">
                                                                <div className="col col-xs-5">
                                                                    <div className="product-image">
                                                                        <div className="image">
                                                                            <a href="#">
                                                                                <img
                                                                                    src="assets/images/products/p21.jpg"
                                                                                    alt=""/>
                                                                            </a>
                                                                        </div>
                                                                        {/* /.image */}
                                                                    </div>
                                                                    {/* /.product-image */}
                                                                </div>
                                                                {/* /.col */}
                                                                <div className="col2 col-xs-7">
                                                                    <div className="product-info">
                                                                        <h3 className="name"><a href="#">Floral Print
                                                                            Buttoned</a></h3>
                                                                        <div className="rating rateit-small"/>
                                                                        <div className="product-price">
                                    <span className="price">
                                      $450.99				</span>
                                                                        </div>
                                                                        {/* /.product-price */}
                                                                    </div>
                                                                </div>
                                                                {/* /.col */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="products best-product">
                                                    <div className="product">
                                                        <div className="product-micro">
                                                            <div className="row product-micro-row">
                                                                <div className="col col-xs-5">
                                                                    <div className="product-image">
                                                                        <div className="image">
                                                                            <a href="#">
                                                                                <img
                                                                                    src="assets/images/products/p22.jpg"
                                                                                    alt=""/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2 col-xs-7">
                                                                    <div className="product-info">
                                                                        <h3 className="name"><a href="#">Floral Print
                                                                            Buttoned</a></h3>
                                                                        <div className="rating rateit-small"/>
                                                                        <div className="product-price">
                                    <span className="price">
                                      $450.99				</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product">
                                                        <div className="product-micro">
                                                            <div className="row product-micro-row">
                                                                <div className="col col-xs-5">
                                                                    <div className="product-image">
                                                                        <div className="image">
                                                                            <a href="#">
                                                                                <img
                                                                                    src="assets/images/products/p23.jpg"
                                                                                    alt=""/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2 col-xs-7">
                                                                    <div className="product-info">
                                                                        <h3 className="name"><a href="#">Floral Print
                                                                            Buttoned</a></h3>
                                                                        <div className="rating rateit-small"/>
                                                                        <div className="product-price">
                                    <span className="price">
                                      $450.99				</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="products best-product">
                                                    <div className="product">
                                                        <div className="product-micro">
                                                            <div className="row product-micro-row">
                                                                <div className="col col-xs-5">
                                                                    <div className="product-image">
                                                                        <div className="image">
                                                                            <a href="#">
                                                                                <img
                                                                                    src="assets/images/products/p24.jpg"
                                                                                    alt=""/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2 col-xs-7">
                                                                    <div className="product-info">
                                                                        <h3 className="name"><a href="#">Floral Print
                                                                            Buttoned</a></h3>
                                                                        <div className="rating rateit-small"/>
                                                                        <div className="product-price">
                                    <span className="price">
                                      $450.99				</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product">
                                                        <div className="product-micro">
                                                            <div className="row product-micro-row">
                                                                <div className="col col-xs-5">
                                                                    <div className="product-image">
                                                                        <div className="image">
                                                                            <a href="#">
                                                                                <img
                                                                                    src="assets/images/products/p25.jpg"
                                                                                    alt=""/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2 col-xs-7">
                                                                    <div className="product-info">
                                                                        <h3 className="name"><a href="#">Floral Print
                                                                            Buttoned</a></h3>
                                                                        <div className="rating rateit-small"/>
                                                                        <div className="product-price">
                                    <span className="price">
                                      $450.99				</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="products best-product">
                                                    <div className="product">
                                                        <div className="product-micro">
                                                            <div className="row product-micro-row">
                                                                <div className="col col-xs-5">
                                                                    <div className="product-image">
                                                                        <div className="image">
                                                                            <a href="#">
                                                                                <img
                                                                                    src="assets/images/products/p26.jpg"
                                                                                    alt=""/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2 col-xs-7">
                                                                    <div className="product-info">
                                                                        <h3 className="name"><a href="#">Floral Print
                                                                            Buttoned</a></h3>
                                                                        <div className="rating rateit-small"/>
                                                                        <div className="product-price">
                                    <span className="price">
                                      $450.99				</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product">
                                                        <div className="product-micro">
                                                            <div className="row product-micro-row">
                                                                <div className="col col-xs-5">
                                                                    <div className="product-image">
                                                                        <div className="image">
                                                                            <a href="#">
                                                                                <img
                                                                                    src="assets/images/products/p27.jpg"
                                                                                    alt=""/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2 col-xs-7">
                                                                    <div className="product-info">
                                                                        <h3 className="name"><a href="#">Floral Print
                                                                            Buttoned</a></h3>
                                                                        <div className="rating rateit-small"/>
                                                                        <div className="product-price">
                                    <span className="price">
                                      $450.99				</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section className="section latest-blog outer-bottom-vs wow fadeInUp">
                                    <h3 className="section-title">latest form blog</h3>
                                    <div className="blog-slider-container outer-top-xs">
                                        <div className="owl-carousel blog-slider custom-carousel">
                                            <div className="item">
                                                <div className="blog-post">
                                                    <div className="blog-post-image">
                                                        <div className="image">
                                                            <a href="blog.html"><img
                                                                src="assets/images/blog-post/post1.jpg" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <div className="blog-post-info text-left">
                                                        <h3 className="name"><a href="#">Voluptatem accusantium
                                                            doloremque laudantium</a>
                                                        </h3>
                                                        <span
                                                            className="info">By Jone Doe &nbsp;|&nbsp; 21 March 2016 </span>
                                                        <p className="text">Sed quia non numquam eius modi tempora
                                                            incidunt ut labore et
                                                            dolore magnam aliquam quaerat voluptatem.</p>
                                                        <a href="#" className="lnk btn btn-primary">Read more</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="blog-post">
                                                    <div className="blog-post-image">
                                                        <div className="image">
                                                            <a href="blog.html"><img
                                                                src="assets/images/blog-post/post2.jpg" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <div className="blog-post-info text-left">
                                                        <h3 className="name"><a href="#">Dolorem eum fugiat quo voluptas
                                                            nulla pariatur</a>
                                                        </h3>
                                                        <span className="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                                                        <p className="text">Sed quia non numquam eius modi tempora
                                                            incidunt ut labore et
                                                            dolore magnam aliquam quaerat voluptatem.</p>
                                                        <a href="#" className="lnk btn btn-primary">Read more</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="blog-post">
                                                    <div className="blog-post-image">
                                                        <div className="image">
                                                            <a href="blog.html"><img
                                                                src="assets/images/blog-post/post1.jpg" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <div className="blog-post-info text-left">
                                                        <h3 className="name"><a href="#">Dolorem eum fugiat quo voluptas
                                                            nulla pariatur</a>
                                                        </h3>
                                                        <span className="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                                                        <p className="text">Sed ut perspiciatis unde omnis iste natus
                                                            error sit voluptatem
                                                            accusantium</p>
                                                        <a href="#" className="lnk btn btn-primary">Read more</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="blog-post">
                                                    <div className="blog-post-image">
                                                        <div className="image">
                                                            <a href="blog.html"><img
                                                                src="assets/images/blog-post/post2.jpg" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <div className="blog-post-info text-left">
                                                        <h3 className="name"><a href="#">Dolorem eum fugiat quo voluptas
                                                            nulla pariatur</a>
                                                        </h3>
                                                        <span className="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                                                        <p className="text">Sed ut perspiciatis unde omnis iste natus
                                                            error sit voluptatem
                                                            accusantium</p>
                                                        <a href="#" className="lnk btn btn-primary">Read more</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="blog-post">
                                                    <div className="blog-post-image">
                                                        <div className="image">
                                                            <a href="blog.html"><img
                                                                src="assets/images/blog-post/post1.jpg" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <div className="blog-post-info text-left">
                                                        <h3 className="name"><a href="#">Dolorem eum fugiat quo voluptas
                                                            nulla pariatur</a>
                                                        </h3>
                                                        <span className="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                                                        <p className="text">Sed ut perspiciatis unde omnis iste natus
                                                            error sit voluptatem
                                                            accusantium</p>
                                                        <a href="#" className="lnk btn btn-primary">Read more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="section wow fadeInUp new-arriavls">
                                    <h3 className="section-title">New Arrivals</h3>
                                    <div
                                        className="owl-carousel home-owl-carousel custom-carousel owl-theme outer-top-xs">
                                        <div className="item item-carousel">
                                            <div className="products">
                                                <div className="product">
                                                    <div className="product-image">
                                                        <div className="image">
                                                            <a href="detail.html"><img
                                                                src="assets/images/products/p19.jpg" alt=""/></a>
                                                        </div>
                                                        <div className="tag new"><span>new</span></div>
                                                    </div>
                                                    <div className="product-info text-left">
                                                        <h3 className="name"><a href="detail.html">Floral Print
                                                            Buttoned</a></h3>
                                                        <div className="rating rateit-small"/>
                                                        <div className="description"/>
                                                        <div className="product-price">
                            <span className="price">
                              $450.99				</span>
                                                            <span className="price-before-discount">$ 800</span>
                                                        </div>
                                                    </div>
                                                    <div className="cart clearfix animate-effect">
                                                        <div className="action">
                                                            <ul className="list-unstyled">
                                                                <li className="add-cart-button btn-group">
                                                                    <button className="btn btn-primary icon"
                                                                            data-toggle="dropdown" type="button">
                                                                        <i className="fa fa-shopping-cart"/>
                                                                    </button>
                                                                    <button className="btn btn-primary cart-btn"
                                                                            type="button">Add to cart
                                                                    </button>
                                                                </li>
                                                                <li className="lnk wishlist">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Wishlist">
                                                                        <i className="icon fa fa-heart"/>
                                                                    </a>
                                                                </li>
                                                                <li className="lnk">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Compare">
                                                                        <i className="fa fa-signal" aria-hidden="true"/>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item item-carousel">
                                            <div className="products">
                                                <div className="product">
                                                    <div className="product-image">
                                                        <div className="image">
                                                            <a href="detail.html"><img
                                                                src="assets/images/products/p28.jpg" alt=""/></a>
                                                        </div>
                                                        <div className="tag new"><span>new</span></div>
                                                    </div>
                                                    <div className="product-info text-left">
                                                        <h3 className="name"><a href="detail.html">Floral Print
                                                            Buttoned</a></h3>
                                                        <div className="rating rateit-small"/>
                                                        <div className="description"/>
                                                        <div className="product-price">
                            <span className="price">
                              $450.99				</span>
                                                            <span className="price-before-discount">$ 800</span>
                                                        </div>
                                                    </div>
                                                    <div className="cart clearfix animate-effect">
                                                        <div className="action">
                                                            <ul className="list-unstyled">
                                                                <li className="add-cart-button btn-group">
                                                                    <button className="btn btn-primary icon"
                                                                            data-toggle="dropdown" type="button">
                                                                        <i className="fa fa-shopping-cart"/>
                                                                    </button>
                                                                    <button className="btn btn-primary cart-btn"
                                                                            type="button">Add to cart
                                                                    </button>
                                                                </li>
                                                                <li className="lnk wishlist">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Wishlist">
                                                                        <i className="icon fa fa-heart"/>
                                                                    </a>
                                                                </li>
                                                                <li className="lnk">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Compare">
                                                                        <i className="fa fa-signal" aria-hidden="true"/>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item item-carousel">
                                            <div className="products">
                                                <div className="product">
                                                    <div className="product-image">
                                                        <div className="image">
                                                            <a href="detail.html"><img
                                                                src="assets/images/products/p30.jpg" alt=""/></a>
                                                        </div>
                                                        <div className="tag hot"><span>hot</span></div>
                                                    </div>
                                                    <div className="product-info text-left">
                                                        <h3 className="name"><a href="detail.html">Floral Print
                                                            Buttoned</a></h3>
                                                        <div className="rating rateit-small"/>
                                                        <div className="description"/>
                                                        <div className="product-price">
                            <span className="price">
                              $450.99				</span>
                                                            <span className="price-before-discount">$ 800</span>
                                                        </div>
                                                    </div>
                                                    <div className="cart clearfix animate-effect">
                                                        <div className="action">
                                                            <ul className="list-unstyled">
                                                                <li className="add-cart-button btn-group">
                                                                    <button className="btn btn-primary icon"
                                                                            data-toggle="dropdown" type="button">
                                                                        <i className="fa fa-shopping-cart"/>
                                                                    </button>
                                                                    <button className="btn btn-primary cart-btn"
                                                                            type="button">Add to cart
                                                                    </button>
                                                                </li>
                                                                <li className="lnk wishlist">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Wishlist">
                                                                        <i className="icon fa fa-heart"/>
                                                                    </a>
                                                                </li>
                                                                <li className="lnk">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Compare">
                                                                        <i className="fa fa-signal" aria-hidden="true"/>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item item-carousel">
                                            <div className="products">
                                                <div className="product">
                                                    <div className="product-image">
                                                        <div className="image">
                                                            <a href="detail.html"><img
                                                                src="assets/images/products/p1.jpg" alt=""/></a>
                                                        </div>
                                                        <div className="tag hot"><span>hot</span></div>
                                                    </div>
                                                    <div className="product-info text-left">
                                                        <h3 className="name"><a href="detail.html">Floral Print
                                                            Buttoned</a></h3>
                                                        <div className="rating rateit-small"/>
                                                        <div className="description"/>
                                                        <div className="product-price">
                            <span className="price">
                              $450.99				</span>
                                                            <span className="price-before-discount">$ 800</span>
                                                        </div>
                                                    </div>
                                                    <div className="cart clearfix animate-effect">
                                                        <div className="action">
                                                            <ul className="list-unstyled">
                                                                <li className="add-cart-button btn-group">
                                                                    <button className="btn btn-primary icon"
                                                                            data-toggle="dropdown" type="button">
                                                                        <i className="fa fa-shopping-cart"/>
                                                                    </button>
                                                                    <button className="btn btn-primary cart-btn"
                                                                            type="button">Add to cart
                                                                    </button>
                                                                </li>
                                                                <li className="lnk wishlist">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Wishlist">
                                                                        <i className="icon fa fa-heart"/>
                                                                    </a>
                                                                </li>
                                                                <li className="lnk">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Compare">
                                                                        <i className="fa fa-signal" aria-hidden="true"/>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item item-carousel">
                                            <div className="products">
                                                <div className="product">
                                                    <div className="product-image">
                                                        <div className="image">
                                                            <a href="detail.html"><img
                                                                src="assets/images/products/p2.jpg" alt=""/></a>
                                                        </div>
                                                        <div className="tag sale"><span>sale</span></div>
                                                    </div>
                                                    <div className="product-info text-left">
                                                        <h3 className="name"><a href="detail.html">Floral Print
                                                            Buttoned</a></h3>
                                                        <div className="rating rateit-small"/>
                                                        <div className="description"/>
                                                        <div className="product-price">
                            <span className="price">
                              $450.99				</span>
                                                            <span className="price-before-discount">$ 800</span>
                                                        </div>
                                                    </div>
                                                    <div className="cart clearfix animate-effect">
                                                        <div className="action">
                                                            <ul className="list-unstyled">
                                                                <li className="add-cart-button btn-group">
                                                                    <button className="btn btn-primary icon"
                                                                            data-toggle="dropdown" type="button">
                                                                        <i className="fa fa-shopping-cart"/>
                                                                    </button>
                                                                    <button className="btn btn-primary cart-btn"
                                                                            type="button">Add to cart
                                                                    </button>
                                                                </li>
                                                                <li className="lnk wishlist">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Wishlist">
                                                                        <i className="icon fa fa-heart"/>
                                                                    </a>
                                                                </li>
                                                                <li className="lnk">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Compare">
                                                                        <i className="fa fa-signal" aria-hidden="true"/>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item item-carousel">
                                            <div className="products">
                                                <div className="product">
                                                    <div className="product-image">
                                                        <div className="image">
                                                            <a href="detail.html"><img
                                                                src="assets/images/products/p3.jpg" alt=""/></a>
                                                        </div>
                                                        <div className="tag sale"><span>sale</span></div>
                                                    </div>
                                                    <div className="product-info text-left">
                                                        <h3 className="name"><a href="detail.html">Floral Print
                                                            Buttoned</a></h3>
                                                        <div className="rating rateit-small"/>
                                                        <div className="description"/>
                                                        <div className="product-price">
                            <span className="price">
                              $450.99				</span>
                                                            <span className="price-before-discount">$ 800</span>
                                                        </div>
                                                    </div>
                                                    <div className="cart clearfix animate-effect">
                                                        <div className="action">
                                                            <ul className="list-unstyled">
                                                                <li className="add-cart-button btn-group">
                                                                    <button className="btn btn-primary icon"
                                                                            data-toggle="dropdown" type="button">
                                                                        <i className="fa fa-shopping-cart"/>
                                                                    </button>
                                                                    <button className="btn btn-primary cart-btn"
                                                                            type="button">Add to cart
                                                                    </button>
                                                                </li>
                                                                <li className="lnk wishlist">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Wishlist">
                                                                        <i className="icon fa fa-heart"/>
                                                                    </a>
                                                                </li>
                                                                <li className="lnk">
                                                                    <a className="add-to-cart" href="detail.html"
                                                                       title="Compare">
                                                                        <i className="fa fa-signal" aria-hidden="true"/>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div id="brands-carousel" className="logo-slider wow fadeInUp">
                            <div className="logo-slider-inner">
                                <div id="brand-slider" className="owl-carousel brand-slider custom-carousel owl-theme">
                                    <div className="item m-t-15">
                                        <a href="#" className="image">
                                            <img data-echo="assets/images/brands/brand1.png"
                                                 src="assets/images/blank.gif" alt=""/>
                                        </a>
                                    </div>
                                    <div className="item m-t-10">
                                        <a href="#" className="image">
                                            <img data-echo="assets/images/brands/brand2.png"
                                                 src="assets/images/blank.gif" alt=""/>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#" className="image">
                                            <img data-echo="assets/images/brands/brand3.png"
                                                 src="assets/images/blank.gif" alt=""/>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#" className="image">
                                            <img data-echo="assets/images/brands/brand4.png"
                                                 src="assets/images/blank.gif" alt=""/>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#" className="image">
                                            <img data-echo="assets/images/brands/brand5.png"
                                                 src="assets/images/blank.gif" alt=""/>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#" className="image">
                                            <img data-echo="assets/images/brands/brand6.png"
                                                 src="assets/images/blank.gif" alt=""/>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#" className="image">
                                            <img data-echo="assets/images/brands/brand2.png"
                                                 src="assets/images/blank.gif" alt=""/>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#" className="image">
                                            <img data-echo="assets/images/brands/brand4.png"
                                                 src="assets/images/blank.gif" alt=""/>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#" className="image">
                                            <img data-echo="assets/images/brands/brand1.png"
                                                 src="assets/images/blank.gif" alt=""/>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#" className="image">
                                            <img data-echo="assets/images/brands/brand5.png"
                                                 src="assets/images/blank.gif" alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MyLayout>
        );
    }
}

export default inject('BaseStore')(withRouter(observer(HomePage)))
