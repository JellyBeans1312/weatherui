import React, { Component } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import {
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { getLonLat } from '../../util/apiCalls.js'

import TitleComponent1 from "./PageTitleExamples/Variation1";
import TitleComponent2 from "./PageTitleExamples/Variation2";
import TitleComponent3 from "./PageTitleExamples/Variation3";

class PageTitle extends Component {
  render() {
    let {
      enablePageTitleIcon,
      enablePageTitleSubheading,

      heading,
      icon,
      subheading,
    } = this.props;

    var arr = [<TitleComponent1 />, <TitleComponent2 />, <TitleComponent3 />];

    return (
      <div className="app-page-title">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
            <div className={cx("page-title-icon", {
                "d-none": !enablePageTitleIcon,
              })}>
              <i className={icon} />
            </div>
            <div>
              {heading}
              <div className={cx("page-title-subheading", {
                  "d-none": !enablePageTitleSubheading,
                })}>
                {subheading}
              </div>
            </div>
          </div>
            <div class='page-title-actions'>
            <UncontrolledButtonDropdown>
              <DropdownToggle caret color="primary" className="mb-2 mr-2">
                Add / Choose City
              </DropdownToggle>
              <DropdownMenu>
                <Nav vertical>
                  <NavItem className="nav-item-header">
                    
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <i className="nav-link-icon pe-7s-chat"> </i>
                      <span>Add City</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <i className="nav-link-icon pe-7s-wallet"> </i>
                      <span onClick={() => getLonLat('Topeka')}>Topeka</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <i className="nav-link-icon pe-7s-config"> </i>
                      <span onClick={() => getLonLat('Chicago')}>Chicago</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <i className="nav-link-icon pe-7s-coffee"> </i>
                      <span>Denver</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <i className="nav-link-icon pe-7s-box2"> </i>
                      <span>Chattanooga</span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item-divider" />
                  <NavItem className="nav-item-btn text-right">
                    <Button size="sm" className="btn-pill" color="success">
                      Save
                    </Button>
                  </NavItem>
                </Nav>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            </div>
            <div class="page-title-actions"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
  enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);
