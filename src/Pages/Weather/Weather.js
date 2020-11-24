import React, {Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

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
            </CSSTransitionGroup>
        </Fragment>
    );
};

export default Weather;