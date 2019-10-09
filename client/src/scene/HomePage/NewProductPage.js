import React, {Component} from 'react';
import {Card, Col, Row} from "antd";
import {inject, observer} from "mobx-react";
import {withRouter, Link} from 'react-router-dom';
import {toJS} from "mobx";


const {Meta} = Card;

class NewProductPage extends Component {
    async componentDidMount(): void {
        this.props.BaseStore.getAllProductStore();
    }

    render() {
        const dataProduct = toJS(this.props.BaseStore.AllProduct);
        console.log(dataProduct)
        return (
            <div>
                <Row>
                    {dataProduct.map((i, index) => (
                        <Col sm={3} key={index}>
                            <Link to={`/detail/${i._id}`}>
                                <Card
                                    hoverable
                                    style={{width: '100%'}}
                                >
                                    <Meta title={i.name} description={i.description}/>
                                </Card>
                            </Link>
                        </Col>
                    ))}

                </Row>
            </div>
        );
    }
}

export default inject('BaseStore')(withRouter(observer(NewProductPage)))
