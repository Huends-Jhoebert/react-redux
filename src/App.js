import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import increament from "./actions/";
const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Change");
  }, [counter]);

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increament(5))}>+</button>
    </div>
  );
};

export default App;
