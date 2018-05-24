import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionService} from './collection.service';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CollectionService, UsersService],
  declarations: []
})
export class CoreModule { }
