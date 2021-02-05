import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTodo, putTodo, deleteTodo } from "../../actions/todo";

export class Todo extends Component {
    static propTypes = {
        todo: PropTypes.array.isRequired,
        getTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getTodo();
    }
    render() {
        return (
                <Fragment>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Completed</th>
                            <th>Todo Item</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.todo.map(todo => (
                            <tr key={todo.id}>
                                <td>
                                    <button
                                        onClick={this.props.putTodo.bind(this, todo.id, todo.todoItems, todo.isComplete)}
                                        className="btn btn-secondary btn-sm"
                                    >
                                        {" "}
                                        <span>{todo.isComplete?"YES":"NO"}</span>
                                    </button>
                                </td>
                                <td>{todo.isComplete? <del>{todo.todoItems}</del> : todo.todoItems}</td>
                                <td>
                                    <button
                                        onClick={this.props.deleteTodo.bind(this, todo.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        {" "}
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    todo: state.todo.todo
});

export default connect(
    mapStateToProps,
    { getTodo, putTodo, deleteTodo }
)(Todo);
