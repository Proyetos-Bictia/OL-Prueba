import { createAction, props } from '@ngrx/store';

import { Client } from '../models/client.model';

export const setSearch = createAction(
    '[Search] Set Search',
    props<{ client: Client }>()
);
