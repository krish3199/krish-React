import { createStore } from "redux";
import { reducer } from "./src/Reducer";

const store = createStore(reducer)

export default store ;