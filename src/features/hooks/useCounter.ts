// src/redux/hooks/useCounter.ts
import {
  decrement,
  increment,
  incrementByAmount,
} from "../slices/counterReducer";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const useCounter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleIncrementByAmount = (amount: number) =>
    dispatch(incrementByAmount(amount));

  return {
    count,
    handleIncrement,
    handleDecrement,
    handleIncrementByAmount,
  };
};
