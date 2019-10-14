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
        return (
            <Navbar color="white" light expand="md" className='shadow-sm mb-4 fixed-top bg-white'>
                <Container>
                    <NavbarBrand href="/">
                        <img src={require('../../res/img/logonhattrung.png')} alt="logo" style={{width: '85px'}}/>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/">Trang chủ</NavLink>
                            </NavItem>
                            <NavItem className='ml-3'>
                                <NavLink to='/product'>
                                    Sản phẩm
                                </NavLink>
                            </NavItem>
                            <NavItem className='ml-3'>
                                <NavLink to='/about'>
                                    Giới thiệu
                                </NavLink>
                            </NavItem>
                            <NavItem className='ml-3'>
                                <NavLink to='/contact'>
                                    Liên hệ
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default withRouter(MyHeader);
