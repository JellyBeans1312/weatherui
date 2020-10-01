import React, {Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PageTitle from '../../Layout/AppMain/PageTitle';

const Weather = (props) => {
    return (
        <Fragment>
            <PageTitle
                heading="Weather Dashboard"
                subheading="A dashboard for comparing temperatures across cities"
                icon="pe-7s-sun icon-gradient bg-sunny-morning"
            />
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    Feel free to adjust this page however you see fit to create.
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
            </CSSTransitionGroup>
        </Fragment>
    );
};

export default Weather;