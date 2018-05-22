import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  _collection: Item[];
  constructor() { 
    this._collection = [
      {
        id: '1',
        name: 'myName',
        reference: '1234',
        state: ''
      },
      {
        id: '2',
        name: 'yourName',
        reference: '4587',
        state: ''
      },
    ];
  }

  get collection(): Item[] {
    return this._collection;
  }

  set collection (col: Item[]) {
    this._collection = col;
  }

}
