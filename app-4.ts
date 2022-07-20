
import { Store, configureStore } from '@reduxjs/toolkit';
import { incrementerAction } from './counter/counter.actions';
import { counterReducer } from './counter/counter.reducer';

const store: Store = configureStore({
	reducer: counterReducer
});

store.subscribe(() => {
	console.log('Valor', store.getState())
});

store.dispatch(incrementerAction);
store.dispatch(incrementerAction);
store.dispatch(incrementerAction);
store.dispatch(incrementerAction);
store.dispatch(incrementerAction);