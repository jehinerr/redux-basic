import {
  incrementerAction,
  decrementAction,
  multiplyAction,
  divideAction,
  resetAction,
} from "./counter/counter.actions";
import { reducer } from "./counter/counter.reducer";

// Use the reducer
console.log(reducer(10, incrementerAction)); // 11
console.log(reducer(10, decrementAction)); // 9
console.log(reducer(10, multiplyAction)); // 20
console.log(reducer(10, divideAction)); // 5
console.log(reducer(10, resetAction)); // 0
