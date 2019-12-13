import { Reducer, Action } from "redux";
import DemoReducer from "./../../reducer/demo";
import { loginReducer } from "./../../reducer/login";
import { LoginActionState, postActionState } from "../../constant/action";

export interface LoginState {
  login: postActionState;
  demo: LoginActionState;
}
export const sagaReducer: Reducer<LoginState, Action> = (state, action) => {
  return {
    login: loginReducer(state && state.login, action),
    demo: DemoReducer(state && state.demo, action)
  };
};
