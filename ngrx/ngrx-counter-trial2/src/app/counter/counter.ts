import { Component, inject, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../state/counter.actions';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter implements OnInit {
  private readonly store: Store<{count:number}> = inject(Store);

  count: Signal<number> = this.store.selectSignal((state)=>state.count);
  // count: Observable<number>;
  counter: number=0;
  ngOnInit(): void {
      this.store.select('count').subscribe(data =>{
      this.counter = data;
      console.log(this.counter);
    })
  }



  

  increment(){
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement());

  }
  reset(){
    this.store.dispatch(reset());
  }


}
