import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTodo } from "../../actions/todo";

export class Form extends Component {
  state = {
    todo: "",
  };

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });


  onSubmit = e => {
    e.preventDefault();

    const { todo } = this.state;
    const todoItems = {todoItems:todo}

    this.props.addTodo(todoItems)
    this.setState({todo:''})
  };

  render() {
    const { todo} = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Todo Item</label>
            <input
              className="form-control"
              type="text"
              name="todo"
              onChange={this.onChange}
              value={todo}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit

            </button>
          </div>
        </form>

      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(Form);
