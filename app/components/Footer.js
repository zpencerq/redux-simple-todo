/* @flow */

import React, { Component, PropTypes } from 'react';
import { VisibilityFilters, VisibilityFilterValues } from '../actions';

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

export default class Footer extends Component {
  renderFilter(filter: string, name: string): React.Element {
    if (filter === this.props.filter) {
      return (
          <span>{name}</span>
          );
    }

    return (
      <a href='#' onClick={e => {
        e.preventDefault();
        this.props.onFilterChange(filter);
      }}>
        {name}
      </a>
    );
  }

  render(): React.Element {
    return (
      <p>
        Show:
        {' '}
        {this.renderFilter(SHOW_ALL, 'All')}
        {', '}
        {this.renderFilter(SHOW_COMPLETED, 'Completed')}
        {', '}
        {this.renderFilter(SHOW_ACTIVE, 'Active')}
        .
      </p>
    );
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf(VisibilityFilterValues).isRequired
};
