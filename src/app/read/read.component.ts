import { Component, OnInit} from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TodoState } from '../states/todo.state';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  @Select(TodoState.getTodoList) todoList$: Observable<Todo>;
  constructor(private store: Store) { }

  ngOnInit() {
  }

}
