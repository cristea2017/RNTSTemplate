import { combineReducers } from 'redux';
import { userList } from './user/reducer';

const rootReducer = combineReducers({
  UserList: userList
});

export default rootReducer;
