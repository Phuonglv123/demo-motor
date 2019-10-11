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
            <Navbar color="white" light expand="md">
                <Container>
                    <NavbarBrand href="/">
                        <img src={require('../../res/img/logonhattrung.png')} alt="logo" style={{width: '85px'}}/>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/">Home</NavLink>
                            </NavItem>
                            <NavItem className='ml-3'>
                                <NavLink to='/product'>
                                    Product
                                </NavLink>
                            </NavItem>
                            <NavItem className='ml-3'>
                                <NavLink to='/about'>
                                    About Us
                                </NavLink>
                            </NavItem>
                            <NavItem className='ml-3'>
                                <NavLink to='/contact'>
                                    Contact Us
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
