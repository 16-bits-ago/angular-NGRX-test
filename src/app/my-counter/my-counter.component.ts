import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset, currentDate } from '../counter.action';
 
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>
  updatedAt$: Observable<number>
  disableDecrement$: Observable<boolean>
 
  constructor(private store: Store<{ count: number, updatedAt: number }>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$ = store.select('count');
    this.updatedAt$ = store.select('updatedAt');
    this.disableDecrement$ = store.select('count').pipe(map(count => count <=0));
  }

  updatedAt( ) {
    this.store.dispatch(currentDate())
  }
 
  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }
 
  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());
  }
 
  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());
  }
}