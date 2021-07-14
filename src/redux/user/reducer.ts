import { AppState } from "react-native";
import { USER_LIST_ACTION_TYPES } from "./actions";
import { UserListAction, UserListState } from "./types";

export const initialState: UserListState = [];


export const userList = ( state: UserListState = initialState, action: UserListAction ) => {
    const newState: UserListState = state // a deep-cloning function
    switch (action.type){
        case USER_LIST_ACTION_TYPES.ADD_USER:
            // pay attention to type-casting on action
            const { name, surename, age } = <AddUserAction>action;
            return [...newState, { name, surename, age }];
            
            // define rest of actions here
        default:
            return state;
    }
}
