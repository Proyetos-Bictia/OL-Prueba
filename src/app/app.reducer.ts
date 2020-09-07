import * as user from './auth/auth.reducer'
import * as ui from './shared/ui.reducer'
import { ActionReducerMap } from '@ngrx/store'

export interface AppState {
    user: user.State
    ui: ui.State
}

export const appReducer: ActionReducerMap<AppState> = {
    user: user.userReducer,
    ui: ui.uiReducer,
}