import { useReducer } from "react";
import { Link } from "react-router";

function reducerFunc(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

const Counter = () => {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducerFunc, { count: 0 });

  return (
    <div>
      <Link to='/' className='back-btn'>
        Back To Home
      </Link>

      <h4>Simple Counter with useReducer</h4>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
