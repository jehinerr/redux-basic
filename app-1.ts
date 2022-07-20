import {
  decrementAction,
  divideAction,
  incrementerAction,
  multiplyAction,
} from "./counter/counter.actions";
import { Action } from "./ngrx-fake/ngrx";

function reducer(state = 10, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return (state += 1);
    case "DECREMENT":
      return (state -= 1);
    case "MULTIPLY":
      return state * action.payload;
    case "DIVIDE":
      return state / action.payload;
    default:
      return state;
  }
}

// Use the reducer
console.log(reducer(10, incrementerAction)); // 11
console.log(reducer(10, decrementAction)); // 9
console.log(reducer(10, multiplyAction)); // 20
console.log(reducer(10, divideAction)); // 5
