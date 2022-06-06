import { combineReducers } from "redux";
import posts from "./posts.js";
import testReducer from "./testReducer.js";
export default combineReducers({
    posts:posts,
    test:testReducer
})