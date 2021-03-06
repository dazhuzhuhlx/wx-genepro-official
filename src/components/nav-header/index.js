import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Row from "react-bootstrap/lib/Row";
import cx from "classnames";
import * as actionCreators from "../../actions/layer";

class NavHeader extends Component {
    render() {
        const { children, sticky = false } = this.props;
        return (
            <Row className={cx({ "layer-header": true, sticky })}>
                {children}
            </Row>
        );
    }
}

export default connect(
    _ => ({}),
    dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(NavHeader);
