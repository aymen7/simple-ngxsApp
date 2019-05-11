import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddUser } from '../actions/user.actions';
import { User } from '../models/user.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store) { }

  addUser(firstName: string, lastName: string, userName: string) {
    const id = Math.random() * 1000;
    // tslint:disable-next-line:object-literal-shorthand
    const user: User = {id: id, username: userName, firstName: firstName, lastName: lastName};
    this.store.dispatch(new AddUser(user));
  }

  ngOnInit() {
  }

}
