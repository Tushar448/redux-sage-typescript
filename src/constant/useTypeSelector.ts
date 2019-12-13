import { TypedUseSelectorHook, useSelector } from "react-redux";
import { sagaCode } from "../reducer/index";

export const useTypeSelector: TypedUseSelectorHook<sagaCode> = useSelector;
