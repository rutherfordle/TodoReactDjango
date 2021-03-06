import { GET_TODO, DELETE_TODO, ADD_TODO, PUT_TODO, CLEAR_TODO } from "../actions/types.js";

const initialState = {
    todo: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TODO:
            return {
                ...state,
                todo: action.payload
            };
        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter(todo => todo.id !== action.payload)
            };
        case ADD_TODO:
            return {
                ...state,
                todo: [...state.todo, action.payload]
            };
        case PUT_TODO:
            return {
                ...state,
                todo: state.todo.map(
                    item =>
                        item.id === action.payload.id
                            //return action payload (modified item) instead of
                            //  original item when item id is updated item id
                            ? action.payload
                            : item//ids not the same, return original item
                )
            };
        case CLEAR_TODO:
            return {
                ...state,
                todo: []
            };
        default:
            return state;
    }
}
