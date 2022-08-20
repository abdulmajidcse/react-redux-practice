import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./../features/counter/counterSlice";
import { Button, ButtonGroup } from "react-bootstrap";

const Home = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container mt-3">
        <h4>
          Couter Value: <code>{count}</code>
        </h4>
        <ButtonGroup aria-label="Counter Buttons">
          <Button variant="info" onClick={() => dispatch(incrementByAmount(5))}>
            +5
          </Button>
          <Button
            variant="danger"
            onClick={() => dispatch(decrementByAmount(5))}
          >
            -5
          </Button>
          <Button variant="success" onClick={() => dispatch(increment())}>
            +1
          </Button>
          <Button variant="danger" onClick={() => dispatch(decrement())}>
            -1
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default Home;
