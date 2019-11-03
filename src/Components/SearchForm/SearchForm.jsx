import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./SearchForm.module.css";

class SearchForm extends Component {
  state = { query: "" };

  handleChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    const { query } = this.state;
    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          value={query}
          onChange={this.handleChange}
          placeholder="Search images..."
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
