import { toast } from "react-toastify";
import { ErrorRequest403 } from "../models/ResponseTypes";
import { setLogIn } from "../slices/isLoggedInSlice";

export const onQueryErrorAuth403 = async (
  args: unknown,
  { dispatch, queryFulfilled },
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
