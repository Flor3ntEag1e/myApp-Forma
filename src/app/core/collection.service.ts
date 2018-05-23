import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { Observable, from, of } from 'rxjs';
import { State } from '../items/components/item/state.enum';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  state = State;
  collection: Item[];
  collection$: Observable<Item[]>;
  constructor() { 
    this.collection = [
      {
        id: '1',
        name: 'myName',
        reference: '1234',
        state: this.state.ALIVRER
      },
      {
        id: '2',
        name: 'yourName',
        reference: '4587',
        state: this.state.LIVREE
      },
    ];
    this.collection$ = of(this.collection);
  }

  /*get collection(): Item[] {
    return this.collection;
  }

  set collection (col: Item[]) {
    this.collection = col;
  }
*/
}
