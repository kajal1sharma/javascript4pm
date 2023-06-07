import { createStore } from "redux";
import IncrementDecrementREducer from "./reducer";

let store = createStore(IncrementDecrementREducer);

export default store