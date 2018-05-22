import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/collection.service';
import { ItemsModule } from '../../items.module';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  user = [{
    name: 'paul'
  },
  {
    name: 'pierre'
  },
  {
    name: 'jacques'
  },
] 

  constructor(public collectionService: CollectionService) { 
    console.log(this.collectionService);
  }

  ngOnInit() {
  
  }



}
