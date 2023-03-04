import { combineReducers, createStore,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import ThemeReducer from "./reducers/ThemeReducer"
const middleware = [thunk]
const reducers = combineReducers({
   Theme:ThemeReducer
})
const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store