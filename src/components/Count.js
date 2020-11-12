import { useDispatch, useSelector } from "react-redux";
// action
import { increment } from "../reducers/count";

function Count() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count.num)
  console.log('value:', count)
  return (
      <div>
        <button onClick={() => dispatch(increment({}))}>+1</button>
        <button>-1</button>
        <p>count: {count}</p>
      </div>
  )
}

export default Count;