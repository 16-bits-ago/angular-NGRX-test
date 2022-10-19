
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.action';

/* export interface CountState {
  count: number,
  upadateAt: number
};

export const initialState: CountState = {
  count: 0,
  upadateAt: Date.now()
}; */

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);