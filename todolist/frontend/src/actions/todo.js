import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_TODO, DELETE_TODO, ADD_TODO, PUT_TODO } from "./types";


export const getTodo = () => (dispatch) => {
    axios
        .get("/api/todo/")
        .then(res => {
            dispatch({
                type: GET_TODO,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};


export const deleteTodo = id => (dispatch) => {
    axios
        .delete(`/api/todo/${id}/`)
        .then(res => {
            dispatch(createMessage({ deleteLead: "Todo Deleted" }));
            dispatch({
                type: DELETE_TODO,
                payload: id
            });
        })
        .catch(err => console.log(err));
};


export const addTodo = todoItems => (dispatch) => {

    axios
        .post("/api/todo/", todoItems)
        .then(res => {
            dispatch(createMessage({ addLead: "Todo Added" }));
            dispatch({
                type: ADD_TODO,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const putTodo = (id, todo, isComplete) => (dispatch) => {
    console.log(isComplete)
    const isCompleteHolder = isComplete ? false : true;
    const isCompleteItem = {todoItems:todo, isComplete:isCompleteHolder}
    axios
        .put(`/api/todo/${id}/`, isCompleteItem)
        .then(res => {
            dispatch(createMessage({ addLead: "Todo Modified" }));
            dispatch({
                type: PUT_TODO,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};
