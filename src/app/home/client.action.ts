import { createAction, props } from '@ngrx/store';

import { Client } from '../models/client.model';

export const setClients = createAction(
    '[Clients] Set Clients',
    props<{ clients: Client[] }>()
);

export const createClient = createAction(
    '[Clients] Create Clients',
    props<{ newClient: Client }>()
);

export const unSetClientSelected = createAction('[Clients] UnSet Client Selected');

export const setClientSelected = createAction(
    '[Clients] Set Client Selected',
    props<{ clientToSet: Client }>()
);
