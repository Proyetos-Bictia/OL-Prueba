import { createReducer, on } from '@ngrx/store';
import { setSearch, clearSearch } from './search.action';

import { Client } from '../models/client.model';

export interface State {
    client: Client
}

export const initialState: State = {
    client: {
        name: '',
        lastName: '',
        document: '',
        rol: '',
        state: null,
        email: ''
    }
}

const _searchReducer = createReducer(
    initialState,
    on(setSearch, (state, { client }) => ({ ...state, client: { ...client } })),
    on(clearSearch, (state) => ({ ...state, client: initialState.client })),
);

export function searchReducer(state, action) {
    return _searchReducer(state, action);
}