import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {Switch, BrowserRouter as Router, Link} from 'react-router-dom';
import CategoryPage from "./SubCategory/CategoryPage";
import {createBrowserHistory} from "history";
import {PrivateRoute} from "../../components/AppRoute/PrivateRoute";
import ProductPage from "./SubCategory/ProductPage";
import AddProduct from "./SubCategory/AddProduct";

const {Header, Content, Footer, Sider} = Layout;

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }


    onCollapse = collapsed => {
        this.setState({collapsed});
    };

    render() {
        const history = createBrowserHistory();
        return (
            <Router history={history}>
                <Layout style={{minHeight: '100vh'}} id='components-layout-demo-side'>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo"/>
                        <Menu theme="dark" defaultSelectedKeys={['/admin/category/']}
                              selectedKeys={[this.props.location.pathname]} mode="inline">
                            <Menu.Item key="/admin/category/">
                                <Link to='/admin/category/'>
                                    <Icon type="pie-chart"/>
                                    <span>Category</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to='/admin/product/'>
                                    <Icon type="pie-chart"/>
                                    <span>Product</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="9">
                                <Icon type="file"/>
                                <span>File</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{background: '#fff', padding: 0}}/>
                        <Content style={{margin: '0 16px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                                <Switch>
                                    <PrivateRoute path='/admin/category/' exact={true} component={CategoryPage}/>
                                    <PrivateRoute path='/admin/product/' exact={true} component={ProductPage}/>
                                    <PrivateRoute path="/admin/product/create" exact={true} component={AddProduct}/>
                                </Switch>
                            </div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default AdminPage;
