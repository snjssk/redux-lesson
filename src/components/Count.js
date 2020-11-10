import { useSelector } from "react-redux";

function Count() {
  const count = useSelector(state => state.count.num)
  console.log('value:', count)
  return (
      <div>
        <p>count: {count}</p>
      </div>
  )
}

export default Count;