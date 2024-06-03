import { createContext, useReducer } from "react";

const TodoList = createContext();

const Provider = ({ children }) => {
	const initialState = ["Apple", "Banana"];
	const reducer = (state, action) => {
		switch (action.type) {
			case "add":
				return [...state, action.payload];
			case "remove":
				return state.filter((todo) => todo !== action.payload);
			default:
				return state;
		}
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = {
		todoList: state,
		addTodo: (todo) => dispatch({ type: "add", payload: todo }),
		removeTodo: (todo) => dispatch({ type: "remove", payload: todo }),
	};
	return <TodoList.Provider value={value}>{children}</TodoList.Provider>;
};

export default Provider;
export { TodoList };
