import { useTypeSelector } from "../constant/useTypeSelector";
import { useDispatchEffect } from "../constant/service";
import { getLoginData } from "../action/demoContent";
export const useMemberSearch = () => {
  useDispatchEffect(getLoginData);

  return useTypeSelector(state => state.saga.demo);
};
