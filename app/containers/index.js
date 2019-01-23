import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { message } from 'antd';

import Admin from './admin/Admin';
import Front from './front/Front';
import NotFound from './notFound/NotFound';
import './style.css';


class IndexApp extends Component {
  componentDidUpdate() {
    const { notification } = this.props;
    if (notification.content) {
      message.info(notification.content);
    }
  }

  render() {
    const { isFetching } = this.props;
    console.log('isFetching', isFetching);
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/404" component={NotFound} />
            <Route component={Front} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.globalState.isFetching,
    notification: state.globalState.msg,
  };
}

export default connect(
  mapStateToProps,
)(IndexApp);
