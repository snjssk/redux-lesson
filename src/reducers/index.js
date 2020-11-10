import { combineReducers } from "redux";

// reducerをimport
import countReducer from './count'

// combineReducersで結合する
const reducer = combineReducers({
  count: countReducer
})

export default reducer