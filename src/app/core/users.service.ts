import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public httpclients: HttpClient) { }

  getUsers() {
    return this.httpclients.get('https://jsonplaceholder.typicode.com/users')
    
  }



}
