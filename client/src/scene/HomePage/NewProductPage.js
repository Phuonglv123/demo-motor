import React, {Component} from 'react';
import {Card, Col, Row} from "antd";
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';
import {toJS} from "mobx";


const {Meta} = Card;

class NewProductPage extends Component {
    async componentDidMount(): void {
        this.props.BaseStore.getAllProductStore();
    }

    render() {
        const dataProduct = toJS(this.props.BaseStore.AllProduct);
        return (
            <div>
                <Row>
                    {dataProduct.map((i, index) => (
                        <Col sm={3} key={index}>
                            <Card
                                onClick={() => {
                                    this.props.history.push(`/detail/${i._id}`)
                                }}
                                hoverable
                                style={{width: '100%'}}
                            >
                                <Meta title={i.name} description={i.description}/>
                            </Card>
                        </Col>
                    ))}

                </Row>
            </div>
        );
    }
}

export default inject('BaseStore')(withRouter(observer(NewProductPage)))
