import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../../core/users.service';

@Component({
  selector: 'app-smdp',
  templateUrl: './smdp.component.html',
  styleUrls: ['./smdp.component.css']
})
export class SmdpComponent implements OnInit {

  //users$: Observable<>;
  users: any;
  donnees: any;
  notes: number[] = [];
  noms: string[] = [];
  constructor(public usersservice: UsersService) {

  }

  ngOnInit() {
    const users$ = this.usersservice.getUsers(); //.subscribe((data) => this.users = data));
    users$.subscribe((data) => {
      this.users = data;
      this.users.forEach((user) => {
        let nom=user.name;
        user.name = this.noms;
        this.noms.push(nom);
        let note = Math.floor(Math.random() * (21));
        user.note = note;
        this.notes.push(note);
        //console.log(this.notes);
      }
      
    
      
    );
     this.createChart()
  })


  //console.log(this.donnees);
}


createChart() {
  this.donnees = {
    datasets: [{
      data: this.notes,
      backgroundColor: [
        "#FF6384",
        "#4BC0C0",
        "#FFCE56",
        "#E7E9ED",
        "#36A2EB",
        "#725702",
        "#e84ad1",
        "#600679",
        "#5186c0",
        "#000000"



      ],
      label: 'My dataset'
    }],
    labels: this.noms
  }

}

}
