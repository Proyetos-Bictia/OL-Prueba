import { createReducer, on } from '@ngrx/store';
import { setClients, createClient, unSetClientSelected, setClientSelected } from './client.action';

import { Client } from '../models/client.model';

export interface State {
    clients: Client[],
    clientSelected: Client,
}

export const initialState = {
    clients: [],
    clientSelected: null
}

const _clientsReducer = createReducer(
    initialState,
    on(setClients, (state, { clients }) => ({ ...state, clients: [...clients] })),
    on(createClient, (state, { newClient }) => ({ ...state, clients: [...state.clients, newClient] })),
    on(unSetClientSelected, (state) => ({ ...state, clientSelected: null })),
    on(setClientSelected, (state, { clientToSet }) => ({ ...state, clientSelected: { ...clientToSet } })),
);

export function clientsReducer(state, action) {
    return _clientsReducer(state, action);
}