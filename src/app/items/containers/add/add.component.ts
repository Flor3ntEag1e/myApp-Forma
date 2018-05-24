import { Component, OnInit } from '@angular/core';
import { State } from '../../components/item/state.enum';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  state = State;
  nom: string;
  reference: string;
  etat: string;

  constructor() { }

  ngOnInit() {
    this.etat = State.ALIVRER;
  }

  process(form) {
    console.log(form.value);
  }

}
