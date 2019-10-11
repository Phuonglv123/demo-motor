import React, {Component} from 'react';
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
import {NavLink, withRouter} from "react-router-dom";
import Auth from "../../services/Auth";

class MyHeader extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logout() {
        Auth.logout();
        this.props.history.push('/login');
    }

    render() {
        const auth = localStorage.getItem('AUTH');
        return (
            <header className="header-style-1">
                <div className="top-bar animate-dropdown">
                    <div className="container">
                        <div className="header-top-inner">
                            <div className="cnt-account">
                                <ul className="list-unstyled">
                                    <li><a href="#"><i className="icon fa fa-user"/>My Account</a></li>
                                    <li><a href="#"><i className="icon fa fa-heart"/>Wishlist</a></li>
                                    <li><a href="#"><i className="icon fa fa-shopping-cart"/>My Cart</a></li>
                                    <li><a href="#"><i className="icon fa fa-check"/>Checkout</a></li>
                                    <li><a href="#"><i className="icon fa fa-lock"/>Login</a></li>
                                </ul>
                            </div>
                            <div className="cnt-block">
                                <ul className="list-unstyled list-inline">
                                    <li className="dropdown dropdown-small">
                                        <a href="#" className="dropdown-toggle" data-hover="dropdown"
                                           data-toggle="dropdown"><span className="value">USD </span><b
                                            className="caret"/></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">USD</a></li>
                                            <li><a href="#">INR</a></li>
                                            <li><a href="#">GBP</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown dropdown-small">
                                        <a href="#" className="dropdown-toggle" data-hover="dropdown"
                                           data-toggle="dropdown"><span className="value">English </span><b
                                            className="caret"/></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">English</a></li>
                                            <li><a href="#">French</a></li>
                                            <li><a href="#">German</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix"/>
                        </div>
                    </div>
                </div>
                <div className="main-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
                                <div className="logo">
                                    <a href="home.html">
                                        <img src="assets/images/logo.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-7 top-search-holder">
                                <div className="search-area">
                                    <form>
                                        <div className="control-group">
                                            <ul className="categories-filter animate-dropdown">
                                                <li className="dropdown">
                                                    <a className="dropdown-toggle" data-toggle="dropdown"
                                                       href="category.html">Categories
                                                        <b className="caret"/></a>
                                                    <ul className="dropdown-menu" role="menu">
                                                        <li className="menu-header">Computer</li>
                                                        <li role="presentation"><a role="menuitem" tabIndex={-1}
                                                                                   href="category.html">- Clothing</a>
                                                        </li>
                                                        <li role="presentation"><a role="menuitem" tabIndex={-1}
                                                                                   href="category.html">-
                                                            Electronics</a></li>
                                                        <li role="presentation"><a role="menuitem" tabIndex={-1}
                                                                                   href="category.html">- Shoes</a></li>
                                                        <li role="presentation"><a role="menuitem" tabIndex={-1}
                                                                                   href="category.html">- Watches</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <input className="search-field" placeholder="Search here..."/>
                                            <a className="search-button" href="#"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-2 animate-dropdown top-cart-row">
                                <div className="dropdown dropdown-cart">
                                    <a href="#" className="dropdown-toggle lnk-cart" data-toggle="dropdown">
                                        <div className="items-cart-inner">
                                            <div className="basket">
                                                <i className="glyphicon glyphicon-shopping-cart"/>
                                            </div>
                                            <div className="basket-item-count"><span className="count">2</span></div>
                                            <div className="total-price-basket">
                                                <span className="lbl">cart -</span>
                                                <span className="total-price">
                          <span className="sign">$</span><span className="value">600.00</span>
                        </span>
                                            </div>
                                        </div>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <div className="cart-item product-summary">
                                                <div className="row">
                                                    <div className="col-xs-4">
                                                        <div className="image">
                                                            <a href="detail.html"><img src="assets/images/cart.jpg"
                                                                                       alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-7">
                                                        <h3 className="name"><a href="index.php?page-detail">Simple
                                                            Product</a></h3>
                                                        <div className="price">$600.00</div>
                                                    </div>
                                                    <div className="col-xs-1 action">
                                                        <a href="#"><i className="fa fa-trash"/></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clearfix"/>
                                            <hr/>
                                            <div className="clearfix cart-total">
                                                <div className="pull-right">
                                                    <span className="text">Sub Total :</span><span
                                                    className="price">$600.00</span>
                                                </div>
                                                <div className="clearfix"/>
                                                <a href="checkout.html"
                                                   className="btn btn-upper btn-primary btn-block m-t-20">Checkout</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-nav animate-dropdown">
                    <div className="container">
                        <div className="yamm navbar navbar-default" role="navigation">
                            <div className="navbar-header">
                                <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse"
                                        className="navbar-toggle collapsed" type="button">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                </button>
                            </div>
                            <div className="nav-bg-class">
                                <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                                    <div className="nav-outer">
                                        <ul className="nav navbar-nav">
                                            <li className="active dropdown yamm-fw">
                                                <a href="home.html" data-hover="dropdown" className="dropdown-toggle"
                                                   data-toggle="dropdown">Home</a>
                                            </li>
                                            <li className="dropdown yamm mega-menu">
                                                <a href="home.html" data-hover="dropdown" className="dropdown-toggle"
                                                   data-toggle="dropdown">Clothing</a>
                                                <ul className="dropdown-menu container">
                                                    <li>
                                                        <div className="yamm-content ">
                                                            <div className="row">
                                                                <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                                                                    <h2 className="title">Men</h2>
                                                                    <ul className="links">
                                                                        <li><a href="#">Dresses</a></li>
                                                                        <li><a href="#">Shoes </a></li>
                                                                        <li><a href="#">Jackets</a></li>
                                                                        <li><a href="#">Sunglasses</a></li>
                                                                        <li><a href="#">Sport Wear</a></li>
                                                                        <li><a href="#">Blazers</a></li>
                                                                        <li><a href="#">Shirts</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                                                                    <h2 className="title">Women</h2>
                                                                    <ul className="links">
                                                                        <li><a href="#">Handbags</a></li>
                                                                        <li><a href="#">Jwellery</a></li>
                                                                        <li><a href="#">Swimwear </a></li>
                                                                        <li><a href="#">Tops</a></li>
                                                                        <li><a href="#">Flats</a></li>
                                                                        <li><a href="#">Shoes</a></li>
                                                                        <li><a href="#">Winter Wear</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                                                                    <h2 className="title">Boys</h2>
                                                                    <ul className="links">
                                                                        <li><a href="#">Toys &amp; Games</a></li>
                                                                        <li><a href="#">Jeans</a></li>
                                                                        <li><a href="#">Shirts</a></li>
                                                                        <li><a href="#">Shoes</a></li>
                                                                        <li><a href="#">School Bags</a></li>
                                                                        <li><a href="#">Lunch Box</a></li>
                                                                        <li><a href="#">Footwear</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                                                                    <h2 className="title">Girls</h2>
                                                                    <ul className="links">
                                                                        <li><a href="#">Sandals </a></li>
                                                                        <li><a href="#">Shorts</a></li>
                                                                        <li><a href="#">Dresses</a></li>
                                                                        <li><a href="#">Jwellery</a></li>
                                                                        <li><a href="#">Bags</a></li>
                                                                        <li><a href="#">Night Dress</a></li>
                                                                        <li><a href="#">Swim Wear</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div
                                                                    className="col-xs-12 col-sm-6 col-md-4 col-menu banner-image">
                                                                    <img className="img-responsive"
                                                                         src="assets/images/banners/top-menu-banner.jpg"
                                                                         alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown mega-menu">
                                                <a href="category.html" data-hover="dropdown"
                                                   className="dropdown-toggle" data-toggle="dropdown">Electronics
                                                    <span className="menu-label hot-menu hidden-xs">hot</span>
                                                </a>
                                                <ul className="dropdown-menu container">
                                                    <li>
                                                        <div className="yamm-content">
                                                            <div className="row">
                                                                <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                                                    <h2 className="title">Laptops</h2>
                                                                    <ul className="links">
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
                                                                <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                                                    <h2 className="title">Desktops</h2>
                                                                    <ul className="links">
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
                                                                <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                                                    <h2 className="title">Cameras</h2>
                                                                    <ul className="links">
                                                                        <li><a href="#">Accessories</a></li>
                                                                        <li><a href="#">Binoculars</a></li>
                                                                        <li><a href="#">Telescopes</a></li>
                                                                        <li><a href="#">Camcorders</a></li>
                                                                        <li><a href="#">Digital</a></li>
                                                                        <li><a href="#">Film Cameras</a></li>
                                                                        <li><a href="#">Flashes</a></li>
                                                                        <li><a href="#">Lenses</a></li>
                                                                        <li><a href="#">Surveillance</a></li>
                                                                        <li><a href="#">Tripods</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                                                    <h2 className="title">Mobile Phones</h2>
                                                                    <ul className="links">
                                                                        <li><a href="#">Apple</a></li>
                                                                        <li><a href="#">Samsung</a></li>
                                                                        <li><a href="#">Lenovo</a></li>
                                                                        <li><a href="#">Motorola</a></li>
                                                                        <li><a href="#">LeEco</a></li>
                                                                        <li><a href="#">Asus</a></li>
                                                                        <li><a href="#">Acer</a></li>
                                                                        <li><a href="#">Accessories</a></li>
                                                                        <li><a href="#">Headphones</a></li>
                                                                        <li><a href="#">Memory Cards</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div
                                                                    className="col-xs-12 col-sm-12 col-md-4 col-menu custom-banner">
                                                                    <a href="#"><img alt=""
                                                                                     src="assets/images/banners/banner-side.png"/></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown hidden-sm">
                                                <a href="category.html">Health &amp; Beauty
                                                    <span className="menu-label new-menu hidden-xs">new</span>
                                                </a>
                                            </li>
                                            <li className="dropdown hidden-sm">
                                                <a href="category.html">Watches</a>
                                            </li>
                                            <li className="dropdown">
                                                <a href="contact.html">Jewellery</a>
                                            </li>
                                            <li className="dropdown">
                                                <a href="contact.html">Shoes</a>
                                            </li>
                                            <li className="dropdown">
                                                <a href="contact.html">Kids &amp; Girls</a>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-hover="dropdown"
                                                   data-toggle="dropdown">Pages</a>
                                                <ul className="dropdown-menu pages">
                                                    <li>
                                                        <div className="yamm-content">
                                                            <div className="row">
                                                                <div className="col-xs-12 col-menu">
                                                                    <ul className="links">
                                                                        <li><a href="home.html">Home</a></li>
                                                                        <li><a href="category.html">Category</a></li>
                                                                        <li><a href="detail.html">Detail</a></li>
                                                                        <li><a href="shopping-cart.html">Shopping Cart
                                                                            Summary</a>
                                                                        </li>
                                                                        <li><a href="checkout.html">Checkout</a></li>
                                                                        <li><a href="blog.html">Blog</a></li>
                                                                        <li><a href="blog-details.html">Blog Detail</a>
                                                                        </li>
                                                                        <li><a href="contact.html">Contact</a></li>
                                                                        <li><a href="sign-in.html">Sign In</a></li>
                                                                        <li><a href="my-wishlist.html">Wishlist</a></li>
                                                                        <li><a href="terms-conditions.html">Terms and
                                                                            Condition</a>
                                                                        </li>
                                                                        <li><a href="track-orders.html">Track Orders</a>
                                                                        </li>
                                                                        <li><a
                                                                            href="product-comparison.html">Product-Comparison</a>
                                                                        </li>
                                                                        <li><a href="faq.html">FAQ</a></li>
                                                                        <li><a href="404.html">404</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown  navbar-right special-menu">
                                                <a href="#">Todays offer</a>
                                            </li>
                                        </ul>
                                        <div className="clearfix"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default withRouter(MyHeader);
