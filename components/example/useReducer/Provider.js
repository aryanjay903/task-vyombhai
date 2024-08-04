import { createContext, useReducer } from "react";

const TodoList = createContext();
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

const Provider = (({ children }) => {
	const [todoList, dispatch] = useReducer(reducer, initialState);
	const addTodo = (todo) => dispatch({ type: "add", payload: todo })
	const removeTodo = (todo) => dispatch({ type: "remove", payload: todo })
	return <TodoList.Provider value={{
		todoList,
		addTodo,
		removeTodo,
	}}>{children}</TodoList.Provider>;
});

export default Provider;
export { TodoList };
