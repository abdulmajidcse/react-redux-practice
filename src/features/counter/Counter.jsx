import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  counterValue,
} from "./counterSlice";
import { Button, ButtonGroup } from "react-bootstrap";

const Counter = () => {
  const count = useSelector(counterValue);
  const dispatch = useDispatch();

  return (
    <>
      <h4>
        Couter Value: <code>{count}</code>
      </h4>
      <ButtonGroup aria-label="Counter Buttons">
        <Button variant="info" onClick={() => dispatch(incrementByAmount(5))}>
          +5
        </Button>
        <Button variant="danger" onClick={() => dispatch(decrementByAmount(5))}>
          -5
        </Button>
        <Button variant="success" onClick={() => dispatch(increment())}>
          +1
        </Button>
        <Button variant="danger" onClick={() => dispatch(decrement())}>
          -1
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Counter;
