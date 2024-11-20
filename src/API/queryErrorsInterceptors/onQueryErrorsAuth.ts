import { toast } from "react-toastify";
import { ErrorRequest403 } from "../models/ResponseTypes";
import { setLogIn } from "../slices/isLoggedInSlice";
import { Dispatch } from "@reduxjs/toolkit";

interface QueryCacheLifecycleApi {
  dispatch: Dispatch,
  queryFulfilled: unknown,
}

export const onQueryErrorAuth403 = async (
  args: undefined | string,
  { dispatch, queryFulfilled }: QueryCacheLifecycleApi,
): Promise<void> => {
  try {
    await queryFulfilled;
  } catch (err: unknown) {
    const error = (err as ErrorRequest403).error;
    if (error.status === 403) {
      localStorage.removeItem("userId");
      dispatch(setLogIn(false));
      toast.error(
        "Ошибка авторизации! Перейдите на страницу авторизации или перезагрузите эту страницу",
      );
    }
    throw(args);
  }
};
