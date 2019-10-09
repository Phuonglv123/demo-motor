import React, {Component} from 'react';
import {Col, Row} from "antd";
import {inject, observer} from "mobx-react";
import {withRouter, Link} from 'react-router-dom';
import {toJS} from "mobx";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

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
                                <Card>
                                    <CardImg top width="100%" src={i.images[1]} alt="Card image cap"/>
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the
                                            bulk of the card's content.</CardText>
                                        <Button>Button</Button>
                                    </CardBody>
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
