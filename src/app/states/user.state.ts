import { User } from '../models/user.model';
import { State, Selector, Action, StateContext} from '@ngxs/store';
import { AddUser, RemoveUser } from '../actions/user.actions';

export class UserStateModel {
    users: User[];
}

// so this how we can define state with the @State
@State<UserStateModel>({
    name: 'users',
    defaults: {
        users: [],
    }
})

// here we can defined out selectors, Actions
export class UserState {

    @Selector()
    static getUsers(state: UserStateModel) {
        return state.users;
    }

    @Action(AddUser)
    add({getState, patchState}: StateContext<UserStateModel>, {payload}: AddUser) {
        const state = getState();
        patchState({
            users: [...state.users, payload],
        });
    }

    @Action(RemoveUser)
    remove({getState, patchState}: StateContext<UserStateModel>, {payload}: RemoveUser) {
        patchState({
            // tslint:disable-next-line:no-unused-expression
            users: getState().users.filter( user => { user.id !== payload; })
        });
    }

}

