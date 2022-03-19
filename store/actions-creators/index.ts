import * as AuthActionCreators from '../actions-creators/login'
import * as UsersActionCreators from '../actions-creators/users'


export default {
    ...AuthActionCreators,
    ...UsersActionCreators
}