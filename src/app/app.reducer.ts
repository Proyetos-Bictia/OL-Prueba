import { ActionReducerMap } from '@ngrx/store'
import * as user from './auth/auth.reducer'
import * as ui from './shared/ui.reducer'
import * as search from './home/search.reducer'
import * as clients from './home/client.reducer'


export interface AppState {
    user: user.State
    ui: ui.State
    search: search.State
    clients: clients.State
}

export const appReducer: ActionReducerMap<AppState> = {
    user: user.userReducer,
    ui: ui.uiReducer,
    search: search.searchReducer,
    clients: clients.clientsReducer
}