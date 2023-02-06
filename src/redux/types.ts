import { InstalikeApi } from '@jmetterrothan/instalike';
import { Action, AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import instalikeApi from '../instalikeApi';
import { RootState } from './store';

export interface AppAction<T extends string, P = unknown> extends Action<T> {
	payload: P;
}

export type AppThunkAction<R = void> = ThunkAction<R, RootState, InstalikeApi, AnyAction>;

export type AppThunkDispatch = ThunkDispatch<RootState, typeof instalikeApi, AnyAction>;
