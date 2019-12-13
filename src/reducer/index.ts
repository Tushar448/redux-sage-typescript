import { combineReducers, Reducer, Action } from "redux";
import DemoReducer from "./demo";
import { loginReducer } from "./login";
import { LoginState, sagaReducer } from "../component/reducer/index";

export default combineReducers({ DemoReducer, loginReducer });

export interface sagaCode {
  saga: LoginState;
}

export const rootReducer: Reducer<sagaCode, Action> = (state, action) => {
  return {
    saga: sagaReducer(state && state.saga, action)
  };
};
