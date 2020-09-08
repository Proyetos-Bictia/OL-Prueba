import { createReducer, on } from '@ngrx/store';
import { setLoading, setSideBar } from './ui.actions';

export interface State {
    loading: boolean,
    modal: boolean,
    sideBar: boolean
}

export const initialState = {
    loading: false,
    modal: false,
    sideBar: true,
}

const _uiReducer = createReducer(
    initialState,
    on(setLoading, (state) => ({ ...state, loading: !state.loading })),
    on(setSideBar, (state) => ({ ...state, sideBar: !state.sideBar })),
);

export function uiReducer(state, action) {
    return _uiReducer(state, action);
}