
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, currentDate } from './counter.action';

export interface CountState {
  count: number,
  upadateAt: number
};

export const initialState: CountState = {
  count: 0,
  upadateAt: Date.now()
};

export const counterReducer = createReducer(
  initialState.count,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) =>  state = 0)
);

export const counterDateReducer = createReducer(
  initialState.upadateAt,
  on(currentDate, (state) => state = Date.now())
);