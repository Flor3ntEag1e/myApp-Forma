import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 /* @Input('val')val : string;
  @Output() Out: EventEmitter<any> = new EventEmitter();*/
  title: string;
  isCollapsed: boolean;
  constructor() { }

  ngOnInit() {
    this.title= "Ce p'tit bonhomme c'est Butters";
    this.isCollapsed = true;
  }

  /*onClickTIMMY() {
    this.Out.emit('TTIIIIIIIIMMMYYYY !!!!!');
  }*/

}
