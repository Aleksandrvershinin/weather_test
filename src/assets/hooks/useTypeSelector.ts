import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TRootState } from "../scripts/myRedux/myCreateStore";

export const useTypeSelector: TypedUseSelectorHook<TRootState> = useSelector