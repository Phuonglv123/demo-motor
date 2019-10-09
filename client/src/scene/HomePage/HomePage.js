import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';
import {toJS} from "mobx";
import {Card, Col, Row} from "antd";
import {Router, Switch, Route, Link} from 'react-router-dom';
import NewProductPage from "./NewProductPage";
import {createBrowserHistory} from "history";
import DetailCategory from "./DetailCategory";

const history = createBrowserHistory();

class HomePage extends Component {
    async componentDidMount(): void {
        this.props.BaseStore.getAllProductStore();
        this.props.BaseStore.getAllCategoryStore();
    }

    render() {
        const dataCate = toJS(this.props.BaseStore.AllCategory);
        console.log(dataCate)
        return (
            <Router history={history}>
                <Row>
                    <Col sm={4}>
                        <div>
                            <ul>
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
                            <Route path='/new-product/' component={NewProductPage}/>
                            <Route path='/:category_id/category/' component={DetailCategory}/>
                        </Switch>
                    </Col>
                </Row>
            </Router>
        );
    }
}

export default inject('BaseStore')(withRouter(observer(HomePage)))
