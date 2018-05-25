import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/collection.service';
import { ItemsModule } from '../../items.module';
import { ItemComponent } from '../../components/item/item.component'
import { Observable } from 'rxjs';
import { Item } from '../../../core/item.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  collectionService$: Observable<Item[]>;
  /*user = [{
    name: 'paul'
  },
  {
    name: 'pierre'
  },
  {
    name: 'jacques'
  },
] */

  constructor(public collectionService: CollectionService) { 
    //console.log(this.collectionService);
  }

  ngOnInit() {
  this.collectionService$ = this.collectionService._collection$;
  }

  updateItem(event) {
    this.collectionService.update(event);
  }

  deleteItem(event) {
    this.collectionService.delete(event);
  }

}
