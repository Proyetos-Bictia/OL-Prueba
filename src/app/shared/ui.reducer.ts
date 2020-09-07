import { createReducer, on } from '@ngrx/store';
import { setLoading } from './ui.actions';

export interface State {
    loading: boolean,
    modal: boolean,
    sideBar: boolean
}

export const initialState = {
    loading: false,
    modal: false,
    sideBar: false,
}

const _uiReducer = createReducer(
    initialState,
    on(setLoading, (state) => ({ ...state, loading: !state.loading })),
);

export function uiReducer(state, action) {
    return _uiReducer(state, action);
}