import { Todo } from '../models/todo.model';
import { State, Selector, Action, StateContext} from '@ngxs/store';
import { AddTodo, RemoveTodo } from '../actions/todo.actions';

export class TodoStateModel {
    todoList: Todo[];
}

// so this how we can define state with the @State
@State<TodoStateModel>({
    name: 'todoList',
    defaults: {
        todoList: [],
    }
})

// here we can defined out selectors, Actions
export class TodoState {
    // here we defined selectors to be able to used them in the component using @Select
    @Selector()
    static getTodoList(state: TodoStateModel) {
        return state.todoList;
    }
    /**
     * here we define how we handle the actions using the @Action
     * think of it as a reducer function
     **/

    @Action(AddTodo)
    add({getState, patchState}: StateContext<TodoStateModel>, {payload}: AddTodo) {
        const state = getState();
        patchState({
            todoList: [...state.todoList, payload],
        });
    }

    @Action(RemoveTodo)
    remove({getState, patchState}: StateContext<TodoStateModel>, {payload}: RemoveTodo) {
        patchState({
            // tslint:disable-next-line:no-unused-expression
            todoList: getState().todoList.filter( todo => todo.id !== payload )
        });
    }

}

