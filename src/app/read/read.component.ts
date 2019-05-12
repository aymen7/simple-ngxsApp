import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TodoState } from '../states/todo.state';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { RemoveTodo, UpdateTodo } from '../actions/todo.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  @Select(TodoState.getTodoList) todoList$: Observable<Todo>;
  updateBtnHasBeenClicked: boolean;
  constructor(private store: Store) {
    this.updateBtnHasBeenClicked = false;
  }
  removeTodo(id: number) {
    this.store.dispatch(new RemoveTodo(id));
  }
  requestUpdate() {
    this.updateBtnHasBeenClicked = true;
  }
  updateTodo(id: number, label: string) {
    this.store.dispatch(new UpdateTodo({id, newLabel: label})).subscribe( () =>  this.updateBtnHasBeenClicked = false);
  }
  ngOnInit() {
  }

}
