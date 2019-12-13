import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Action } from "redux";
interface contentProvider {
  (): void;
}

export const useDispatchEffect = (fetchContent: contentProvider) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent());
  }, []);
};
