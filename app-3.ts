import { incrementerAction, multiplyAction } from "./counter/counter.actions";
import { counterReducer } from "./counter/counter.reducer";
import { Action, Reducer } from "./ngrx-fake/ngrx";


class Store<T> {
	// private state: T;

	constructor(private reducer: Reducer<T>, private state: T) { }

	getState() {
		return this.state;
	}

	dispatch(action: Action) {
		this.state = this.reducer(this.state, action);
	}
}

const store = new Store(counterReducer, 10);
console.log(store.getState()); // 10

store.dispatch(incrementerAction);
store.dispatch(incrementerAction);

console.log(store.getState()); // 12

store.dispatch(multiplyAction);

console.log(store.getState()); // 24
