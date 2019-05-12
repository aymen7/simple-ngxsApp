import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTodo } from '../actions/todo.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @ViewChild('label') label: ElementRef;
  constructor(private store: Store) { }

  addTodo(label: string) {
    const id = Math.round((Math.random() * 100));
    // tslint:disable-next-line:object-literal-shorthand
    const todo: Todo = {id: id, label: label};
    this.store.dispatch(new AddTodo(todo)).subscribe( () => this.label.nativeElement.value = '');
  }

  ngOnInit() {
  }

}
