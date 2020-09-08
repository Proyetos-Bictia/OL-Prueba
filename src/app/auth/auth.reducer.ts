import { createReducer, on } from '@ngrx/store';
import { setUser, unSetUser } from './auth.actions';
import { User } from '../models/user.model';

export interface State {
    user: User
}

export const initialState = {
    user: null
}

const _userReducer = createReducer(
    initialState,
    on(setUser, (state, { user }) => ({ ...state, user: { ...user } })),
    on(unSetUser, (state) => ({ ...state, user: null })),
);

export function userReducer(state, action) {
    return _userReducer(state, action);
}