import { Todo } from '../models/todo.model';

export class AddTodo {
    static readonly type = '[USER] Add';
    constructor(public payload: Todo) {}
}

export class RemoveTodo {
    static readonly type = '[USER] Remove';
    constructor(public payload: number) {}
}
