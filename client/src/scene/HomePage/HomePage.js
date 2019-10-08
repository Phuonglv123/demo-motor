import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';
import {toJS} from "mobx";
import {Card, Col, Row} from "antd";

const {Meta} = Card;

class HomePage extends Component {
    async componentDidMount(): void {
        this.props.BaseStore.getAllProductStore();
    }

    render() {
        const dataProduct = toJS(this.props.BaseStore.AllProduct);
        return (
            <Row>
                {dataProduct.map((i, index) => (
                    <Col sm={3}>
                        <Card
                            onClick={() => {
                                this.props.history.push(`/detail/${i._id}`)
                            }}
                            key={index}
                            hoverable
                            style={{width: '100%'}}
                        >
                            <Meta title={i.name} description={i.description}/>
                        </Card>
                    </Col>
                ))}

            </Row>
        );
    }
}

export default inject('BaseStore')(withRouter(observer(HomePage)))
