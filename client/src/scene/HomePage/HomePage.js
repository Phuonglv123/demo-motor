import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Link, Route, Router, Switch, withRouter} from 'react-router-dom';
import {toJS} from "mobx";
import {Col, Row} from "antd";
import NewProductPage from "./NewProductPage";
import {createBrowserHistory} from "history";
import DetailCategory from "./DetailCategory";
import DetailPage from "../DetailPage";

const history = createBrowserHistory();

class HomePage extends Component {
    async componentDidMount(): void {
        this.props.BaseStore.getAllProductStore();
        this.props.BaseStore.getAllCategoryStore();
    }

    render() {
        const dataCate = toJS(this.props.BaseStore.AllCategory);
        return (
            <Router history={history}>
                <Row>
                    <Col sm={4}>
                        <div>
                            <ul>
                                <li>
                                    <Link to='/'>
                                        All
                                    </Link>
                                </li>
                                {dataCate.map((i, index) => (
                                    <li key={index}>
                                        <Link to={`/${i._id}/category/`}>
                                            {i.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <Switch>
                            <Route path='/' exact={true} component={NewProductPage}/>
                            <Route path='/:category_id/category/' exact={true} component={DetailCategory}/>
                            <Route path='/detail/:id' exact={true} component={DetailPage}/>
                        </Switch>
                    </Col>
                </Row>
            </Router>
        );
    }
}

export default inject('BaseStore')(withRouter(observer(HomePage)))
