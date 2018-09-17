/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, getUser } from 'actions';

/* eslint-disable react/prefer-stateless-function */
@connect(
  state => ({
    listData: state.get('todos'),
  }),
  dispatch => ({
    handleClick: value => dispatch(addTodo(value)),
    getUser: () => dispatch(getUser()),
  }),
)
export default class HomePage extends PureComponent {
  static propTypes = {
    listData: PropTypes.any,
    handleClick: PropTypes.func,
    getUser: PropTypes.func,
  };
  render() {
    return (
      <h1>
        <p onClick={this.props.handleClick}>首页</p>
        有{this.props.listData.length}条数据
        <button onClick={this.props.getUser}>异步请求</button>
      </h1>
    );
  }
}
