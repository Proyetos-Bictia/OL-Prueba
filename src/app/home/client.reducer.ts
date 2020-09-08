import { createReducer, on } from '@ngrx/store';
import { setClients, createClient, unSetClientSelected, setClientSelected, editClient, deleteClient } from './client.action';

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
    on(editClient, (state, { editClient }) => ({
        ...state, clients: state.clients.map((client) => {
            if (editClient._id === client._id) {
                return editClient
            } else {
                return client
            }
        })
    })),
    on(deleteClient, (state, { deleteClient }) => ({
        ...state, clients: state.clients.filter((client) => client._id !== deleteClient)
    })),

    on(unSetClientSelected, (state) => ({ ...state, clientSelected: null })),
    on(setClientSelected, (state, { clientToSet }) => ({ ...state, clientSelected: { ...clientToSet } })),
);

export function clientsReducer(state, action) {
    return _clientsReducer(state, action);
}