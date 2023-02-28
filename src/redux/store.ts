import { applyMiddleware, combineReducers, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import instalikeApi from '../instalikeApi';
import authReducer from './auth/reducer';
import discoverReducer from './discover/reducer';
import feedReducer from './feed/reducer';
import postReducer from './post/reducer';
import likeReducer from './postLikes/reducer';
import userSuggestionsReducer from './user/reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	feed: feedReducer,
	userSuggestions: userSuggestionsReducer,
	like: likeReducer,
	discover: discoverReducer,
	post: postReducer,
});

const middleware: Middleware[] = [];

middleware.push(thunk.withExtraArgument(instalikeApi));

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
