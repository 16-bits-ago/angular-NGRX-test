import { createAction } from '@ngrx/store';

export const currentDate = createAction('[Counter Component] CurrentDate');
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');