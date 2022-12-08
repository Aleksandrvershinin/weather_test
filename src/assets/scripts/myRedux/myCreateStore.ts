import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { citiesReducer } from "./citiesReducer"

export const rootReducer = combineReducers({
    citiesReducer
})

export type TRootState = ReturnType<typeof rootReducer>

export function myCreateStore() {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
    return store
}
