import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { Observable, from, of } from 'rxjs';
import { State } from '../items/components/item/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  itemsCollection: AngularFirestoreCollection<Item>;
  state = State;
  _collection$: Observable<Item[]>;
  //collection$: Observable<Item[]>;
  
  constructor(private afs: AngularFirestore) { 
   /* this.collection = [
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
      {
        id: '3',
        name: 'Nobody',
        reference: '8888',
        state: this.state.ENCOURS
      }
    ];
    this.collection$ = of(this.collection);*/

    this.itemsCollection = afs.collection<Item>('collection');
    this._collection$ = this.itemsCollection.valueChanges();

  }

  //add item
  addItem(item: Item) {
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item)
    .catch(error => console.log(error));
  }

  //update item
  update(item: Item) {
    this.itemsCollection.doc(item.id).update(item)
    .catch(error => console.log(error));
  }

  //delete item
  delete(item: Item) {
    this.itemsCollection.doc(item.id).delete()
    .catch(error => console.log(error));
  }

  //get item id
  getItem(id: string) {
    return this.afs.collection<Item>(`collection/${id}`).valueChanges();
  }

  /*get collection(): Item[] {
    return this.collection;
  }

  set collection (col: Item[]) {
    this.collection = col;
  }
*/
}
